import { ArrowRight, Check } from 'lucide-react';
import { PROCESS_CONTENT } from '../content/process';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrefetchLink } from '../components/PrefetchLink';
import { SampleReportingMockup } from '../components/diagrams/SampleReportingMockup';
import { CtaBand } from '../components/CtaBand';

interface ProcessPageProps {
  onOpenBookModal: () => void;
}

export default function ProcessPage({ onOpenBookModal }: ProcessPageProps) {
  return (
    <>
      <SeoHead
        title={PROCESS_CONTENT.seo.title}
        description={PROCESS_CONTENT.seo.description}
        path="/process"
        ogImage={SITE_CONFIG.ogImages.home}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Process', url: '/process' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Process' }]} />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                How We Work · 01 — 04
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.45rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                {PROCESS_CONTENT.h1}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                {PROCESS_CONTENT.subheadline}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: 'process_hero' });
                  onOpenBookModal();
                }}
                className="btn-signal inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
              >
                <span>Start Phase 01 Audit</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Four Phases Editorial Ledger */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-[#D9D4C7] border-y border-[#0E0F12]">
            {PROCESS_CONTENT.phases.map((phase) => (
              <div key={phase.number} className="grid gap-8 py-10 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <span className="font-mono-tabular text-4xl font-semibold text-[#FF5A1F]">
                    {phase.number}
                  </span>
                  <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                    {phase.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#5C5F66]">
                    {phase.objective}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-mono-tabular text-[11px] font-semibold uppercase tracking-wider text-[#5C5F66]">
                    Execution Steps
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {phase.activities.map((act) => (
                      <li key={act} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#0E0F12]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-3">
                  <div className="border border-[#D9D4C7] bg-[#F4F1EA] p-5">
                    <p className="font-mono-tabular text-[11px] font-semibold uppercase tracking-wider text-[#FF5A1F]">
                      Phase Deliverables
                    </p>
                    <ul className="mt-3 divide-y divide-[#D9D4C7]">
                      {phase.outputs.map((out) => (
                        <li key={out} className="py-2 text-xs font-semibold text-[#0E0F12] first:pt-0 last:pb-0">
                          {out}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Contrast Band: Reporting Example */}
      <section className="section-ink border-b border-[#26282E] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Phase 04 Visibility
              </p>
              <h2 className="mt-3 font-editorial text-3xl font-semibold text-[#F4F1EA]">
                Every Channel Measured Against Booked Appointments
              </h2>
              <p className="text-muted-ink mt-3 text-sm leading-relaxed sm:text-base">
                Once live, Phase 04 reviews connect real ad spend, AI voice recovery, and web forms directly to calendar bookings inside GoHighLevel—without vanity metrics.
              </p>
              <PrefetchLink
                to="/contact"
                className="btn-outline-ink mt-6 inline-flex min-h-[44px] items-center gap-2 border-[#F4F1EA]/40 px-5 py-2.5 text-sm text-[#F4F1EA] hover:border-[#F4F1EA] hover:bg-[#F4F1EA] hover:text-[#0E0F12]"
              >
                <span>Request Your Growth Audit</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </PrefetchLink>
            </div>
            <div className="lg:col-span-7">
              <SampleReportingMockup />
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Phase 01 Discovery"
        headline={PROCESS_CONTENT.ctaHeadline}
        subtitle={PROCESS_CONTENT.ctaSubtitle}
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
