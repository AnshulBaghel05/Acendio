/**
 * GoHighLevel (GHL) Integration Configuration
 *
 * Supply these values via VITE_GHL_* environment variables in Vercel or .env.
 * Empty values automatically fall back gracefully in the UI.
 */
export const GHL_CONFIG = {
  GHL_WEBHOOK_URL: import.meta.env.VITE_GHL_WEBHOOK_URL || '',
  GHL_FORM_EMBED_URL: import.meta.env.VITE_GHL_FORM_EMBED_URL || '',
  GHL_CALENDAR_EMBED_URL: import.meta.env.VITE_GHL_CALENDAR_EMBED_URL || '',
  GHL_CHAT_WIDGET_SCRIPT_ID: import.meta.env.VITE_GHL_CHAT_WIDGET_SCRIPT_ID || '',
  GHL_TRACKING_SCRIPT: import.meta.env.VITE_GHL_TRACKING_ID || '',
  GHL_EMBED_JS_URL: 'https://link.msgsndr.com/js/form_embed.js',
  GHL_CHAT_LOADER_URL: 'https://widgets.leadconnectorhq.com/loader.js',
  GHL_CHAT_RESOURCES_URL: 'https://widgets.leadconnectorhq.com/chat-widget/loader.js',
} as const;

export function isConfigured(value: string): boolean {
  return Boolean(value && value.trim().length > 0);
}
