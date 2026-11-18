import { FormEvent, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';
import { GHL_CONFIG, isConfigured } from '../config/ghl';
import { AttributionData, getAttributionData } from '../lib/utm';
import { loadGhlFormEmbedScriptOnce, trackEvent } from '../lib/analytics';

interface LeadCaptureFormProps {
  defaultService?: string;
  idPrefix?: string;
  compact?: boolean;
  heading?: string;
  onSuccess?: () => void;
}

const SERVICE_OPTIONS = [
  'Website Development & Maintenance',
  'AI Receptionist',
  'Ads Management & Creatives',
  'Review Management & Automation',
  'CRM & Lead Follow-Up Automation',
  'AI Chat & Support',
  'Custom Software & AI Automation',
  'Full Growth System / Growth Audit',
] as const;

const ROUTE_SERVICE_MAP: Record<string, string> = {
  '/services/website-development-maintenance': 'Website Development & Maintenance',
  '/services/ai-receptionist': 'AI Receptionist',
  '/services/ads-management-creatives': 'Ads Management & Creatives',
  '/services/review-management-automation': 'Review Management & Automation',
  '/services/crm-lead-follow-up-automation': 'CRM & Lead Follow-Up Automation',
  '/services/ai-chat-support': 'AI Chat & Support',
  '/services/custom-software-ai-automation': 'Custom Software & AI Automation',
};

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  serviceInterest?: string;
  consent?: string;
}

function resolveInitialService(pathname: string, explicitDefault?: string): string {
  if (explicitDefault) return explicitDefault;
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  return ROUTE_SERVICE_MAP[cleanPath] || '';
}

