import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { TestimonialPlaceholder } from './PlaceholderBlocks';

interface CtaBandProps {
  title?: string;
  subtitle?: string;
  onOpenBookModal: () => void;
  showTestimonial?: boolean;
}

export function CtaBand({
  title = 'Ready to Replace Missed Opportunities With Booked Appointments?',
  subtitle = 'Schedule a discovery strategy call or request a custom proposal scoped to your goals.',
  onOpenBookModal,
  showTestimonial = true,
}: CtaBandProps) {
  return (
    <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 rounded-2xl border border-white/12 bg-gradient-to-br from-[#12141C] via-[#12141C] to-[#181B29] p-6 sm:p-10 lg:grid-cols-12">
          <div className={showTestimonial ? 'lg:col-span-7' : 'lg:col-span-12'}>
            <h2 className="font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#9AA0AE]">
              {subtitle}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: 'cta_band' });
                  onOpenBookModal();
                }}
                className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <Link
                to="/contact"
                onClick={() => trackEvent('cta_click', { location: 'cta_band_contact' })}
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#0A0B10] px-5 py-3 text-sm font-semibold text-[#F4F5F7] transition-colors hover:border-[#22D3EE]/50 whitespace-nowrap"
              >
                Get a Custom Proposal
              </Link>
              <a
                href={SITE_CONFIG.phoneHref}
                onClick={() => trackEvent('phone_click', { location: 'cta_band' })}
                className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-sm font-medium text-[#9AA0AE] hover:text-[#22D3EE] whitespace-nowrap"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={SITE_CONFIG.whatsappHref}
                onClick={() => trackEvent('whatsapp_click', { location: 'cta_band' })}
                className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-sm font-medium text-[#9AA0AE] hover:text-[#22D3EE] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {showTestimonial && (
            <div className="lg:col-span-5">
              <TestimonialPlaceholder context="Client outcome adjacent to CTA" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
