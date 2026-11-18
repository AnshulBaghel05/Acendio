import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { GHL_CONFIG, isConfigured } from '../config/ghl';
import { SITE_CONFIG } from '../config/site';
import { loadGhlFormEmbedScriptOnce, trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';

interface ThankYouLocationState {
  submittedName?: string;
  serviceInterest?: string;
  previewMode?: boolean;
}

export default function ThankYouPage() {
  const location = useLocation();
  const state = (location.state as ThankYouLocationState | null) || {};
  const hasCalendar = isConfigured(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);

  useEffect(() => {
    loadGhlFormEmbedScriptOnce();
    trackEvent('calendar_booked', {
      source_page: '/thank-you',
      service_interest: state.serviceInterest || 'General',
    });
  }, [state.serviceInterest]);

  return (
    <>
      <SeoHead
        title="Request Received | Acendio"
        description="Thank you for contacting Acendio. Review next steps or select a discovery strategy call time."
        path="/thank-you"
        ogImage={SITE_CONFIG.ogImages.home}
        noIndex
      />

      <section className="bg-[#F4F1EA] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="border border-[#0E0F12] bg-[#FFFFFF] p-6 sm:p-10">
            <div className="flex items-center gap-3 text-[#0E0F12]">
              <CheckCircle2 className="h-6 w-6 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
              <span className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#FF5A1F]">
                Inquiry Logged
              </span>
            </div>

            <h1 className="mt-4 font-editorial text-3xl font-semibold text-[#0E0F12] sm:text-4xl">
              Thank You{state.submittedName ? `, ${state.submittedName}` : ''} — Your Request Is Confirmed
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#5C5F66]">
              Our team reviews every inquiry personally and replies within one business day.{' '}
              {state.serviceInterest
                ? `We have noted your interest in ${state.serviceInterest}.`
                : ''}
            </p>

            {hasCalendar ? (
              <div className="mt-8 border-t border-[#D9D4C7] pt-8">
                <div className="flex items-center gap-2 font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#0E0F12]">
                  <Calendar className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                  <span>Select Your Discovery Call Time</span>
                </div>
                <div className="mt-4 border border-[#D9D4C7] bg-[#F4F1EA]">
                  <iframe
                    src={GHL_CONFIG.GHL_CALENDAR_EMBED_URL}
                    title="Acendio Strategy Call Calendar"
                    loading="lazy"
                    className="h-[600px] w-full border-0"
                    scrolling="no"
                  />
                </div>
              </div>
            ) : (
              <div className="mt-8 border-t border-[#D9D4C7] pt-8">
                <p className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#FF5A1F]">
                  What Happens Next
                </p>
                <ol className="mt-4 space-y-3 text-sm text-[#0E0F12]">
                  <li>
                    <span className="font-mono-tabular font-semibold text-[#FF5A1F]">01 · </span>
                    We audit your current website, inbound call flow, and search presence before we speak.
                  </li>
                  <li>
                    <span className="font-mono-tabular font-semibold text-[#FF5A1F]">02 · </span>
                    We reach out within one business day with calendar slots for a 25-minute discovery call.
                  </li>
                  <li>
                    <span className="font-mono-tabular font-semibold text-[#FF5A1F]">03 · </span>
                    After discovery, you receive a scoped custom proposal aligned to your goals.
                  </li>
                </ol>
              </div>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#D9D4C7] pt-6">
              <Link
                to="/"
                className="link-editorial text-sm font-semibold text-[#0E0F12]"
              >
                ← Return to Home
              </Link>
              <Link
                to="/insights"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12] hover:text-[#FF5A1F]"
              >
                <span>Read Implementation Guides</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
