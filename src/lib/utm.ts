export interface AttributionData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  landing_page: string;
}

const STORAGE_KEY = 'acendio_attribution_v1';

/**
 * Captures UTM parameters and initial referrer once per browser session.
 */
export function captureAttributionOnLoad(): AttributionData {
  if (typeof window === 'undefined') {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      referrer: '',
      landing_page: '',
    };
  }

  try {
    const existing = window.sessionStorage.getItem(STORAGE_KEY);
    if (existing) {
      return JSON.parse(existing) as AttributionData;
    }

    const params = new URLSearchParams(window.location.search);
    const data: AttributionData = {
      utm_source: params.get('utm_source') || '',
      utm_medium: params.get('utm_medium') || '',
      utm_campaign: params.get('utm_campaign') || '',
      utm_term: params.get('utm_term') || '',
      utm_content: params.get('utm_content') || '',
      referrer: document.referrer || '',
      landing_page: window.location.href,
    };

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch {
    return {
      utm_source: '',
      utm_medium: '',
      utm_campaign: '',
      utm_term: '',
      utm_content: '',
      referrer: '',
      landing_page: '',
    };
  }
}

export function getAttributionData(): AttributionData {
  return captureAttributionOnLoad();
}
