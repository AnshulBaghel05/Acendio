import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';

interface MobileStickyBarProps {
  onOpenBookModal: () => void;
}

/**
 * Sticky bottom conversion bar for mobile viewports only.
 * Height is constrained to 56px to remain strictly <= 15% of viewport height.
 */
export function MobileStickyBar({ onOpenBookModal }: MobileStickyBarProps) {
  return (
    <div
      aria-label="Quick contact actions"
      className="fixed bottom-0 left-0 right-0 z-30 flex h-14 items-center gap-2 border-t border-white/12 bg-[#0A0B10]/95 px-3 backdrop-blur-md md:hidden"
    >
      <a
        href={SITE_CONFIG.phoneHref}
        onClick={() => trackEvent('phone_click', { location: 'mobile_sticky_bar' })}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/12 bg-[#12141C] px-2 text-xs font-medium text-[#F4F5F7]"
      >
        <Phone className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
        <span>Call</span>
      </a>
      <a
        href={SITE_CONFIG.whatsappHref}
        onClick={() => trackEvent('whatsapp_click', { location: 'mobile_sticky_bar' })}
        className="flex min-h-[44px] flex-1 items-center justify-center gap-1.5 rounded-lg border border-white/12 bg-[#12141C] px-2 text-xs font-medium text-[#F4F5F7]"
      >
        <MessageCircle className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>
      <button
        type="button"
        onClick={() => {
          trackEvent('cta_click', { location: 'mobile_sticky_bar' });
          onOpenBookModal();
        }}
        className="btn-primary-gradient flex min-h-[44px] flex-[1.5] items-center justify-center gap-1.5 rounded-lg px-3 text-xs whitespace-nowrap"
      >
        <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Book Call</span>
      </button>
    </div>
  );
}
