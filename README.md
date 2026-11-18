# Acendio — AI & Digital Growth Agency Website

Production-grade multi-page React + TypeScript + Tailwind CSS marketing website engineered for lead generation via GoHighLevel (GHL) webhooks, embedded GHL calendars, technical SEO, and WCAG 2.2 AA accessibility.

---

## 1. Local Setup & Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and fill in your values (or edit `/src/config/ghl.ts` and `/src/config/site.ts` directly):
   ```bash
   cp .env.example .env
   ```
3. Run the development server (runs on port `3000`):
   ```bash
   npm run dev
   ```
4. Build and type-check for production:
   ```bash
   npm run lint
   npm run build
   ```

---

## 2. Deployment (Vercel / Netlify)

Both `vercel.json` and `netlify.toml` are included with:
- Clean URLs (no hash routing)
- 301 / clean trailing-slash normalization (`trailingSlash: false`)
- SPA fallback rewrites to `/index.html`
- Security headers (`X-Content-Type-Options`, `Referrer-Policy`)

Deploy directly by connecting the repository to Vercel or Netlify with build command `npm run build` and output directory `dist`.

---

## 3. Prerendering / SSG Setup for Search Crawlers

Although modern Googlebot renders JavaScript, serving pre-rendered HTML per route protects crawl budget, ensures instant social share previews (LinkedIn/Facebook/Slack/X), and guarantees AI crawlers receive complete semantic content immediately.

Recommended production prerender options:
1. **Build-time Prerendering (`vite-plugin-prerender` / `playwright` script)**:
   Run a post-build script over `dist/` for every route listed in `public/sitemap.xml` (`/`, `/services`, `/services/*`, `/about`, `/process`, `/industries/*`, `/blog/*`, `/faq`, `/contact`, `/privacy-policy`, `/terms`) to emit static `route/index.html` snapshots after `SeoHead` updates `<title>`, `<meta>`, canonical tags, and JSON-LD.
2. **Edge Dynamic Rendering / Prerender Proxy**:
   On Netlify (`Prerendering` enabled) or Cloudflare Workers / Vercel Edge Middleware, route crawler user agents (`Googlebot`, `bingbot`, `facebookexternalhit`, `LinkedInBot`, `Twitterbot`, `GPTBot`, `ClaudeBot`) through a headless Chromium snapshot cache while serving the SPA to browsers.

---

## 4. Required GoHighLevel (GHL) Workflow Checklist

Create the following workflow inside GoHighLevel to process submissions sent from `/src/components/LeadCaptureForm.tsx` to `GHL_WEBHOOK_URL`:

