import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MessageCircle, Phone, X } from 'lucide-react';
import { GHL_CONFIG, isConfigured } from '../config/ghl';
import { SITE_CONFIG, getPhoneHref, getWhatsappHref } from '../config/site';
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

  const hasCalendar = isConfigured(GHL_CONFIG.GHL_CALENDAR_EMBED_URL);
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="book-call-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0F12]/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#0E0F12] bg-[#F4F1EA] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#D9D4C7] pb-4">
          <div>
            <h2
              id="book-call-modal-title"
              className="font-editorial text-2xl font-semibold text-[#0E0F12]"
            >
              Book a Free Strategy Call
            </h2>
            <p className="mt-1 text-sm text-[#5C5F66]">
              Select an open time to review your website, call handling, paid ads, and CRM workflow.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking dialog"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#D9D4C7] bg-[#FFFFFF] text-[#0E0F12] hover:border-[#0E0F12]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-5">
          {!hasCalendar ? (
            <div className="border border-[#D9D4C7] bg-[#FFFFFF] p-6">
              <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0E0F12]">
                <Calendar className="h-5 w-5 text-[#FF5A1F]" aria-hidden="true" />
                <span>Schedule Directly With Our Team</span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                Submit our short discovery intake form to receive calendar times and a custom proposal within one business day.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'book_modal_contact_fallback' });
                    onClose();
                  }}
                  className="btn-signal inline-flex min-h-[44px] items-center justify-center px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  Open Discovery Form
                </Link>
                {SITE_CONFIG.phone && phoneHref && (
                  <a
                    href={phoneHref}
                    onClick={() => trackEvent('phone_click', { location: 'book_modal' })}
                    className="btn-outline-ink inline-flex min-h-[44px] items-center gap-2 px-4 py-2.5 text-sm whitespace-nowrap"
                  >
                    <Phone className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                    Call {SITE_CONFIG.phone}
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="overflow-hidden border border-[#D9D4C7] bg-[#FFFFFF]">
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

        {(SITE_CONFIG.phone || SITE_CONFIG.whatsappNumber) && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#D9D4C7] pt-4 text-xs text-[#5C5F66]">
            <span>Prefer direct outreach?</span>
            <div className="flex flex-wrap items-center gap-4">
              {SITE_CONFIG.phone && phoneHref && (
                <a
                  href={phoneHref}
                  onClick={() => trackEvent('phone_click', { location: 'book_modal_footer' })}
                  className="inline-flex items-center gap-1.5 font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  {SITE_CONFIG.phone}
                </a>
              )}
              {SITE_CONFIG.whatsappNumber && whatsappHref && (
                <a
                  href={whatsappHref}
                  onClick={() => trackEvent('whatsapp_click', { location: 'book_modal_footer' })}
                  className="inline-flex items-center gap-1.5 font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  WhatsApp {SITE_CONFIG.whatsappNumber}
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
