export interface ProblemItem {
  id: string;
  title: string;
  leakageType: string;
  description: string;
  remedyLink: string;
  remedyLabel: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  summary: string;
  deliverable: string;
}

export interface DifferentiatorItem {
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_CONTENT = {
  seo: {
    title: 'Acendio | AI Websites, AI Receptionists & Growth Systems',
    description:
      'Acendio is an AI agency delivering conversion websites, 24/7 AI receptionists, Google & Meta ads, review automation, and CRM workflows.',
  },
  hero: {
    kicker: 'AI & Digital Growth Systems for [TARGET REGIONS]',
    h1: 'AI-Powered Websites, Receptionists & Ads That Turn Missed Opportunities Into Booked Revenue',
    subheadline:
      'We install connected websites, 24/7 AI voice and chat agents, paid acquisition, and CRM automation so every inbound lead gets answered and booked.',
    primaryCta: 'Book a Free Strategy Call',
    secondaryCta: 'Explore Services',
    trustItems: [
      'Single partner for web, AI, ads, and CRM',
      'Built on verifiable operational workflows',
      'Serving owners & operators in [TARGET REGIONS]',
    ],
  },
  problems: {
    eyebrow: 'Operational Revenue Leakage',
    title: 'Where Growing Businesses Silently Lose Qualified Demand',
    subtitle:
      'Most local and regional companies do not have a demand shortage. They lose ready-to-buy prospects through disconnected systems and delayed responses.',
    items: [
      {
        id: 'missed-calls',
        title: 'Unanswered Calls & Voicemail Dead Ends',
        leakageType: 'Inbound Voice Leakage',
        description:
          'When prospects call during busy job hours, client appointments, or after closing, voicemail rarely converts. Without immediate voice coverage or missed call text-back, buyers dial the next provider on Google.',
        remedyLink: '/services/ai-receptionist',
        remedyLabel: 'See 24/7 AI Receptionist',
      },
      {
        id: 'slow-follow-up',
        title: 'Delayed Lead Follow-Up & Stalled Pipelines',
        leakageType: 'Speed-to-Lead Leakage',
        description:
          'Web forms and ad leads sitting in an unmonitored inbox cool down rapidly. Manual follow-up breaks down when your team is focused on fulfillment, leaving paid clicks unbooked.',
        remedyLink: '/services/crm-lead-follow-up-automation',
        remedyLabel: 'See CRM Follow-Up Automation',
      },
      {
        id: 'weak-reputation-outdated-site',
        title: 'Weak Google Reputation & Friction-Heavy Websites',
        leakageType: 'Conversion & Trust Leakage',
        description:
          'Slow mobile pages, unclear service positioning, and outdated Google Business Profiles reduce conversion before a prospect ever contacts you—lowering ad efficiency and organic visibility simultaneously.',
        remedyLink: '/services/website-development-maintenance',
        remedyLabel: 'See Website & Review Systems',
      },
    ] as ProblemItem[],
  },
  servicesSection: {
    eyebrow: 'Core Capabilities',
    title: 'Connected Growth Infrastructure Under One Roof',
    subtitle:
      'Eight modular systems engineered to capture, qualify, book, and retain customers without fragmented vendor handoffs.',
  },
  process: {
    eyebrow: 'Execution Framework',
    title: 'How Acendio Works',
    subtitle:
      'A structured four-phase rollout designed for rapid deployment, clean system integration, and measurable pipeline accountability.',
    steps: [
      {
        step: '01',
        title: 'Discover',
        summary:
          'We audit your current website, call handling, ad accounts, Google Business Profile, and CRM workflow to locate exact revenue leaks.',
        deliverable: 'Technical Growth Blueprint & Custom Proposal',
      },
      {
        step: '02',
        title: 'Design & Build',
        summary:
          'We engineer your conversion website, ad creative suite, tracking architecture, and GoHighLevel pipeline foundation with clean code.',
        deliverable: 'Production Website, Tracking & Campaign Assets',
      },
      {
        step: '03',
        title: 'Automate',
        summary:
          'We deploy your 24/7 AI voice and chat agents, missed-call text-back, speed-to-lead sequences, calendar routing, and review requests.',
        deliverable: 'Tested End-to-End Lead & Booking Workflows',
      },
      {
        step: '04',
        title: 'Optimize & Scale',
        summary:
          'We monitor uptime, refine ad creatives, tune AI call transcripts, and expand high-performing channels through clear reporting.',
        deliverable: 'Ongoing Maintenance & Growth Optimization',
      },
    ] as ProcessStep[],
  },
  differentiators: {
    eyebrow: 'Why Acendio',
    title: 'Built Like a Systems Team, Not a Traditional Ad Shop',
    subtitle:
      'Hiring separate freelancers for web, ads, CRM, and AI creates brittle integrations. Acendio owns the complete customer journey.',
    items: [
      {
        title: 'Single Partner Across Web, AI, Ads & CRM',
        description:
          'Your website, Meta and Google Ads, AI receptionist, review workflows, and CRM pipelines are built as one unified system with zero finger-pointing.',
      },
      {
        title: 'Automation-First Lead Capture',
        description:
          'Every traffic source feeds directly into structured qualification, instant SMS/voice response, and automated calendar booking.',
      },
      {
        title: 'Transparent Operational Reporting',
        description:
          'You see every call log, booked appointment, lead source, and campaign performance metric in clean dashboards tied to pipeline stages.',
      },
      {
        title: 'Rapid Deployment Without Bloat',
        description:
          'Proven architectural templates for [LOCATION] and regional businesses let us launch core web and automation systems without drawn-out agency delays.',
      },
      {
        title: 'Ongoing Maintenance & Uptime Care',
        description:
          'Sites and automations are actively monitored, backed up, updated, and refined as your offers, seasons, and staffing evolve.',
      },
    ] as DifferentiatorItem[],
  },
  techStack: {
    eyebrow: 'System Compatibility',
    title: 'Integrated Across Your Core Revenue Channels',
    subtitle:
      'We connect standard operational layers using clean APIs and webhooks—no proprietary lock-in or unverified partner badges.',
    layers: [
      { category: 'CRM & Pipelines', tools: 'GoHighLevel, Webhooks, Custom REST APIs' },
      { category: 'Calendar & Scheduling', tools: 'Round-Robin Booking, Google & Outlook Sync' },
      { category: 'SMS & Two-Way Messaging', tools: 'A2P Compliant SMS, Missed-Call Text Back' },
      { category: 'Email Automation', tools: 'Transactional & Nurture Sequences, DKIM/SPF' },
      { category: 'AI Voice & Chat', tools: 'Inbound Voice Reception, Web & Social Chat' },
      { category: 'Analytics & Attribution', tools: 'GA4, GTM, Server Conversions, UTM Tracking' },
    ],
  },
  faqs: [
    {
      question: 'How is an engagement with Acendio structured and scoped?',
      answer:
        'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
    },
    {
      question: 'Who does Acendio work best with?',
      answer:
        'We partner with owners and operators of local and regional service businesses—including real estate teams, home services contractors, clinics, hospitality venues, and local retail—across [TARGET REGIONS].',
    },
    {
      question: 'Do we have to buy all services together, or can we start with one system?',
      answer:
        'You can start with a single high-impact priority—such as an AI receptionist, website rebuild, or CRM follow-up automation—and expand into ads or review automation as your capacity grows.',
    },
    {
      question: 'How does the 24/7 AI receptionist handle complex questions or urgent calls?',
      answer:
        'Your AI voice receptionist is trained specifically on your service rules, qualifying criteria, and calendar availability. When a caller needs a human specialist or triggers an emergency rule, the system performs a warm transfer or sends an immediate escalation alert with the transcript.',
    },
    {
      question: 'Do you use GoHighLevel for CRM and automation?',
      answer:
        'Yes. We build CRM pipelines, missed call text-back, speed-to-lead workflows, and review automation inside GoHighLevel so your team has one centralized inbox and calendar system. We also connect external tools via webhooks and custom APIs when required.',
    },
    {
      question: 'What happens if we already have a website or existing ad accounts?',
      answer:
        'We audit your existing assets first. If your current website converts well and meets technical speed and SEO standards, we integrate directly with it. If it creates mobile friction or tracking gaps, we rebuild or optimize it cleanly without losing search equity.',
    },
    {
      question: 'How do you track whether ads and website updates produce real bookings?',
      answer:
        'Every form, call tracking number, chat widget, and calendar embed preserves UTM source parameters into your CRM pipeline so you can trace booked appointments back to the exact campaign and creative.',
    },
    {
      question: 'How is review automation kept compliant with platform guidelines?',
      answer:
        'We automate polite post-visit SMS and email requests to every customer, route private operational feedback cleanly to your team when support is needed, and assist with timely, on-brand replies on your Google Business Profile.',
    },
    {
      question: 'What is the first step to get started?',
      answer:
        'Book a Free Strategy Call or submit the contact form below. We review your current website, call flow, and lead pipeline ahead of the call so our conversation focuses directly on practical next steps.',
    },
  ] as FaqItem[],
};
