export interface NavLinkItem {
  label: string;
  to: string;
  description?: string;
}

export const SERVICE_NAV_LINKS: NavLinkItem[] = [
  {
    label: 'Website Development & Maintenance',
    to: '/services/website-development-maintenance',
    description: 'Conversion-focused builds, technical SEO, hosting, and ongoing care.',
  },
  {
    label: 'AI Receptionist',
    to: '/services/ai-receptionist',
    description: '24/7 voice and SMS agents that qualify leads and book appointments.',
  },
  {
    label: 'Ads Management & Creatives',
    to: '/services/ads-management-creatives',
    description: 'Meta and Google campaigns with dedicated creative testing.',
  },
  {
    label: 'Review Management & Automation',
    to: '/services/review-management-automation',
    description: 'Automated review requests, routing, AI replies, and GBP growth.',
  },
  {
    label: 'CRM & Lead Follow-Up Automation',
    to: '/services/crm-lead-follow-up-automation',
    description: 'Instant speed-to-lead, multi-channel nurture, and reactivation.',
  },
  {
    label: 'AI Chat & Support',
    to: '/services/ai-chat-support',
    description: 'Web and social chat agents trained on verified company knowledge.',
  },
  {
    label: 'Custom Software & AI Automation',
    to: '/services/custom-software-ai-automation',
    description: 'Bespoke operational dashboards, API bridges, and LLM workflows.',
  },
];

export const TOP_NAV_LINKS: NavLinkItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/blog' },
];

export const FOOTER_COMPANY_LINKS: NavLinkItem[] = [
  { label: 'About Acendio', to: '/about' },
  { label: 'Our Process', to: '/process' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights & Guides', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact Us', to: '/contact' },
];

export const FOOTER_INDUSTRY_LINKS: NavLinkItem[] = [
  { label: 'Real Estate', to: '/industries/real-estate' },
  { label: 'Home Services', to: '/industries/home-services' },
  { label: 'Clinics & Healthcare', to: '/industries/clinics-healthcare' },
  { label: 'Hospitality', to: '/industries/hospitality' },
  { label: 'Local Retail', to: '/industries/local-retail' },
];
