import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getPhoneHref, getWhatsappHref } from '../config/site';
import { trackEvent } from '../lib/analytics';

interface CtaBandProps {
  headline: string;
  subtitle: string;
  onOpenBookModal: () => void;
  eyebrow?: string;
}

export function CtaBand({
  headline,
  subtitle,
  onOpenBookModal,
  eyebrow = 'Next Step',
}: CtaBandProps) {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();

  return (
    <section className="section-ink border-t border-[#26282E] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              {eyebrow}
            </p>
            <h2 className="mt-3 font-editorial text-3xl font-semibold text-[#F4F1EA] sm:text-4xl">
              {headline}
            </h2>
            <p className="text-muted-ink mt-3 max-w-2xl text-base leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 lg:col-span-5 lg:justify-end">
            <button
              type="button"
              onClick={() => {
                trackEvent('cta_click', { location: 'cta_band' });
                onOpenBookModal();
              }}
              className="btn-signal inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
            >
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link
              to="/contact"
              onClick={() => trackEvent('cta_click', { location: 'cta_band_contact' })}
              className="inline-flex min-h-[48px] items-center justify-center border border-[#F4F1EA]/40 px-5 py-3 text-sm font-semibold text-[#F4F1EA] transition-colors hover:border-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#0E0F12] whitespace-nowrap"
            >
              Get a Custom Proposal
            </Link>
            {SITE_CONFIG.phone && phoneHref && (
              <a
                href={phoneHref}
                onClick={() => trackEvent('phone_click', { location: 'cta_band' })}
                className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-sm font-medium text-[#A5A8B0] hover:text-[#FF5A1F] whitespace-nowrap"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                <span>{SITE_CONFIG.phone}</span>
              </a>
            )}
            {SITE_CONFIG.whatsappNumber && whatsappHref && (
              <a
                href={whatsappHref}
                onClick={() => trackEvent('whatsapp_click', { location: 'cta_band' })}
                className="inline-flex min-h-[44px] items-center gap-1.5 px-2 text-sm font-medium text-[#A5A8B0] hover:text-[#FF5A1F] whitespace-nowrap"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
