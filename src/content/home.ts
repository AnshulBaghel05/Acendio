export interface ProblemItem {
  id: string;
  title: string;
  category: string;
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
    title: 'Acendio | Websites, AI Receptionists & Growth Systems',
    description:
      'Acendio builds conversion websites, 24/7 AI receptionists, Google & Meta ads, review workflows, and CRM automation for growing businesses.',
  },
  hero: {
    eyebrow: 'AI & Digital Growth Agency',
    h1: 'Websites, AI Receptionists & Paid Ads That Turn Missed Calls Into Booked Revenue',
    subheadline:
      'We connect your website, 24/7 AI voice and chat coverage, ad campaigns, and GoHighLevel CRM so every qualified inquiry gets answered and scheduled.',
    primaryCta: 'Book a Free Strategy Call',
    secondaryCta: 'Explore Services',
    methodNotes: [
      'One partner for web, AI, ads, and CRM',
      'Built directly inside your GoHighLevel account',
      'Every lead tracked from click to booked slot',
    ],
  },
  problems: {
    eyebrow: 'Where Demand Drops Off',
    title: 'Three Gaps Costing Local Businesses Qualified Bookings',
    subtitle:
      'Most growing companies do not lack buyer interest. They lose ready prospects between the first click, the ringing phone, and the follow-up.',
    items: [
      {
        id: 'missed-calls',
        title: 'Calls Rolling to Voicemail During Busy Hours',
        category: 'Voice Coverage',
        description:
          'When crews are on jobs or front desks are helping in-person clients, callers rarely leave a voicemail. Without live AI voice answering or instant text-back, buyers dial the next listing on Google.',
        remedyLink: '/services/ai-receptionist',
        remedyLabel: 'See 24/7 AI Receptionist',
      },
      {
        id: 'slow-follow-up',
        title: 'Web Leads Waiting Hours for a Human Reply',
        category: 'Speed to Lead',
        description:
          'Form fills and social ad inquiries sitting in an unmonitored inbox go cold fast. Manual callbacks break down whenever your team gets pulled into fulfillment.',
        remedyLink: '/services/crm-lead-follow-up-automation',
        remedyLabel: 'See CRM Follow-Up Automation',
      },
      {
        id: 'weak-reputation-outdated-site',
        title: 'Friction-Heavy Websites & Quiet Google Profiles',
        category: 'Conversion & Trust',
        description:
          'Slow mobile pages, unclear service menus, and outdated Google reviews hurt conversion before a prospect ever reaches out—lowering both organic calls and paid ad returns.',
        remedyLink: '/services/website-development-maintenance',
        remedyLabel: 'See Website & Review Systems',
      },
    ] as ProblemItem[],
  },
  servicesSection: {
    eyebrow: 'Capabilities Ledger',
    title: 'Seven Core Systems Under One Roof',
    subtitle:
      'Start with a single bottleneck or deploy the complete acquisition and booking stack.',
  },
  process: {
    eyebrow: 'How We Work',
    title: 'From First Audit to Live Booking Pipeline',
    subtitle:
      'A clear four-step sequence so your site, ads, AI agents, and CRM launch together without loose ends.',
    steps: [
      {
        step: '01',
        title: 'Discover',
        summary:
          'We inspect your website, call handling, ad accounts, Google Business Profile, and CRM stages to locate where prospects drop off.',
        deliverable: 'Growth Audit & Custom Proposal',
      },
      {
        step: '02',
        title: 'Design & Build',
        summary:
          'We build your conversion site, ad creative suite, tracking pixels, and GoHighLevel pipeline structure cleanly.',
        deliverable: 'Production Site, Tracking & Ad Assets',
      },
      {
        step: '03',
        title: 'Automate',
        summary:
          'We launch 24/7 AI voice and chat agents, missed-call text-back, speed-to-lead sequences, calendar routing, and review requests.',
        deliverable: 'Tested Lead & Booking Workflows',
      },
      {
        step: '04',
        title: 'Optimize & Scale',
        summary:
          'We maintain site uptime, refresh ad creatives, review AI call transcripts, and tune follow-up copy from live CRM reports.',
        deliverable: 'Ongoing Care & Monthly Attribution',
      },
    ] as ProcessStep[],
  },
  measurement: {
    eyebrow: 'How We Measure Results',
    title: 'Attribution Grounded in Your Calendar, Not Vanity Clicks',
    subtitle:
      'We do not publish fabricated case-study numbers or generic percentage claims. Instead, every system we install reports four verifiable facts inside your CRM.',
    pillars: [
      {
        metric: '01 / Response Speed',
        title: 'Time From Lead Capture to First Touch',
        detail:
          'Track exact seconds between form submit, missed call, or ad click and the first SMS, email, or AI voice greeting.',
      },
      {
        metric: '02 / Call Recovery',
        title: 'Answered & Recovered Inbound Calls',
        detail:
          'Review every after-hours and overflow call transcript, caller intent summary, and missed-call text-back conversation.',
      },
      {
        metric: '03 / Source Attribution',
        title: 'Campaign-to-Appointment Lineage',
        detail:
          'Session UTM parameters attach to every contact record so booked calendar slots trace back to the exact ad or page.',
      },
      {
        metric: '04 / Reputation Velocity',
        title: 'Review Invites vs. Published Replies',
        detail:
          'Monitor review requests sent after completed jobs, private feedback alerts, and reply turnaround on Google Business Profile.',
      },
    ],
  },
  differentiators: {
    eyebrow: 'Why Acendio',
    title: 'One Accountable Team Across Web, Voice, Ads & CRM',
    subtitle:
      'Hiring separate vendors for your website, paid ads, answering service, and CRM creates brittle handoffs. We build and maintain the entire path.',
    items: [
      {
        title: 'Unified Stack Ownership',
        description:
          'Your website, Meta and Google Ads, AI receptionist, review engine, and GoHighLevel CRM share one architecture.',
      },
      {
        title: 'Speed-to-Lead by Default',
        description:
          'Every click, call, and chat enters structured qualification with immediate SMS/voice response and direct calendar scheduling.',
      },
      {
        title: 'Full Account Portability',
        description:
          'You retain ownership of your domain, ad accounts, customer lists, and call transcripts with zero proprietary lock-in.',
      },
      {
        title: 'Active Post-Launch Maintenance',
        description:
          'We monitor site uptime, run daily backups, patch security updates, and update offers as your business evolves.',
      },
    ] as DifferentiatorItem[],
  },
  techStack: {
    eyebrow: 'System Compatibility',
    title: 'Standard Tools Connected Cleanly',
    layers: [
      { category: 'CRM & Pipelines', tools: 'GoHighLevel, Webhooks, Custom REST APIs' },
      { category: 'Calendar & Routing', tools: 'Round-Robin Booking, Google & Outlook Sync' },
      { category: 'SMS & Voice', tools: 'A2P Compliant SMS, AI Voice, Call Transfer' },
      { category: 'Email Delivery', tools: 'DKIM/SPF Verified Nurture & Confirmations' },
      { category: 'Paid Acquisition', tools: 'Google Ads, Meta Ads & Conversions API' },
      { category: 'Measurement', tools: 'GA4, Google Tag Manager, Session UTMs' },
    ],
  },
  faqs: [
    {
      question: 'How is an engagement with Acendio scoped and priced?',
      answer:
        'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
    },
    {
      question: 'Which businesses benefit most from Acendio?',
      answer:
        'We partner with owners and operators of growing local and regional businesses—including real estate teams, home services contractors, private clinics, hospitality venues, and specialty retail.',
    },
    {
      question: 'Can we start with just one service instead of the full suite?',
      answer:
        'Yes. Many clients start with their most urgent gap—such as 24/7 AI Receptionist coverage, a website rebuild, or CRM follow-up automation—and add paid ads or review automation once core intake is solid.',
    },
    {
      question: 'How does the AI receptionist handle urgent or complex questions?',
      answer:
        'It follows your approved rules, qualifying criteria, and calendar availability. When a caller needs a live specialist or triggers an emergency escalation rule, the system transfers the call or alerts your team immediately with the full transcript.',
    },
    {
      question: 'Do we need GoHighLevel to work with Acendio?',
      answer:
        'We build CRM pipelines, missed-call text-back, and review automation inside GoHighLevel so everything lives in one inbox and calendar. If you already rely on industry-specific scheduling or dispatch software, we connect them via webhooks or custom APIs.',
    },
    {
      question: 'What if we already have a website and active ad accounts?',
      answer:
        'We audit what you have first. If your current site loads fast and converts well, we wire our tracking, forms, and AI chat directly into it. If it holds back mobile conversion or SEO, we rebuild cleanly while preserving existing search equity.',
    },
    {
      question: 'How do you keep SMS and review automation compliant?',
      answer:
        'Every web form captures explicit TCPA/GDPR-aware consent with timestamps, SMS campaigns use registered A2P messaging with automatic STOP opt-out, and review requests invite honest customer feedback without gating or fabricating reviews.',
    },
    {
      question: 'What happens on the discovery strategy call?',
      answer:
        'We review your current website, inbound call flow, ad accounts, and follow-up process together, identify the highest-impact gaps, and outline a scoped custom proposal within one business day.',
    },
  ] as FaqItem[],
  bottomCta: {
    headline: 'Ready to Turn Missed Calls and Slow Follow-Up Into Booked Work?',
    subtitle:
      'Request a custom proposal or pick a time for a short discovery call. We reply within one business day.',
  },
};
