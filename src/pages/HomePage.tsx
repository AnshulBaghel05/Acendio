import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { HOME_CONTENT } from '../content/home';
import { SERVICES_CONTENT } from '../content/services';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { BLOG_POSTS } from '../content/blog';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Reveal } from '../components/Reveal';
import { HomeDiagram } from '../components/diagrams/HomeDiagram';
import { SampleReportingMockup } from '../components/diagrams/SampleReportingMockup';
import { BlogDiagramCover } from '../components/diagrams/BlogDiagramCover';
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
        ogImage={SITE_CONFIG.ogImages.home}
        faqs={HOME_CONTENT.faqs}
      />

      {/* 01. Editorial Hero */}
      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-6">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                {HOME_CONTENT.hero.eyebrow}
              </p>

              <h1 className="mt-4 font-editorial text-[clamp(2.25rem,4.2vw,3.85rem)] font-semibold leading-[1.04] tracking-[-0.025em] text-[#0E0F12]">
                {HOME_CONTENT.hero.h1}
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                {HOME_CONTENT.hero.subheadline}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'hero_primary' });
                    onOpenBookModal();
                  }}
                  className="btn-signal inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>

                <Link
                  to="/services"
                  onClick={() => trackEvent('cta_click', { location: 'hero_secondary' })}
                  className="btn-outline-ink inline-flex min-h-[48px] items-center gap-2 px-5 py-3 text-sm whitespace-nowrap"
                >
                  <span>{HOME_CONTENT.hero.secondaryCta}</span>
                </Link>
              </div>

              {/* Three calm method lines — zero inflated widget collage */}
              <ul className="mt-8 space-y-2.5 border-t border-[#D9D4C7] pt-6">
                {HOME_CONTENT.hero.methodNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5 text-sm text-[#0E0F12]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6">
              <HomeDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* 02. Where Demand Drops Off (Ledger Rows) */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                {HOME_CONTENT.problems.eyebrow}
              </p>
              <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight text-[#0E0F12] sm:text-4xl">
                {HOME_CONTENT.problems.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5F66] sm:text-base">
                {HOME_CONTENT.problems.subtitle}
              </p>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-[#D9D4C7] border-y border-[#D9D4C7]">
                {HOME_CONTENT.problems.items.map((item, idx) => (
                  <Reveal key={item.id} delayMs={idx * 40}>
                    <div className="grid gap-4 py-6 sm:grid-cols-12 sm:items-start">
                      <div className="sm:col-span-3">
                        <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                          {String(idx + 1).padStart(2, '0')} / {item.category}
                        </span>
                      </div>
                      <div className="sm:col-span-9">
                        <h3 className="font-sans-tight text-lg font-semibold text-[#0E0F12]">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                          {item.description}
                        </p>
                        <Link
                          to={item.remedyLink}
                          className="link-editorial mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
                        >
                          <span>{item.remedyLabel}</span>
                          <ArrowUpRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. Capabilities Ledger (8-Row Asymmetric Index, Zero Dead-Space Cards) */}
      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[#0E0F12] pb-6">
            <div className="max-w-2xl">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                {HOME_CONTENT.servicesSection.eyebrow}
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12] sm:text-4xl">
                {HOME_CONTENT.servicesSection.title}
              </h2>
              <p className="mt-2 text-sm text-[#5C5F66] sm:text-base">
                {HOME_CONTENT.servicesSection.subtitle}
              </p>
            </div>
            <Link
              to="/services"
              className="btn-outline-ink inline-flex min-h-[44px] items-center gap-2 px-4 py-2 text-sm whitespace-nowrap"
            >
              <span>Compare All Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="divide-y divide-[#D9D4C7] border-b border-[#0E0F12] bg-[#FFFFFF]">
            {SERVICES_CONTENT.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group grid items-center gap-4 px-5 py-5 transition-colors hover:bg-[#F4F1EA]/70 sm:grid-cols-12 sm:px-6"
              >
                <div className="flex items-baseline gap-3 sm:col-span-4">
                  <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                    {service.numeral}
                  </span>
                  <h3 className="font-sans-tight text-base font-semibold text-[#0E0F12] group-hover:text-[#FF5A1F]">
                    {service.shortTitle}
                  </h3>
                </div>

                <p className="text-sm text-[#5C5F66] sm:col-span-6">
                  {service.bentoOutcome}
                </p>

                <div className="flex items-center justify-start font-mono-tabular text-xs font-medium text-[#0E0F12] sm:col-span-2 sm:justify-end">
                  <span className="inline-flex items-center gap-1.5 group-hover:text-[#FF5A1F]">
                    <span>Inspect System</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}

            {/* 10th row: Full Growth Stack / Custom Proposal */}
            <div className="grid items-center gap-4 bg-[#0E0F12] px-5 py-5 text-[#F4F1EA] sm:grid-cols-12 sm:px-6">
              <div className="flex items-baseline gap-3 sm:col-span-4">
                <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">10</span>
                <p className="font-sans-tight text-base font-semibold">
                  Combined Acquisition, Creative &amp; CRM Stack
                </p>
              </div>
              <p className="text-sm text-[#A5A8B0] sm:col-span-6">
                Bundle web, AI voice, paid ads, social management, UGC-style creative, and GoHighLevel into one scoped rollout.
              </p>
              <div className="sm:col-span-2 sm:text-right">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'home_services_ledger_bundle' });
                    onOpenBookModal();
                  }}
                  className="btn-signal inline-flex min-h-[40px] items-center gap-1.5 px-4 py-2 text-xs whitespace-nowrap"
                >
                  <span>Book Strategy Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Four-Phase Process Row */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                {HOME_CONTENT.process.eyebrow}
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12] sm:text-4xl">
                {HOME_CONTENT.process.title}
              </h2>
              <p className="mt-2 text-sm text-[#5C5F66] sm:text-base">
                {HOME_CONTENT.process.subtitle}
              </p>
            </div>
            <Link
              to="/process"
              className="link-editorial inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
            >
              <span>Full 4-Phase Rollout Plan</span>
              <ArrowRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid divide-y divide-[#D9D4C7] border border-[#D9D4C7] md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4">
            {HOME_CONTENT.process.steps.map((step) => (
              <div key={step.step} className="flex flex-col justify-between p-6">
                <div>
                  <span className="font-mono-tabular text-3xl font-semibold text-[#FF5A1F]">
                    {step.step}
                  </span>
                  <h3 className="mt-3 font-sans-tight text-lg font-semibold text-[#0E0F12]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                    {step.summary}
                  </p>
                </div>
                <p className="mt-5 border-t border-[#D9D4C7] pt-3 font-mono-tabular text-[11px] font-medium text-[#0E0F12]">
                  Output: {step.deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Dark Contrast Band: How We Measure Results + Sample Reporting Mockup */}
      <section className="section-ink border-b border-[#26282E] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                {HOME_CONTENT.measurement.eyebrow}
              </p>
              <h2 className="mt-3 font-editorial text-3xl font-semibold leading-tight text-[#F4F1EA] sm:text-4xl">
                {HOME_CONTENT.measurement.title}
              </h2>
              <p className="text-muted-ink mt-3 text-sm leading-relaxed sm:text-base">
                {HOME_CONTENT.measurement.subtitle}
              </p>

              <div className="mt-8 divide-y divide-[#26282E] border-y border-[#26282E]">
                {HOME_CONTENT.measurement.pillars.map((pillar) => (
                  <div key={pillar.metric} className="py-4">
                    <p className="font-mono-tabular text-xs font-medium text-[#FF5A1F]">
                      {pillar.metric}
                    </p>
                    <h3 className="mt-1 font-sans-tight text-base font-semibold text-[#F4F1EA]">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-ink mt-1 text-sm leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <SampleReportingMockup />

              <div className="mt-6 grid gap-4 border border-[#26282E] bg-[#14161B] p-5 sm:grid-cols-2">
                {HOME_CONTENT.techStack.layers.map((layer) => (
                  <div key={layer.category} className="border-b border-[#26282E]/80 pb-2.5 last:border-b-0">
                    <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#FF5A1F]">
                      {layer.category}
                    </p>
                    <p className="mt-1 text-xs text-[#F4F1EA]">{layer.tools}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06. Industries Asymmetric Index */}
      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Industries We Serve
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12] sm:text-4xl">
                Built for Businesses Where Missed Inquiries Cost Jobs
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#5C5F66]">
                Every vertical carries distinct booking rules, urgency triggers, and compliance needs. Inspect how our workflows adapt across five core sectors.
              </p>
              <Link
                to="/industries"
                className="btn-outline-ink mt-6 inline-flex min-h-[44px] items-center gap-2 px-4 py-2 text-sm whitespace-nowrap"
              >
                <span>Explore All Industries</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-[#D9D4C7] border border-[#D9D4C7] bg-[#FFFFFF]">
                {INDUSTRIES_CONTENT.map((ind, idx) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    className="group grid items-center gap-3 px-5 py-4.5 transition-colors hover:bg-[#F4F1EA]/70 sm:grid-cols-12 sm:px-6"
                  >
                    <div className="flex items-baseline gap-3 sm:col-span-4">
                      <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="font-sans-tight text-base font-semibold text-[#0E0F12] group-hover:text-[#FF5A1F]">
                        {ind.shortName}
                      </span>
                    </div>
                    <p className="text-sm text-[#5C5F66] sm:col-span-6">{ind.headline}</p>
                    <div className="font-mono-tabular text-xs font-medium text-[#0E0F12] sm:col-span-2 sm:text-right">
                      <span className="inline-flex items-center gap-1 group-hover:text-[#FF5A1F]">
                        <span>View Playbook</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07. Editorial Insights Preview */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#D9D4C7] pb-5">
            <div>
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Insights &amp; Architecture Guides
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                Practical Blueprints for Web, Voice &amp; CRM
              </h2>
            </div>
            <Link
              to="/insights"
              className="link-editorial inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
            >
              <span>All Guides</span>
              <ArrowRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col border border-[#D9D4C7] bg-[#FFFFFF] transition-colors hover:border-[#0E0F12]"
              >
                <BlogDiagramCover type={post.diagramType} category={post.category} />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center justify-between font-mono-tabular text-xs text-[#5C5F66]">
                    <span>{post.displayPublishedDate}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="mt-3 font-editorial text-xl font-semibold leading-snug text-[#0E0F12]">
                    <Link to={`/insights/${post.slug}`} className="hover:text-[#FF5A1F]">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#5C5F66]">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/insights/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-1.5 font-mono-tabular text-xs font-semibold text-[#0E0F12] hover:text-[#FF5A1F]"
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 08. FAQ & Bottom Conversion Section */}
      <section className="bg-[#F4F1EA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Questions &amp; Answers
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <FaqAccordion items={HOME_CONTENT.faqs} idPrefix="home-faq" />
              </div>
            </div>

            <div className="lg:col-span-6">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Custom Proposal
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                {HOME_CONTENT.bottomCta.headline}
              </h2>
              <p className="mt-2 text-sm text-[#5C5F66]">
                {HOME_CONTENT.bottomCta.subtitle}
              </p>
              <div className="mt-6">
                <LeadCaptureForm idPrefix="home-bottom" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
