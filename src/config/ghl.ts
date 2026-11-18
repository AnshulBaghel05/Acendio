/**
 * GoHighLevel (GHL) Integration Configuration
 *
 * Replace every bracketed placeholder below (or configure the matching VITE_*
 * environment variables in your deployment dashboard) before going live.
 */
export const GHL_CONFIG = {
  /** Inbound Webhook trigger URL from your GHL Workflow */
  GHL_WEBHOOK_URL:
    import.meta.env.VITE_GHL_WEBHOOK_URL ||
    'https://services.leadconnectorhq.com/hooks/[GHL_WEBHOOK_ID]',

  /** Fallback embedded GHL Form iframe URL */
  GHL_FORM_EMBED_URL:
    import.meta.env.VITE_GHL_FORM_EMBED_URL ||
    'https://api.leadconnectorhq.com/widget/form/[GHL_FORM_ID]',

  /** Embedded GHL Calendar booking widget URL */
  GHL_CALENDAR_EMBED_URL:
    import.meta.env.VITE_GHL_CALENDAR_EMBED_URL ||
    'https://api.leadconnectorhq.com/widget/booking/[GHL_CALENDAR_ID]',

  /** GHL Web Chat Widget ID (loaded asynchronously after user interaction/idle) */
  GHL_CHAT_WIDGET_SCRIPT_ID:
    import.meta.env.VITE_GHL_CHAT_WIDGET_SCRIPT_ID || '[GHL_CHAT_WIDGET_ID]',

  /** GHL Site Tracking script identifier */
  GHL_TRACKING_SCRIPT:
    import.meta.env.VITE_GHL_TRACKING_ID || '[GHL_TRACKING_ID]',

  /** Official LeadConnector form/calendar embed helper script */
  GHL_EMBED_JS_URL: 'https://link.msgsndr.com/js/form_embed.js',

  /** Chat widget loader endpoint */
  GHL_CHAT_LOADER_URL: 'https://widgets.leadconnectorhq.com/loader.js',
  GHL_CHAT_RESOURCES_URL: 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
} as const;

export function isPlaceholderValue(value: string): boolean {
  return !value || value.includes('[') || value.includes('MY_');
}
