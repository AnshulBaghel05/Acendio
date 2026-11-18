export interface IndustryDetail {
  slug: string;
  name: string;
  shortName: string;
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
  ctaHeadline: string;
  ctaSubtitle: string;
}

export const INDUSTRIES_CONTENT: IndustryDetail[] = [
  {
    slug: 'real-estate',
    name: 'Real Estate Teams & Brokerages',
    shortName: 'Real Estate',
    headline: '24/7 Lead Qualification, Showing Booking & Seller Nurture for Real Estate',
    metaTitle: 'AI Growth Systems for Real Estate Teams | Acendio',
    metaDescription:
      'Capture buyer and seller inquiries 24/7 with AI receptionists, conversion websites, paid ads, and automated CRM follow-up for real estate.',
    summary:
      'Agents and brokers spend hours in showings and closings where answering every phone call is impossible. Acendio captures buyer and seller leads immediately, qualifies timelines and neighborhoods, and books consultations onto agent calendars.',
    painPoints: [
      'Property portal and social ad inquiries cooling off while agents are in appointments.',
      'Inconsistent follow-up with long-horizon sellers and past database contacts.',
      'Generic brokerage websites that fail to capture local valuation requests cleanly.',
    ],
    recommendedStack: [
      {
        title: '24/7 AI Receptionist & Missed-Call Text-Back',
        detail: 'Qualifies buyer timeline, financing readiness, and target areas before booking agent calls.',
        serviceSlug: 'ai-receptionist',
      },
      {
        title: 'CRM Speed-to-Lead & Database Reactivation',
        detail: 'Runs multi-month seller follow-up sequences and revives dormant portal inquiries.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
      {
        title: 'Meta & Google Lead Generation Creatives',
        detail: 'Localized listing, relocation, and seller valuation ads paired with fast landing pages.',
        serviceSlug: 'ads-management-creatives',
      },
    ],
    workflowExample: [
      'Homeowner clicks a local seller valuation ad and submits property address.',
      'CRM sends instant SMS confirmation while AI assistant verifies selling timeline.',
      'Qualified homeowner selects a listing consultation slot on the agent calendar.',
      'Post-closing automation invites a Google review for the brokerage profile.',
    ],
    ctaHeadline: 'Turn More Buyer & Seller Inquiries Into Booked Showings',
    ctaSubtitle:
      'Book a discovery call to map AI call coverage, seller nurture, and local ad attribution for your brokerage.',
  },
  {
    slug: 'home-services',
    name: 'Home Services & Trades',
    shortName: 'Home Services',
    headline: 'Capture Every Emergency Dispatch & Estimate Call in Home Services',
    metaTitle: 'AI Receptionists & Lead Systems for Home Services | Acendio',
    metaDescription:
      'Turn missed calls into booked estimates for HVAC, plumbing, roofing, electrical, and remodeling companies with Acendio AI receptionists and local ads.',
    summary:
      'When homeowners need a repair or an estimate, they keep dialing until someone answers live. Acendio keeps dispatch boards full with 24/7 AI call answering, fast service pages, local search ads, and post-job review requests.',
    painPoints: [
      'Technicians on job sites unable to answer inbound calls during peak hours.',
      'High-intent estimate requests slipping between office staff and field crews.',
      'Competitors ranking higher on Google Maps because review outreach is sporadic.',
    ],
    recommendedStack: [
      {
        title: '24/7 AI Voice Receptionist',
        detail: 'Captures service address, urgency, and job details, booking dispatch windows directly.',
        serviceSlug: 'ai-receptionist',
      },
      {
        title: 'Automated Google Review Engine',
        detail: 'Sends SMS review invites right after job completion to build steady Map Pack trust.',
        serviceSlug: 'review-management-automation',
      },
      {
        title: 'Fast Local Service Website',
        detail: 'Mobile-first service and area pages built for local search and instant quote forms.',
        serviceSlug: 'website-development-maintenance',
      },
    ],
    workflowExample: [
      'Homeowner calls after hours for urgent HVAC, plumbing, or roofing service.',
      'AI Receptionist answers live, collects address and issue scope, and books morning slot.',
      'Customer receives SMS confirmation and technician arrival reminder.',
      'Completed invoice triggers automated Google review invite and seasonal follow-up.',
    ],
    ctaHeadline: 'Stop Losing Estimates to Voicemail While Crews Are in the Field',
    ctaSubtitle:
      'Schedule a strategy call to hear a live AI receptionist flow tailored to your trade and service territory.',
  },
  {
    slug: 'clinics-healthcare',
    name: 'Clinics & Private Healthcare Practices',
    shortName: 'Clinics',
    headline: 'Calm Patient Intake, Reminders & Reputation Care for Private Clinics',
    metaTitle: 'AI Front Desk & Growth Automation for Clinics | Acendio',
    metaDescription:
      'Reduce front-desk phone bottlenecks and appointment no-shows for dental, medical, aesthetic, and wellness clinics with Acendio.',
    summary:
      'Front-desk coordinators juggle in-person patient check-ins alongside nonstop phone calls. Acendio handles routine scheduling, pre-visit FAQs, appointment reminders, and post-visit review outreach without adding staff strain.',
    painPoints: [
      'New patient inquiries hitting hold queues during busy morning check-in hours.',
      'Preventable appointment no-shows leaving open gaps in provider schedules.',
      'Outdated clinic websites that feel clunky on mobile devices.',
    ],
    recommendedStack: [
      {
        title: 'AI Chat & Voice Front-Desk Coverage',
        detail: 'Answers clinic hours, preparation FAQs, and guides patients to initial consultations.',
        serviceSlug: 'ai-chat-support',
      },
      {
        title: 'No-Show Reduction & Recall Automation',
        detail: 'Multi-step SMS/email reminders and automated recall outreach for overdue visits.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
      {
        title: 'Patient Reputation Management',
        detail: 'Consistent post-visit review workflows with private feedback routing for service recovery.',
        serviceSlug: 'review-management-automation',
      },
    ],
    workflowExample: [
      'Prospective patient finds the clinic on Google and opens chat or calls.',
      'AI agent answers clinic location and prep questions and captures contact details.',
      'Connected scheduler confirms the consultation with 48h and 2h SMS reminders.',
      'After the appointment, patient receives a simple review link or private feedback form.',
    ],
    ctaHeadline: 'Relieve Front-Desk Hold Queues and Cut Preventable No-Shows',
    ctaSubtitle:
      'Book a discovery call to review calm, compliant intake and reminder workflows for your practice.',
  },
  {
    slug: 'hospitality',
    name: 'Hospitality, Venues & Multi-Location Dining',
    shortName: 'Hospitality',
    headline: 'Automated Event Inquiries, Guest Answers & Review Growth for Hospitality',
    metaTitle: 'AI Booking & Review Automation for Hospitality | Acendio',
    metaDescription:
      'Capture private event bookings, answer guest questions 24/7, and scale positive local reviews for restaurants, hotels, and venues.',
    summary:
      'Hospitality teams cannot step away from guests during dinner rush or event setup to answer repetitive phone questions. Acendio captures private dining inquiries, answers guest logistics 24/7, and keeps Google reviews active.',
    painPoints: [
      'Missed phone calls during peak dining hours or weekend venue events.',
      'Private party and group inquiries waiting days for a coordinator response.',
      'Unanswered online reviews holding back local discovery rankings.',
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
      'Event planner searches local venues and calls during peak evening service.',
      'AI Receptionist gathers guest count, preferred date, and event scope.',
      'Coordinator receives a clean summary and sends a consultation booking link automatically.',
      'Post-event SMS captures guest satisfaction and Google reviews.',
    ],
    ctaHeadline: 'Capture Every Private Event Inquiry Without Pulling Staff Off the Floor',
    ctaSubtitle:
      'Schedule a strategy call to connect guest call coverage, event CRM follow-up, and review replies.',
  },
  {
    slug: 'local-retail',
    name: 'Local Retail & Specialty Showrooms',
    shortName: 'Local Retail',
    headline: 'Turn Online Searches Into Showroom Visits & Repeat Buyers for Local Retail',
    metaTitle: 'Local SEO, Ads & AI Automation for Local Retail | Acendio',
    metaDescription:
      'Connect local search visibility, paid social creatives, inventory inquiry chat, and customer retention workflows for specialty retail.',
    summary:
      'Independent showrooms and specialty retailers win on trust, expertise, and convenience. Acendio builds fast local storefronts, answers stock questions instantly via chat, and brings first-time buyers back.',
    painPoints: [
      'Shoppers leaving websites when stock, sizing, or showroom hours are unclear.',
      'Zero structured follow-up after in-store visits or custom quote requests.',
      'Lower local map visibility compared to national retail chains.',
    ],
    recommendedStack: [
      {
        title: 'Website & Local SEO Foundation',
        detail: 'Fast product and showroom pages built for local intent searches.',
        serviceSlug: 'website-development-maintenance',
      },
      {
        title: 'Web & Social AI Chat Agent',
        detail: 'Answers availability, showroom hours, appointments, and return policies immediately.',
        serviceSlug: 'ai-chat-support',
      },
      {
        title: 'Customer Reactivation & Reviews',
        detail: 'Automated seasonal updates and post-purchase review invitations.',
        serviceSlug: 'crm-lead-follow-up-automation',
      },
    ],
    workflowExample: [
      'Local shopper messages Instagram or website chat asking about showroom stock.',
      'AI Chat confirms hours, captures contact info, and books a showroom appointment.',
      'CRM adds buyer to seasonal SMS/email updates with explicit opt-out controls.',
      'Post-purchase automation drives verified Google reviews.',
    ],
    ctaHeadline: 'Turn Local Searchers Into Booked Showroom Appointments',
    ctaSubtitle:
      'Book a discovery call to connect your website, social chat, local ads, and review automation.',
  },
];
