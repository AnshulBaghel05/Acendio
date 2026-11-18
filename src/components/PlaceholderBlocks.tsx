import { Quote, ShieldCheck } from 'lucide-react';

interface TestimonialPlaceholderProps {
  slotLabel?: string;
  context?: string;
}

/**
 * Clearly marked placeholder component for verified client testimonials.
 * Replace with real client quotes, names, roles, and verified outcomes before launch.
 */
export function TestimonialPlaceholder({
  slotLabel = '[TESTIMONIAL_PLACEHOLDER]',
  context = 'Verified client outcome & quote slot',
}: TestimonialPlaceholderProps) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 bg-[#12141C] p-6">
      <div className="flex items-start justify-between gap-4">
        <Quote className="h-5 w-5 shrink-0 text-[#818CF8]" aria-hidden="true" />
        <span className="font-mono-tabular text-xs text-[#9AA0AE]">{slotLabel}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-[#9AA0AE]">
        {context}. Insert a verified client quote detailing the operational challenge before Acendio,
        the implemented workflow, and the observed booking or response-time improvement.
      </p>
      <div className="mt-5 border-t border-white/10 pt-4 text-xs text-[#9AA0AE]">
        <span>[CLIENT_NAME]</span>
        <span className="mx-2" aria-hidden="true">
          ·
        </span>
        <span>[ROLE, COMPANY_NAME]</span>
        <span className="mx-2" aria-hidden="true">
          ·
        </span>
        <span>[LOCATION]</span>
      </div>
    </div>
  );
}

export function ClientLogoPlaceholderRow() {
  const slots = [
    '[CLIENT_LOGO_1]',
    '[CLIENT_LOGO_2]',
    '[CLIENT_LOGO_3]',
    '[CLIENT_LOGO_4]',
    '[CLIENT_LOGO_5]',
  ];

  return (
    <div className="rounded-xl border border-dashed border-white/12 bg-[#12141C]/60 px-6 py-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-xs text-[#9AA0AE]">
          <ShieldCheck className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
          <span>[CLIENT_LOGOS_PLACEHOLDER — Replace with verified client wordmarks]</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:gap-6">
          {slots.map((slot) => (
            <span
              key={slot}
              className="font-mono-tabular text-xs tracking-wide text-[#9AA0AE]/80"
            >
              {slot}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
