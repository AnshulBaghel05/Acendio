import { FaqItem } from './home';

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceStep {
  step: string;
  title: string;
  detail: string;
}

export type ServiceDiagramType =
  | 'site-architecture'
  | 'call-flow'
  | 'ads-funnel'
  | 'review-routing'
  | 'crm-pipeline'
  | 'chat-graph'
  | 'custom-middleware'
  | 'social-calendar'
  | 'ugc-studio';

export interface PlatformScopeItem {
  name: string;
  role: string;
  bestFor: string;
}

export interface CreativeFormatGroup {
  category: string;
  ratioSpec: string;
  formats: string[];
}

export interface ServicePageData {
  slug: string;
  numeral: string;
  shortTitle: string;
  diagramType: ServiceDiagramType;
  bentoOutcome: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  h1: string;
  heroSubheadline: string;
  whoItsFor: string[];
  problemTitle: string;
  problemParagraphs: string[];
  deliverables: ServiceDeliverable[];
  howItWorks: ServiceStep[];
  integrations: string[];
  outcomes: string[];
  platforms?: PlatformScopeItem[];
  platformScopeNote?: string;
  creativeFormats?: CreativeFormatGroup[];
  productionClarification?: {
    title: string;
    body: string;
  };
  faqs: FaqItem[];
  relatedSlugs: string[];
  ctaHeadline: string;
  ctaSubheadline: string;
}

