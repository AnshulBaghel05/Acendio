import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { MORE_SOLUTIONS_CARD, SERVICES_CONTENT } from '../content/services';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceIcon } from '../components/ServiceIcon';
import { CtaBand } from '../components/CtaBand';

interface ServicesOverviewPageProps {
  onOpenBookModal: () => void;
}

export default function ServicesOverviewPage({ onOpenBookModal }: ServicesOverviewPageProps) {
  return (
    <>
      <SeoHead
        title="AI & Digital Growth Services | Acendio"
        description="Explore Acendio services: conversion websites, 24/7 AI receptionists, Google & Meta ads, review automation, CRM pipelines, AI chat, and custom software."
        path="/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Acendio Capabilities
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              Integrated Web, AI &amp; Growth Automation Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              Deploy a single high-impact module or combine all seven systems into one accountable lead capture and booking engine.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES_CONTENT.map((service, idx) => (
              <article
                key={service.slug}
                className="gradient-border-card flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0A0B10] text-[#22D3EE]">
                      <ServiceIcon name={service.iconName} className="h-5 w-5" />
                    </div>
                    <span className="font-mono-tabular text-xs text-[#9AA0AE]">0{idx + 1}</span>
                  </div>
                  <h2 className="mt-5 font-display text-xl font-bold text-[#F4F5F7]">
                    {service.shortTitle}
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#9AA0AE]">
                    {service.heroSubheadline}
                  </p>
                  <ul className="mt-5 space-y-2 border-t border-white/8 pt-4 text-xs text-[#9AA0AE]">
                    {service.deliverables.slice(0, 3).map((d) => (
                      <li key={d.title}>· {d.title}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                  >
                    <span>Explore {service.shortTitle}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}

            <article className="flex flex-col justify-between rounded-2xl border border-dashed border-[#6366F1]/40 bg-[#12141C] p-7">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#6366F1]/30 bg-[#0A0B10] text-[#818CF8]">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 font-display text-xl font-bold text-[#F4F5F7]">
                  {MORE_SOLUTIONS_CARD.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9AA0AE]">
                  {MORE_SOLUTIONS_CARD.outcome}
                </p>
              </div>
              <div className="mt-6 pt-2">
                <Link
                  to={MORE_SOLUTIONS_CARD.to}
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                >
                  <span>{MORE_SOLUTIONS_CARD.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
