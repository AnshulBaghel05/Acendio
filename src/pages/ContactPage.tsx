import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Check, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { GHL_CONFIG, isConfigured } from '../config/ghl';
import {
  SITE_CONFIG,
  getEmailHref,
  getPhoneHref,
  getWhatsappHref,
} from '../config/site';
import { loadGhlFormEmbedScriptOnce, trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LeadCaptureForm } from '../components/LeadCaptureForm';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  useEffect(() => {
    loadGhlFormEmbedScriptOnce();
  }, []);

  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();
  const emailHref = getEmailHref();
  const hasCalendar = isConfigured(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);

  const hasDirectContactDetails = Boolean(
    SITE_CONFIG.phone ||
      SITE_CONFIG.whatsappNumber ||
      SITE_CONFIG.email ||
      SITE_CONFIG.address ||
      SITE_CONFIG.location ||
      SITE_CONFIG.targetRegions ||
      SITE_CONFIG.gbpUrl,
  );

  return (
    <>
      <SeoHead
        title="Contact Acendio | Book a Free Strategy Call"
        description="Contact Acendio to request a custom growth proposal or book a discovery call for websites, AI receptionists, paid ads, and CRM automation."
        path="/contact"
        ogImage={SITE_CONFIG.ogImages.home}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Book a Strategy Call or Request a Custom Proposal
            </p>
            <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
              Let Us Map Your Connected Growth System
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#5C5F66] sm:text-lg">
              Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call. Submit the form below and our team replies within one business day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left: Custom Lead Form */}
            <div className="lg:col-span-7">
              <LeadCaptureForm
                idPrefix="contact-page"
                defaultService={initialService}
                heading="Request a Custom Proposal"
              />
            </div>

            {/* Right: Discovery Expectations + Strictly Conditional Contact Block */}
            <div className="space-y-6 lg:col-span-5">
              <div className="border border-[#0E0F12] bg-[#F4F1EA] p-6 sm:p-7">
                <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                  Discovery Call Agenda
                </p>
                <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
                  What We Cover in 25 Minutes
                </h2>
                <ul className="mt-5 divide-y divide-[#D9D4C7] border-t border-[#D9D4C7]">
                  {[
                    'Inspect how inbound phone calls, web forms, and social inquiries are handled today.',
                    'Identify where mobile speed, ad attribution, or Google reviews leak ready prospects.',
                    'Define exact GoHighLevel pipelines, AI voice/chat rules, and maintenance responsibilities.',
                    'Deliver a scoped custom proposal within one business day—zero pressure or lock-in.',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 py-3.5 text-sm text-[#0E0F12]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {hasDirectContactDetails && (
                <div className="border border-[#D9D4C7] bg-[#FFFFFF] p-6">
                  <h2 className="font-editorial text-xl font-semibold text-[#0E0F12]">
                    Direct Channels
                  </h2>
                  <div className="mt-4 space-y-3 text-sm text-[#5C5F66]">
                    {SITE_CONFIG.phone && phoneHref && (
                      <a
                        href={phoneHref}
                        onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                        className="flex min-h-[40px] items-center gap-3 font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                      >
                        <Phone className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                        <span>{SITE_CONFIG.phone}</span>
                      </a>
                    )}
                    {SITE_CONFIG.whatsappNumber && whatsappHref && (
                      <a
                        href={whatsappHref}
                        onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                        className="flex min-h-[40px] items-center gap-3 font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                      >
                        <MessageCircle className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                        <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
                      </a>
                    )}
                    {SITE_CONFIG.email && emailHref && (
                      <a
                        href={emailHref}
                        className="flex min-h-[40px] items-center gap-3 font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                      >
                        <Mail className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                        <span>{SITE_CONFIG.email}</span>
                      </a>
                    )}
                    {(SITE_CONFIG.address ||
                      SITE_CONFIG.location ||
                      SITE_CONFIG.targetRegions ||
                      SITE_CONFIG.gbpUrl) && (
                      <div className="flex items-start gap-3 border-t border-[#D9D4C7] pt-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#0E0F12]" aria-hidden="true" />
                        <div>
                          {(SITE_CONFIG.location || SITE_CONFIG.address) && (
                            <p className="font-medium text-[#0E0F12]">
                              {[SITE_CONFIG.brandName, SITE_CONFIG.location]
                                .filter(Boolean)
                                .join(' · ')}
                            </p>
                          )}
                          {SITE_CONFIG.address && <p>{SITE_CONFIG.address}</p>}
                          {SITE_CONFIG.targetRegions && (
                            <p className="mt-1 text-xs">Serving {SITE_CONFIG.targetRegions}</p>
                          )}
                          {SITE_CONFIG.gbpUrl && (
                            <a
                              href={SITE_CONFIG.gbpUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="link-editorial mt-1.5 inline-block text-xs font-semibold text-[#0E0F12]"
                            >
                              View Google Business Profile →
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Direct Calendar Booking Section */}
          {hasCalendar && (
            <div className="mt-14 border border-[#D9D4C7] bg-[#F4F1EA] p-6 sm:p-8">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 font-mono-tabular text-xs font-medium text-[#FF5A1F]">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  <span>DIRECT CALENDAR SCHEDULING</span>
                </div>
                <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
                  Book Your Discovery Strategy Call Directly
                </h2>
                <p className="mt-2 text-sm text-[#5C5F66]">
                  Prefer to choose a time immediately? Pick an open discovery slot below.
                </p>
              </div>

              <div className="mt-6 border border-[#D9D4C7] bg-[#FFFFFF]">
                <iframe
                  src={GHL_CONFIG.GHL_CALENDAR_EMBED_URL}
                  title="Schedule a Discovery Call with Acendio"
                  loading="lazy"
                  className="h-[640px] w-full border-0"
                  scrolling="no"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
