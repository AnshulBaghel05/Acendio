import { GHL_CONFIG, isConfigured } from '../config/ghl';

export type AnalyticsEventName =
  | 'cta_click'
  | 'form_start'
  | 'form_submit'
  | 'calendar_booked'
  | 'phone_click'
  | 'whatsapp_click'
  | 'scroll_depth_75';

export interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const CONSENT_STORAGE_KEY = 'acendio_cookie_consent_v1';

const ANALYTICS_IDS = {
  GA4_MEASUREMENT_ID: import.meta.env.VITE_GA4_ID || '',
  GTM_CONTAINER_ID: import.meta.env.VITE_GTM_ID || '',
  META_PIXEL_ID: import.meta.env.VITE_META_PIXEL_ID || '',
  CLARITY_ID: import.meta.env.VITE_CLARITY_ID || '',
} as const;

let scriptsInitialized = false;
let ghlChatInitialized = false;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

export function getStoredConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as ConsentPreferences) : null;
  } catch {
    return null;
  }
}

export function saveConsent(prefs: Omit<ConsentPreferences, 'updatedAt'>): ConsentPreferences {
  const full: ConsentPreferences = {
    ...prefs,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(full));
  } catch {
    // Storage restricted; continue in-memory
  }
  if (full.analytics || full.marketing) {
    initializeTrackingScripts(full);
  }
  return full;
}

function injectScriptOnce(id: string, src: string, attrs: Record<string, string> = {}): void {
  if (typeof document === 'undefined' || document.getElementById(id)) return;
  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  script.async = true;
  Object.entries(attrs).forEach(([k, v]) => script.setAttribute(k, v));
  document.head.appendChild(script);
}

export function initializeTrackingScripts(consent: ConsentPreferences): void {
  if (scriptsInitialized || typeof window === 'undefined') return;
  scriptsInitialized = true;

  if (consent.analytics && isConfigured(ANALYTICS_IDS.GA4_MEASUREMENT_ID)) {
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_IDS.GA4_MEASUREMENT_ID, { anonymize_ip: true });
    injectScriptOnce(
      'acendio-ga4',
      `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ANALYTICS_IDS.GA4_MEASUREMENT_ID)}`,
    );
  }

  if (consent.analytics && isConfigured(ANALYTICS_IDS.GTM_CONTAINER_ID)) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    injectScriptOnce(
      'acendio-gtm',
      `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(ANALYTICS_IDS.GTM_CONTAINER_ID)}`,
    );
  }

  if (consent.analytics && isConfigured(ANALYTICS_IDS.CLARITY_ID)) {
    injectScriptOnce(
      'acendio-clarity',
      `https://www.clarity.ms/tag/${encodeURIComponent(ANALYTICS_IDS.CLARITY_ID)}`,
    );
  }

  if (consent.marketing && isConfigured(ANALYTICS_IDS.META_PIXEL_ID)) {
    injectScriptOnce('acendio-meta-pixel', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq?.('init', ANALYTICS_IDS.META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  }

  if (consent.analytics && isConfigured(GHL_CONFIG.GHL_TRACKING_SCRIPT)) {
    injectScriptOnce(
      'acendio-ghl-tracking',
      'https://link.msgsndr.com/js/external-tracking.js',
      { 'data-tracking-id': GHL_CONFIG.GHL_TRACKING_SCRIPT },
    );
  }
}

export function scheduleGhlChatWidgetLoad(): void {
  if (ghlChatInitialized || typeof window === 'undefined') return;
  if (!isConfigured(GHL_CONFIG.GHL_CHAT_WIDGET_SCRIPT_ID)) return;

  const loadWidget = () => {
    if (ghlChatInitialized) return;
    ghlChatInitialized = true;
    injectScriptOnce('acendio-ghl-chat', GHL_CONFIG.GHL_CHAT_LOADER_URL, {
      'data-resources-url': GHL_CONFIG.GHL_CHAT_RESOURCES_URL,
      'data-widget-id': GHL_CONFIG.GHL_CHAT_WIDGET_SCRIPT_ID,
    });
  };

  const triggerEvents: Array<keyof WindowEventMap> = ['pointerdown', 'keydown', 'scroll'];
  const onFirstInteraction = () => {
    triggerEvents.forEach((evt) => window.removeEventListener(evt, onFirstInteraction));
    loadWidget();
  };

  triggerEvents.forEach((evt) =>
    window.addEventListener(evt, onFirstInteraction, { once: true, passive: true }),
  );

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => loadWidget(), { timeout: 6000 });
  } else {
    setTimeout(loadWidget, 5000);
  }
}

export function trackEvent(
  eventName: AnalyticsEventName,
  params: Record<string, string | number | boolean> = {},
): void {
  if (typeof window === 'undefined') return;
  const consent = getStoredConsent();
  if (!consent || (!consent.analytics && !consent.marketing)) {
    return;
  }

  if (consent.analytics) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...params });
    window.gtag?.('event', eventName, params);
  }

  if (consent.marketing && window.fbq) {
    if (eventName === 'form_submit' || eventName === 'calendar_booked') {
      window.fbq('track', 'Lead', params);
    } else {
      window.fbq('trackCustom', eventName, params);
    }
  }
}

export function loadGhlFormEmbedScriptOnce(): void {
  if (typeof document === 'undefined') return;
  injectScriptOnce('acendio-ghl-form-embed-js', GHL_CONFIG.GHL_EMBED_JS_URL);
}
