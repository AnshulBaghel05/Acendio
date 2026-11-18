import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { GHL_CONFIG, isPlaceholderValue } from '../config/ghl';
import { SITE_CONFIG } from '../config/site';
import { loadGhlFormEmbedScriptOnce, trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { TestimonialPlaceholder } from '../components/PlaceholderBlocks';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || '';

  useEffect(() => {
    loadGhlFormEmbedScriptOnce();
  }, []);

  const isCalendarPlaceholder = isPlaceholderValue(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);

  return (
    <>
      <SeoHead
        title="Contact Acendio | Book a Free Strategy Call"
        description="Contact Acendio to request a custom growth proposal or book a strategy call for websites, AI receptionists, paid ads, and CRM automation."
        path="/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Book a Strategy Call or Request a Custom Proposal
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              Let Us Map Your Connected Growth System
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              Every engagement is scoped to your goals. Submit the inquiry form for a custom proposal or book directly onto our discovery calendar below.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Left: Custom GHL Form */}
            <div className="lg:col-span-7">
              <LeadCaptureForm
                idPrefix="contact-page"
                defaultService={initialService}
                heading="Request a Custom Proposal"
              />
            </div>

            {/* Right: Direct NAP, Map Placeholder & Proof */}
            <div className="space-y-6 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#12141C] p-6">
                <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
                  Direct Contact &amp; Office
                </h2>
                <div className="mt-5 space-y-3.5 text-sm text-[#9AA0AE]">
                  <a
                    href={SITE_CONFIG.phoneHref}
                    onClick={() => trackEvent('phone_click', { location: 'contact_page' })}
                    className="flex min-h-[40px] items-center gap-3 text-[#F4F5F7] hover:text-[#22D3EE]"
                  >
                    <Phone className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                    <span>{SITE_CONFIG.phone}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.whatsappHref}
                    onClick={() => trackEvent('whatsapp_click', { location: 'contact_page' })}
                    className="flex min-h-[40px] items-center gap-3 text-[#F4F5F7] hover:text-[#22D3EE]"
                  >
                    <MessageCircle className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                    <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
                  </a>
                  <a
                    href={SITE_CONFIG.emailHref}
                    className="flex min-h-[40px] items-center gap-3 text-[#F4F5F7] hover:text-[#22D3EE]"
                  >
                    <Mail className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                    <span>{SITE_CONFIG.email}</span>
                  </a>
                  <div className="flex items-start gap-3 pt-1">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#818CF8]" aria-hidden="true" />
                    <div>
                      <p className="text-[#F4F5F7]">
                        {SITE_CONFIG.brandName} · {SITE_CONFIG.location}
                      </p>
                      <p>{SITE_CONFIG.address}</p>
                      <p className="mt-1 text-xs">Serving {SITE_CONFIG.targetRegions}</p>
                      <a
                        href={SITE_CONFIG.gbpUrl}
                        className="mt-1.5 inline-block text-xs text-[#22D3EE] hover:underline"
                      >
                        View Google Business Profile →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Embedded Map Placeholder */}
              <div className="rounded-2xl border border-dashed border-white/15 bg-[#12141C] p-6">
                <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                  [EMBEDDED_MAP_PLACEHOLDER]
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                  Insert your Google Business Profile / Google Maps embed iframe for{' '}
                  <span className="text-[#F4F5F7]">{SITE_CONFIG.address}</span> to reinforce local NAP signals.
                </p>
              </div>

              <TestimonialPlaceholder
                slotLabel="[TESTIMONIAL_PLACEHOLDER_CONTACT]"
                context="Client onboarding experience quote"
              />
            </div>
          </div>

          {/* GHL Calendar Booking Section */}
          <div className="mt-14 rounded-2xl border border-white/10 bg-[#12141C] p-6 sm:p-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-medium text-[#22D3EE]">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <span className="font-mono-tabular">Direct Calendar Scheduling</span>
              </div>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#F4F5F7]">
                Book Your Discovery Strategy Call Directly
              </h2>
              <p className="mt-2 text-sm text-[#9AA0AE]">
                Prefer to choose a time immediately? Pick an open discovery slot below.
              </p>
            </div>

            <div className="mt-6">
              {isCalendarPlaceholder ? (
                <div className="rounded-xl border border-dashed border-white/15 bg-[#0A0B10] p-6 text-sm text-[#9AA0AE]">
                  <p className="font-semibold text-[#F4F5F7]">
                    [GHL_CALENDAR_EMBED_URL Placeholder]
                  </p>
                  <p className="mt-2">
                    Update <code className="text-[#22D3EE]">GHL_CALENDAR_EMBED_URL</code> in{' '}
                    <code className="text-[#22D3EE]">/src/config/ghl.ts</code> to render your live GoHighLevel booking widget here.
                  </p>
                </div>
              ) : (
                <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0A0B10]">
                  <iframe
                    src={GHL_CONFIG.GHL_CALENDAR_EMBED_URL}
                    title="Schedule a Discovery Call with Acendio"
                    loading="lazy"
                    className="h-[640px] w-full border-0"
                    scrolling="no"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
