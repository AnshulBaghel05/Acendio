import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

const SESSION_KEY = 'acendio_growth_audit_prompted_v1';

/**
 * Exit-intent (desktop) and non-intrusive timed (mobile, >=24s) lead-capture modal.
 * Shown at most once per session, never within the first 8 seconds.
 */
export function GrowthAuditModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === '1') {
        return;
      }
    } catch {
      return;
    }

    let eligible = false;
    const minDwellTimer = window.setTimeout(() => {
      eligible = true;
    }, 8000);

    const triggerOnce = () => {
      try {
        if (window.sessionStorage.getItem(SESSION_KEY) === '1') return;
        window.sessionStorage.setItem(SESSION_KEY, '1');
      } catch {
        // ignore storage restrictions
      }
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (!eligible) return;
      if (e.clientY <= 4 && window.innerWidth >= 1024) {
        triggerOnce();
      }
    };

    const mobileTimer = window.setTimeout(() => {
      if (window.innerWidth < 1024) {
        triggerOnce();
      }
    }, 24000);

    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.clearTimeout(minDwellTimer);
      window.clearTimeout(mobileTimer);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="growth-audit-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0F12]/70 p-4"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto border border-[#0E0F12] bg-[#F4F1EA] p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4 border-b border-[#D9D4C7] pb-4">
          <div>
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Complimentary Review
            </p>
            <h2
              id="growth-audit-modal-title"
              className="mt-1 font-editorial text-2xl font-semibold text-[#0E0F12]"
            >
              Request Your Free Growth Audit
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[#5C5F66]">
              We inspect your website speed, inbound call coverage, Google profile, and CRM follow-up flow ahead of our call.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss Free Growth Audit modal"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#D9D4C7] bg-[#FFFFFF] text-[#0E0F12] hover:border-[#0E0F12]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <LeadCaptureForm
          compact
          idPrefix="audit-modal"
          defaultService="Full Growth System / Growth Audit"
          onSuccess={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
