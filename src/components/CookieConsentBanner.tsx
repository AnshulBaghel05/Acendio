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
      className="fixed bottom-16 left-4 right-4 z-40 mx-auto max-w-3xl border border-[#0E0F12] bg-[#FFFFFF] p-5 text-[#0E0F12] md:bottom-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-sans-tight text-sm font-semibold text-[#0E0F12]">
            Privacy &amp; Analytics Preferences
          </p>
          <p className="mt-1 text-xs leading-relaxed text-[#5C5F66]">
            Essential storage runs routing and session UTMs. Analytics and marketing tags (GA4, GTM, Meta Pixel, Clarity, GHL tracking) stay off unless accepted. Read our{' '}
            <Link to="/privacy-policy" className="font-semibold text-[#0E0F12] underline underline-offset-2 hover:text-[#FF5A1F]">
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
            className="flex min-h-[40px] min-w-[40px] items-center justify-center border border-[#D9D4C7] text-[#0E0F12] hover:border-[#0E0F12]"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>

      {showPreferences && (
        <div className="mt-4 space-y-2.5 border-t border-[#D9D4C7] pt-4 text-xs">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0E0F12]">Essential Storage</p>
              <p className="text-[#5C5F66]">Required for navigation, form security, and session UTMs.</p>
            </div>
            <span className="font-mono-tabular font-semibold text-[#0E0F12]">Always active</span>
          </div>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0E0F12]">Analytics (GA4, Clarity, GHL)</p>
              <p className="text-[#5C5F66]">Measures page speed and booking paths.</p>
            </div>
            <input
              type="checkbox"
              checked={analyticsEnabled}
              onChange={(e) => setAnalyticsEnabled(e.target.checked)}
              className="h-4 w-4 rounded-[2px] border-[#0E0F12] accent-[#FF5A1F]"
            />
          </label>
          <label className="flex cursor-pointer items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-[#0E0F12]">Marketing Pixels (Meta / GTM)</p>
              <p className="text-[#5C5F66]">Measures campaign attribution and conversions.</p>
            </div>
            <input
              type="checkbox"
              checked={marketingEnabled}
              onChange={(e) => setMarketingEnabled(e.target.checked)}
              className="h-4 w-4 rounded-[2px] border-[#0E0F12] accent-[#FF5A1F]"
            />
          </label>
        </div>
      )}

      <div className="mt-4 flex flex-wrap items-center justify-end gap-2.5">
        <button
          type="button"
          onClick={() => setShowPreferences((prev) => !prev)}
          className="inline-flex min-h-[40px] items-center gap-1.5 border border-[#D9D4C7] bg-[#F4F1EA] px-3.5 py-2 text-xs font-semibold text-[#0E0F12] hover:border-[#0E0F12]"
        >
          <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
          {showPreferences ? 'Hide Preferences' : 'Preferences'}
        </button>
        <button
          type="button"
          onClick={handleRejectNonEssential}
          className="min-h-[40px] border border-[#0E0F12] bg-[#FFFFFF] px-4 py-2 text-xs font-semibold text-[#0E0F12] hover:bg-[#F4F1EA]"
        >
          Reject Non-Essential
        </button>
        {showPreferences ? (
          <button
            type="button"
            onClick={handleSavePreferences}
            className="btn-signal min-h-[40px] px-4 py-2 text-xs whitespace-nowrap"
          >
            Save Preferences
          </button>
        ) : (
          <button
            type="button"
            onClick={handleAcceptAll}
            className="btn-signal min-h-[40px] px-4 py-2 text-xs whitespace-nowrap"
          >
            Accept All
          </button>
        )}
      </div>
    </aside>
  );
}
