import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { LeadCaptureForm } from './LeadCaptureForm';

const SESSION_KEY = 'acendio_growth_audit_prompted_v1';

/**
 * Exit-intent (desktop) and non-intrusive timed (mobile, >=20s) lead-capture modal.
 * Shown at most once per session, never within the first 5 seconds.
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
        // ignore storage errors
      }
      setOpen(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (!eligible) return;
      if (e.clientY <= 4 && window.innerWidth >= 1024) {
        triggerOnce();
      }
    };

    // Timed non-intrusive prompt for mobile visitors after 24s dwell
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/12 bg-[#0A0B10] p-5 sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Complimentary System Review
            </p>
            <h2
              id="growth-audit-modal-title"
              className="mt-1 font-display text-xl font-bold text-[#F4F5F7]"
            >
              Request Your Free Growth Audit
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-[#9AA0AE]">
              We will review your website speed, missed-call risk, Google profile, and CRM follow-up flow before we speak.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss Free Growth Audit modal"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 text-[#9AA0AE] hover:border-white/25 hover:text-[#F4F5F7]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <LeadCaptureForm
          compact
          idPrefix="audit-modal"
          defaultService="Full Growth System / Free Growth Audit"
          onSuccess={() => setOpen(false)}
        />
      </div>
    </div>
  );
}
