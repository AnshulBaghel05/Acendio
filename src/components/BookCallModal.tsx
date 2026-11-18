import { useEffect } from 'react';
import { Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { GHL_CONFIG, isPlaceholderValue } from '../config/ghl';
import { SITE_CONFIG } from '../config/site';
import { loadGhlFormEmbedScriptOnce, trackEvent } from '../lib/analytics';

interface BookCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookCallModal({ isOpen, onClose }: BookCallModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    loadGhlFormEmbedScriptOnce();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPlaceholder = isPlaceholderValue(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/12 bg-[#12141C] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div>
            <h2 id="book-call-modal-title" className="font-display text-xl font-bold text-[#F4F5F7]">
              Book a Free Strategy Call
            </h2>
            <p className="mt-1 text-sm text-[#9AA0AE]">
              Select a time to review your website, call handling, ads, and automation roadmap.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking dialog"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 text-[#9AA0AE] transition-colors hover:border-white/25 hover:text-[#F4F5F7]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">
          {isPlaceholder ? (
            <div className="rounded-xl border border-dashed border-white/15 bg-[#0A0B10] p-6">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#F4F5F7]">
                <Calendar className="h-5 w-5 text-[#22D3EE]" aria-hidden="true" />
                <span>GoHighLevel Calendar Embed Placeholder</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                Configure <code className="text-[#22D3EE]">GHL_CALENDAR_EMBED_URL</code> in{' '}
                <code className="text-[#22D3EE]">/src/config/ghl.ts</code> to load your live
                GoHighLevel booking calendar here automatically (lazy-loaded with{' '}
                <code className="text-[#9AA0AE]">form_embed.js</code>).
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="/contact"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'book_modal_contact_fallback' });
                    onClose();
                  }}
                  className="btn-primary-gradient inline-flex min-h-[44px] items-center justify-center rounded-lg px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  Open Full Contact Form
                </a>
                <a
                  href={SITE_CONFIG.phoneHref}
                  onClick={() => trackEvent('phone_click', { location: 'book_modal' })}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-[#F4F5F7] hover:border-[#22D3EE]/50 whitespace-nowrap"
                >
                  <Phone className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                  Call {SITE_CONFIG.phone}
                </a>
              </div>
            </div>
          ) : (
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0A0B10]">
              <iframe
                src={GHL_CONFIG.GHL_CALENDAR_EMBED_URL}
                title="Book a Strategy Call with Acendio"
                loading="lazy"
                className="h-[580px] w-full border-0"
                scrolling="no"
              />
            </div>
          )}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-[#9AA0AE]">
          <span>Prefer direct outreach?</span>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={SITE_CONFIG.phoneHref}
              onClick={() => trackEvent('phone_click', { location: 'book_modal_footer' })}
              className="inline-flex items-center gap-1.5 hover:text-[#22D3EE]"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {SITE_CONFIG.phone}
            </a>
            <a
              href={SITE_CONFIG.whatsappHref}
              onClick={() => trackEvent('whatsapp_click', { location: 'book_modal_footer' })}
              className="inline-flex items-center gap-1.5 hover:text-[#22D3EE]"
            >
              <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
              WhatsApp {SITE_CONFIG.whatsappNumber}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
