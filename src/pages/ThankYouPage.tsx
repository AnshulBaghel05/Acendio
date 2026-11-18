import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { GHL_CONFIG, isPlaceholderValue } from '../config/ghl';
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
  const isCalendarPlaceholder = isPlaceholderValue(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);

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
        description="Thank you for contacting Acendio. Select a discovery call time or review next steps."
        path="/thank-you"
        noIndex
      />

      <section className="bg-mesh-hero py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-white/12 bg-[#12141C] p-6 sm:p-10">
            <div className="flex items-center gap-3 text-[#22C55E]">
              <CheckCircle2 className="h-7 w-7 shrink-0" aria-hidden="true" />
              <span className="font-mono-tabular text-xs font-semibold">
                Submission Confirmed
              </span>
            </div>

            <h1 className="mt-4 font-display text-3xl font-extrabold text-[#F4F5F7] sm:text-4xl">
              Thank You{state.submittedName ? `, ${state.submittedName}` : ''} — Your Request Is In
            </h1>
            <p className="mt-3 text-base leading-relaxed text-[#9AA0AE]">
              Our team replies within one business day.{' '}
              {state.serviceInterest ? `We have logged your interest in ${state.serviceInterest}.` : ''}{' '}
              To save time, pick a discovery slot on the calendar below right now.
            </p>

            {state.previewMode && (
              <p className="mt-3 rounded-lg border border-white/10 bg-[#0A0B10] px-4 py-2.5 text-xs text-[#9AA0AE]">
                Preview note: Configure <code className="text-[#22D3EE]">GHL_WEBHOOK_URL</code> in{' '}
                <code className="text-[#22D3EE]">src/config/ghl.ts</code> to send live submissions directly into your GoHighLevel workflow.
              </p>
            )}

            <div className="mt-8 border-t border-white/10 pt-8">
              <div className="flex items-center gap-2 text-sm font-semibold text-[#F4F5F7]">
                <Calendar className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                <span>Lock In Your Discovery Strategy Call</span>
              </div>

              <div className="mt-4">
                {isCalendarPlaceholder ? (
                  <div className="rounded-xl border border-dashed border-white/15 bg-[#0A0B10] p-6 text-sm text-[#9AA0AE]">
                    Configure <code className="text-[#22D3EE]">GHL_CALENDAR_EMBED_URL</code> in{' '}
                    <code className="text-[#22D3EE]">/src/config/ghl.ts</code> to display your live booking calendar here.
                  </div>
                ) : (
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0A0B10]">
                    <iframe
                      src={GHL_CONFIG.GHL_CALENDAR_EMBED_URL}
                      title="Acendio Strategy Call Calendar"
                      loading="lazy"
                      className="h-[600px] w-full border-0"
                      scrolling="no"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 border-t border-white/10 pt-6">
              <Link
                to="/"
                className="text-sm font-semibold text-[#22D3EE] hover:underline"
              >
                ← Return to Home
              </Link>
              <Link
                to="/blog"
                className="text-sm font-semibold text-[#9AA0AE] hover:text-[#F4F5F7]"
              >
                Read Systems Guides →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
