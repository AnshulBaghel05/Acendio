// NOT LEGAL ADVICE — REVIEW WITH QUALIFIED LEGAL COUNSEL BEFORE PUBLISHING.

import { SITE_CONFIG } from '../config/site';

export const LEGAL_CONTENT = {
  lastUpdated: '18 Nov 2026',
  privacy: {
    title: 'Privacy Policy | Acendio',
    description:
      'How Acendio collects, processes, and protects inquiry, SMS consent, and website analytics data.',
    sections: [
      {
        heading: '1. Information We Collect',
        body: [
          'When you submit a strategy call request, contact form, or growth audit request on Acendio, we collect the contact details you provide—such as your first and last name, business name, email address, phone number, selected service interest, and message contents.',
          'We also record technical attribution metadata (such as UTM parameters, referring URL, source page URL, and consent timestamp) to evaluate marketing effectiveness and route your inquiry accurately.',
        ],
      },
      {
        heading: '2. How We Use Your Information',
        body: [
          'We use submitted information strictly to respond to your inquiry, schedule discovery calls, prepare custom service proposals, and operate requested automation demonstrations.',
          'We do not sell or rent your personal contact information to third-party data brokers.',
        ],
      },
      {
        heading: '3. SMS, Voice & Email Communications Consent (TCPA / GDPR Awareness)',
        body: [
          'By checking the explicit consent box on our forms and providing your telephone number, you consent to receive service-related communications, appointment confirmations, and strategy call follow-ups via email, phone call, or SMS/text message (including automated messaging systems) from Acendio.',
          'Consent is not a condition of purchase. Message and data rates may apply. You may opt out of SMS messages at any time by replying STOP, or unsubscribe from emails via the link included in each message.',
        ],
      },
      {
        heading: '4. Cookies & Consent-Gated Analytics',
        body: [
          'Essential storage is used solely for core site navigation, form security, and session UTM attribution. Non-essential analytics and advertising scripts (such as Google Analytics 4, Google Tag Manager, Meta Pixel, Microsoft Clarity, and GoHighLevel site tracking) only load after you grant consent via our Cookie Preferences banner.',
          'You can modify or withdraw your cookie preferences at any time using the "Cookie Preferences" control in the website footer.',
        ],
      },
      {
        heading: '5. Data Processors & Retention',
        body: [
          'Inquiry records and scheduling data are processed through our CRM and automation platform (GoHighLevel / LeadConnector) and secure hosting providers. Data is retained only as long as necessary to fulfill business communications or comply with applicable legal obligations.',
        ],
      },
      {
        heading: '6. Your Privacy Rights & Contact',
        body: [
          `Depending on your jurisdiction, you may request access to, correction of, or deletion of personal data we hold about you. ${
            SITE_CONFIG.email
              ? `Send privacy requests to ${SITE_CONFIG.email}.`
              : 'Submit privacy requests through our Contact page.'
          }`,
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service | Acendio',
    description:
      'Website terms of use, intellectual property notice, and commercial engagement scope for Acendio.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        body: [
          'By accessing or using this website, operated by Acendio, you agree to comply with these Terms of Service and applicable laws.',
        ],
      },
      {
        heading: '2. Scope of Website Content & Custom Proposals',
        body: [
          'All descriptions of websites, AI receptionists, paid ad management, review automation, CRM pipelines, and custom software on this Site are informational overviews. Specific deliverables, timelines, service levels, and commercial terms are governed solely by a mutually executed Master Services Agreement or custom written proposal following a discovery call.',
        ],
      },
      {
        heading: '3. Acceptable Use',
        body: [
          'You agree not to misuse this Site, attempt unauthorized access to forms or webhook endpoints, scrape content for deceptive purposes, or submit false or third-party contact details without authorization.',
        ],
      },
      {
        heading: '4. Intellectual Property',
        body: [
          'All original copy, visual systems, code structures, and brand marks displayed on this Site remain the property of Acendio or its licensors unless otherwise assigned in a client agreement.',
        ],
      },
      {
        heading: '5. Third-Party Platforms & Integrations',
        body: [
          'Our services integrate with third-party platforms such as GoHighLevel, Meta, Google, and calendar providers. We are not responsible for outages, policy updates, or service interruptions originating within third-party platforms.',
        ],
      },
      {
        heading: '6. Limitation of Liability & Contact',
        body: [
          `To the maximum extent permitted by law, Acendio provides this Site on an "as-is" basis without warranties of uninterrupted availability. ${
            SITE_CONFIG.email
              ? `Questions regarding these Terms may be directed to ${SITE_CONFIG.email}.`
              : 'Questions regarding these Terms may be submitted via our Contact page.'
          }`,
        ],
      },
    ],
  },
};
