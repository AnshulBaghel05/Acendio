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

export interface ServicePageData {
  slug: string;
  shortTitle: string;
  iconName:
    | 'Globe'
    | 'PhoneCall'
    | 'Megaphone'
    | 'Star'
    | 'Workflow'
    | 'MessageSquare'
    | 'Cpu';
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
  faqs: FaqItem[];
  relatedSlugs: string[];
}

export const SERVICES_CONTENT: ServicePageData[] = [
  {
    slug: 'website-development-maintenance',
    shortTitle: 'Website Development & Maintenance',
    iconName: 'Globe',
    bentoOutcome:
      'Conversion-engineered, mobile-first websites with ongoing security, backups, and uptime care.',
    metaTitle: 'Website Development & Maintenance Agency | Acendio',
    metaDescription:
      'Conversion-focused website development, deployment, technical SEO, and ongoing maintenance for growing businesses across [TARGET REGIONS].',
    primaryKeyword: 'website development and maintenance',
    h1: 'Website Development, Deployment & Ongoing Maintenance Built for Conversion',
    heroSubheadline:
      'Fast, mobile-first websites engineered to rank in local search, capture inbound leads cleanly, and stay secure under active technical stewardship.',
    whoItsFor: [
      'Service businesses in [LOCATION] whose outdated websites lose mobile visitors before the page finishes loading.',
      'Growing teams running paid ads to slow, generic templates that lack clear calls to action or CRM attribution.',
      'Owners who do not want to manage hosting renewals, plugin conflicts, SSL certificates, or urgent content updates internally.',
      'Multi-service companies needing structured landing pages for distinct verticals and geographic territories across [TARGET REGIONS].',
    ],
    problemTitle: 'Why Most Business Websites Leak Paid and Organic Traffic',
    problemParagraphs: [
      'A business website is rarely just an online brochure—it is the primary conversion bottleneck for every marketing dollar you spend. When prospects click a Google search result or a Meta ad on a mobile phone, slow asset loading, cluttered navigation, and buried contact options push them straight back to search results to choose a competitor.',
      'Equally damaging is post-launch neglect. Many agencies hand over a site once and disappear, leaving business owners with unpatched security vulnerabilities, broken contact forms, missing backups, and stale service pages that gradually lose search visibility. Without reliable tracking and clean CRM integration, even the visitors who do convert are difficult to attribute back to the campaigns that brought them in.',
      'Acendio treats website development and maintenance as continuous revenue infrastructure. We design clean, accessible interfaces built on semantic HTML5, wire every form and click-to-call button directly into your GoHighLevel pipeline with full UTM preservation, and maintain uptime, backups, and Core Web Vitals month after month.',
    ],
    deliverables: [
      {
        title: 'Conversion-Focused UX & Copywriting',
        description:
          'Clear value propositions above the fold, logical page hierarchy, trust framing, and friction-free booking and inquiry forms.',
      },
      {
        title: 'Mobile-First Responsive Engineering',
        description:
          'Layouts engineered for 360px mobile viewports upward with legible typography, thumb-friendly tap targets, and zero horizontal overflow.',
      },
      {
        title: 'Technical SEO & Schema Foundation',
        description:
          'Semantic headings, unique metadata per route, XML sitemaps, clean canonical URLs, and LocalBusiness and Service JSON-LD structured data.',
      },
      {
        title: 'CRM, Calendar & Attribution Wiring',
        description:
          'Direct integration with GoHighLevel forms, calendars, tracking pixels, and session-level UTM capture so every lead enters the right pipeline.',
      },
      {
        title: 'Managed Hosting, Backups & Security Updates',
        description:
          'Automated daily backups, SSL enforcement, dependency patching, firewall hardening, and proactive uptime monitoring.',
      },
      {
        title: 'Ongoing Content Edits & Performance Tuning',
        description:
          'Prompt turnaround for new service pages, seasonal offers, team updates, and continuous Core Web Vitals optimization.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Conversion & Technical Audit',
        detail:
          'We inspect your existing domain equity, speed bottlenecks, analytics setup, and competitor search positioning in [LOCATION].',
      },
      {
        step: '02',
        title: 'Information Architecture & Wireframing',
        detail:
          'We map every service page, local landing page, and conversion path around how real buyers evaluate and book your business.',
      },
      {
        step: '03',
        title: 'Production Build & QA',
        detail:
          'We write clean, accessible code, configure schema and metadata, connect GHL webhooks and calendars, and verify mobile and desktop performance.',
      },
      {
        step: '04',
        title: 'Zero-Downtime Launch & Ongoing Care',
        detail:
          'We manage DNS cutover, submit sitemaps to Google Search Console, and transition into continuous maintenance, monitoring, and iteration.',
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
      'Visitors immediately understand what you do, where you operate across [TARGET REGIONS], and how to book a call.',
      'Mobile prospects experience fast, predictable page loads without layout shifts or broken form submissions.',
      'Your marketing campaigns land on dedicated, message-matched pages connected cleanly to CRM attribution.',
      'You gain peace of mind knowing backups, security patches, uptime monitoring, and routine site edits are handled proactively.',
    ],
    faqs: [
      {
        question: 'How is website development and ongoing maintenance scoped?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Will we keep full ownership of our domain and website?',
        answer:
          'Yes. Your business retains complete ownership of your domain registrar account, brand copy, and core web assets. We manage deployment and maintenance transparently on your behalf.',
      },
      {
        question: 'Can you migrate our existing site without hurting Google rankings?',
        answer:
          'Yes. Before launching any rebuild, we map every existing URL, preserve high-performing content equity, and configure clean 301 redirects so search engines transition cleanly.',
      },
      {
        question: 'What does ongoing website maintenance include?',
        answer:
          'Ongoing maintenance covers uptime monitoring, automated off-site backups, security and dependency updates, SSL management, Core Web Vitals checks, form verification, and scheduled content or offer updates.',
      },
      {
        question: 'How quickly can updates be made once the site is live?',
        answer:
          'Routine text, service, and promotion edits submitted to our team are handled promptly under our ongoing support workflow so your site stays aligned with your active offers.',
      },
    ],
    relatedSlugs: [
      'ai-receptionist',
      'ads-management-creatives',
      'review-management-automation',
    ],
  },
  {
    slug: 'ai-receptionist',
    shortTitle: 'AI Receptionist',
    iconName: 'PhoneCall',
    bentoOutcome:
      '24/7 voice and SMS receptionist that answers every call, qualifies prospects, and books your calendar.',
    metaTitle: 'AI Receptionist for Small Business | Acendio',
    metaDescription:
      'Deploy a 24/7 AI voice receptionist for small business that answers inbound calls, qualifies leads, recovers missed calls, and books CRM calendars.',
    primaryKeyword: 'AI receptionist for small business',
    h1: '24/7 AI Voice & SMS Receptionist That Turns Inbound Calls Into Booked Appointments',
    heroSubheadline:
      'Answer every ring day or night, qualify callers naturally against your service criteria, book appointments directly onto your calendar, and log full transcripts into your CRM.',
    whoItsFor: [
      'Home service contractors and field teams who cannot safely answer the phone while on job sites.',
      'Clinics, dental offices, and legal or consulting practices experiencing morning hold queues or lunchtime gaps.',
      'Real estate teams and hospitality operators capturing after-hours inquiries when competitors send callers to voicemail.',
      'Growing SMBs in [LOCATION] paying for Google Ads or SEO whose phone leads currently go unanswered.',
    ],
    problemTitle: 'The Hidden Cost of Voicemail and Delayed Callbacks',
    problemParagraphs: [
      'For local service businesses, the telephone remains the highest-intent conversion channel. When a homeowner has an urgent repair, a patient wants to schedule an exam, or a buyer wants a quote, they expect a live, helpful conversation—not a generic voicemail greeting promising a callback later.',
      'In practice, most callers do not leave voicemails. They hang up and dial the next listing on Google Maps. Hiring full-time 24/7 human receptionists across evenings, weekends, and peak-volume overflow periods is operationally difficult for small and mid-sized teams, while traditional call centers often rely on rigid scripts that cannot check real-time calendar availability or update your CRM accurately.',
      'Acendio deploys a custom-configured AI voice receptionist paired with instant missed call text-back. Every inbound call is greeted promptly in natural conversational speech, qualified according to your business rules, routed to live staff when urgent escalation is required, or booked straight onto your calendar with automated SMS confirmation.',
    ],
    deliverables: [
      {
        title: '24/7 Inbound AI Voice Answering',
        description:
          'Custom-trained voice agent capable of natural turn-taking, answering service FAQs, verifying service areas in [TARGET REGIONS], and handling simultaneous calls without hold music.',
      },
      {
        title: 'Intelligent Lead Qualification',
        description:
          'Collects caller name, contact details, service type, urgency, and timeline before offering an appointment slot.',
      },
      {
        title: 'Real-Time Calendar Booking',
        description:
          'Checks live team availability and books confirmed appointments directly into GoHighLevel, Google, or Outlook calendars.',
      },
      {
        title: 'Instant Missed Call Text-Back',
        description:
          'Even when callers hang up early or reach a busy primary line, an automated two-way SMS thread starts within seconds to capture the request.',
      },
      {
        title: 'Smart Human Handoff & Escalation',
        description:
          'Transfers high-priority or emergency calls directly to designated on-call team members with immediate context summaries.',
      },
      {
        title: 'Full CRM Logging & Transcripts',
        description:
          'Every call recording, structured summary, transcript, and contact record is automatically written to your GoHighLevel pipeline.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Call Flow & Knowledge Mapping',
        detail:
          'We document your common caller questions, service boundaries, qualifying rules, and escalation triggers.',
      },
      {
        step: '02',
        title: 'Voice Persona & Script Engineering',
        detail:
          'We build and test conversational prompts tailored to your brand tone, terminology, and local pronunciation in [LOCATION].',
      },
      {
        step: '03',
        title: 'Telephony & Calendar Integration',
        detail:
          'We connect call forwarding or dedicated tracking numbers, sync your booking calendars, and configure missed call text-back in GoHighLevel.',
      },
      {
        step: '04',
        title: 'Live Testing & Transcript Tuning',
        detail:
          'We run edge-case test calls before go-live and review early call transcripts to refine accuracy and booking completion.',
      },
    ],
    integrations: [
      'GoHighLevel CRM & Conversations',
      'Calendar Sync (Google / Outlook)',
      'A2P SMS Missed-Call Text Back',
      'Live Call Transfer & Escalation',
      'Webhooks & Dispatch Software',
      'Call Recording & Transcript Archive',
    ],
    outcomes: [
      'Zero inbound calls go to unanswered voicemail during busy hours, evenings, or weekends.',
      'Callers receive immediate, polite assistance and leave the call with a confirmed appointment time.',
      'Your office staff stops repeating basic hours, location, and availability answers all day.',
      'Every phone conversation becomes searchable, structured CRM data instead of sticky notes.',
    ],
    faqs: [
      {
        question: 'How much does an AI receptionist setup and ongoing management require?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Can we use the AI receptionist only for after-hours and overflow calls?',
        answer:
          'Yes. You can configure ring-no-answer forwarding so your staff answers first during business hours, with the AI receptionist stepping in immediately whenever lines are busy, unattended, or closed.',
      },
      {
        question: 'What happens if a caller asks something outside the trained knowledge base?',
        answer:
          'The agent is instructed never to guess or fabricate policies. If an inquiry falls outside defined rules or requires human judgment, it captures the caller’s details, initiates a warm transfer if configured, or alerts your team immediately.',
      },
      {
        question: 'Does the system work alongside missed call text-back?',
        answer:
          'Yes. Both systems work together: if a caller disconnects before speaking or opts for SMS booking, our missed call text-back workflow immediately engages them via text.',
      },
      {
        question: 'How does the AI receptionist avoid double-booking appointments?',
        answer:
          'It reads real-time calendar availability directly from your connected booking calendar and respects buffer times, business hours, and team round-robin assignments.',
      },
    ],
    relatedSlugs: [
      'crm-lead-follow-up-automation',
      'ai-chat-support',
      'website-development-maintenance',
    ],
  },
  {
    slug: 'ads-management-creatives',
    shortTitle: 'Ads Management & Creatives',
    iconName: 'Megaphone',
    bentoOutcome:
      'Meta and Google Ads strategy paired with high-converting static and video creatives and clean tracking.',
    metaTitle: 'Google Ads & Meta Ads Management Agency | Acendio',
    metaDescription:
      'Full-funnel Google Ads and Meta Ads management, ad creative design, conversion tracking, and retargeting built to generate qualified pipeline.',
    primaryKeyword: 'Google Ads and Meta Ads management agency',
    h1: 'Google Ads & Meta Ads Management With Purpose-Built Ad Creatives',
    heroSubheadline:
      'Capture active local search intent on Google and generate scalable demand on Meta—backed by conversion-focused creatives, server-side attribution, and direct CRM lead routing.',
    whoItsFor: [
      'Local and regional businesses ready to generate predictable inbound consultation requests across [TARGET REGIONS].',
      'Operators frustrated by agencies that report clicks and impressions without showing booked appointments.',
      'Teams running outdated ad visuals experiencing rising click costs and creative fatigue.',
      'Companies launching new service lines or expanding into adjacent neighborhoods around [LOCATION].',
    ],
    problemTitle: 'Why Ad Spend Underperforms Without Creative Discipline and Follow-Up',
    problemParagraphs: [
      'Most paid media campaigns fail for one of three structural reasons: weak ad creatives that blend into social feeds, poor conversion tracking that optimizes algorithms toward low-quality clicks, or slow post-click handling where generated leads wait hours for a reply.',
      'Separating creative production from media buying creates another bottleneck. When the ad buyer waits weeks for usable visuals, losing campaigns run too long and winning angles never get iterated. Worse, sending paid traffic to a generic homepage instead of a dedicated conversion landing page forces buyers to hunt for next steps.',
      'Acendio manages strategy, targeting, ad creative design, conversion tracking, and landing page alignment as one tightly integrated loop. Every campaign feeds directly into your GoHighLevel CRM so optimization decisions are anchored to qualified opportunities and booked calls.',
    ],
    deliverables: [
      {
        title: 'Google Search & Local Intent Campaigns',
        description:
          'Tightly themed keyword architectures, negative keyword hygiene, location targeting, and call/form extensions aimed at high-intent buyers.',
      },
      {
        title: 'Meta (Facebook & Instagram) Acquisition & Retargeting',
        description:
          'Prospecting audiences paired with structured retargeting sequences that keep your offer visible to website visitors and engaged prospects.',
      },
      {
        title: 'Static & Video Ad Creative Design',
        description:
          'Custom-designed graphics, direct-response hooks, copy variations, and short-form video edits structured for mobile feeds.',
      },
      {
        title: 'Conversion Tracking & Attribution Setup',
        description:
          'Clean configuration of GA4, Google Tag Manager, Meta Pixel, Conversions API events, and call tracking with UTM preservation.',
      },
      {
        title: 'Structured A/B Creative & Landing Testing',
        description:
          'Disciplined testing of visual hooks, offers, headlines, and landing layouts to steadily improve lead quality.',
      },
      {
        title: 'Transparent Pipeline Reporting',
        description:
          'Clear reporting tying campaign spend and ad sets directly to CRM leads, conversations, and booked strategy or service appointments.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Offer, Market & Tracking Audit',
        detail:
          'We analyze your past ad account data, target margins, local competition in [LOCATION], and existing tracking integrity.',
      },
      {
        step: '02',
        title: 'Creative Suite & Funnel Alignment',
        detail:
          'We produce initial static and video ad creative matrices alongside dedicated landing pages and CRM webhook routing.',
      },
      {
        step: '03',
        title: 'Controlled Launch & Signal Verification',
        detail:
          'We deploy segmented campaigns, verify every conversion event fires cleanly, and confirm leads trigger instant CRM follow-up.',
      },
      {
        step: '04',
        title: 'Weekly Optimization & Creative Refresh',
        detail:
          'We prune non-converting search terms, rotate fatigued creatives, and reallocate budget toward audiences producing booked appointments.',
      },
    ],
    integrations: [
      'Google Ads & Search Console',
      'Meta Ads Manager & Conversions API',
      'Google Tag Manager & GA4',
      'GoHighLevel Pipeline Attribution',
      'Dynamic Call Tracking Numbers',
      'Dedicated Conversion Landing Pages',
    ],
    outcomes: [
      'Campaign algorithms optimize around real lead and booking signals instead of accidental clicks.',
      'Fresh, domain-specific ad creatives stand out cleanly in crowded local social feeds.',
      'Paid traffic flows seamlessly into instant SMS, AI chat, or voice follow-up without human delay.',
      'You always know which channels and ad angles are generating actual pipeline opportunities.',
    ],
    faqs: [
      {
        question: 'What is the engagement model for ads management and creative production?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Do we own our Google Ads and Meta Ads accounts?',
        answer:
          'Yes. You retain 100% administrative ownership of your ad accounts, pixels, audiences, and historical campaign data at all times. We operate via secure agency partner access.',
      },
      {
        question: 'Do you design the ad creatives or do we have to supply everything?',
        answer:
          'We handle ad creative design—including static layouts, copywriting, and edited short-form video variations using any raw brand photos or clips you have, plus custom visual production.',
      },
      {
        question: 'Should we run Google Ads, Meta Ads, or both?',
        answer:
          'During our discovery call, we match channel mix to your buyers. Google Ads captures urgent, active search intent, while Meta Ads builds demand and retargets prospects across visual feeds.',
      },
      {
        question: 'How do you connect ad leads to fast follow-up?',
        answer:
          'Every Meta Lead Form, Google Lead Extension, and landing page form connects directly to GoHighLevel automation so leads receive immediate SMS/email confirmation and booking links.',
      },
    ],
    relatedSlugs: [
      'website-development-maintenance',
      'crm-lead-follow-up-automation',
      'review-management-automation',
    ],
  },
  {
    slug: 'review-management-automation',
    shortTitle: 'Review Management & Automation',
    iconName: 'Star',
    bentoOutcome:
      'Automated SMS/email review requests, feedback routing, AI-assisted replies, and Google profile growth.',
    metaTitle: 'Google Review Management & Automation | Acendio',
    metaDescription:
      'Automate Google review requests via SMS and email, route private feedback, publish AI-assisted replies, and strengthen local Map Pack trust.',
    primaryKeyword: 'Google review management software',
    h1: 'Review Management & Automation That Turns Satisfied Customers Into Visible Proof',
    heroSubheadline:
      'Collect steady Google reviews automatically via SMS and email, catch negative experiences privately for fast service recovery, and respond to every review on brand.',
    whoItsFor: [
      'Local businesses in [LOCATION] with happy customers in real life whose Google Business Profile looks quiet or outdated.',
      'Multi-technician or multi-provider teams that forget to ask for reviews consistently after completed appointments.',
      'Hospitality, retail, clinic, and home service operators seeking stronger local Google Map Pack presence.',
      'Owners who want structured, timely responses posted to every public review without spending Sunday nights writing replies.',
    ],
    problemTitle: 'Why Great Businesses Lose Local Search Clicks to Louder Competitors',
    problemParagraphs: [
      'When a local buyer searches on Google Maps, they compare star ratings, review recency, and owner responsiveness in seconds before clicking any website. A business that delivers outstanding work—but only collects a handful of reviews each year—regularly loses high-intent calls to less capable competitors who systematized their review requests.',
      'Relying on technicians, stylists, or front-desk staff to remember to ask for a review verbally never scales consistently. Meanwhile, when an occasional dissatisfied customer posts publicly without prior outreach, an unaddressed complaint lingers at the top of your profile.',
      'Acendio installs an automated review management engine connected to your job completion or invoice triggers. Satisfied customers receive a frictionless one-tap path to leave a Google review, unhappy feedback is routed directly to management for rapid resolution, and AI-assisted reply drafting keeps your profile active and professional.',
    ],
    deliverables: [
      {
        title: 'Automated SMS & Email Review Requests',
        description:
          'Triggered automatically when an appointment completes or an invoice is marked paid, reaching customers while the positive experience is fresh.',
      },
      {
        title: 'Clean Feedback Routing',
        description:
          'Invites satisfied customers straight to your public Google review link while capturing constructive operational feedback privately for internal follow-up.',
      },
      {
        title: 'AI-Assisted Review Reply Workflows',
        description:
          'Generates polite, context-aware responses tailored to each reviewer’s comments for rapid approval or automated publishing.',
      },
      {
        title: 'Google Business Profile Optimization',
        description:
          'Structured profile completeness, category alignment, service listings, and regular post cadence supporting local visibility in [LOCATION].',
      },
      {
        title: 'Centralized Reputation Dashboard',
        description:
          'Monitor incoming ratings, response times, and sentiment trends across one or multiple locations from a single view.',
      },
      {
        title: 'Automated Follow-Up Nudges',
        description:
          'Polite, non-intrusive reminder cadence for customers who opened the invite link but got distracted before submitting.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Google Profile & Trigger Audit',
        detail:
          'We verify Google Business Profile ownership, NAP consistency, and identify the cleanest CRM or POS trigger for completed jobs.',
      },
      {
        step: '02',
        title: 'Messaging & Routing Setup',
        detail:
          'We configure branded SMS/email templates, feedback routing logic, and private escalation alerts inside GoHighLevel.',
      },
      {
        step: '03',
        title: 'AI Reply Guardrails',
        detail:
          'We define tone guidelines, privacy rules (especially for healthcare/clinics), and approval workflows for review responses.',
      },
      {
        step: '04',
        title: 'Continuous Monitoring & Profile Growth',
        detail:
          'Review velocity runs automatically on every completed service while your dashboard tracks sentiment and response coverage.',
      },
    ],
    integrations: [
      'Google Business Profile',
      'GoHighLevel Reputation Engine',
      'A2P Compliant SMS & Email',
      'POS / Invoicing Webhooks',
      'AI Response Drafting',
      'Website Review Embed Widgets',
    ],
    outcomes: [
      'Consistent, fresh Google reviews arrive week after week without burdening your staff.',
      'Service issues are intercepted privately so your team can resolve concerns quickly.',
      'Every public review receives a thoughtful, timely response that signals attentiveness to future buyers.',
      'Stronger local trust lifts conversion rates across your paid ads, organic search, and website.',
    ],
    faqs: [
      {
        question: 'How is your review automation service structured?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Is automated review management compliant with Google policies?',
        answer:
          'Yes. We never purchase fake reviews or prohibit unhappy customers from posting publicly. We automate polite invitations and give customers an easy channel to share direct feedback with management.',
      },
      {
        question: 'Can we approve AI-drafted review replies before they go live?',
        answer:
          'Yes. You can choose an approval-first workflow where drafts land in your inbox for one-click publishing, or configure automated responses for straightforward positive reviews.',
      },
      {
        question: 'What if we have an existing list of past customers who were never asked for a review?',
        answer:
          'We can run a paced reactivation campaign that reaches out politely to recent past customers in batches so your profile gains momentum smoothly.',
      },
      {
        question: 'Can review automation work across multiple locations?',
        answer:
          'Yes. Location tags route each customer to the exact Google Business Profile corresponding to the branch or territory that served them.',
      },
    ],
    relatedSlugs: [
      'website-development-maintenance',
      'crm-lead-follow-up-automation',
      'ads-management-creatives',
    ],
  },
  {
    slug: 'crm-lead-follow-up-automation',
    shortTitle: 'CRM & Lead Follow-Up Automation',
    iconName: 'Workflow',
    bentoOutcome:
      'GoHighLevel pipelines, instant speed-to-lead, multi-channel nurture, and no-show reduction.',
    metaTitle: 'GoHighLevel CRM & Lead Follow-Up Automation | Acendio',
    metaDescription:
      'Eliminate slow responses with GoHighLevel CRM pipelines, instant speed-to-lead SMS/email sequences, lead reactivation, and appointment reminders.',
    primaryKeyword: 'GoHighLevel automation agency',
    h1: 'CRM & Lead Follow-Up Automation That Turns Cold Inquiries Into Confirmed Meetings',
    heroSubheadline:
      'Deploy GoHighLevel pipelines, instant multi-channel speed-to-lead, automated appointment reminders, and database reactivation so no inquiry slips through the cracks.',
    whoItsFor: [
      'Businesses generating leads from web forms, Meta ads, or referrals with no structured CRM pipeline tracking them.',
      'Sales teams losing momentum because leads go days without a second or third follow-up touch.',
      'Service providers experiencing preventable calendar no-shows and last-minute cancellations.',
      'Operators sitting on hundreds or thousands of past quotes and dormant contacts that have never been reactivated.',
    ],
    problemTitle: 'Why Generating More Leads Fails When Follow-Up Is Manual',
    problemParagraphs: [
      'Many companies assume their primary bottleneck is top-of-funnel traffic, yet their CRM or inbox already holds dozens of unclosed quotes, missed inquiries, and forgotten past prospects. When an inbound lead arrives while your team is in meetings or on the road, every hour of silence gives competitors time to answer first.',
      'Manual follow-up also breaks down after the initial call. Most prospects need multiple helpful touchpoints before committing—yet busy staff rarely follow up five or six times across SMS, email, and voicemail drops. Even once an appointment is booked, missing confirmation and reminder sequences invite avoidable no-shows.',
      'As a specialized GoHighLevel automation agency, Acendio architects clean, transparent CRM pipelines and automated follow-up workflows tailored to your sales cycle. Every new lead receives immediate acknowledgment, structured nurture, smart calendar reminders, and automated task routing for your closers.',
    ],
    deliverables: [
      {
        title: 'Custom GoHighLevel Pipeline Architecture',
        description:
          'Stage-by-stage opportunity tracking from New Lead through Discovery, Proposal Sent, Booked, and Won—with zero spreadsheet chaos.',
      },
      {
        title: 'Instant Speed-to-Lead Automation',
        description:
          'Immediate SMS, email, and internal team alerts triggered within seconds of form submission, ad lead capture, or missed call.',
      },
      {
        title: 'Multi-Channel Nurture Sequences',
        description:
          'Respectful, human-sounding follow-up cadences that educate prospects, handle common objections, and stop automatically the moment they reply or book.',
      },
      {
        title: 'No-Show Reduction & Reminder Workflows',
        description:
          'Automated booking confirmations, calendar invites, 24-hour and 2-hour SMS reminders, and easy self-reschedule links.',
      },
      {
        title: 'Dormant Lead & Quote Reactivation',
        description:
          'Targeted SMS/email check-in campaigns that re-engage old quotes and cold inquiries into fresh booked conversations.',
      },
      {
        title: 'Unified Team Inbox & Task Routing',
        description:
          'Consolidates SMS, email, web chat, Facebook, Instagram, and Google messages into one chronological contact timeline.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Sales Stage & Bottleneck Mapping',
        detail:
          'We map how leads enter your business today and identify where prospects stall between inquiry, appointment, and close.',
      },
      {
        step: '02',
        title: 'CRM & A2P Messaging Setup',
        detail:
          'We structure pipelines, custom fields, tags, domain authentication (DKIM/SPF), and compliant SMS registration in GoHighLevel.',
      },
      {
        step: '03',
        title: 'Workflow & Trigger Engineering',
        detail:
          'We build speed-to-lead, nurture, reminder, no-show recovery, and reactivation sequences with fail-safe stop triggers on reply.',
      },
      {
        step: '04',
        title: 'Team Onboarding & Ongoing Tuning',
        detail:
          'We train your team on daily pipeline hygiene and refine message timing and copy based on real reply rates.',
      },
    ],
    integrations: [
      'GoHighLevel Pipelines & Workflows',
      'Website Webhooks & Meta Lead Forms',
      'AI Voice & Chat Handoff',
      'Google & Outlook Two-Way Calendar',
      'A2P 10DLC SMS & Verified Email',
      'Zapier / Make / Custom REST APIs',
    ],
    outcomes: [
      'Every inbound prospect hears from your business within seconds—even outside office hours.',
      'Your sales team works from one clear pipeline with automated follow-up tasks instead of sticky notes.',
      'Confirmed appointments show up reliably thanks to timely SMS and calendar reminders.',
      'Dormant contacts and unclosed quotes are systematically re-engaged without manual dialing.',
    ],
    faqs: [
      {
        question: 'How do you scope CRM and lead follow-up automation projects?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Do automated SMS messages sound robotic?',
        answer:
          'No. We write concise, conversational plain-text messages grounded in how your team naturally speaks—and pause automation immediately once a prospect replies so humans or trained AI take over cleanly.',
      },
      {
        question: 'Can you integrate our existing industry software with GoHighLevel?',
        answer:
          'Yes. We connect external quoting, EHR, property, or dispatch tools using native connectors, webhooks, or custom API workflows.',
      },
      {
        question: 'How do you keep SMS and email outreach compliant?',
        answer:
          'We configure explicit consent capture on forms, A2P messaging registration, verified email sending domains, and automatic STOP/unsubscribe handling across all workflows.',
      },
      {
        question: 'Can we start by reactivating our old lead list?',
        answer:
          'Yes. Cleaning and running a controlled reactivation sequence on existing contacts is often one of the fastest ways to test pipeline automation.',
      },
    ],
    relatedSlugs: [
      'ai-receptionist',
      'ads-management-creatives',
      'custom-software-ai-automation',
    ],
  },
  {
    slug: 'ai-chat-support',
    shortTitle: 'AI Chat & Support',
    iconName: 'MessageSquare',
    bentoOutcome:
      'Website and social chat agents trained on your FAQs for instant lead capture and human handoff.',
    metaTitle: 'AI Chat & Customer Support Agents | Acendio',
    metaDescription:
      'Convert website visitors and social DMs 24/7 with AI chat support agents trained on your verified business FAQs, lead capture, and seamless handoff.',
    primaryKeyword: 'AI chat support for business',
    h1: 'AI Chat & Support Agents Trained on Your Business Knowledge for 24/7 Lead Capture',
    heroSubheadline:
      'Engage website visitors, Instagram DMs, Facebook Messenger, and SMS inquiries instantaneously—answering policy questions accurately, capturing contact details, and booking calls.',
    whoItsFor: [
      'High-consideration service businesses whose visitors have specific questions before committing to a phone call.',
      'Retail showrooms, clinics, and hospitality venues fielding repetitive inquiries across website chat and social DMs.',
      'Teams that want instant live engagement without forcing someone on staff to monitor chat widgets all evening.',
      'Businesses running paid social campaigns where prospects comment or message directly on Instagram and Facebook.',
    ],
    problemTitle: 'Why Static Chat Widgets and Unmonitored Inboxes Lose Ready Buyers',
    problemParagraphs: [
      'Many websites embed a basic contact widget that asks visitors to fill out their name and wait for an email reply—or worse, a rigid decision-tree bot that traps users in dead-end button menus. When a prospect simply wants to confirm service coverage in [LOCATION], appointment availability, or process steps, friction drives them away.',
      'Meanwhile, inquiries increasingly arrive across fragmented channels: website chat, Google messages, Instagram DMs, and Facebook Messenger. Without unified, responsive coverage, messages sit unread for hours while buying intent fades.',
      'Acendio builds conversational AI chat agents grounded strictly in your verified documentation, FAQs, and scheduling rules. Visitors get immediate, accurate answers in natural language, transition smoothly into booking a consultation, or escalate to a live staff member in your unified GoHighLevel inbox.',
    ],
    deliverables: [
      {
        title: 'Custom Knowledge-Base Training',
        description:
          'Trained exclusively on your approved website copy, service guidelines, location details, and FAQ documents with strict anti-hallucination boundaries.',
      },
      {
        title: 'Multi-Channel Deployment',
        description:
          'Unified conversational coverage across website chat, SMS, Instagram DM, and Facebook Messenger from one GoHighLevel inbox.',
      },
      {
        title: 'Natural Lead Qualification & Capture',
        description:
          'Captures visitor name, email, phone number, and project context organically inside the conversation flow.',
      },
      {
        title: 'In-Chat Appointment Booking',
        description:
          'Guides qualified prospects directly to open calendar slots without forcing them to hunt for another page.',
      },
      {
        title: 'Clean Human Handoff Rules',
        description:
          'Detects sensitive support requests, complex custom scopes, or explicit requests for a person and alerts your team immediately.',
      },
      {
        title: 'Performance-Safe Asynchronous Loading',
        description:
          'Website chat widgets are deferred until user interaction or browser idle so Core Web Vitals stay fast.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'FAQ & Policy Curation',
        detail:
          'We gather your verified service scope, operating hours, coverage regions across [TARGET REGIONS], and tone preferences.',
      },
      {
        step: '02',
        title: 'Agent Prompting & Guardrails',
        detail:
          'We engineer strict knowledge boundaries, qualification sequences, and no-price proposal routing rules.',
      },
      {
        step: '03',
        title: 'Channel & CRM Integration',
        detail:
          'We connect website chat, social messaging channels, calendar booking links, and CRM pipeline triggers.',
      },
      {
        step: '04',
        title: 'Transcript Review & Refinement',
        detail:
          'We monitor early visitor transcripts to expand FAQ coverage and sharpen booking conversion.',
      },
    ],
    integrations: [
      'Website Chat Widget (Lazy-Loaded)',
      'Instagram DM & Facebook Messenger',
      'Two-Way SMS',
      'GoHighLevel Unified Inbox',
      'Booking Calendar Sync',
      'Custom Knowledge Base Sources',
    ],
    outcomes: [
      'Website and social visitors receive helpful answers in seconds around the clock.',
      'Casual browsers turn into qualified CRM contacts with captured intent context.',
      'Your team steps into high-value conversations already pre-qualified and logged.',
      'Site speed remains protected thanks to deferred widget initialization.',
    ],
    faqs: [
      {
        question: 'How is an AI chat and support implementation scoped?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Can the AI chat agent make up answers or quote unauthorized commitments?',
        answer:
          'We enforce strict knowledge-base guardrails so the agent only references verified information you approve and routes custom scoping requests to a discovery call.',
      },
      {
        question: 'Will adding an AI chat widget slow down our website?',
        answer:
          'No. We configure chat scripts to load asynchronously after initial render and user interaction so your Largest Contentful Paint and responsiveness remain unaffected.',
      },
      {
        question: 'Can our staff jump into an active AI chat anytime?',
        answer:
          'Yes. Every conversation streams live inside your GoHighLevel Conversations inbox—a team member can take over manually at any moment, automatically pausing the bot.',
      },
      {
        question: 'Does it work on Instagram and Facebook messages too?',
        answer:
          'Yes. Once connected, the same trained knowledge base and booking workflow can respond to social direct messages seamlessly.',
      },
    ],
    relatedSlugs: [
      'ai-receptionist',
      'crm-lead-follow-up-automation',
      'website-development-maintenance',
    ],
  },
  {
    slug: 'custom-software-ai-automation',
    shortTitle: 'Custom Software & AI Automation',
    iconName: 'Cpu',
    bentoOutcome:
      'Bespoke internal tools, operational dashboards, API bridges, and production LLM workflows.',
    metaTitle: 'Custom Software & AI Automation Agency | Acendio',
    metaDescription:
      'Build bespoke internal tools, client portals, API integrations, and reliable LLM workflows tailored to your business operations.',
    primaryKeyword: 'custom AI automation and software development',
    h1: 'Custom Software, API Integrations & Bespoke AI Workflows Built Around Your Operations',
    heroSubheadline:
      'When off-the-shelf SaaS tools fall short, Acendio engineers custom internal dashboards, reliable system integrations, and tailored AI workflows that eliminate repetitive manual work.',
    whoItsFor: [
      'Growing operators stitching together spreadsheets, legacy software, and manual copy-pasting across departments.',
      'Businesses needing custom intake calculators, client portals, or dispatch/reporting dashboards that off-the-shelf tools cannot support.',
      'Teams seeking practical document summarization, proposal drafting, or structured data extraction powered by modern LLMs.',
      'Organizations with GoHighLevel or ERP systems that require custom middleware and bidirectional API synchronization.',
    ],
    problemTitle: 'Where Off-the-Shelf Tools Stop and Manual Bottlenecks Begin',
    problemParagraphs: [
      'Standard SaaS platforms solve common workflows well, but every mature business develops operational nuances that generic software ignores. Teams end up maintaining fragile spreadsheet workarounds, manually re-entering customer data between quoting, CRM, and billing systems, or spending hours compiling reports across disconnected platforms.',
      'Similarly, poorly engineered AI experiments often fail in production because they lack validation schemas, audit trails, error recovery, or human-in-the-loop checkpoints. Automation only creates leverage when it runs deterministically and fails safely.',
      'Acendio builds pragmatic custom software and AI automation grounded in clean TypeScript architectures, well-documented REST APIs, and observable workflows. Whether you need an internal operations portal, a multi-system data bridge, or a structured AI workflow for intake triage, we engineer solutions built to last.',
    ],
    deliverables: [
      {
        title: 'Custom Internal Tools & Operational Dashboards',
        description:
          'Clean web applications tailored to your exact team roles, intake workflows, reporting views, and approval queues.',
      },
      {
        title: 'API Integrations & Middleware Bridges',
        description:
          'Reliable, error-handled synchronization between GoHighLevel, accounting platforms, scheduling software, and proprietary databases.',
      },
      {
        title: 'Structured LLM & Document Workflows',
        description:
          'Automated intake classification, call-note extraction, RFP/document parsing, and draft preparation with schema validation.',
      },
      {
        title: 'Webhook Reliability & Retry Architecture',
        description:
          'Idempotent event processing, error notifications, and fallback logging so critical customer records are never dropped silently.',
      },
      {
        title: 'Interactive Web Portals & Calculators',
        description:
          'Bespoke front-end tools that educate prospects, capture structured scoping data, and feed directly into your sales pipeline.',
      },
      {
        title: 'Documentation & Ongoing Engineering Support',
        description:
          'Clear technical documentation, clean version control, and ongoing maintenance as connected APIs evolve.',
      },
    ],
    howItWorks: [
      {
        step: '01',
        title: 'Workflow & Architecture Discovery',
        detail:
          'We shadow your current manual steps, inspect existing APIs and data schemas, and pinpoint the highest-leverage automation boundary.',
      },
      {
        step: '02',
        title: 'Technical Specification & Prototype',
        detail:
          'We define data flows, security controls, failure-handling behavior, and UI wireframes before writing production code.',
      },
      {
        step: '03',
        title: 'Iterative Build & Staging Validation',
        detail:
          'We ship modular TypeScript services and interfaces, testing edge cases, rate limits, and real operational payloads in staging.',
      },
      {
        step: '04',
        title: 'Production Rollout & Stewardship',
        detail:
          'We deploy with monitoring, train your team, and remain available for ongoing maintenance and capability extensions.',
      },
    ],
    integrations: [
      'REST & GraphQL APIs',
      'GoHighLevel API & Webhooks',
      'TypeScript / Node / React',
      'Structured LLM Pipelines',
      'Cloud Databases & Webhooks',
      'ERP, Scheduling & Billing Systems',
    ],
    outcomes: [
      'Staff stop wasting hours transferring data manually between disconnected software tools.',
      'Custom workflows match how your business actually operates instead of forcing rigid templates.',
      'AI tasks produce predictable, structured outputs with clear human review where needed.',
      'Your internal tools and integrations scale cleanly alongside rising lead and customer volume.',
    ],
    faqs: [
      {
        question: 'How does Acendio scope custom software and AI automation projects?',
        answer:
          'Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.',
      },
      {
        question: 'Do we need a custom build, or can no-code tools handle our workflow?',
        answer:
          'During discovery, we recommend the simplest reliable approach. If GoHighLevel workflows or standard webhooks cover 100% of your need, we build it there. We reserve custom code for gaps where reliability, UX, or API logic demands it.',
      },
      {
        question: 'How do you prevent AI workflow errors from affecting live customers?',
        answer:
          'We use strict schema validation, deterministic fallback rules, and human-approval steps for high-stakes actions rather than letting autonomous prompts operate unchecked.',
      },
      {
        question: 'Will our team receive documentation and ongoing support?',
        answer:
          'Yes. Every custom build includes clear operational documentation and an optional ongoing maintenance plan covering API updates, monitoring, and enhancements.',
      },
    ],
    relatedSlugs: [
      'crm-lead-follow-up-automation',
      'ai-receptionist',
      'website-development-maintenance',
    ],
  },
];

export const MORE_SOLUTIONS_CARD = {
  title: 'More Solutions & Custom Scope',
  outcome:
    'Have a specific bottleneck across operations, reporting, or lead flow? Let us architect a custom growth system.',
  ctaLabel: 'Request Custom Scope',
  to: '/contact?service=Custom+Scope+Request',
};

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICES_CONTENT.find((s) => s.slug === slug);
}