export const SERVICES_CONTENT: ServicePageData[] = [
  {
    slug: 'website-development-maintenance',
    numeral: '01',
    shortTitle: 'Website Development & Maintenance',
    diagramType: 'site-architecture',
    bentoOutcome:
      'Conversion-focused, mobile-first websites backed by security updates, daily backups, and uptime monitoring.',
    metaTitle: 'Website Development & Maintenance Agency | Acendio',
    metaDescription:
      'Conversion-focused website development, deployment, technical SEO, and ongoing maintenance for growing local and regional businesses.',
    primaryKeyword: 'website development and maintenance',
    h1: 'Website Development, Deployment & Ongoing Maintenance Built for Conversion',
    heroSubheadline:
      'Fast, mobile-first websites built to rank in local search, capture inbound leads cleanly, and stay secure under active monthly care.',
    whoItsFor: [
      'Service businesses whose slow or outdated websites lose mobile visitors before the page finishes loading.',
      'Growing teams sending paid ad traffic to generic templates with weak calls to action and broken tracking.',
      'Owners who do not want to deal with hosting renewals, plugin conflicts, SSL certificates, or urgent site edits in-house.',
      'Multi-service companies needing dedicated landing pages for distinct services and surrounding service territories.',
    ],
    problemTitle: 'Why Most Business Websites Leak Paid and Organic Traffic',
    problemParagraphs: [
      'A business website is the conversion gatekeeper for every marketing dollar you spend. When a prospect clicks a Google search listing or a Meta ad on their phone, sluggish asset loading, crowded navigation, and buried contact buttons push them straight back to search results to call a competitor.',
      'Post-launch neglect causes just as much quiet damage. Many agencies launch a site and disappear, leaving owners with unpatched security holes, failing contact forms, missing backups, and stale service pages that gradually slip in search rankings. Without reliable tracking and clean CRM wiring, even the visitors who do convert are hard to trace back to the campaigns that brought them.',
      'Acendio treats website development and maintenance as ongoing revenue infrastructure. We build clean, accessible pages on semantic HTML5, connect every form and phone link directly to GoHighLevel with full UTM preservation, and manage uptime, backups, and Core Web Vitals continuously.',
    ],
    deliverables: [
      {
        title: 'Conversion UX & Direct Copywriting',
        description:
          'Clear above-the-fold positioning, logical reading order, method-based trust framing, and friction-free booking forms.',
      },
      {
        title: 'Mobile-First Frontend Build',
        description:
          'Layouts built from 360px phones upward with legible type, generous tap targets, and zero horizontal overflow.',
      },
      {
        title: 'Technical SEO & Schema Setup',
        description:
          'Clean heading hierarchy, unique metadata per route, XML sitemaps, canonical tags, and LocalBusiness and Service JSON-LD.',
      },
      {
        title: 'CRM, Calendar & UTM Wiring',
        description:
          'Direct links to GoHighLevel forms, calendars, tracking pixels, and session-level UTM capture so every lead lands in the right stage.',
      },
      {
        title: 'Managed Hosting, Backups & Patching',
        description:
          'Automated daily backups, SSL renewal, dependency updates, firewall rules, and 24/7 uptime checks.',
      },
      {
        title: 'Ongoing Edits & Speed Tuning',
        description:
          'Fast turnaround for new service pages, seasonal offers, team changes, and Core Web Vitals upkeep.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Conversion & Technical Audit',
        detail:
          'We inspect your existing domain equity, speed bottlenecks, analytics setup, and local search landscape.',
      },
      {
        step: '02',
        title: 'Information Architecture',
        detail:
          'We map every service page, local landing page, and contact path around how buyers evaluate and book your team.',
      },
      {
        step: '03',
        title: 'Production Build & QA',
        detail:
          'We write clean code, configure schema and metadata, wire GHL webhooks and calendars, and verify mobile and desktop speed.',
      },
      {
        step: '04',
        title: 'Zero-Downtime Launch & Care',
        detail:
          'We handle DNS cutover, submit sitemaps to Search Console, and move into continuous uptime monitoring and updates.',
      },
    ],
    integrations: [
      'GoHighLevel Forms & Calendars',
      'Google Analytics 4 & Tag Manager',
      'Meta Conversion Tracking',
      'Google Search Console',
      'Cloudflare DNS & Edge Caching',
      'AI Chat & Voice Triggers',
    ],
    outcomes: [
      'Visitors immediately grasp what you do, who you serve, and how to book a discovery call.',
      'Mobile prospects experience crisp, fast page loads without layout shifts or broken forms.',
      'Ad traffic lands on focused, message-matched pages connected cleanly to CRM attribution.',
      'Backups, security patches, uptime alerts, and routine page edits are handled for you.',
    ],
    faqs: [
      {
        question: 'How is website development and ongoing maintenance scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Will we keep full ownership of our domain and website?',
        answer:
          'Yes. Your business retains complete ownership of your domain registrar account, copy, and web assets. We manage deployment and maintenance transparently on your behalf.',
      },
      {
        question: 'Can you rebuild our existing site without losing Google rankings?',
        answer:
          'Yes. Before launching any update, we map every existing URL, keep high-performing content equity intact, and set up clean 301 redirects so search engines transition smoothly.',
      },
      {
        question: 'What does ongoing website maintenance cover?',
        answer:
          'Ongoing maintenance includes uptime checks, automated daily backups, security and dependency patching, SSL upkeep, Core Web Vitals reviews, form testing, and scheduled content updates.',
      },
      {
        question: 'How fast are updates completed once the site is live?',
        answer:
          'Routine copy, service, and promotion edits sent to our team are turned around promptly under our support workflow so your pages stay current.',
      },
    ],
    relatedSlugs: [
      'ai-receptionist',
      'ads-management-creatives',
      'review-management-automation',
    ],
    ctaHeadline: 'Ready for a Website That Loads Fast and Converts Inbound Demand?',
    ctaSubheadline:
      'Book a discovery call to audit your current site speed, mobile paths, and conversion setup.',
  },
  {
    slug: 'ai-receptionist',
    numeral: '02',
    shortTitle: 'AI Receptionist',
    diagramType: 'call-flow',
    bentoOutcome:
      '24/7 voice and SMS receptionist that answers every call, qualifies leads, and books your calendar.',
    metaTitle: 'AI Receptionist for Small Business | Acendio',
    metaDescription:
      'Deploy a 24/7 AI voice receptionist for small business that answers inbound calls, qualifies leads, recovers missed calls, and books CRM calendars.',
    primaryKeyword: 'AI receptionist for small business',
    h1: '24/7 AI Voice & SMS Receptionist That Turns Ringing Phones Into Booked Calls',
    heroSubheadline:
      'Answer every inbound call day or night, qualify callers naturally against your criteria, book open calendar slots, and log full transcripts into GoHighLevel.',
    whoItsFor: [
      'Home service contractors and field crews who cannot answer calls safely while on job sites.',
      'Clinics, dental offices, and consulting firms dealing with morning hold queues or lunchtime coverage gaps.',
      'Real estate teams and hospitality venues capturing evening and weekend calls when competitors go to voicemail.',
      'Growing businesses investing in Google Ads or local SEO whose phone leads currently go unanswered.',
    ],
    problemTitle: 'The Cost of Sending High-Intent Callers to Voicemail',
    problemParagraphs: [
      'For local service companies, the phone remains the highest-intent booking channel. When a homeowner has an urgent repair, a patient needs an exam slot, or a buyer wants an estimate, they want a live conversation—not a voicemail beep promising a callback tomorrow.',
      'Most callers simply hang up on voicemail and dial the next business on Google Maps. Staffing human receptionists across evenings, weekends, and peak call spikes is expensive and hard to schedule, while generic call centers read rigid scripts that cannot check your real-time calendar or update your CRM accurately.',
      'Acendio deploys a custom-configured AI voice receptionist paired with instant missed-call text-back. Every caller is greeted naturally, qualified against your service boundaries, routed to live staff when an urgent rule triggers, or booked straight onto your calendar with immediate SMS confirmation.',
    ],
    deliverables: [
      {
        title: '24/7 Inbound AI Voice Answering',
        description:
          'Natural conversational voice agent trained on your FAQs, service boundaries, and hours—handling simultaneous calls with zero hold time.',
      },
      {
        title: 'Structured Caller Qualification',
        description:
          'Captures caller name, phone, service type, address or area, and urgency before offering available appointment times.',
      },
      {
        title: 'Live Calendar Scheduling',
        description:
          'Reads open windows from your connected GoHighLevel, Google, or Outlook calendar and books confirmed slots on the call.',
      },
      {
        title: 'Instant Missed-Call Text-Back',
        description:
          'If a caller hangs up early or prefers text, an automated two-way SMS thread starts within seconds to capture their request.',
      },
      {
        title: 'Warm Transfer & Escalation Rules',
        description:
          'Routes urgent or VIP calls directly to designated staff members with an immediate context alert.',
      },
      {
        title: 'CRM Logging & Full Transcripts',
        description:
          'Writes every call recording, transcript, intent summary, and pipeline stage straight into GoHighLevel.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Call Rules & Knowledge Intake',
        detail:
          'We document your common caller questions, service territories, disqualifiers, and emergency transfer triggers.',
      },
      {
        step: '02',
        title: 'Voice Script & Guardrail Build',
        detail:
          'We craft conversational prompts matched to your brand tone, local terminology, and natural pacing.',
      },
      {
        step: '03',
        title: 'Telephony & Calendar Wiring',
        detail:
          'We connect forwarding or tracking numbers, link your booking calendar, and enable missed-call text-back in GoHighLevel.',
      },
      {
        step: '04',
        title: 'Test Calls & Transcript Tuning',
        detail:
          'We run edge-case test calls before launch and review early live transcripts to sharpen booking accuracy.',
      },
    ],
    integrations: [
      'GoHighLevel CRM & Conversations',
      'Google & Outlook Calendar Sync',
      'A2P SMS Missed-Call Text-Back',
      'Live Call Transfer & Escalation',
      'Dispatch & Field Software Webhooks',
      'Call Audio & Transcript Archive',
    ],
    outcomes: [
      'Inbound phone calls stop rolling to unanswered voicemail during job hours, evenings, and weekends.',
      'Callers get helpful answers immediately and finish the call with a confirmed booking.',
      'Your office staff stops answering the same hours, location, and availability questions all day.',
      'Every phone call turns into searchable CRM records rather than hurried sticky notes.',
    ],
    faqs: [
      {
        question: 'How is an AI receptionist setup and ongoing service scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Can we run the AI receptionist only for after-hours and overflow?',
        answer:
          'Yes. We can configure ring-no-answer forwarding so your team answers first during office hours, with the AI stepping in immediately whenever lines are busy or unattended.',
      },
      {
        question: 'What happens if a caller asks something outside the knowledge base?',
        answer:
          'The agent is instructed never to guess policies. When a question falls outside defined boundaries or needs human judgment, it captures contact info and transfers or alerts your team immediately.',
      },
      {
        question: 'Does it work alongside missed-call text-back?',
        answer:
          'Yes. If a caller hangs up before speaking or chooses SMS booking, the missed-call text-back workflow engages them over text within seconds.',
      },
      {
        question: 'How does it prevent double-booking?',
        answer:
          'It reads real-time availability straight from your connected calendar and respects buffer times, business hours, and round-robin team assignments.',
      },
    ],
    relatedSlugs: [
      'crm-lead-follow-up-automation',
      'ai-chat-support',
      'website-development-maintenance',
    ],
    ctaHeadline: 'Hear How a 24/7 AI Receptionist Would Handle Your Inbound Calls',
    ctaSubheadline:
      'Schedule a short discovery call to review call routing, calendar rules, and a custom rollout plan.',
  },
  {
    slug: 'ads-management-creatives',
    numeral: '03',
    shortTitle: 'Ads Management & Creatives',
    diagramType: 'ads-funnel',
    bentoOutcome:
      'Meta and Google Ads campaigns paired with custom static and video creatives and clean tracking.',
    metaTitle: 'Google Ads & Meta Ads Management Agency | Acendio',
    metaDescription:
      'Full-funnel Google Ads and Meta Ads management, ad creative design, conversion tracking, and retargeting built to generate qualified bookings.',
    primaryKeyword: 'Google Ads and Meta Ads management agency',
    h1: 'Google Ads & Meta Ads Management With Purpose-Built Ad Creatives',
    heroSubheadline:
      'Capture active local search intent on Google and build steady demand on Meta—backed by custom creatives, server-side tracking, and direct CRM routing.',
    whoItsFor: [
      'Local and regional businesses ready to build predictable inbound consultation volume.',
      'Owners tired of agencies reporting clicks and impressions without tying spend to booked calls.',
      'Teams running stale ad graphics facing rising click costs and creative fatigue.',
      'Companies launching new service lines or expanding coverage into neighboring markets.',
    ],
    problemTitle: 'Why Ad Budgets Stall Without Creative Testing and Fast Follow-Up',
    problemParagraphs: [
      'Paid campaigns rarely fail from lack of audience reach. They underperform for three practical reasons: generic visuals that get scrolled past, broken conversion tracking that optimizes algorithms toward low-intent clicks, and slow follow-up when a prospect submits a form.',
      'Splitting media buying from creative design slows everything down. When ad buyers wait weeks for new graphics or video edits, fatigued campaigns burn budget too long. Worse, sending paid clicks to a slow generic homepage forces buyers to hunt for a booking button.',
      'Acendio handles campaign strategy, audience targeting, static and video ad creative production, tracking pixels, and landing page alignment as one connected loop—feeding every lead straight into GoHighLevel so decisions follow booked appointments.',
    ],
    deliverables: [
      {
        title: 'Google Search & Local Intent Campaigns',
        description:
          'Focused keyword groups, negative keyword hygiene, tight geo-targeting, and call/form extensions built around buyer intent.',
      },
      {
        title: 'Meta Prospecting & Retargeting',
        description:
          'Local awareness and lead generation paired with retargeting sequences that stay visible to recent visitors.',
      },
      {
        title: 'Static & Video Ad Creative Design',
        description:
          'Custom-designed static graphics, direct-response hooks, copy angles, and short-form video edits built for mobile feeds.',
      },
      {
        title: 'Conversion Tracking & CAPI Setup',
        description:
          'Clean setup of GA4, Google Tag Manager, Meta Pixel, Conversions API, and dynamic call tracking with UTM capture.',
      },
      {
        title: 'Structured A/B Creative Testing',
        description:
          'Steady testing of headlines, visual angles, offers, and landing pages to raise lead quality over time.',
      },
      {
        title: 'Pipeline-Linked Reporting',
        description:
          'Clear monthly reviews connecting ad spend and creative sets straight to CRM leads and booked appointments.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Offer, Market & Pixel Audit',
        detail:
          'We review historical ad account data, target customer margins, local competition, and tracking accuracy.',
      },
      {
        step: '02',
        title: 'Creative Suite & Landing Alignment',
        detail:
          'We produce initial static and video ad sets alongside dedicated landing pages and CRM webhook routing.',
      },
      {
        step: '03',
        title: 'Controlled Launch & QA',
        detail:
          'We launch segmented campaigns, confirm conversion signals fire cleanly, and verify instant SMS/email lead response.',
      },
      {
        step: '04',
        title: 'Weekly Tuning & Creative Refresh',
        detail:
          'We trim wasted search terms, rotate fatigued creatives, and shift budget toward campaigns producing booked slots.',
      },
    ],
    integrations: [
      'Google Ads & Search Console',
      'Meta Ads Manager & Conversions API',
      'Google Tag Manager & GA4',
      'GoHighLevel Pipeline Attribution',
      'Dynamic Call Tracking',
      'Dedicated Landing Pages',
    ],
    outcomes: [
      'Ad platforms optimize around verified lead and booking events instead of accidental clicks.',
      'Custom, brand-aligned ad creatives earn attention in crowded local social feeds.',
      'Paid leads flow directly into instant SMS, AI chat, or voice follow-up within seconds.',
      'You see which channels and creative angles produce real calendar appointments.',
    ],
    faqs: [
      {
        question: 'How is ads management and creative production scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Do we keep ownership of our Google Ads and Meta Ads accounts?',
        answer:
          'Yes. You retain complete administrative ownership of your ad accounts, pixels, audiences, and historical data at all times.',
      },
      {
        question: 'Do you design the ad creatives or do we supply them?',
        answer:
          'We design static ad layouts, write ad copy, and edit short-form video variations using any raw photos or clips you share, alongside custom visual production.',
      },
      {
        question: 'Should we run Google Ads, Meta Ads, or both?',
        answer:
          'During discovery we match channels to how people buy from you. Google Search captures active immediate need, while Meta creates demand and retargets local prospects.',
      },
      {
        question: 'How do ad leads reach our sales team quickly?',
        answer:
          'Every Meta Lead Form, Google extension, and landing page submits straight into GoHighLevel so leads receive immediate SMS confirmation and booking options.',
      },
    ],
    relatedSlugs: [
      'ugc-ads-video-post-creation',
      'website-development-maintenance',
      'crm-lead-follow-up-automation',
    ],
    ctaHeadline: 'Turn Paid Clicks Into Tracked Calendar Bookings',
    ctaSubheadline:
      'Book a strategy call to audit your current ad accounts, creative lineup, and post-click follow-up.',
  },
  {
    slug: 'review-management-automation',
    numeral: '04',
    shortTitle: 'Review Management & Automation',
    diagramType: 'review-routing',
    bentoOutcome:
      'Automated SMS/email review requests, sentiment routing, AI-assisted replies, and Google profile care.',
    metaTitle: 'Google Review Management & Automation | Acendio',
    metaDescription:
      'Automate Google review requests via SMS and email, route private feedback, publish AI-assisted replies, and strengthen local Map Pack trust.',
    primaryKeyword: 'Google review management software',
    h1: 'Review Management & Automation That Builds Steady Local Trust',
    heroSubheadline:
      'Trigger polite Google review invites automatically after completed jobs, capture dissatisfied feedback privately first, and keep every public review answered.',
    whoItsFor: [
      'Local businesses doing great work in real life whose Google Business Profile looks quiet or outdated.',
      'Teams with multiple technicians or providers where verbal review requests get forgotten on busy days.',
      'Clinics, hospitality venues, home contractors, and retail shops competing in the Google Map Pack.',
      'Owners who want thoughtful replies posted to every public review without writing them late at night.',
    ],
    problemTitle: 'Why Great Teams Lose Map Pack Clicks to Louder Competitors',
    problemParagraphs: [
      'When local buyers scan Google Maps, they compare rating scores, review recency, and how owners respond in seconds before ever visiting a website. A business that delivers outstanding work—yet only gathers a handful of reviews a year—routinely loses calls to rivals who systematized their outreach.',
      'Asking staff to remember to request reviews verbally never stays consistent once schedules get full. Meanwhile, when a rare frustrated client vents online without an easy private feedback path, an unanswered complaint sits at the top of your listing.',
      'Acendio wires an automated review engine straight into your completed-job or paid-invoice trigger. Satisfied customers get a simple one-tap link to Google, concerns route privately to management for quick resolution, and AI-assisted reply drafting keeps your profile active.',
    ],
    deliverables: [
      {
        title: 'Automated SMS & Email Invitations',
        description:
          'Dispatched automatically when an appointment finishes or an invoice clears while the positive experience is fresh.',
      },
      {
        title: 'Private Service-Recovery Routing',
        description:
          'Guides happy clients straight to your public Google link while capturing constructive feedback privately for quick team resolution.',
      },
      {
        title: 'AI-Assisted Review Replies',
        description:
          'Drafts tailored, polite owner responses referencing the reviewer’s notes for quick approval or scheduled posting.',
      },
      {
        title: 'Google Business Profile Hygiene',
        description:
          'Consistent categories, service listings, Q&A upkeep, and profile completeness supporting local discovery.',
      },
      {
        title: 'Unified Reputation View',
        description:
          'Track incoming ratings, response speed, and sentiment across one or multiple locations inside GoHighLevel.',
      },
      {
        title: 'Polite Reminder Cadence',
        description:
          'One gentle follow-up nudge for customers who clicked the invite but got interrupted before submitting.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Google Profile & Trigger Check',
        detail:
          'We verify Google Business Profile ownership, NAP consistency, and pick the cleanest CRM or invoicing completion trigger.',
      },
      {
        step: '02',
        title: 'Invite & Routing Configuration',
        detail:
          'We set up branded SMS/email templates, feedback routing paths, and internal escalation alerts in GoHighLevel.',
      },
      {
        step: '03',
        title: 'Reply Tone & Privacy Rules',
        detail:
          'We define response tone and privacy boundaries (including healthcare compliance rules) for AI-assisted replies.',
      },
      {
        step: '04',
        title: 'Ongoing Velocity & Monitoring',
        detail:
          'Review requests run reliably on every finished service while your dashboard tracks reply turnaround.',
      },
    ],
    integrations: [
      'Google Business Profile',
      'GoHighLevel Reputation Hub',
      'A2P Compliant SMS & Email',
      'POS & Invoicing Webhooks',
      'AI Reply Drafting',
      'Multi-Location Branch Tagging',
    ],
    outcomes: [
      'Fresh Google reviews arrive steadily week after week without reminding field or desk staff.',
      'Customer concerns reach management privately so your team can fix issues early.',
      'Public reviews get prompt, thoughtful replies that signal attentive service to new buyers.',
      'Stronger Google reputation lifts click-through and conversion across both organic search and paid ads.',
    ],
    faqs: [
      {
        question: 'How is automated review management scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Is this workflow compliant with Google review policies?',
        answer:
          'Yes. We never buy fake reviews or block unhappy customers from leaving public reviews. We automate polite invitations and offer an easy direct channel to share feedback with management.',
      },
      {
        question: 'Can we approve AI-drafted replies before they publish?',
        answer:
          'Yes. You can use an approval queue for one-click publishing, or allow automatic replies on standard positive reviews.',
      },
      {
        question: 'Can we invite past customers who were never asked?',
        answer:
          'Yes. We can run a paced outreach sequence across recent past clients in controlled batches so profile momentum builds naturally.',
      },
      {
        question: 'Does this support multi-location businesses?',
        answer:
          'Yes. Location tags route each customer to the exact Google Business Profile for the branch that served them.',
      },
    ],
    relatedSlugs: [
      'website-development-maintenance',
      'crm-lead-follow-up-automation',
      'ads-management-creatives',
    ],
    ctaHeadline: 'Turn Every Completed Job Into Steady Google Proof',
    ctaSubheadline:
      'Schedule a discovery call to connect automated SMS review invites and reply workflows to your CRM.',
  },
  {
    slug: 'crm-lead-follow-up-automation',
    numeral: '05',
    shortTitle: 'CRM & Lead Follow-Up Automation',
    diagramType: 'crm-pipeline',
    bentoOutcome:
      'GoHighLevel pipelines, instant lead response, multi-channel follow-up, and no-show reduction.',
    metaTitle: 'GoHighLevel CRM & Lead Follow-Up Automation | Acendio',
    metaDescription:
      'Eliminate slow responses with GoHighLevel CRM pipelines, instant speed-to-lead SMS/email sequences, lead reactivation, and appointment reminders.',
    primaryKeyword: 'GoHighLevel automation agency',
    h1: 'CRM & Lead Follow-Up Automation That Moves Inquiries to Confirmed Appointments',
    heroSubheadline:
      'Build clean GoHighLevel pipelines, sub-minute speed-to-lead, automated appointment reminders, and old-lead reactivation so prospects never cool off in your inbox.',
    whoItsFor: [
      'Businesses generating leads from web forms, Meta ads, or referrals with no structured pipeline tracking them.',
      'Sales teams losing momentum because inquiries wait hours for a first call or stop after one follow-up.',
      'Service operators dealing with preventable calendar no-shows and last-minute cancellations.',
      'Companies sitting on lists of unclosed quotes and older inquiries that were never re-engaged.',
    ],
    problemTitle: 'Why Buying More Traffic Fails When Follow-Up Is Manual',
    problemParagraphs: [
      'Many companies assume they need more top-of-funnel clicks, while their inbox already holds dozens of unreturned quotes and stalled inquiries. When a prospect submits a form while your team is in meetings or on the road, every hour of silence gives competitors time to answer first.',
      'Manual follow-up also breaks down after attempt one. Most buyers need several helpful touchpoints before booking, yet busy teams rarely follow up consistently across SMS and email. Even after an appointment lands on the calendar, missing reminder sequences invite unnecessary no-shows.',
      'As a specialized GoHighLevel automation agency, Acendio builds clear CRM pipelines and conversational follow-up sequences tailored to your sales rhythm—acknowledging new inquiries immediately, alerting your team, sending calm reminders, and pausing automation the second a buyer replies.',
    ],
    deliverables: [
      {
        title: 'GoHighLevel Pipeline Architecture',
        description:
          'Stage-by-stage deal tracking from New Lead through Discovery Booked, Proposal Sent, and Won—replacing scattered spreadsheets.',
      },
      {
        title: 'Instant Speed-to-Lead Workflows',
        description:
          'Sub-minute SMS, email, and team notifications triggered on every form fill, ad lead, or missed call.',
      },
      {
        title: 'Conversational Multi-Day Nurture',
        description:
          'Respectful plain-text follow-up across SMS and email that halts automatically the moment a prospect replies or books.',
      },
      {
        title: 'No-Show Reduction Reminders',
        description:
          'Instant calendar invites plus 24-hour and 2-hour SMS confirmations with friction-free reschedule links.',
      },
      {
        title: 'Old-Lead & Quote Reactivation',
        description:
          'Controlled SMS/email check-ins that turn older quotes and dormant inquiries back into live conversations.',
      },
      {
        title: 'Unified Conversations Inbox',
        description:
          'Brings SMS, email, web chat, Facebook, Instagram, and Google messages into one chronological timeline.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Lead Flow & Stage Mapping',
        detail:
          'We map how inquiries enter your business today and spot where leads stall between inquiry and booking.',
      },
      {
        step: '02',
        title: 'CRM & A2P Messaging Setup',
        detail:
          'We configure pipelines, custom fields, tags, verified email domains (DKIM/SPF), and A2P SMS compliance in GoHighLevel.',
      },
      {
        step: '03',
        title: 'Workflow Build & Stop Rules',
        detail:
          'We assemble speed-to-lead, nurture, reminder, and reactivation workflows with strict stop-on-reply triggers.',
      },
      {
        step: '04',
        title: 'Team Walkthrough & Tuning',
        detail:
          'We train your staff on daily pipeline habits and adjust message timing from real reply data.',
      },
    ],
    integrations: [
      'GoHighLevel Pipelines & Workflows',
      'Website Webhooks & Meta Lead Forms',
      'AI Voice & Chat Escalations',
      'Google & Outlook Two-Way Calendar',
      'A2P 10DLC SMS & Verified Email',
      'Zapier / Make / Custom REST APIs',
    ],
    outcomes: [
      'Every new prospect receives a helpful reply within seconds—day, evening, or weekend.',
      'Your sales team works from one clear pipeline with automatic follow-up tasks.',
      'Confirmed appointments show up reliably thanks to timely SMS and calendar reminders.',
      'Older unclosed quotes get re-engaged systematically without manual cold dialing.',
    ],
    faqs: [
      {
        question: 'How do you scope CRM and lead follow-up automation?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Will automated SMS messages sound robotic to our clients?',
        answer:
          'No. We write concise, plain-text messages in your company’s natural voice and pause automation the moment a prospect replies so your team or trained AI steps in.',
      },
      {
        question: 'Can you connect our existing industry software to GoHighLevel?',
        answer:
          'Yes. We bridge external quoting, scheduling, property, or dispatch tools using webhooks or custom API integrations.',
      },
      {
        question: 'How is SMS and email outreach kept compliant?',
        answer:
          'We configure explicit consent checkboxes on forms, A2P messaging registration, authenticated email domains, and automatic STOP/unsubscribe handling.',
      },
      {
        question: 'Can we start by reactivating our existing database?',
        answer:
          'Yes. Cleaning and running a paced check-in campaign on dormant quotes is often one of the quickest ways to test pipeline automation.',
      },
    ],
    relatedSlugs: [
      'ai-receptionist',
      'ads-management-creatives',
      'custom-software-ai-automation',
    ],
    ctaHeadline: 'Stop Letting Warm Inquiries Cool Down in an Unmonitored Inbox',
    ctaSubheadline:
      'Book a discovery call to map your GoHighLevel pipeline, speed-to-lead rules, and reminder sequence.',
  },
  {
    slug: 'ai-chat-support',
    numeral: '06',
    shortTitle: 'AI Chat & Support',
    diagramType: 'chat-graph',
    bentoOutcome:
      'Website and social chat agents trained on your FAQs for instant lead capture and human handoff.',
    metaTitle: 'AI Chat & Customer Support Agents | Acendio',
    metaDescription:
      'Convert website visitors and social DMs 24/7 with AI chat support agents trained on your verified business FAQs, lead capture, and human handoff.',
    primaryKeyword: 'AI chat support for business',
    h1: 'AI Chat & Support Agents Trained on Your FAQs for 24/7 Lead Capture',
    heroSubheadline:
      'Answer visitor questions across website chat, Instagram DMs, Facebook Messenger, and SMS instantaneously—capturing contact details and booking discovery calls.',
    whoItsFor: [
      'Businesses whose visitors have specific scope or scheduling questions before picking up the phone.',
      'Clinics, showrooms, and hospitality venues fielding repetitive inquiries across web chat and social DMs.',
      'Teams wanting responsive evening and weekend chat coverage without extra shift staffing.',
      'Companies running social ads where buyers comment or message directly on Instagram and Facebook.',
    ],
    problemTitle: 'Why Static Chat Boxes and Unanswered DMs Lose Ready Visitors',
    problemParagraphs: [
      'Most website chat widgets either tell visitors to leave an email and wait, or trap them inside rigid button menus that cannot answer real questions. When someone simply wants to confirm hours, coverage area, or process steps, friction sends them elsewhere.',
      'Meanwhile, questions arrive across scattered social inboxes—Instagram DMs, Facebook Messenger, Google messages, and SMS. Without fast, unified coverage, messages sit unread overnight while intent fades.',
      'Acendio trains conversational AI chat agents strictly on your approved FAQs, service guides, and calendar rules. Visitors get clear answers in seconds, transition smoothly into booking a consultation, or escalate straight to a team member inside your unified GoHighLevel inbox.',
    ],
    deliverables: [
      {
        title: 'Verified Knowledge-Base Grounding',
        description:
          'Trained exclusively on your approved website copy, service policies, and FAQ docs with strict anti-guessing guardrails.',
      },
      {
        title: 'Multi-Channel Inbox Coverage',
        description:
          'Consistent replies across website chat, SMS, Instagram DM, and Facebook Messenger from one GoHighLevel dashboard.',
      },
      {
        title: 'Conversational Lead Capture',
        description:
          'Collects visitor name, email, phone, and project details naturally inside the dialogue.',
      },
      {
        title: 'Direct Calendar Scheduling',
        description:
          'Shares live booking slots right in chat so qualified visitors schedule without hunting for another page.',
      },
      {
        title: 'Instant Human Handoff',
        description:
          'Flags sensitive questions, custom requests, or explicit requests for a person and alerts staff immediately.',
      },
      {
        title: 'Performance-Safe Deferred Loading',
        description:
          'Website chat scripts load asynchronously after initial interaction or idle so page speed stays fast.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'FAQ & Policy Review',
        detail:
          'We gather your verified service descriptions, hours, service areas, and preferred brand tone.',
      },
      {
        step: '02',
        title: 'Agent Prompting & Guardrails',
        detail:
          'We configure strict knowledge boundaries, qualification prompts, and custom-proposal routing.',
      },
      {
        step: '03',
        title: 'Channel & CRM Wiring',
        detail:
          'We connect web chat, Instagram/Facebook messaging, calendar links, and pipeline triggers.',
      },
      {
        step: '04',
        title: 'Transcript Review & Tuning',
        detail:
          'We monitor initial chat transcripts to fill FAQ gaps and improve booking completion.',
      },
    ],
    integrations: [
      'Website Chat Widget (Deferred Load)',
      'Instagram DM & Facebook Messenger',
      'Two-Way SMS',
      'GoHighLevel Unified Inbox',
      'Calendar Booking Links',
      'Approved Knowledge Documents',
    ],
    outcomes: [
      'Website visitors and social followers receive accurate answers in seconds, 24/7.',
      'Casual browsers convert into tagged CRM contacts with captured intent notes.',
      'Staff enter conversations pre-qualified instead of answering basic logistics repeatedly.',
      'Core Web Vitals remain fast because widget scripts load outside the critical path.',
    ],
    faqs: [
      {
        question: 'How is an AI chat and support setup scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Can the AI chat agent make up answers or quote unauthorized promises?',
        answer:
          'No. We enforce strict knowledge boundaries so it relies only on approved facts and routes custom scoping requests to a discovery call.',
      },
      {
        question: 'Will a chat widget slow down our website?',
        answer:
          'No. We defer chat widget loading until first user interaction or browser idle so initial rendering stays crisp.',
      },
      {
        question: 'Can our staff jump into an active chat anytime?',
        answer:
          'Yes. Every thread streams live in your GoHighLevel inbox—any team member can reply manually at any moment, automatically pausing the bot.',
      },
      {
        question: 'Does it cover Instagram and Facebook messages too?',
        answer:
          'Yes. Once linked, the same trained agent handles social DMs alongside website chat and SMS.',
      },
    ],
    relatedSlugs: [
      'social-media-management',
      'ai-receptionist',
      'crm-lead-follow-up-automation',
    ],
    ctaHeadline: 'Turn Website & Social Chat Questions Into Booked Consultations',
    ctaSubheadline:
      'Book a strategy call to review your FAQ knowledge base and multi-channel chat workflow.',
  },
  {
    slug: 'custom-software-ai-automation',
    numeral: '07',
    shortTitle: 'Custom Software & AI Automation',
    diagramType: 'custom-middleware',
    bentoOutcome:
      'Bespoke internal dashboards, reliable API bridges, and structured AI workflows built around your team.',
    metaTitle: 'Custom Software & AI Automation Agency | Acendio',
    metaDescription:
      'Build bespoke internal tools, client portals, API integrations, and reliable LLM workflows tailored to how your business actually works.',
    primaryKeyword: 'custom AI automation and software development',
    h1: 'Custom Software, API Integrations & AI Workflows Built Around Your Team',
    heroSubheadline:
      'When off-the-shelf SaaS falls short, Acendio builds custom internal tools, resilient API bridges, and schema-validated AI workflows that remove manual work.',
    whoItsFor: [
      'Growing teams stitching together spreadsheets, legacy software, and manual copy-pasting across tools.',
      'Businesses needing custom intake tools, client portals, or internal reporting views that generic software lacks.',
      'Operators wanting reliable document parsing, call-note extraction, or structured triage powered by LLMs.',
      'Organizations using GoHighLevel alongside ERP, quoting, or scheduling software that need custom API sync.',
    ],
    problemTitle: 'Where Off-the-Shelf Software Stops and Manual Workarounds Begin',
    problemParagraphs: [
      'Standard SaaS covers common routines well, but mature teams develop specific workflows that generic platforms ignore. Staff wind up maintaining brittle spreadsheets, re-typing customer details between quoting, CRM, and billing apps, or spending hours compiling weekly reports manually.',
      'Unstructured AI experiments fail in production for the opposite reason: they lack schema validation, error handling, retry queues, or human review checkpoints. Automation only creates leverage when it runs predictably and fails safely.',
      'Acendio builds pragmatic custom software and AI automation using TypeScript, clean REST APIs, and observable queues. Whether you need an internal portal, a two-way API bridge, or a structured AI intake workflow, we ship tools built for real daily use.',
    ],
    deliverables: [
      {
        title: 'Internal Tools & Custom Dashboards',
        description:
          'Focused web apps tailored to your team roles, intake steps, reporting views, and approval queues.',
      },
      {
        title: 'Two-Way API Bridges & Middleware',
        description:
          'Error-handled synchronization between GoHighLevel, accounting apps, dispatch software, and proprietary databases.',
      },
      {
        title: 'Schema-Validated LLM Workflows',
        description:
          'Automated intake classification, document extraction, call-note structuring, and draft preparation with strict output checks.',
      },
      {
        title: 'Resilient Webhook Processing',
        description:
          'Idempotent event handling, retry logic, and failure alerts so customer records are never dropped quietly.',
      },
      {
        title: 'Interactive Portals & Intake Tools',
        description:
          'Custom web tools that capture structured project requirements and feed directly into your CRM pipeline.',
      },
      {
        title: 'Documentation & Ongoing Support',
        description:
          'Clear technical documentation, clean version control, and maintenance as connected third-party APIs evolve.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Workflow & API Discovery',
        detail:
          'We trace your manual bottlenecks, inspect existing APIs and data schemas, and define exact automation boundaries.',
      },
      {
        step: '02',
        title: 'Architecture & Wireframes',
        detail:
          'We specify data flows, error recovery, security checks, and interface layouts before writing production code.',
      },
      {
        step: '03',
        title: 'Iterative Build & Staging QA',
        detail:
          'We ship modular TypeScript services and UIs, testing real payloads, rate limits, and edge cases in staging.',
      },
      {
        step: '04',
        title: 'Rollout & Ongoing Stewardship',
        detail:
          'We deploy with logging, walk your team through daily usage, and maintain integrations long-term.',
      },
    ],
    integrations: [
      'REST & GraphQL APIs',
      'GoHighLevel API & Webhooks',
      'TypeScript / React / Node',
      'Structured LLM Pipelines',
      'Cloud Databases & Queues',
      'ERP, Scheduling & Billing Tools',
    ],
    outcomes: [
      'Staff stop spending hours re-typing data between disconnected software tools.',
      'Custom workflows match how your business works instead of forcing rigid templates.',
      'AI steps output clean, validated JSON with human approval on high-stakes actions.',
      'Internal portals and integrations scale cleanly alongside rising customer volume.',
    ],
    faqs: [
      {
        question: 'How does Acendio scope custom software and AI automation?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Do we need custom code or can GoHighLevel workflows handle it?',
        answer:
          'We always recommend the simplest reliable tool. If native GoHighLevel workflows cover 100% of the job, we build there. We reserve custom software for gaps where reliability, UX, or API logic demands it.',
      },
      {
        question: 'How do you keep AI automation errors away from live customers?',
        answer:
          'We enforce strict output schemas, deterministic fallbacks, and human review queues on high-stakes steps instead of letting unguarded prompts act autonomously.',
      },
      {
        question: 'Will our team receive documentation and ongoing maintenance?',
        answer:
          'Yes. Every custom build includes clear documentation and an optional maintenance plan covering API updates, monitoring, and feature additions.',
      },
    ],
    relatedSlugs: [
      'crm-lead-follow-up-automation',
      'ai-receptionist',
      'website-development-maintenance',
    ],
    ctaHeadline: 'Eliminate Manual Copy-Pasting With Tailored Software & AI Workflows',
    ctaSubheadline:
      'Schedule a discovery call to inspect your current stack and scope a clean, reliable integration.',
  },
  {
    slug: 'social-media-management',
    numeral: '08',
    shortTitle: 'Social Media Management',
    diagramType: 'social-calendar',
    bentoOutcome:
      'Monthly content calendars, post & carousel design, short-form Reels, scheduling, and community management.',
    metaTitle: 'Social Media Management Agency | Acendio',
    metaDescription:
      'Consistent brand positioning, monthly content calendars, carousels, short-form Reels, scheduling, engagement, and performance reporting tailored to your target channels.',
    primaryKeyword: 'professional social media management agency',
    h1: 'Social Media Management Built for Consistent Brand Authority & Inbound Demand',
    heroSubheadline:
      'Turn quiet or sporadic social profiles into an active credibility channel—backed by audience research, monthly content calendars, custom design, scheduling, and clear reporting.',
    whoItsFor: [
      'Local and regional businesses whose social profiles look inactive when prospects check them after seeing an ad or Google listing.',
      'Owners and internal marketers tired of scrambling each week to write captions, design graphics, and decide what to post.',
      'Teams wanting unified visual standards and messaging consistency across their website, paid ads, and organic social channels.',
      'Service providers looking to connect social comments and direct messages cleanly into GoHighLevel lead pipelines.',
    ],
    problemTitle: 'Why Sporadic Posting Weakens Buyer Confidence Before They Reach Out',
    problemParagraphs: [
      'Before local buyers book a consultation or request a quote, they routinely verify a business across multiple tabs: your website, your Google Business Profile, and your active social feeds. When an Instagram or LinkedIn page shows nothing posted for months—or relies on rushed, off-brand graphics—prospects quietly question how active and dependable the operation is.',
      'At the same time, handing social media to an already overloaded office coordinator or posting random updates whenever time allows rarely moves the needle. Without structured audience research, clear content pillars, and deliberate calls to action, feeds accumulate filler quotes while failing to generate meaningful inquiries or build brand recognition.',
      'Acendio runs social media management as a disciplined monthly system. We research your local competitors and buyer questions, build an editorial calendar ahead of each month for simple sign-off, produce custom posts, carousels, and short-form video edits, schedule consistently, monitor community replies, and report real performance signals cleanly.',
    ],
    deliverables: [
      {
        title: 'Audience Research & Competitive Positioning',
        description:
          'Channel audit, competitor benchmarking, messaging pillars, and profile optimization aligned with your core offers.',
      },
      {
        title: 'Monthly Content Calendars & Approval Workflow',
        description:
          'Batch-planned monthly publishing schedules organized around clear themes—delivered ahead of time for quick sign-off.',
      },
      {
        title: 'Custom Post Design & Multi-Slide Carousels',
        description:
          'Branded static posts, educational carousels, service breakdowns, and visual templates built for mobile readability.',
      },
      {
        title: 'Reels & Short-Form Vertical Video Edits',
        description:
          'Paced short-form vertical videos edited from client-supplied clips, walk-throughs, and footage with clean subtitles.',
      },
      {
        title: 'Copywriting, Hashtag & Keyword Research',
        description:
          'Direct, human captions structured for social search discovery, clear value framing, and natural next-step CTAs.',
      },
      {
        title: 'Account Scheduling, Community Care & Reporting',
        description:
          'Consistent publishing, comment and DM engagement escalation into GoHighLevel, plus monthly analytics reviews.',
      },
    ],
    platforms: [
      {
        name: 'Instagram',
        role: 'Visual trust, multi-slide educational carousels, Reels reach, and DM lead capture.',
        bestFor: 'Home services, clinics, hospitality, real estate, and specialty retail.',
      },
      {
        name: 'Facebook',
        role: 'Local community visibility, neighborhood shareability, and retargeting reinforcement.',
        bestFor: 'Local service operators, multi-location venues, and regional consumer brands.',
      },
      {
        name: 'LinkedIn',
        role: 'Executive authority, B2B credibility, company updates, and partnership trust.',
        bestFor: 'B2B services, commercial contractors, real estate brokerages, and advisory teams.',
      },
      {
        name: 'TikTok & YouTube Shorts',
        role: 'Short-form discovery through practical demonstrations, FAQs, and process walkthroughs.',
        bestFor: 'Brands ready to supply behind-the-scenes clips for high-frequency vertical distribution.',
      },
    ],
    platformScopeNote:
      'Channel selection is scoped to where your actual buyers spend time—not every platform is bundled automatically into every engagement. We focus effort on the right channels rather than diluting content thinly.',
    howItWorks: [
      {
        step: '01',
        title: 'Brand, Audience & Competitor Audit',
        detail:
          'We review existing profiles, define visual and voice standards, audit local competitors, and select target channels.',
      },
      {
        step: '02',
        title: 'Content Pillars & Monthly Calendar',
        detail:
          'We map educational, proof-based, and promotional themes into an organized monthly publishing plan for review.',
      },
      {
        step: '03',
        title: 'Design, Copywriting & Scheduling',
        detail:
          'We produce posts, carousels, short-form video edits, and keyword-informed captions—then schedule across agreed platforms.',
      },
      {
        step: '04',
        title: 'Engagement & Monthly Review',
        detail:
          'We monitor comments and DMs, route qualified inquiries to your CRM, and adjust next month’s topics from live performance.',
      },
    ],
    integrations: [
      'Instagram & Facebook Pages',
      'LinkedIn Company Profiles',
      'TikTok & YouTube Channels',
      'GoHighLevel Social Planner & Unified Inbox',
      'AI Chat DM Escalation',
      'Monthly Analytics Reporting',
    ],
    outcomes: [
      'Your brand stays visibly active and recognizable across key channels every single week.',
      'Prospects validating your business after seeing Google or Meta ads find cohesive, authoritative profiles.',
      'Owners and internal staff step out of daily design, caption writing, and manual scheduling.',
      'Social comments and direct messages connect directly into tracked CRM follow-up instead of sitting unread.',
    ],
    faqs: [
      {
        question: 'How is Social Media Management scoped and priced?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Are Instagram, Facebook, LinkedIn, TikTok, and YouTube all included automatically?',
        answer:
          'No. We scope the specific platforms where your target customers are genuinely active—whether that means one primary channel or a multi-platform calendar—so quality never drops across unused feeds.',
      },
      {
        question: 'Do we review and approve posts before they go live?',
        answer:
          'Yes. Each month’s content calendar, graphics, captions, and video edits are shared in advance for review and sign-off before scheduled publishing.',
      },
      {
        question: 'How do you source photos or video clips for our posts and Reels?',
        answer:
          'We combine branded graphic design, carousel templates, and short-form video editing built around photos, job-site clips, or walkthroughs shared by your team via a simple upload folder.',
      },
      {
        question: 'Can social DMs and comments feed into our CRM?',
        answer:
          'Yes. Connected Instagram and Facebook messaging flows straight into your GoHighLevel unified inbox alongside AI chat and SMS follow-up.',
      },
    ],
    relatedSlugs: [
      'ugc-ads-video-post-creation',
      'ads-management-creatives',
      'ai-chat-support',
    ],
    ctaHeadline: 'Build a Steady, Credible Social Presence Without Daily Guesswork',
    ctaSubheadline:
      'Book a strategy call to align target platforms, monthly content cadence, and CRM lead routing.',
  },
  {
    slug: 'ugc-ads-video-post-creation',
    numeral: '09',
    shortTitle: 'UGC Ads / Video / Post Creation',
    diagramType: 'ugc-studio',
    bentoOutcome:
      'UGC-style video ads, product showcases, short-form Reels/TikToks/Shorts, and modular ad variations.',
    metaTitle: 'UGC-Style Ads, Video & Social Post Creation | Acendio',
    metaDescription:
      'Conversion-focused UGC-style video ads, product demos, short-form vertical videos, static and carousel creatives, hooks, scripts, and motion editing.',
    primaryKeyword: 'UGC style video ads and creative production agency',
    h1: 'UGC-Style Ads, Short-Form Video & Conversion Post Creation Built to Stop the Scroll',
    heroSubheadline:
      'Equip your paid campaigns and organic channels with native-feeling UGC-style video ads, product demonstrations, modular hook variations, and crisp static and carousel creatives.',
    whoItsFor: [
      'Advertisers experiencing creative fatigue and rising acquisition costs from running the same static graphics for months.',
      'Brands that capture raw product clips, job-site demos, or founder walkthroughs but lack scripts, pacing, captions, and ad variations.',
      'Marketing teams needing consistent 9:16 vertical videos across Meta Reels, TikTok, and YouTube Shorts alongside 4:5 feed ads.',
      'Companies launching new offers or seasonal promotions that require multiple messaging angles to split-test cleanly.',
    ],
    problemTitle: 'Why Polished Corporate Ads Get Ignored in Modern Social Feeds',
    problemParagraphs: [
      'Social and video feeds move in milliseconds. Heavily staged corporate banners and stiff studio commercials immediately register as interruptions, prompting buyers to swipe right past before hearing a single product benefit.',
      'Native, UGC-style creative solves the attention problem by matching how people naturally watch content on phones: crisp three-second visual hooks, relatable problem-solution pacing, clear product demonstrations, tight editing, and easy-to-read captions. Yet producing consistent creative variations—different hooks, body angles, ratios, and static complements—takes structured scripting and editing discipline.',
      'Acendio handles end-to-end creative concepting, scripting, editing, motion graphics, and platform formatting so your media buyer or organic calendar receives batches of testable video and post assets ready for immediate deployment.',
    ],
    deliverables: [
      {
        title: 'UGC-Style Video Ads & Problem–Solution Concepts',
        description:
          'Native-paced vertical ad edits pairing sharp problem framing, clear product/service proof, and direct-response calls to action.',
      },
      {
        title: 'Product Demos, Showcases & Unboxing-Style Edits',
        description:
          'Close-up product highlights, feature walk-throughs, before/after comparisons, and packaging reveals built from supplied clips.',
      },
      {
        title: 'Reels, TikTok & YouTube Shorts Production',
        description:
          'Platform-native vertical edits formatted cleanly around safe zones with retention-focused pacing and rhythm.',
      },
      {
        title: 'Hooks, Scripts & Storyboard Frameworks',
        description:
          'Modular opening 3-second hooks, voiceover/on-camera scripts, and scene checklists so your team knows exactly what raw clips to capture.',
      },
      {
        title: 'Static Social Ads, Promotional Posts & Carousels',
        description:
          'High-clarity graphic ads, comparison frames, and multi-card carousels built to reinforce video campaigns across Meta and feeds.',
      },
      {
        title: 'Editing, Subtitles, Motion Graphics & Ad Variations',
        description:
          'Burned-in dynamic captions, clean callouts, sound cleanup, and modular hook/CTA swaps delivered in 9:16, 4:5, and 1:1 exports.',
      },
    ],
    creativeFormats: [
      {
        category: 'Short-Form Video Ads & Reels',
        ratioSpec: '9:16 Vertical · Safe-Zone Checked',
        formats: [
          'UGC-style direct-response video ads',
          'Problem–solution & myth-busting videos',
          'Instagram Reels, TikTok & YouTube Shorts',
          '3-second modular hook variations for testing',
        ],
      },
      {
        category: 'Product & Brand Storytelling',
        ratioSpec: '9:16 & 4:5 · Meta / Organic / Landing Pages',
        formats: [
          'Product demonstration & showcase videos',
          'Unboxing-style & tactile detail edits',
          'Brand storytelling & founder walkthroughs',
          'Testimonial-style concepts (real client clips or narrated proof only)',
        ],
      },
      {
        category: 'Static & Carousel Ad Systems',
        ratioSpec: '4:5 Feed & 1:1 Square',
        formats: [
          'Static direct-response social ads',
          'Multi-card carousel ads & feature grids',
          'Promotional campaign posts & offer callouts',
          'Headline & primary-text A/B copy variations',
        ],
      },
    ],
    productionClarification: {
      title: 'Production Clarity: UGC-Style Creative vs. Third-Party Creators',
      body: 'This service covers professional scripting, creative direction, video editing, motion graphics, and UGC-style visual production built around your supplied product footage, team clips, screen recordings, and real verified customer material. External influencers, hired actors, or paid third-party creators are not included unless explicitly arranged and scoped separately—and we never fabricate customer testimonials or fake endorsements.',
    },
    howItWorks: [
      {
        step: '01',
        title: 'Offer Brief & Angle Mapping',
        detail:
          'We clarify buyer objections, target channels, product differentiators, and existing raw footage available.',
      },
      {
        step: '02',
        title: 'Hooks, Scripts & Capture List',
        detail:
          'We write multiple opening hooks, modular scripts, and a concise shot list if new mobile clips are needed from your team.',
      },
      {
        step: '03',
        title: 'Editing, Design & Motion Polish',
        detail:
          'We assemble video edits, subtitles, sound, static ads, and carousels—optimizing safe zones and aspect ratios per platform.',
      },
      {
        step: '04',
        title: 'Variation Packaging & Refresh Cycle',
        detail:
          'We deliver labeled ad sets (Hook A/B/C × Format) ready for Meta/TikTok testing and iterate from live creative signals.',
      },
    ],
    integrations: [
      'Meta Ads Manager (Reels / Stories / Feed)',
      'TikTok Ads & Organic Feeds',
      'YouTube Shorts & Google Video',
      'Instagram & Facebook Organic Content',
      'Dedicated Landing Page Embeds',
      'Modular Testing Naming Conventions',
    ],
    outcomes: [
      'Your ads capture attention quickly instead of blending into stale corporate templates.',
      'Media buyers get modular hook and visual variations ready to test new messaging angles systematically.',
      'Prospects understand your product or service value within seconds through clear visual storytelling.',
      'Creative assets pull double duty across paid acquisition campaigns and organic social feeds.',
    ],
    faqs: [
      {
        question: 'How is UGC Ads, Video & Post Creation scoped?',
        answer:
          'Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'What is the difference between UGC-style creative production and hiring external creators?',
        answer:
          'UGC-style production focuses on authentic, mobile-native scripting, editing, pacing, captions, and creative formats designed to perform in social feeds—using footage from your product, team, or genuine customer clips. External creator sourcing or paid actors are only included if explicitly scoped.',
      },
      {
        question: 'Can we use real customer clips in testimonial-style video concepts?',
        answer:
          'Yes—when you supply genuine, permissioned customer videos or written reviews, we shape them into crisp, compliant proof creatives. We never invent fake reviews or unverified claims.',
      },
      {
        question: 'What dimensions and formats do we receive?',
        answer:
          'Exports are tailored to your deployment channels—typically 9:16 vertical for Reels, TikTok, and Shorts alongside 4:5 or 1:1 cuts for social feeds and carousel placements.',
      },
      {
        question: 'Does this pair directly with Acendio Ads Management & Social Media Management?',
        answer:
          'Yes. Creative batches plug straight into our Meta/Google Ads testing loops and monthly Social Media Management calendars so messaging stays unified.',
      },
    ],
    relatedSlugs: [
      'ads-management-creatives',
      'social-media-management',
      'website-development-maintenance',
    ],
    ctaHeadline: 'Upgrade Your Paid & Organic Creative Lineup With Testable Formats',
    ctaSubheadline:
      'Book a discovery call to review your current ad creatives, available assets, and priority video/post deliverables.',
  },
];

export const MORE_SOLUTIONS_ITEM = {
  numeral: '10',
  title: 'Custom Scope & Multi-System Rollouts',
  outcome:
    'Combine web, voice, ads, social, creative production, and CRM automation—or bring us a specific bottleneck to scope.',
  ctaLabel: 'Request Custom Scope',
  to: '/contact',
};

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
