/**
 * Centralized brand, regional, and contact configuration for Acendio.
 * Any optional contact or location field left empty ("") will not render in the UI.
 */
export const SITE_CONFIG = {
  brandName: 'Acendio',
  tagline: 'Websites, AI receptionists, and growth systems built to convert.',
  isIndexable: import.meta.env.VITE_INDEXABLE === 'true',
  siteUrl: (import.meta.env.VITE_SITE_URL || '').replace(/\/+$/, ''),
  phone: import.meta.env.VITE_CONTACT_PHONE || '',
  whatsappNumber: import.meta.env.VITE_CONTACT_WHATSAPP || '',
  email: import.meta.env.VITE_CONTACT_EMAIL || '',
  location: import.meta.env.VITE_CONTACT_LOCATION || '',
  targetRegions: import.meta.env.VITE_TARGET_REGIONS || '',
  address: import.meta.env.VITE_CONTACT_ADDRESS || '',
  gbpUrl: import.meta.env.VITE_GBP_URL || '',
  socials: {
    linkedin: import.meta.env.VITE_SOCIAL_LINKEDIN || '',
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || '',
    facebook: import.meta.env.VITE_SOCIAL_FACEBOOK || '',
    x: import.meta.env.VITE_SOCIAL_X || '',
    youtube: import.meta.env.VITE_SOCIAL_YOUTUBE || '',
  },
  ogImages: {
    home: '/og/home.svg',
    service: '/og/service.svg',
    industry: '/og/industry.svg',
    insights: '/og/insights.svg',
  },
} as const;

export function getPhoneHref(): string {
  return SITE_CONFIG.phone ? `tel:${SITE_CONFIG.phone.replace(/[^\d+]/g, '')}` : '';
}

export function getWhatsappHref(): string {
  const digits = SITE_CONFIG.whatsappNumber.replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}` : '';
}

export function getEmailHref(): string {
  return SITE_CONFIG.email ? `mailto:${SITE_CONFIG.email}` : '';
}
