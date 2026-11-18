import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Check,
  Layers,
  MessageCircle,
  Phone,
  Sparkles,
  Wrench,
} from 'lucide-react';
import { HOME_CONTENT } from '../content/home';
import { MORE_SOLUTIONS_CARD, SERVICES_CONTENT } from '../content/services';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { HeroDashboardVisual } from '../components/HeroDashboardVisual';
import { Reveal } from '../components/Reveal';
import { ServiceIcon } from '../components/ServiceIcon';
import {
  ClientLogoPlaceholderRow,
  TestimonialPlaceholder,
} from '../components/PlaceholderBlocks';
import { FaqAccordion } from '../components/FaqAccordion';
import { LeadCaptureForm } from '../components/LeadCaptureForm';

interface HomePageProps {
  onOpenBookModal: () => void;
}

export default function HomePage({ onOpenBookModal }: HomePageProps) {
  return (
    <>
      <SeoHead
        title={HOME_CONTENT.seo.title}
        description={HOME_CONTENT.seo.description}
        path="/"
        faqs={HOME_CONTENT.faqs}
      />

      {/* 1. HERO SECTION */}
      <section className="bg-mesh-hero relative overflow-hidden border-b border-white/8 pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col justify-center lg:col-span-6">
              <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                {HOME_CONTENT.hero.kicker}
              </p>
              <h1 className="mt-3 font-display text-[clamp(2.15rem,4vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-[#F4F5F7]">
                AI-Powered Websites, Receptionists &amp; Ads That Turn{' '}
                <span className="text-gradient-accent">Missed Opportunities</span> Into Booked Revenue
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
                {HOME_CONTENT.hero.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'hero_primary' });
                    onOpenBookModal();
                  }}
                  className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <Link
                  to="/services"
                  onClick={() => trackEvent('cta_click', { location: 'hero_secondary' })}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#12141C] px-6 py-3 text-sm font-semibold text-[#F4F5F7] transition-colors hover:border-[#22D3EE]/50 whitespace-nowrap"
                >
                  {HOME_CONTENT.hero.secondaryCta}
                </Link>
              </div>

              {/* Trust Strip */}
              <ul className="mt-9 flex flex-col gap-2.5 border-t border-white/10 pt-6 text-xs text-[#9AA0AE] sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
                {HOME_CONTENT.hero.trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 shrink-0 text-[#22C55E]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center lg:col-span-6">
              <HeroDashboardVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM BLOCK (Quantified-free pain points framed as revenue leakage) */}
      <section className="bg-[#0A0B10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
                {HOME_CONTENT.problems.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
                {HOME_CONTENT.problems.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#9AA0AE]">
                {HOME_CONTENT.problems.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {HOME_CONTENT.problems.items.map((item, idx) => (
              <Reveal key={item.id} delayMs={idx * 70}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#12141C] p-6 sm:p-7">
                  <div>
                    <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                      0{idx + 1}. {item.leakageType}
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold text-[#F4F5F7]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-white/8 pt-4">
                    <Link
                      to={item.remedyLink}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                    >
                      <span>{item.remedyLabel}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES BENTO GRID (8 cards: 7 core services + 8th More Solutions) */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                  {HOME_CONTENT.servicesSection.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
                  {HOME_CONTENT.servicesSection.title}
                </h2>
                <p className="mt-3 text-base text-[#9AA0AE]">
                  {HOME_CONTENT.servicesSection.subtitle}
                </p>
              </div>
              <Link
                to="/services"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline whitespace-nowrap"
              >
                <span>Compare All Services</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES_CONTENT.map((service, index) => {
              const isFeaturedSpan = index === 0 || index === 4;
              return (
                <Reveal
                  key={service.slug}
                  delayMs={index * 40}
                  className={isFeaturedSpan ? 'lg:col-span-2' : 'lg:col-span-1'}
                >
                  <article className="gradient-border-card flex h-full flex-col justify-between rounded-2xl p-6">
                    <div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#0A0B10] text-[#22D3EE]">
                        <ServiceIcon name={service.iconName} className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold text-[#F4F5F7]">
                        {service.shortTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                        {service.bentoOutcome}
                      </p>
                    </div>
                    <div className="mt-6 pt-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex min-h-[36px] items-center gap-1.5 text-sm font-semibold text-[#F4F5F7] transition-colors hover:text-[#22D3EE]"
                      >
                        <span>Learn more</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              );
            })}

            {/* 8th Reserve Slot: More Solutions */}
            <Reveal delayMs={280} className="lg:col-span-1">
              <article className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-[#6366F1]/40 bg-gradient-to-br from-[#12141C] to-[#171A29] p-6">
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#6366F1]/30 bg-[#0A0B10] text-[#818CF8]">
                    <Sparkles className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-[#F4F5F7]">
                    {MORE_SOLUTIONS_CARD.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                    {MORE_SOLUTIONS_CARD.outcome}
                  </p>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to={MORE_SOLUTIONS_CARD.to}
                    className="inline-flex min-h-[36px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                  >
                    <span>{MORE_SOLUTIONS_CARD.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. HOW ACENDIO WORKS (4-Step Timeline) */}
      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
                {HOME_CONTENT.process.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
                {HOME_CONTENT.process.title}
              </h2>
              <p className="mt-3 text-base text-[#9AA0AE]">
                {HOME_CONTENT.process.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HOME_CONTENT.process.steps.map((step, idx) => (
              <Reveal key={step.step} delayMs={idx * 60}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-[#12141C] p-6">
                  <div>
                    <span className="font-mono-tabular text-sm font-semibold text-[#22D3EE]">
                      {step.step}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-[#F4F5F7]">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#9AA0AE]">
                      {step.summary}
                    </p>
                  </div>
                  <p className="mt-6 border-t border-white/10 pt-4 text-xs font-medium text-[#F4F5F7]">
                    Output: {step.deliverable}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-white/10 bg-[#12141C] px-6 py-5">
            <p className="text-sm text-[#9AA0AE]">
              Want to inspect the full implementation workflow before booking?
            </p>
            <Link
              to="/process"
              className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline whitespace-nowrap"
            >
              <span>View Full Delivery Process</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. WHY ACENDIO (Light-Section Contrast Option for Visual Rhythm) */}
      <section className="section-light py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-semibold text-[#4F46E5]">
                {HOME_CONTENT.differentiators.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#0F172A] sm:text-4xl">
                {HOME_CONTENT.differentiators.title}
              </h2>
              <p className="text-muted-light mt-4 text-base leading-relaxed">
                {HOME_CONTENT.differentiators.subtitle}
              </p>
              <div className="mt-7">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'why_acendio' });
                    onOpenBookModal();
                  }}
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-lg bg-[#0F172A] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B] whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white lg:col-span-7">
              {HOME_CONTENT.differentiators.items.map((diff, idx) => (
                <div key={diff.title} className="p-6">
                  <div className="flex items-start gap-4">
                    <span className="font-mono-tabular mt-0.5 text-xs font-semibold text-[#4F46E5]">
                      0{idx + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0F172A]">
                        {diff.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SERVED */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                  Sector Specialization
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
                  Built for High-Intent Service &amp; Local Growth Operators
                </h2>
                <p className="mt-3 text-base text-[#9AA0AE]">
                  Tailored call scripts, landing workflows, and review automation across core local industries in [TARGET REGIONS].
                </p>
              </div>
              <Link
                to="/industries"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline whitespace-nowrap"
              >
                <span>Explore All Industries</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_CONTENT.map((industry, idx) => (
              <Reveal key={industry.slug} delayMs={idx * 45}>
                <article className="gradient-border-card flex h-full flex-col justify-between rounded-2xl p-6">
                  <div>
                    <div className="flex items-center gap-2.5 text-[#818CF8]">
                      {industry.slug === 'home-services' ? (
                        <Wrench className="h-4 w-4" aria-hidden="true" />
                      ) : industry.slug === 'real-estate' ? (
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                      ) : (
                        <Layers className="h-4 w-4" aria-hidden="true" />
                      )}
                      <span className="font-mono-tabular text-xs">Industry Vertical</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-[#F4F5F7]">
                      {industry.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                      {industry.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-2">
                    <Link
                      to={`/industries/${industry.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                    >
                      <span>View {industry.name.split(' ')[0]} Solutions</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESULTS / PROOF SECTION (Placeholder components only — zero fabricated stats) */}
      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
              Client Outcomes &amp; Verification
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
              Verified Client Proof Slots
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
              We never publish fabricated case-study figures or synthetic reviews. Replace the marked placeholder blocks below with approved client testimonials and logos.
            </p>
          </div>

          <div className="mt-8">
            <ClientLogoPlaceholderRow />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <TestimonialPlaceholder
              slotLabel="[TESTIMONIAL_PLACEHOLDER_01]"
              context="AI Receptionist & Missed-Call Recovery client outcome"
            />
            <TestimonialPlaceholder
              slotLabel="[TESTIMONIAL_PLACEHOLDER_02]"
              context="Website Rebuild & Ads Management client outcome"
            />
            <TestimonialPlaceholder
              slotLabel="[TESTIMONIAL_PLACEHOLDER_03]"
              context="Review Automation & CRM Pipeline client outcome"
            />
          </div>
        </div>
      </section>

      {/* 8. TECHNOLOGY / INTEGRATION ROW (Clean text/icon grid, no false partnership claims) */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              {HOME_CONTENT.techStack.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
              {HOME_CONTENT.techStack.title}
            </h2>
            <p className="mt-2 text-sm text-[#9AA0AE]">
              {HOME_CONTENT.techStack.subtitle}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_CONTENT.techStack.layers.map((layer) => (
              <div
                key={layer.category}
                className="rounded-xl border border-white/10 bg-[#12141C] px-5 py-4"
              >
                <p className="text-sm font-semibold text-[#F4F5F7]">{layer.category}</p>
                <p className="mt-1 text-xs text-[#9AA0AE]">{layer.tools}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION (9 questions, zero pricing figures, FAQPage schema active) */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
              Frequently Asked Questions
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
              Clear Answers Before We Talk
            </h2>
          </div>
          <div className="mt-10">
            <FaqAccordion items={HOME_CONTENT.faqs} idPrefix="home-faq" />
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/faq"
              className="text-sm font-semibold text-[#22D3EE] hover:underline"
            >
              Read all frequently asked questions →
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FINAL CTA BAND WITH EMBEDDED GHL FORM */}
      <section className="border-t border-white/8 bg-gradient-to-b from-[#0A0B10] to-[#12141C] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                Start Your Discovery
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7] sm:text-4xl">
                Get a Custom Proposal Scoped to Your Business
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#9AA0AE]">
                Share your current bottlenecks—whether unanswered phone calls, slow follow-up, an outdated site, or paid ad efficiency—and we will map a practical rollout plan.
              </p>

              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                <a
                  href={SITE_CONFIG.phoneHref}
                  onClick={() => trackEvent('phone_click', { location: 'home_final_cta' })}
                  className="flex min-h-[44px] items-center gap-3 text-[#F4F5F7] hover:text-[#22D3EE]"
                >
                  <Phone className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                  <span>Direct Line: {SITE_CONFIG.phone}</span>
                </a>
                <a
                  href={SITE_CONFIG.whatsappHref}
                  onClick={() => trackEvent('whatsapp_click', { location: 'home_final_cta' })}
                  className="flex min-h-[44px] items-center gap-3 text-[#F4F5F7] hover:text-[#22D3EE]"
                >
                  <MessageCircle className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
                  <span>WhatsApp: {SITE_CONFIG.whatsappNumber}</span>
                </a>
              </div>

              <div className="mt-8">
                <TestimonialPlaceholder
                  slotLabel="[TESTIMONIAL_PLACEHOLDER_CTA]"
                  context="Decision-stage client endorsement"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <LeadCaptureForm
                idPrefix="home-bottom"
                heading="Request a Strategy Call & Custom Proposal"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
