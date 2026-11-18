export interface NavLinkItem {
  label: string;
  to: string;
  description?: string;
}

export const SERVICE_NAV_LINKS: NavLinkItem[] = [
  {
    label: 'Website Development & Maintenance',
    to: '/services/website-development-maintenance',
    description: 'Fast, mobile-first sites, technical SEO, hosting, and ongoing care.',
  },
  {
    label: 'AI Receptionist',
    to: '/services/ai-receptionist',
    description: '24/7 voice and SMS agents that qualify callers and book calendars.',
  },
  {
    label: 'Ads Management & Creatives',
    to: '/services/ads-management-creatives',
    description: 'Meta and Google campaigns paired with custom static and video creatives.',
  },
  {
    label: 'Review Management & Automation',
    to: '/services/review-management-automation',
    description: 'Post-visit review invites, sentiment routing, and timely replies.',
  },
  {
    label: 'CRM & Lead Follow-Up Automation',
    to: '/services/crm-lead-follow-up-automation',
    description: 'Instant lead response, multi-channel follow-up, and no-show reminders.',
  },
  {
    label: 'AI Chat & Support',
    to: '/services/ai-chat-support',
    description: 'Web and social chat trained on your FAQs with smooth human handoff.',
  },
  {
    label: 'Custom Software & AI Automation',
    to: '/services/custom-software-ai-automation',
    description: 'Internal tools, API bridges, and structured AI workflows.',
  },
  {
    label: 'Social Media Management',
    to: '/services/social-media-management',
    description: 'Monthly content calendars, design, short-form Reels, scheduling & engagement.',
  },
  {
    label: 'UGC Ads / Video / Post Creation',
    to: '/services/ugc-ads-video-post-creation',
    description: 'UGC-style video ads, product showcases, hooks, scripts & static ad variations.',
  },
];

export const TOP_NAV_LINKS: NavLinkItem[] = [
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Process', to: '/process' },
  { label: 'About', to: '/about' },
  { label: 'Insights', to: '/insights' },
];

export const FOOTER_COMPANY_LINKS: NavLinkItem[] = [
  { label: 'About Acendio', to: '/about' },
  { label: 'Our Process', to: '/process' },
  { label: 'Industries', to: '/industries' },
  { label: 'Insights', to: '/insights' },
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
