export interface IndustryDetail {
  slug: string;
  name: string;
  headline: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  painPoints: string[];
  recommendedStack: {
    title: string;
    detail: string;
    serviceSlug: string;
  }[];
  workflowExample: string[];
}

export const INDUSTRIES_CONTENT: IndustryDetail[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate Teams & Brokerages',
    headline: 'AI Lead Qualification, Instant Showing Scheduling & Seller Nurture for Real Estate',
    metaTitle: 'AI Growth Systems for Real Estate Teams | Acendio',
    metaDescription:
      'Capture buyer and seller inquiries 24/7 with AI receptionists, high-converting IDX-ready sites, paid ads, and automated CRM follow-up for real estate.',
    summary:
      'Agents and brokers spend hours in showings and closings where answering every phone call is impossible. Acendio captures buyer and seller leads immediately, qualifies timelines and neighborhoods, and books consultations straight onto agent calendars.',
    painPoints: [
      'Property portal and social ad leads cooling off while agents are on appointments.',
      'Inconsistent follow-up with long-horizon sellers and past database contacts.',
      'Generic brokerage template websites that fail to capture local seller valuations.',
    ],
    recommendedStack: [
      {
        title: '24/7 AI Receptionist & Missed Call Text-Back',
        detail: 'Qualifies buyer budget, financing readiness, and target neighborhoods before booking agent calls.',
        serviceSlug: 'ai-receptionist',
      },
      {
        title: 'CRM Speed-to-Lead & Database Reactivation',
        detail: 'Automates multi-month seller nurture sequences and revives dormant portal inquiries.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
      {
        title: 'Meta & Google Lead Generation Creatives',
        detail: 'Localized listing, relocation, and valuation campaigns paired with dedicated landing pages.',
        serviceSlug: 'ads-management-creatives',
      },
    ],
    workflowExample: [
      'Prospect clicks local seller valuation Meta Ad and submits address.',
      'CRM triggers instant SMS confirmation and AI assistant verifies property timeline.',
      'Qualified homeowner selects a listing consultation slot synced to agent calendar.',
      'Post-closing workflow requests a Google review for the brokerage profile.',
    ],
  },
  {
    slug: 'home-services',
    name: 'Home Services & Trades',
    headline: 'Never Miss an Emergency Dispatch or Estimate Request in Home Services',
    metaTitle: 'AI Receptionists & Lead Systems for Home Services | Acendio',
    metaDescription:
      'Turn missed calls into booked jobs for HVAC, plumbing, roofing, electrical, and remodeling companies with Acendio AI receptionists and local ads.',
    summary:
      'When homeowners face an urgent repair or request an estimate, they call until someone answers. Acendio ensures your trucks stay booked with 24/7 AI call answering, Google Local Search visibility, and automated post-job reviews.',
    painPoints: [
      'Technicians on job sites unable to answer inbound calls during peak demand.',
      'High-intent estimate requests slipping through gaps between office staff and field crews.',
      'Competitors outranking your company in the Google Map Pack due to inconsistent review velocity.',
    ],
    recommendedStack: [
      {
        title: '24/7 AI Voice Receptionist',
        detail: 'Captures service address, urgency level, and equipment issue, booking dispatch windows directly.',
        serviceSlug: 'ai-receptionist',
      },
      {
        title: 'Automated Google Review Engine',
        detail: 'Triggers SMS review invites right after invoice completion to compound Map Pack visibility.',
        serviceSlug: 'review-management-automation',
      },
      {
        title: 'High-Speed Local Service Website',
        detail: 'Mobile-first service area pages built for local search and instant quote capture.',
        serviceSlug: 'website-development-maintenance',
      },
    ],
    workflowExample: [
      'Homeowner calls after hours for urgent HVAC or plumbing service.',
      'AI Receptionist answers immediately, captures address and issue details, and books morning slot.',
      'Customer receives automated SMS confirmation and technician arrival reminder.',
      'Completed job triggers automated Google review request and seasonal maintenance follow-up.',
    ],
  },
  {
    slug: 'clinics-healthcare',
    name: 'Clinics & Private Healthcare Practices',
    headline: 'Streamlined Patient Intake, Appointment Reminders & Reputation Care for Clinics',
    metaTitle: 'AI Front Desk & Growth Automation for Clinics | Acendio',
    metaDescription:
      'Reduce front-desk phone bottlenecks and appointment no-shows for dental, medical, aesthetic, and wellness clinics with Acendio.',
    summary:
      'Front-desk staff juggle in-person check-ins alongside nonstop inbound phone inquiries. Acendio offloads routine scheduling, pre-visit FAQs, reminder cadences, and post-visit review requests without adding administrative overhead.',
    painPoints: [
      'New patient calls hitting hold queues during busy morning check-in hours.',
      'Preventable appointment no-shows leaving gaps in provider schedules.',
      'Outdated clinic websites that fail to reflect modern care standards on mobile.',
    ],
    recommendedStack: [
      {
        title: 'AI Chat & Voice Front-Desk Support',
        detail: 'Answers hours, insurance policy FAQs, and books initial consultations cleanly.',
        serviceSlug: 'ai-chat-support',
      },
      {
        title: 'No-Show Reduction & Recall Automation',
        detail: 'Multi-step SMS/email reminders and automated recall outreach for overdue checkups.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
      {
        title: 'Patient Reputation Management',
        detail: 'Consistent post-appointment review workflows with private feedback routing for service recovery.',
        serviceSlug: 'review-management-automation',
      },
    ],
    workflowExample: [
      'Prospective patient finds clinic via Google Search and opens web chat or calls.',
      'AI agent answers clinic location and preparation FAQs and captures contact details.',
      'Staff or integrated scheduler confirms consultation with automated 48h and 2h SMS reminders.',
      'After visit, patient receives a clean review link or private feedback prompt.',
    ],
  },
  {
    slug: 'hospitality',
    name: 'Hospitality, Venues & Multi-Location Dining',
    headline: 'Automated Event Inquiries, Table Bookings & Guest Reputation for Hospitality',
    metaTitle: 'AI Booking & Review Automation for Hospitality | Acendio',
    metaDescription:
      'Capture private event bookings, answer guest questions 24/7, and scale positive local reviews for restaurants, hotels, and venues.',
    summary:
      'Hospitality teams operate on thin margins during peak service hours. Acendio handles routine guest questions, private dining inquiries, and continuous Google review collection so staff stay focused on guest experience.',
    painPoints: [
      'Missed phone calls during dinner rush or event setup.',
      'Private event and group inquiries waiting days for a coordinator response.',
      'Unanswered online guest reviews hurting local discovery rankings.',
    ],
    recommendedStack: [
      {
        title: 'AI Receptionist & Event Inquiry Capture',
        detail: 'Handles hours, parking, menu, and private event specs 24/7 with instant organizer alerts.',
        serviceSlug: 'ai-receptionist',
      },
      {
        title: 'Review Automation & AI-Assisted Replies',
        detail: 'Keeps Google Business Profiles active with prompt, hospitable responses.',
        serviceSlug: 'review-management-automation',
      },
      {
        title: 'Paid Social & Local Discovery Ads',
        detail: 'Promotes seasonal menus, private events, and weekend bookings to local audiences.',
        serviceSlug: 'ads-management-creatives',
      },
    ],
    workflowExample: [
      'Corporate planner searches local venues and calls during peak evening service.',
      'AI Receptionist gathers guest count, preferred date, and budget scope.',
      'Coordinator receives a structured summary and sends a booking link automatically.',
      'Post-event SMS captures guest satisfaction and Google reviews.',
    ],
  },
  {
    slug: 'local-retail',
    name: 'Local Retail & Specialty Showrooms',
    headline: 'Drive Foot Traffic, Showroom Appointments & Repeat Visits for Local Retail',
    metaTitle: 'Local SEO, Ads & AI Automation for Local Retail | Acendio',
    metaDescription:
      'Connect local search visibility, paid social creatives, inventory inquiry chat, and customer retention workflows for specialty retail.',
    summary:
      'Independent showrooms and specialty retailers compete against massive e-commerce platforms on convenience and trust. Acendio builds fast local storefronts, answers stock questions instantly via chat, and turns first-time buyers into repeat advocates.',
    painPoints: [
      'Shoppers leaving websites when basic stock, sizing, or showroom hours go unanswered.',
      'Zero structured follow-up after in-store visits or quote requests.',
      'Low local map visibility compared to national retail chains.',
    ],
    recommendedStack: [
      {
        title: 'Website & Local SEO Foundation',
        detail: 'Fast product/showroom showcases engineered for local intent searches in [LOCATION].',
        serviceSlug: 'website-development-maintenance',
      },
      {
        title: 'Web & Social AI Chat Agent',
        detail: 'Answers product availability, showroom appointments, and return policies immediately.',
        serviceSlug: 'ai-chat-support',
      },
      {
        title: 'Customer Reactivation & Reviews',
        detail: 'Automated seasonal promotions and post-purchase review invitations.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
    ],
    workflowExample: [
      'Local shopper messages Instagram or website chat asking about showroom stock.',
      'AI Chat confirms hours, captures contact info, and books a private consultation.',
      'CRM adds shopper to seasonal SMS/email update list with opt-out compliance.',
      'Post-purchase automation drives verified Google reviews.',
    ],
  },
];
