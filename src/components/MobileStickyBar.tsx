import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG, getPhoneHref, getWhatsappHref } from '../config/site';
import { trackEvent } from '../lib/analytics';

interface MobileStickyBarProps {
  onOpenBookModal: () => void;
}

/**
 * Sticky bottom mobile bar.
 * Renders Call only when SITE_CONFIG.phone exists, WhatsApp only when whatsappNumber exists,
 * and always keeps Book a Strategy Call accessible (height 56px, <=15% mobile viewport).
 */
export function MobileStickyBar({ onOpenBookModal }: MobileStickyBarProps) {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();

  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 flex h-14 items-center gap-2 border-t border-[#D9D4C7] bg-[#F4F1EA] px-3 md:hidden"
    >
      {SITE_CONFIG.phone && phoneHref && (
        <a
          href={phoneHref}
          onClick={() => trackEvent('phone_click', { location: 'mobile_sticky_bar' })}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 border border-[#0E0F12] bg-[#FFFFFF] px-2 text-xs font-semibold text-[#0E0F12]"
        >
          <Phone className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
          <span>Call</span>
        </a>
      )}
      {SITE_CONFIG.whatsappNumber && whatsappHref && (
        <a
          href={whatsappHref}
          onClick={() => trackEvent('whatsapp_click', { location: 'mobile_sticky_bar' })}
          className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 border border-[#0E0F12] bg-[#FFFFFF] px-2 text-xs font-semibold text-[#0E0F12]"
        >
          <MessageCircle className="h-3.5 w-3.5 text-[#FF5A1F]" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      )}
      <button
        type="button"
        onClick={() => {
          trackEvent('cta_click', { location: 'mobile_sticky_bar' });
          onOpenBookModal();
        }}
        className="btn-signal flex min-h-[44px] flex-[1.6] items-center justify-center gap-1.5 px-3 text-xs whitespace-nowrap"
      >
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Book a Strategy Call</span>
      </button>
    </div>
  );
}
