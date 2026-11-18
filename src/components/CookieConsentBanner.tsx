import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import {
  getStoredConsent,
  initializeTrackingScripts,
  saveConsent,
} from '../lib/analytics';

interface CookieConsentBannerProps {
  forceOpen?: boolean;
  onCloseForceOpen?: () => void;
}

export function CookieConsentBanner({
  forceOpen = false,
  onCloseForceOpen,
}: CookieConsentBannerProps) {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [marketingEnabled, setMarketingEnabled] = useState(true);

  useEffect(() => {
    const existing = getStoredConsent();
    if (!existing) {
      setVisible(true);
    } else {
      setAnalyticsEnabled(existing.analytics);
      setMarketingEnabled(existing.marketing);
      if (existing.analytics || existing.marketing) {
        initializeTrackingScripts(existing);
      }
    }
  }, []);

  useEffect(() => {
    if (forceOpen) {
      setVisible(true);
      setShowPreferences(true);
    }
  }, [forceOpen]);

  const closeBanner = () => {
    setVisible(false);
    setShowPreferences(false);
    onCloseForceOpen?.();
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
    closeBanner();
  };

  const handleRejectNonEssential = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
    closeBanner();
  };

  const handleSavePreferences = () => {
    saveConsent({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    });
    closeBanner();
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Cookie consent preferences"
      className="fixed bottom-16 left-4 right-4 z-40 mx-auto max-w-3xl rounded-2xl border border-white/15 bg-[#12141C] p-5 shadow-2xl md:bottom-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-sm font-semibold text-[#F4F5F7]">
            Privacy &amp; Analytics Preferences
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#9AA0AE]">
            We use essential storage for navigation and UTM attribution. Analytics and marketing
            scripts (GA4, GTM, Meta Pixel, Clarity, GHL tracking) load only with your consent. Read our{' '}
            <Link to="/privacy-policy" className="text-[#22D3EE] underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        {forceOpen && (
          <button
            type="button"
            onClick={closeBanner}
            aria-label="Close cookie preferences"
            className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-lg text-[#9AA0AE] hover:text-[#F4F5F7]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPreferences && (
        <div className="mt-4 space-y-2.5 border-t border-white/10 pt-4 text-xs">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-medium text-[#F4F5F7]">Essential Storage</p>
              <p className="text-[#9AA0AE]">Required for site routing, form security, and session UTMs.</p>
            </div>
            <span className="font-mono-tabular text-[#22C55E]">Always active</span>
          </div>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-medium text-[#F4F5F7]">Analytics (GA4, Clarity, GHL)</p>
              <p className="text-[#9AA0AE]">Helps us measure page performance and conversion paths.</p>
            </div>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-[#0A0B10] text-[#6366F1]"
            />
          </label>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-medium text-[#F4F5F7]">Marketing Pixels (Meta / GTM)</p>
              <p className="text-[#9AA0AE]">Measures ad attribution and conversion events.</p>
            </div>
            <input
              type="checkbox"
              checked={marketingEnabled}
              onChange={(e) => setMarketingEnabled(e.target.checked)}
              className="h-4 w-4 rounded border-white/20 bg-[#0A0B10] text-[#6366F1]"
            />
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => setShowPreferences((prev) => !prev)}
          className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-white/12 px-3.5 py-2 text-xs font-medium text-[#9AA0AE] hover:border-white/25 hover:text-[#F4F5F7]"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
          {showPreferences ? 'Hide Preferences' : 'Preferences'}
        </button>
        <button
          type="button"
          onClick={handleRejectNonEssential}
          className="min-h-[40px] rounded-lg border border-white/12 px-4 py-2 text-xs font-medium text-[#F4F5F7] hover:border-white/25"
        >
          Reject Non-Essential
        </button>
        {showPreferences ? (
          <button
            type="button"
            onClick={handleSavePreferences}
            className="btn-primary-gradient min-h-[40px] rounded-lg px-4 py-2 text-xs whitespace-nowrap"
          >
            Save Preferences
          </button>
        ) : (
          <button
            type="button"
            onClick={handleAcceptAll}
            className="btn-primary-gradient min-h-[40px] rounded-lg px-4 py-2 text-xs whitespace-nowrap"
          >
            Accept All
          </button>
        )}
      </div>
    </aside>
  );
}