1. **Workflow Trigger — Inbound Webhook**:
   - Trigger type: `Inbound Webhook`
   - Copy the generated webhook URL into `VITE_GHL_WEBHOOK_URL` / `GHL_CONFIG.GHL_WEBHOOK_URL`.
   - Send one test payload from `/contact` to map fields:
     `firstName`, `lastName`, `email`, `phone`, `companyName`, `serviceInterest`, `message`, `source`, `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `referrer`, `consentTimestamp`.
2. **Create / Update Contact**:
   - Map `firstName`, `lastName`, `email`, `phone`, `companyName`, plus custom fields for `serviceInterest`, `source`, and UTM parameters.
3. **Conditional Branch / Tag by `serviceInterest`**:
   - Add tag matching the selected service (e.g., `interest:ai-receptionist`, `interest:website`, `interest:ads`, `interest:reviews`, `interest:crm`, `interest:ai-chat`, `interest:custom-software`).
4. **Create / Update Opportunity**:
   - Pipeline: `Acendio Sales Pipeline`
   - Stage: `New Lead`
5. **Instant Auto-Response (SMS + Email)**:
   - SMS (only if phone + consent present): Confirm receipt within seconds, address by `{{contact.first_name}}`, and include the GHL Calendar booking link.
   - Email: Confirm inquiry receipt and share discovery calendar link.
6. **Internal Notification & Follow-Up Task**:
   - Notify assigned account lead via SMS/email/push.
   - Create manual task due within 1 business day: *"Review prospect website/GBP & prepare strategy call notes."*
7. **Calendar Booking Workflow (Separate Workflow)**:
   - Trigger: `Customer Booked Appointment` on your Strategy Call calendar.
   - Move opportunity stage to `Discovery Booked`.
   - Trigger confirmation email + 24h and 2h SMS reminders.

---

## 5. SEO Launch Checklist

- [ ] Replace `[DOMAIN]` across `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`, and `/src/config/site.ts`.
- [ ] Verify Google Search Console property for `https://[DOMAIN]` and submit `https://[DOMAIN]/sitemap.xml`.
- [ ] Verify Bing Webmaster Tools property and submit sitemap.
- [ ] Claim and optimize your **Google Business Profile** (`[GBP_URL]`) with matching NAP (`Acendio`, `[ADDRESS]`, `[PHONE]`, `[DOMAIN]`).
- [ ] Validate JSON-LD structured data (`Organization`, `WebSite`, `ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `Article`) via Google Rich Results Test and Schema.org Validator.
- [ ] Run Lighthouse audits (Performance, SEO, Accessibility, Best Practices) on `/`, `/services/ai-receptionist`, `/blog/...`, and `/contact` after adding production GHL/analytics IDs.
- [ ] Review `/privacy-policy` and `/terms` with qualified legal counsel.

---

## 6. Complete Placeholder Inventory to Replace Before Launch

| Placeholder | Location(s) | Purpose |
| :--- | :--- | :--- |
| `[PHONE]` | `src/config/site.ts` | Business phone number (`tel:` and display) |
| `[EMAIL]` | `src/config/site.ts` | Public contact & privacy email |
| `[WHATSAPP_NUMBER]` | `src/config/site.ts` | WhatsApp digits (international format, no `+` in `wa.me/`) |
| `[DOMAIN]` | `src/config/site.ts`, `.env.example`, `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt` | Production domain |
| `[LOCATION]` | `src/config/site.ts`, `src/content/*` | Primary city/metro HQ |
| `[TARGET REGIONS]` | `src/config/site.ts`, `src/content/*` | Service territory / regions served |
| `[ADDRESS]` | `src/config/site.ts` | Street address for NAP & LocalBusiness schema |
| `[GBP_URL]` | `src/config/site.ts` | Google Business Profile URL |
| `[SOCIAL_LINK_*]` | `src/config/site.ts` | LinkedIn, Instagram, Facebook, X, YouTube URLs |
| `[GHL_WEBHOOK_ID]` | `src/config/ghl.ts`, `.env.example` | GoHighLevel Inbound Webhook trigger URL |
| `[GHL_FORM_ID]` | `src/config/ghl.ts`, `.env.example` | Embedded GHL fallback form ID |
| `[GHL_CALENDAR_ID]` | `src/config/ghl.ts`, `.env.example` | GHL Strategy Call booking widget ID |
| `[GHL_CHAT_WIDGET_ID]` | `src/config/ghl.ts`, `.env.example` | GHL lazy-loaded chat widget ID |
| `[GHL_TRACKING_ID]` | `src/config/ghl.ts`, `.env.example` | GHL external site tracking ID |
| `[GA4_MEASUREMENT_ID]` | `src/lib/analytics.ts`, `.env.example` | Google Analytics 4 ID (`G-...`) |
| `[GTM_CONTAINER_ID]` | `src/lib/analytics.ts`, `.env.example` | Google Tag Manager ID (`GTM-...`) |
| `[META_PIXEL_ID]` | `src/lib/analytics.ts`, `.env.example` | Meta Pixel ID |
| `[MICROSOFT_CLARITY_ID]` | `src/lib/analytics.ts`, `.env.example` | Microsoft Clarity project ID |
| `[TESTIMONIAL_PLACEHOLDER_*]` | `src/components/PlaceholderBlocks.tsx`, pages | Replace with verified client quotes, names, and roles |
| `[CLIENT_LOGO_*]` | `src/components/PlaceholderBlocks.tsx` | Replace with approved client logos |
| `[EMBEDDED_MAP_PLACEHOLDER]` | `src/pages/ContactPage.tsx` | Replace with Google Maps iframe embed |
