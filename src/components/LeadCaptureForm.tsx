import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2, RefreshCw } from 'lucide-react';
import { GHL_CONFIG, isPlaceholderValue } from '../config/ghl';
import { getAttributionData } from '../lib/utm';
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
  'Full Growth System / Free Growth Audit',
];

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  serviceInterest?: string;
  consent?: string;
}

export function LeadCaptureForm({
  defaultService = '',
  idPrefix = 'lead-form',
  compact = false,
  heading,
  onSuccess,
}: LeadCaptureFormProps) {
  const navigate = useNavigate();
  const startedRef = useRef(false);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [serviceInterest, setServiceInterest] = useState(
    defaultService || SERVICE_OPTIONS[0],
  );
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [webhookError, setWebhookError] = useState<string | null>(null);
  const [showIframeFallback, setShowIframeFallback] = useState(false);

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
      nextErrors.serviceInterest = 'Please select a primary area of interest.';
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
    const attribution = getAttributionData();

    const payload = {
      firstName,
      lastName,
      email: email.trim(),
      phone: phone.trim(),
      companyName: companyName.trim(),
      serviceInterest,
      message: message.trim(),
      source: typeof window !== 'undefined' ? window.location.href : '',
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      utm_term: attribution.utm_term,
      utm_content: attribution.utm_content,
      referrer: attribution.referrer,
      consentTimestamp: new Date().toISOString(),
    };

    if (isPlaceholderValue(GHL_CONFIG.GHL_WEBHOOK_URL)) {
      throw new Error(
        'GoHighLevel webhook URL is still set to a placeholder. Configure GHL_WEBHOOK_URL in /src/config/ghl.ts or use the fallback options below.',
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
      throw new Error(`Submission returned status ${response.status}.`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Honeypot bot check: silently succeed without forwarding spam
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
    <div className="rounded-2xl border border-white/10 bg-[#12141C] p-6 sm:p-8">
      {heading && (
        <h3 className="font-display text-xl font-bold text-[#F4F5F7]">{heading}</h3>
      )}
      <p className={`${heading ? 'mt-1.5' : ''} text-sm text-[#9AA0AE]`}>
        We reply within one business day. Every engagement starts with a discovery call and a custom proposal.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
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
          {/* 1. Full Name */}
          <div>
            <label
              htmlFor={`${idPrefix}-name`}
              className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
            >
              Full Name <span className="text-[#22D3EE]">*</span>
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
              className="min-h-[44px] w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] placeholder:text-[#9AA0AE]/50 focus:border-[#22D3EE] focus:outline-none"
            />
            {errors.fullName && (
              <p id={`${idPrefix}-name-error`} role="alert" className="mt-1 text-xs text-rose-400">
                {errors.fullName}
              </p>
            )}
          </div>

          {/* 2. Business Name */}
          <div>
            <label
              htmlFor={`${idPrefix}-company`}
              className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
            >
              Business Name <span className="text-[#22D3EE]">*</span>
            </label>
            <input
              id={`${idPrefix}-company`}
              type="text"
              required
              autoComplete="organization"
              placeholder="Summit Mechanical LLC"
              value={companyName}
              onFocus={handleFirstFocus}
              onChange={(e) => {
                setCompanyName(e.target.value);
                if (errors.companyName) setErrors((p) => ({ ...p, companyName: undefined }));
              }}
              aria-invalid={Boolean(errors.companyName)}
              aria-describedby={errors.companyName ? `${idPrefix}-company-error` : undefined}
              className="min-h-[44px] w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] placeholder:text-[#9AA0AE]/50 focus:border-[#22D3EE] focus:outline-none"
            />
            {errors.companyName && (
              <p id={`${idPrefix}-company-error`} role="alert" className="mt-1 text-xs text-rose-400">
                {errors.companyName}
              </p>
            )}
          </div>

          {/* 3. Email */}
          <div>
            <label
              htmlFor={`${idPrefix}-email`}
              className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
            >
              Work Email <span className="text-[#22D3EE]">*</span>
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
              className="min-h-[44px] w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] placeholder:text-[#9AA0AE]/50 focus:border-[#22D3EE] focus:outline-none"
            />
            {errors.email && (
              <p id={`${idPrefix}-email-error`} role="alert" className="mt-1 text-xs text-rose-400">
                {errors.email}
              </p>
            )}
          </div>

          {/* 4. Phone */}
          <div>
            <label
              htmlFor={`${idPrefix}-phone`}
              className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
            >
              Phone Number <span className="text-[#22D3EE]">*</span>
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
              className="min-h-[44px] w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] placeholder:text-[#9AA0AE]/50 focus:border-[#22D3EE] focus:outline-none"
            />
            {errors.phone && (
              <p id={`${idPrefix}-phone-error`} role="alert" className="mt-1 text-xs text-rose-400">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* 5. Service Interested */}
        <div>
          <label
            htmlFor={`${idPrefix}-service`}
            className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
          >
            Primary Service Interest <span className="text-[#22D3EE]">*</span>
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
            className="min-h-[44px] w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] focus:border-[#22D3EE] focus:outline-none"
          >
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 6. Message */}
        <div>
          <label
            htmlFor={`${idPrefix}-message`}
            className="mb-1.5 block text-xs font-medium text-[#F4F5F7]"
          >
            Project Goals or Bottlenecks (Optional)
          </label>
          <textarea
            id={`${idPrefix}-message`}
            rows={compact ? 2 : 3}
            placeholder="Tell us about your current website, call handling, or lead goals..."
            value={message}
            onFocus={handleFirstFocus}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg border border-white/12 bg-[#0A0B10] px-3.5 py-2.5 text-sm text-[#F4F5F7] placeholder:text-[#9AA0AE]/50 focus:border-[#22D3EE] focus:outline-none"
          />
        </div>

        {/* Consent Checkbox (TCPA / GDPR aware) */}
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
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-[#0A0B10] text-[#6366F1] focus:ring-[#22D3EE]"
            />
            <span className="text-xs leading-relaxed text-[#9AA0AE]">
              I agree to receive calls, emails, and SMS/text updates from Acendio regarding my inquiry (reply STOP to opt out; message &amp; data rates may apply; consent is not a condition of purchase).
            </span>
          </label>
          {errors.consent && (
            <p id={`${idPrefix}-consent-error`} role="alert" className="mt-1.5 text-xs text-rose-400">
              {errors.consent}
            </p>
          )}
        </div>

        {/* Webhook Error & Graceful Fallback */}
        {webhookError && (
          <div
            role="alert"
            className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200"
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
              <div className="space-y-2">
                <p className="font-medium text-amber-100">
                  Direct webhook submission did not complete.
                </p>
                <p className="text-amber-200/90">{webhookError}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => void handleSubmit({ preventDefault: () => {} } as FormEvent)}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-amber-300/30 bg-amber-400/15 px-3 py-1.5 font-medium text-amber-100 hover:bg-amber-400/25"
                  >
                    <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                    Retry Submission
                  </button>
                  <button
                    type="button"
                    onClick={handleRevealIframe}
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 py-1.5 font-medium text-[#F4F5F7] hover:bg-white/10"
                  >
                    Open Embedded Form Fallback
                  </button>
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
                    className="inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-3 py-1.5 font-medium text-[#22D3EE] hover:bg-[#22D3EE]/20"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Preview Thank-You Flow
                  </button>
                </div>
              </div>
            </div>

            {showIframeFallback && (
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10 bg-[#0A0B10] p-3">
                {isPlaceholderValue(GHL_CONFIG.GHL_FORM_EMBED_URL) ? (
                  <p className="text-xs text-[#9AA0AE]">
                    Embedded GHL Form Placeholder ({GHL_CONFIG.GHL_FORM_EMBED_URL}). Replace{' '}
                    <code className="text-[#22D3EE]">GHL_FORM_EMBED_URL</code> in{' '}
                    <code className="text-[#22D3EE]">src/config/ghl.ts</code> to render your live GoHighLevel form iframe here.
                  </p>
                ) : (
                  <iframe
                    src={GHL_CONFIG.GHL_FORM_EMBED_URL}
                    title="Acendio Inquiry Form"
                    loading="lazy"
                    className="h-[520px] w-full border-0"
                  />
                )}
              </div>
            )}
          </div>
        )}

        <button
          type="submit"
          disabled={submitting}
          className="btn-primary-gradient inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap disabled:opacity-60"
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
