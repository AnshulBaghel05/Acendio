export interface BlogTocItem {
  id: string;
  label: string;
}

export interface BlogSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  internalLink?: {
    label: string;
    to: string;
  };
}

export type BlogDiagramType = 'voice-recovery' | 'speed-to-lead' | 'review-flywheel';

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  modifiedDate: string;
  displayPublishedDate: string;
  displayModifiedDate: string;
  readTime: string;
  diagramType: BlogDiagramType;
  excerpt: string;
  toc: BlogTocItem[];
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'missed-call-text-back-and-ai-receptionists-for-local-businesses',
    title: 'How 24/7 AI Voice Receptionists Eliminate Missed-Call Revenue Loss',
    metaTitle: 'AI Voice Receptionists & Missed Call Text-Back | Acendio',
    metaDescription:
      'Learn how local businesses use 24/7 AI voice receptionists and missed call text-back to qualify callers, book appointments, and log CRM leads.',
    category: 'AI Voice & Reception',
    author: 'Acendio Systems Team',
    authorRole: 'Automation Architecture',
    publishedDate: '2026-10-14',
    modifiedDate: '2026-11-10',
    displayPublishedDate: '14 Oct 2026',
    displayModifiedDate: '10 Nov 2026',
    readTime: '9 min read',
    diagramType: 'voice-recovery',
    excerpt:
      'Why voicemail fails local service businesses—and how pairing natural AI voice reception with instant missed-call text-back captures demand around the clock.',
    toc: [
      { id: 'hidden-leak', label: 'The Real Cost of Unanswered Inbound Calls' },
      { id: 'voicemail-vs-ai', label: 'Why Voicemail and Generic Call Centers Fall Short' },
      { id: 'anatomy-ai-receptionist', label: 'Anatomy of a Production AI Voice Receptionist' },
      { id: 'missed-call-text-back', label: 'Pairing Voice With Instant Missed-Call Text-Back' },
      { id: 'industry-scenarios', label: 'Real-World Call Routing Across Local Industries' },
      { id: 'implementation-checklist', label: 'Rollout Checklist for Service Businesses' },
    ],
    sections: [
      {
        id: 'hidden-leak',
        heading: 'The Real Cost of Unanswered Inbound Calls',
        paragraphs: [
          'Across home services, clinics, real estate teams, and hospitality venues, the phone remains the moment of highest commercial intent. A prospect who picks up the phone is rarely browsing casually; they have an immediate problem to solve, a consultation to schedule, or an urgent question standing between them and a booking.',
          'Yet the very moments a business is busiest delivering great work are the exact moments inbound calls go unanswered. Technicians are on ladders or driving between appointments. Front-desk coordinators are checking in arriving patients. Real estate agents are walking clients through showings. Restaurants are managing peak dinner service. Even a well-staffed office experiences overlapping calls at nine in the morning or right after lunch.',
          'When marketing teams invest in Google Ads, local SEO, and Meta campaigns without fixing inbound call coverage, paid acquisition simply amplifies the waste. Every ring that rolls into an unmonitored voicemail box represents acquisition effort handed straight to the next provider listed on Google Maps. Owners often assume they need higher ad budgets to grow, when capturing the calls they already generate would fill open calendar capacity first.',
        ],
      },
      {
        id: 'voicemail-vs-ai',
        heading: 'Why Voicemail and Generic Call Centers Fall Short',
        paragraphs: [
          'For decades, small and mid-sized businesses faced two imperfect options for overflow and after-hours coverage: standard voicemail or outsourced human answering services. Voicemail places all the burden back on a rushed buyer—forcing them to state their name, repeat their phone number, describe their issue, and wait blindly for a callback while competitors answer live.',
          'Traditional answering services solve the greeting problem, yet often introduce friction of their own. Agents reading from static scripts cannot inspect your real-time calendar availability, struggle with industry-specific diagnostic questions, rarely update custom fields inside your CRM cleanly, and stall during sudden call spikes caused by weather events or seasonal promotions. Callers end up feeling like they reached a generic message desk rather than your business.',
          'Modern AI voice receptionists bridge that gap when built as part of a connected CRM workflow rather than a standalone novelty widget. Because the agent sits directly on top of your scheduling calendar and business rules, it acts like a disciplined front-desk coordinator that never puts callers on hold, speaks clearly, and records every detail consistently.',
        ],
        internalLink: {
          label: 'Explore Acendio 24/7 AI Receptionist Architecture',
          to: '/services/ai-receptionist',
        },
      },
      {
        id: 'anatomy-ai-receptionist',
        heading: 'Anatomy of a Production AI Voice Receptionist',
        paragraphs: [
          'A reliable AI voice receptionist for small business relies on four tightly connected layers working together on every call. First is grounded knowledge: the agent is trained strictly on your verified services, operating hours, geographic service areas, and policy boundaries so it answers routine questions accurately without improvising or making unauthorized promises.',
          'Second is structured qualification. Rather than rushing straight to a booking link for an out-of-area or unsupported request, the receptionist asks concise, natural follow-up questions—confirming property address, service category, urgency level, or preferred provider. That ensures your calendar only fills with prospects you can genuinely serve.',
          'Third is live calendar execution and smart escalation. Once qualified, the receptionist reads real-time open windows from your connected calendar and confirms the appointment on the spot. If a caller presents an urgent dispatch emergency or requests a live specialist, call-transfer rules connect them immediately to an on-call team member with a text summary.',
          'Fourth is clean CRM hygiene. Every completed call writes an audio recording, full verbatim transcript, structured summary, and lead stage update directly into GoHighLevel so your team begins every follow-up with full context instead of asking callers to repeat themselves.',
        ],
        bullets: [
          'Grounded business knowledge base with strict boundary instructions',
          'Real-time calendar availability lookups respecting buffer and travel rules',
          'Warm call transfer protocols for urgent or VIP escalations',
          'Automated CRM contact creation, tagging, and transcript logging',
        ],
      },
      {
        id: 'missed-call-text-back',
        heading: 'Pairing Voice With Instant Missed-Call Text-Back',
        paragraphs: [
          'Even with an AI receptionist configured for overflow and after-hours coverage, some callers hang up after two rings or prefer text communication while commuting or sitting in an office. That is where missed call text-back provides an essential safety net.',
          'Whenever an inbound call disconnects before an appointment is booked, your CRM automatically sends a polite, conversational SMS within seconds: acknowledging the missed call and inviting the caller to share what they need right over text. Because the response lands immediately while the caller still has their phone in hand, the conversation stays alive inside your unified inbox instead of disappearing into call history.',
          'Paired together, AI voice reception and missed call text-back form a resilient capture layer. Callers who want to speak live get immediate voice assistance and calendar booking; callers who hang up early or prefer messaging move seamlessly into two-way SMS qualification without requiring manual staff monitoring.',
        ],
        internalLink: {
          label: 'See How CRM & Lead Follow-Up Automation Connects Every Channel',
          to: '/services/crm-lead-follow-up-automation',
        },
      },
      {
        id: 'industry-scenarios',
        heading: 'Real-World Call Routing Across Local Industries',
        paragraphs: [
          'Effective voice workflows adapt to the rhythm of each industry. In home services such as HVAC, plumbing, or roofing, the AI receptionist immediately distinguishes between routine estimate requests and urgent property emergencies—capturing street address and issue details before routing dispatches or booking next-day estimator windows.',
          'In clinics and private practices, the receptionist handles hours, location directions, and pre-visit preparation FAQs while guiding new patients into initial consultation slots—relieving front-desk coordinators from juggling phone hold queues during morning check-in rushes. In real estate and hospitality, after-hours property inquiries and private event bookings receive immediate qualification rather than waiting until morning.',
          'Across every service vertical, the governing principle remains identical: preserve a calm, helpful human standard of responsiveness even when your live team is fully occupied.',
        ],
      },
      {
        id: 'implementation-checklist',
        heading: 'Rollout Checklist for Service Businesses',
        paragraphs: [
          'Deploying an AI receptionist does not require tearing out your existing phone number or disrupting your office team. Most businesses begin with ring-no-answer overflow and after-hours routing before expanding coverage across secondary marketing lines.',
          'Before launching, document your top fifteen caller questions, define exact territories and excluded services, establish clear escalation numbers for emergencies, and verify A2P SMS compliance for follow-up confirmations. Run internal test calls across edge cases—background noise, interrupted sentences, accent variations, and rescheduling requests—before routing live ad traffic.',
          'Once live, review call transcripts weekly during the first month. Small refinements to greeting phrasing and qualifying questions quickly compound into smoother caller experiences, cleaner CRM pipelines, and higher calendar show rates.',
        ],
        internalLink: {
          label: 'Book a Free Strategy Call to Audit Your Inbound Call Flow',
          to: '/contact',
        },
      },
    ],
  },
  {
    slug: 'speed-to-lead-crm-automation-architecture',
    title: 'Speed-to-Lead Architecture: Building an Instant Follow-Up Pipeline in GoHighLevel',
    metaTitle: 'Speed-to-Lead CRM Automation Architecture | Acendio',
    metaDescription:
      'Discover how to build instant speed-to-lead, multi-channel nurture, and no-show reduction in GoHighLevel so paid and organic leads convert cleanly.',
    category: 'CRM & Automation',
    author: 'Acendio Systems Team',
    authorRole: 'Revenue Operations',
    publishedDate: '2026-10-28',
    modifiedDate: '2026-11-12',
    displayPublishedDate: '28 Oct 2026',
    displayModifiedDate: '12 Nov 2026',
    readTime: '9 min read',
    diagramType: 'speed-to-lead',
    excerpt:
      'Why lead response speed decides who wins the appointment—and a practical blueprint for connecting web forms, ads, SMS, and calendars inside GoHighLevel.',
    toc: [
      { id: 'speed-advantage', label: 'Why Response Delay Quietly Hurts Ad Returns' },
      { id: 'attribution-first', label: 'Capturing Clean UTM Attribution Before the First Message' },
      { id: 'instant-sequence', label: 'Designing the First Five Minutes of Follow-Up' },
      { id: 'multi-day-nurture', label: 'Multi-Channel Nurture Without Sounding Automated' },
      { id: 'no-show-prevention', label: 'Protecting Booked Revenue With Reminder Architecture' },
      { id: 'pipeline-governance', label: 'Pipeline Hygiene and Weekly Team Accountability' },
    ],
    sections: [
      {
        id: 'speed-advantage',
        heading: 'Why Response Delay Quietly Hurts Ad Returns',
        paragraphs: [
          'Business owners frequently evaluate marketing agencies solely on lead volume or cost per click, overlooking what happens in the minutes immediately following a form submission. Yet buyers searching locally rarely fill out a single form and close their browser. They open three or four tabs, submit two inquiries, and book with whichever qualified business engages them first.',
          'When a web inquiry triggers only an email notification to a shared inbox, delays are inevitable. A sales coordinator is on another call, a technician is driving, or the inquiry arrives at eight in the evening. By the next morning, the buyer has forgotten which company they contacted or already scheduled an estimate elsewhere. Meanwhile, the ad platform gets blamed for low-quality leads when the bottleneck actually occurred after the click.',
          'Fixing speed-to-lead rarely requires hiring additional office headcount. It requires treating lead intake as an automated software pipeline rather than a manual inbox task.',
        ],
      },
      {
        id: 'attribution-first',
        heading: 'Capturing Clean UTM Attribution Before the First Message',
        paragraphs: [
          'Effective CRM automation starts before a prospect even hits Submit. When visitors arrive from Google Ads, Meta campaigns, or organic articles, session-level storage should capture utm_source, utm_medium, utm_campaign, utm_term, utm_content, and referring URL on initial page load.',
          'Attaching those parameters directly to the hidden payload of your contact forms—and mapping them into structured custom fields inside GoHighLevel—gives your reporting undeniable clarity. Instead of guessing which ad creative or landing page drove high-value bookings, every opportunity card in your pipeline carries its exact origin from first touch through closed work.',
          'Pairing clean webhook payloads with an embedded form fallback ensures reliability as well: if a browser extension or temporary network issue interrupts a direct submission, visitors still have an immediate path to complete their request without losing data.',
        ],
        internalLink: {
          label: 'Review Acendio Website & Attribution Setup',
          to: '/services/website-development-maintenance',
        },
      },
      {
        id: 'instant-sequence',
        heading: 'Designing the First Five Minutes of Follow-Up',
        paragraphs: [
          'Once a lead enters GoHighLevel via webhook, Meta Lead Form, or AI chat, an automated workflow should execute three actions simultaneously within seconds. First, apply standardized tags based on serviceInterest and lead source so reporting stays segmented across your service lines.',
          'Second, send a clear, helpful SMS and email acknowledgment referencing the exact service the prospect requested—confirming receipt and offering a direct self-booking calendar link if they did not already select a time. Keep the SMS short, polite, and conversational, avoiding heavy HTML formatting or generic marketing hype.',
          'Third, notify the assigned team member internally with a one-tap call link or automated whisper bridge, while creating a structured follow-up task with a clear due window. Automation accelerates human connection; it does not replace accountability.',
        ],
        bullets: [
          'Instant service-interest tagging and pipeline stage placement ("New Lead")',
          'Conversational SMS acknowledgment with explicit opt-out compliance',
          'Branded confirmation email outlining next steps and calendar access',
          'Immediate internal alert and follow-up task assignment for sales staff',
        ],
      },
      {
        id: 'multi-day-nurture',
        heading: 'Multi-Channel Nurture Without Sounding Automated',
        paragraphs: [
          'Not every qualified buyer answers the first text or books on day one. Work schedules, family coordination, and comparison shopping frequently delay decisions by several days or weeks. Without structured follow-up, busy teams usually stop after one or two attempts, leaving interested prospects unclosed.',
          'A well-built GoHighLevel nurture sequence spaces out concise, value-oriented check-ins across SMS and email over two to three weeks—sharing helpful preparation checklists, clarifying how your process works, and inviting a quick reply. Crucially, the workflow must include an immediate stop trigger whenever the contact replies, books an appointment, or moves manually to an active pipeline stage so prospects never receive awkward automated messages after speaking with your staff.',
          'The same architecture powers database reactivation. Unclosed quotes from three to six months ago can be re-engaged politely in controlled batches, turning sunk marketing spend into fresh calendar consultations without increasing ad spend.',
        ],
        internalLink: {
          label: 'Explore Full CRM & Lead Follow-Up Automation Services',
          to: '/services/crm-lead-follow-up-automation',
        },
      },
      {
        id: 'no-show-prevention',
        heading: 'Protecting Booked Revenue With Reminder Architecture',
        paragraphs: [
          'Getting an appointment onto the calendar is only half the conversion equation; getting the prospect to show up prepared completes it. Every booked strategy call or service estimate should automatically shift the CRM opportunity to a "Discovery Booked" stage and launch a calm reminder cadence.',
          'Include a calendar invite immediately upon booking, a helpful expectation-setting email twenty-four hours prior, and a concise SMS confirmation two hours before the meeting with an easy reschedule link. Giving busy prospects a frictionless way to move a conflict prevents silent no-shows and keeps team calendars productive.',
          'If someone misses a scheduled slot anyway, an automated missed-appointment workflow sends a polite reschedule message ten minutes past the start time rather than letting the opportunity expire silently.',
        ],
        internalLink: {
          label: 'Pair CRM Pipelines With Paid Ads & Creative Strategy',
          to: '/services/ads-management-creatives',
        },
      },
      {
        id: 'pipeline-governance',
        heading: 'Pipeline Hygiene and Weekly Team Accountability',
        paragraphs: [
          'Even the best automation degrades if CRM pipeline stages become cluttered with outdated test leads or unupdated deals. Establish clear stage definitions—New Lead, Contacted, Discovery Booked, Proposal Sent, Won, and Nurture—and review aging opportunities every week.',
          'Define explicit ownership rules for every stage transition so automation and sales staff never work against each other. When a coordinator moves a card from New Lead to Contacted, automated speed-to-lead nudges pause automatically and a scheduled task reminds the owner to log call notes before the end of the business day. If a prospect requests a proposal, moving the card into Proposal Sent starts a polite check-in sequence three days later rather than leaving the follow-up to memory.',
          'Equally important is measuring stage-to-stage conversion without vanity clutter. Rather than staring at raw form submission counts alone, leadership should track how many inbound contacts move into Discovery Booked, how reliably booked prospects attend their scheduled time, and how quickly proposals reach clear resolution.',
          'When your website forms, AI receptionist, paid ads, and team inbox all report into one disciplined GoHighLevel pipeline, leadership gains an honest, real-time view of marketing performance and sales capacity.',
        ],
        bullets: [
          'Clear stage definitions with automated stop-on-reply safeguards',
          'Task creation and owner notifications aligned to business hours',
          'Clean separation between active sales opportunities and long-term nurture lists',
          'Weekly pipeline reviews tying ad campaigns directly to booked consultations',
        ],
        internalLink: {
          label: 'Book a Strategy Call to Design Your CRM Pipeline',
          to: '/contact',
        },
      },
    ],
  },
  {
    slug: 'conversion-websites-and-google-review-automation-flywheel',
    title: 'The Local Growth Flywheel: Combining Conversion Websites With Automated Google Reviews',
    metaTitle: 'Conversion Websites & Google Review Flywheel | Acendio',
    metaDescription:
      'See how pairing a fast, SEO-ready website with automated Google review workflows lowers acquisition friction and compounds local search trust.',
    category: 'Web & Reputation',
    author: 'Acendio Systems Team',
    authorRole: 'Search & Conversion Strategy',
    publishedDate: '2026-11-05',
    modifiedDate: '2026-11-15',
    displayPublishedDate: '05 Nov 2026',
    displayModifiedDate: '15 Nov 2026',
    readTime: '9 min read',
    diagramType: 'review-flywheel',
    excerpt:
      'Why website conversion rate and Google review velocity reinforce each other—and how to connect both into a self-sustaining local growth loop.',
    toc: [
      { id: 'search-decision-loop', label: 'How Local Buyers Actually Evaluate Service Providers' },
      { id: 'website-pillars', label: 'Four Non-Negotiable Elements of a Conversion Website' },
      { id: 'review-velocity', label: 'Why Review Recency and Responsiveness Matter' },
      { id: 'connecting-loop', label: 'Connecting Web Bookings to Post-Service Review Automation' },
      { id: 'gbp-alignment', label: 'Aligning Your Website Structure With Google Business Profile' },
      { id: 'maintenance-compounding', label: 'Sustaining Momentum With Ongoing Maintenance' },
    ],
    sections: [
      {
        id: 'search-decision-loop',
        heading: 'How Local Buyers Actually Evaluate Service Providers',
        paragraphs: [
          'Local buyers rarely follow a neat straight line from a single ad click to checkout. When someone searches for a home contractor, clinic, brokerage, or specialty service, they typically bounce between the Google Map Pack, your Google Business Profile reviews, and your mobile website in under two minutes.',
          'If your website looks dated, loads slowly, or hides clear contact options, visitors doubt your reliability—even if your actual field work is exemplary. Conversely, if your website looks sharp and persuasive, yet your Google profile shows only a handful of aging reviews with unanswered comments, skepticism creeps back in and drives buyers back to the map results.',
          'When you strengthen both assets together, each reinforces the other. Strong Google ratings raise click-through rates onto your website, and a clear, fast website converts that higher-intent traffic into booked appointments—creating more completed jobs that generate fresh reviews.',
        ],
      },
      {
        id: 'website-pillars',
        heading: 'Four Non-Negotiable Elements of a Conversion Website',
        paragraphs: [
          'A conversion-focused business website does not rely on heavy visual gimmicks or cluttered animations. Instead, four foundational choices carry almost all the conversion weight on desktop and mobile devices alike.',
          'First, immediate clarity above the fold: within three seconds on a mobile screen, a visitor must see exactly what you do, who you serve, and a high-contrast button to book a call or request a proposal. Second, technical speed and layout stability: compressed modern images, minimal render-blocking scripts, and clean typography keep Core Web Vitals healthy so paid clicks do not bounce before reading your offer.',
          'Third, local and technical SEO architecture: dedicated service pages targeting distinct buyer intents, clean URL structures, semantic HTML5 sections, and accurate LocalBusiness and Service JSON-LD schema markup. Fourth, omnipresent low-friction contact paths: inline validated forms, sticky mobile call/book controls, and clean calendar access without intrusive popups blocking initial reading.',
        ],
        internalLink: {
          label: 'Explore Acendio Website Development & Maintenance',
          to: '/services/website-development-maintenance',
        },
      },
      {
        id: 'review-velocity',
        heading: 'Why Review Recency and Responsiveness Matter',
        paragraphs: [
          'Search algorithms and human buyers look beyond total star score. Recency—seeing steady feedback posted this week and this month—signals an active, dependable business. Equally important is visible owner engagement: thoughtful replies to both praise and constructive feedback demonstrate accountability.',
          'Manually asking customers at checkout or remembering to email a link on Friday afternoon fails the moment business gets busy. Automated review requests solve consistency by tying outreach directly to real milestones, such as marking a job complete or closing an invoice in your CRM.',
          'Equally vital is clean feedback routing. Giving customers a simple, private way to alert management if anything felt off during their visit lets your team fix issues rapidly while satisfied clients move smoothly to Google without extra login friction.',
        ],
        internalLink: {
          label: 'See How Automated Review Management Works',
          to: '/services/review-management-automation',
        },
      },
      {
        id: 'connecting-loop',
        heading: 'Connecting Web Bookings to Post-Service Review Automation',
        paragraphs: [
          'The real breakthrough happens when your website, CRM, and review engine share one contact record. A prospect discovers you via Google Search or Meta Ads, submits a request on your conversion website, and books a consultation.',
          'After your team delivers the service and updates the CRM stage to Completed, an automated workflow waits an optimal window—typically a few hours for urgent services or the next morning for consultations—and sends a concise, branded SMS and email review invitation.',
          'Once submitted, AI-assisted reply drafting prepares a customized response referencing the customer’s feedback for quick approval, while approved positive highlights can be curated into updated website proof sections—strengthening conversion for the next wave of visitors.',
        ],
        bullets: [
          'Single contact record connecting ad click, website booking, and post-job review',
          'Automated SMS & email invitations triggered directly from completed CRM stages',
          'On-brand, timely review replies protecting Google Business Profile engagement',
          'Continuous local authority growth supporting both organic rankings and ad performance',
        ],
      },
      {
        id: 'gbp-alignment',
        heading: 'Aligning Your Website Structure With Google Business Profile',
        paragraphs: [
          'Consistency between your Google Business Profile and your website reinforces local relevance signals. Ensure your Name, Address, and Phone (NAP) block in your website footer and contact page matches your profile character for character, link directly to relevant service landing pages rather than a generic homepage where appropriate, and mirror the exact service categories you perform.',
          'Each primary service you list on your Google profile deserves a dedicated page on your website with clear explanations of who it serves, the bottlenecks it solves, and how the engagement unfolds. Embedding clean FAQ sections with structured FAQPage schema on core service pages also helps search engines and AI answer engines understand your exact scope and process.',
          'Avoid publishing thin duplicate city pages that swap out only a neighborhood name. Instead, build genuinely useful service pages, publish practical local guides, and keep your Google Business Profile active with updated photos, accurate holiday hours, and prompt responses to incoming questions.',
        ],
      },
      {
        id: 'maintenance-compounding',
        heading: 'Sustaining Momentum With Ongoing Maintenance',
        paragraphs: [
          'Digital growth assets behave like physical equipment: neglected websites degrade as browsers, search guidelines, and tracking scripts change. Ongoing website maintenance—covering automated backups, security patches, uptime alerts, broken-link checks, SSL monitoring, and seasonal service updates—ensures your conversion engine never silently breaks during peak season.',
          'A single broken contact form or expired webhook token during a busy ad campaign can waste weeks of paid media budget before anyone notices. Scheduled weekly verification of forms, call-tracking routing, calendar embeds, and analytics events protects every step of your funnel.',
          'Combined with active review automation and clean CRM follow-up, your digital presence compounds steadily every quarter—reducing dependence on constant ad spend alone and turning local visibility into a durable competitive edge. Businesses that maintain fast, trustworthy websites alongside consistent review velocity steadily lower acquisition friction across search, social ads, and referrals alike.',
        ],
        bullets: [
          'Automated daily backups, security updates, and continuous uptime monitoring',
          'Routine form, calendar embed, and webhook verification across devices',
          'Ongoing Core Web Vitals checks as new content and media are added',
          'Coordinated updates across website offers, ad landing pages, and Google Business Profile',
        ],
        internalLink: {
          label: 'Schedule a Free Strategy Call With Acendio',
          to: '/contact',
        },
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
