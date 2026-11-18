# Acendio — AI & Digital Growth Agency Website

Production-ready React + TypeScript + Vite marketing website for **Acendio**, delivering conversion websites, 24/7 AI receptionists, paid ads, automated Google reviews, GoHighLevel CRM pipelines, AI chat, and custom software automation.

## Key Features & Architecture

- **Editorial Direction A System**: Paper `#F4F1EA` / `#FFFFFF` / Ink `#0E0F12` / Signal Orange `#FF5A1F` palette, self-hosted `Fraunces`, `Inter Tight`, and `JetBrains Mono` fonts via `@fontsource`, crisp hairline borders, custom interactive SVG diagrams, and zero stock imagery.
- **No Pricing / Proposal-Only Commercial Positioning**: Every commercial CTA routes to booking a strategy call or requesting a scoped custom proposal (`/contact` or `/thank-you`).
- **Complete Route Architecture**:
  - `/` (Home), `/services` + 7 dedicated `/services/:slug` architectures with distinct layouts & SVG schematics
  - `/industries` + 5 sector playbooks (`/industries/:slug`)
  - `/process`, `/about`, `/insights` + `/insights/:slug` (`/blog` redirects cleanly to `/insights`)
  - `/faq`, `/contact`, `/thank-you`, `/privacy-policy`, `/terms`
- **GoHighLevel (GHL) & Attribution Integration**:
  - Automatic session capture of `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, and `referrer`.
  - Preselected `Primary Service Interest` on service detail routes (`Select a service` elsewhere) plus hidden `sourcePage`, `serviceInterest`, and `utm_*` DOM inputs.
  - Webhook POST submission with retry, optional embedded GHL form fallback, and `/thank-you` calendar routing.

---

## Configuration & Environment Variables (Vercel / `.env`)

All contact details, local business fields, GoHighLevel endpoints, and analytics IDs are configured via environment variables (see `.env.example`). **Any optional field left empty (`""`) will not render anywhere in the UI or JSON-LD.**

### 1. Site & Contact Details (`/src/config/site.ts`)
- `VITE_SITE_URL` — Canonical production domain (e.g. `https://acendio.example.com`)
- `VITE_INDEXABLE` — Set `"false"` (default) during staging/preview to serve `noindex, nofollow`; set `"true"` when ready to launch in production so `npm run build` emits indexable `dist/robots.txt`, `dist/sitemap.xml`, and `index, follow` meta tags.
- `VITE_CONTACT_PHONE` / `VITE_CONTACT_WHATSAPP` / `VITE_CONTACT_EMAIL`
- `VITE_CONTACT_LOCATION` / `VITE_TARGET_REGIONS` / `VITE_CONTACT_ADDRESS` / `VITE_GBP_URL`
- `VITE_SOCIAL_LINKEDIN` / `VITE_SOCIAL_INSTAGRAM` / `VITE_SOCIAL_FACEBOOK` / `VITE_SOCIAL_X` / `VITE_SOCIAL_YOUTUBE`

### 2. GoHighLevel & Consent-Gated Analytics (`/src/config/ghl.ts`, `/src/lib/analytics.ts`)
- `VITE_GHL_WEBHOOK_URL`, `VITE_GHL_FORM_EMBED_URL`, `VITE_GHL_CALENDAR_EMBED_URL`
- `VITE_GHL_CHAT_WIDGET_SCRIPT_ID`, `VITE_GHL_TRACKING_ID`
- `VITE_GA4_ID`, `VITE_GTM_ID`, `VITE_META_PIXEL_ID`, `VITE_CLARITY_ID`

---

## Local Development & Build

```bash
npm install
npm run dev       # Vite dev server on http://localhost:3000
npm run lint      # TypeScript type-check (tsc --noEmit)
npm run build     # Production build -> dist/
```