export function LeadCaptureForm({
  defaultService = '',
  idPrefix = 'lead-form',
  compact = false,
  heading,
  onSuccess,
}: LeadCaptureFormProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const startedRef = useRef(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceInterest, setServiceInterest] = useState(() =>
    resolveInitialService(location.pathname, defaultService),
  );
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [attribution, setAttribution] = useState<AttributionData>(() =>
    getAttributionData(),
  );

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [webhookError, setWebhookError] = useState<string | null>(null);
  const [showIframeFallback, setShowIframeFallback] = useState(false);

  useEffect(() => {
    setServiceInterest(resolveInitialService(location.pathname, defaultService));
    setAttribution(getAttributionData());
  }, [location.pathname, defaultService]);

  const sourcePage =
    typeof window !== 'undefined' ? window.location.href : location.pathname;

  const handleFirstFocus = () => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent('form_start', { form_id: idPrefix });
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    const phoneDigits = phone.replace(/\D/g, '');
    if (!phone.trim() || phoneDigits.length < 7) {
      nextErrors.phone = 'Please enter a valid phone number.';
    }
    if (!companyName.trim()) {
      nextErrors.companyName = 'Please enter your business name.';
    }
    if (!serviceInterest) {
      nextErrors.serviceInterest = 'Please select a service.';
    }
    if (!consent) {
      nextErrors.consent =
        'Please confirm consent so our team can respond to your inquiry.';
    }
    return nextErrors;
  };

  const submitToWebhook = async () => {
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || '';
    const lastName = nameParts.slice(1).join(' ') || '';
    const freshAttribution = getAttributionData();

    const payload = {
      firstName,
      lastName,
      email: email.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
      serviceInterest,
      message: message.trim(),
      source: sourcePage,
      sourcePage,
      utm_source: freshAttribution.utm_source,
      utm_medium: freshAttribution.utm_medium,
      utm_campaign: freshAttribution.utm_campaign,
      utm_term: freshAttribution.utm_term,
      utm_content: freshAttribution.utm_content,
      referrer: freshAttribution.referrer,
      consentTimestamp: new Date().toISOString(),
    };

    if (!isConfigured(GHL_CONFIG.GHL_WEBHOOK_URL)) {
      throw new Error(
        'Direct webhook delivery is not yet connected to a live GoHighLevel endpoint.',
      );
    }

    const response = await fetch(GHL_CONFIG.GHL_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Submission returned HTTP ${response.status}.`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (honeypot.trim() !== '') {
      navigate('/thank-you');
      return;
    }

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setSubmitting(true);
    setWebhookError(null);

    try {
      await submitToWebhook();
      trackEvent('form_submit', {
        form_id: idPrefix,
        service_interest: serviceInterest,
        source_page: location.pathname,
      });
      onSuccess?.();
      navigate('/thank-you', {
        state: {
          submittedName: fullName.trim(),
          serviceInterest,
        },
      });
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : 'Unable to reach our scheduling webhook right now.';
      setWebhookError(msg);
      loadGhlFormEmbedScriptOnce();
    } finally {
      setSubmitting(false);
    }
  };

  const handleRevealIframe = () => {
    loadGhlFormEmbedScriptOnce();
    setShowIframeFallback(true);
  };

  return (
    <div className="border border-[#D9D4C7] bg-[#FFFFFF] p-6 sm:p-8">
      {heading && (
        <h3 className="font-editorial text-2xl font-semibold text-[#0E0F12]">
          {heading}
        </h3>
      )}
      <p className={`${heading ? 'mt-2' : ''} text-sm text-[#5C5F66]`}>
        We reply within one business day. Every engagement is scoped to your goals with a custom proposal after discovery.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
        {/* Required Hidden Attribution & Context Fields */}
        <input type="hidden" name="sourcePage" value={sourcePage} />
        <input type="hidden" name="serviceInterest" value={serviceInterest} />
        <input type="hidden" name="utm_source" value={attribution.utm_source} />
        <input type="hidden" name="utm_medium" value={attribution.utm_medium} />
        <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} />
        <input type="hidden" name="utm_term" value={attribution.utm_term} />
        <input type="hidden" name="utm_content" value={attribution.utm_content} />

        {/* Honeypot anti-spam field */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${idPrefix}-website-url`}>Leave this field blank</label>
          <input
            id={`${idPrefix}-website-url`}
            type="text"
            name="website_url"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>

        <div className={`grid gap-4 ${compact ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
            >
              Full Name <span className="text-[#FF5A1F]">*</span>
            </label>
            <input
              id={`${idPrefix}-name`}
              type="text"
              required
              autoComplete="name"
              placeholder="Alex Morgan"
              value={fullName}
              onFocus={handleFirstFocus}
              onChange={(e) => {
                setFullName(e.target.value);
                if (errors.fullName) setErrors((p) => ({ ...p, fullName: undefined }));
              }}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? `${idPrefix}-name-error` : undefined}
              className="min-h-[44px] w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] placeholder:text-[#5C5F66]/60 focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
            />
            {errors.fullName && (
              <p id={`${idPrefix}-name-error`} role="alert" className="mt-1 text-xs text-red-700">
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-company`}
              className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
            >
              Business Name <span className="text-[#FF5A1F]">*</span>
            </label>
            <input
              id={`${idPrefix}-company`}
              type="text"
              required
              autoComplete="organization"
              placeholder="Summit Mechanical"
              value={companyName}
              onFocus={handleFirstFocus}
              onChange={(e) => {
                setCompanyName(e.target.value);
                if (errors.companyName) setErrors((p) => ({ ...p, companyName: undefined }));
              }}
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? `${idPrefix}-company-error` : undefined}
              className="min-h-[44px] w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] placeholder:text-[#5C5F66]/60 focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
            />
            {errors.companyName && (
              <p id={`${idPrefix}-company-error`} role="alert" className="mt-1 text-xs text-red-700">
                {errors.companyName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
            >
              Work Email <span className="text-[#FF5A1F]">*</span>
            </label>
            <input
              id={`${idPrefix}-email`}
              type="email"
              required
              autoComplete="email"
              placeholder="alex@company.com"
              value={email}
              onFocus={handleFirstFocus}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? `${idPrefix}-email-error` : undefined}
              className="min-h-[44px] w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] placeholder:text-[#5C5F66]/60 focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
            />
            {errors.email && (
              <p id={`${idPrefix}-email-error`} role="alert" className="mt-1 text-xs text-red-700">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
            >
              Phone Number <span className="text-[#FF5A1F]">*</span>
            </label>
            <input
              id={`${idPrefix}-phone`}
              type="tel"
              required
              autoComplete="tel"
              placeholder="(555) 234-5678"
              value={phone}
              onFocus={handleFirstFocus}
              onChange={(e) => {
                setPhone(e.target.value);
                if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
              }}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? `${idPrefix}-phone-error` : undefined}
              className="min-h-[44px] w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] placeholder:text-[#5C5F66]/60 focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
            />
            {errors.phone && (
              <p id={`${idPrefix}-phone-error`} role="alert" className="mt-1 text-xs text-red-700">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-service`}
            className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
          >
            Primary Service Interest <span className="text-[#FF5A1F]">*</span>
          </label>
          <select
            id={`${idPrefix}-service`}
            value={serviceInterest}
            onFocus={handleFirstFocus}
            onChange={(e) => {
              setServiceInterest(e.target.value);
              if (errors.serviceInterest) setErrors((p) => ({ ...p, serviceInterest: undefined }));
            }}
            aria-invalid={Boolean(errors.serviceInterest)}
            aria-describedby={errors.serviceInterest ? `${idPrefix}-service-error` : undefined}
            className="min-h-[44px] w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
          >
            <option value="">Select a service</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.serviceInterest && (
            <p id={`${idPrefix}-service-error`} role="alert" className="mt-1 text-xs text-red-700">
              {errors.serviceInterest}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="mb-1.5 block font-mono-tabular text-xs font-medium text-[#0E0F12]"
          >
            Project Goals or Bottlenecks (Optional)
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={compact ? 2 : 3}
            placeholder="Share what you want to fix first: calls, follow-up, website, or ads..."
            value={message}
            onFocus={handleFirstFocus}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-[2px] border border-[#D9D4C7] bg-[#F4F1EA]/40 px-3.5 py-2.5 text-sm text-[#0E0F12] placeholder:text-[#5C5F66]/60 focus:border-[#0E0F12] focus:bg-[#FFFFFF] focus:outline-none"
          />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              id={`${idPrefix}-consent`}
              type="checkbox"
              checked={consent}
              onChange={(e) => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors((p) => ({ ...p, consent: undefined }));
              }}
              aria-invalid={Boolean(errors.consent)}
              aria-describedby={errors.consent ? `${idPrefix}-consent-error` : undefined}
              className="mt-1 h-4 w-4 shrink-0 rounded-[2px] border-[#0E0F12] accent-[#FF5A1F]"
            />
            <span className="text-xs leading-relaxed text-[#5C5F66]">
              I agree to receive calls, emails, and SMS/text updates from Acendio regarding my inquiry (reply STOP to opt out; message and data rates may apply; consent is not a condition of purchase).
            </span>
          </label>
          {errors.consent && (
            <p id={`${idPrefix}-consent-error`} role="alert" className="mt-1.5 text-xs text-red-700">
              {errors.consent}
            </p>
          )}
        </div>

        {webhookError && (
          <div
            role="alert"
            className="border border-[#0E0F12] bg-[#F4F1EA] p-4 text-xs text-[#0E0F12]"
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
              <div className="space-y-2">
                <p className="font-semibold">Direct webhook submission did not complete.</p>
                <p className="text-[#5C5F66]">{webhookError}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => void handleSubmit({ preventDefault: () => {} } as FormEvent)}
                    className="inline-flex min-h-[36px] items-center gap-1.5 border border-[#0E0F12] bg-[#FFFFFF] px-3 py-1.5 font-medium text-[#0E0F12] hover:bg-[#0E0F12] hover:text-[#F4F1EA]"
                  >
                    <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                    Retry Submission
                  </button>
                  {isConfigured(GHL_CONFIG.GHL_FORM_EMBED_URL) && (
                    <button
                      type="button"
                      onClick={handleRevealIframe}
                      className="inline-flex min-h-[36px] items-center gap-1.5 border border-[#D9D4C7] bg-[#FFFFFF] px-3 py-1.5 font-medium text-[#0E0F12] hover:border-[#0E0F12]"
                    >
                      Open Embedded Form Fallback
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('form_submit', {
                        form_id: `${idPrefix}_demo_preview`,
                        service_interest: serviceInterest,
                      });
                      onSuccess?.();
                      navigate('/thank-you', {
                        state: {
                          submittedName: fullName.trim() || 'there',
                          serviceInterest,
                          previewMode: true,
                        },
                      });
                    }}
                    className="inline-flex min-h-[36px] items-center gap-1.5 border border-[#FF5A1F] bg-[#FF5A1F]/15 px-3 py-1.5 font-semibold text-[#0E0F12] hover:bg-[#FF5A1F]/25"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
                    Continue to Thank-You Page
                  </button>
                </div>
              </div>
            </div>

            {showIframeFallback && isConfigured(GHL_CONFIG.GHL_FORM_EMBED_URL) && (
              <div className="mt-4 overflow-hidden border border-[#D9D4C7] bg-[#FFFFFF] p-2">
                <iframe
                  src={GHL_CONFIG.GHL_FORM_EMBED_URL}
                  title="Acendio Inquiry Form"
                  loading="lazy"
                  className="h-[520px] w-full border-0"
                />
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-signal inline-flex min-h-[48px] w-full items-center justify-center gap-2 px-6 py-3 text-sm whitespace-nowrap disabled:opacity-60"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending Request...
            </>
          ) : (
            'Get a Custom Proposal'
          )}
        </button>
      </form>
    </div>
  );
}
