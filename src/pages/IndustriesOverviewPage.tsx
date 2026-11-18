import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrefetchLink } from '../components/PrefetchLink';
import { CtaBand } from '../components/CtaBand';

interface IndustriesOverviewPageProps {
  onOpenBookModal: () => void;
}

export default function IndustriesOverviewPage({
  onOpenBookModal,
}: IndustriesOverviewPageProps) {
  return (
    <>
      <SeoHead
        title="Industries We Serve | Acendio AI & Growth Systems"
        description="Explore tailored websites, AI voice receptionists, paid ads, and CRM workflows for real estate, home services, clinics, hospitality, and local retail."
        path="/industries"
        ogImage={SITE_CONFIG.ogImages.industry}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Industries' }]} />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Sector Playbooks
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.45rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                Growth &amp; AI Systems Tailored to How Your Industry Books Work
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                Each local vertical handles urgency, scheduling, and follow-up differently. Inspect our playbooks built around real operator bottlenecks across five core sectors.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: 'industries_hero' });
                  onOpenBookModal();
                }}
                className="btn-signal inline-flex min-h-[48px] items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Balanced 6-cell hairline table (5 core sectors + Custom Local Verticals, zero orphans) */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid border-l border-t border-[#D9D4C7] md:grid-cols-2">
            {INDUSTRIES_CONTENT.map((ind, idx) => (
              <div
                key={ind.slug}
                className="flex flex-col justify-between border-b border-r border-[#D9D4C7] p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                      {String(idx + 1).padStart(2, '0')} / {ind.shortName.toUpperCase()}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#5C5F66]" aria-hidden="true" />
                  </div>
                  <h2 className="mt-3 font-editorial text-2xl font-semibold text-[#0E0F12]">
                    <PrefetchLink to={`/industries/${ind.slug}`} className="hover:text-[#FF5A1F]">
                      {ind.name}
                    </PrefetchLink>
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">{ind.summary}</p>
                </div>

                <div className="mt-6 border-t border-[#D9D4C7] pt-4">
                  <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#5C5F66]">
                    Primary Workflows
                  </p>
                  <p className="mt-1 text-xs font-medium text-[#0E0F12]">
                    {ind.recommendedStack.map((item) => item.title).join(' · ')}
                  </p>
                  <PrefetchLink
                    to={`/industries/${ind.slug}`}
                    className="link-editorial mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
                  >
                    <span>Explore {ind.shortName} Playbook</span>
                    <ArrowRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                  </PrefetchLink>
                </div>
              </div>
            ))}

            {/* 6th balanced cell */}
            <div className="flex flex-col justify-between border-b border-r border-[#D9D4C7] bg-[#F4F1EA] p-6 sm:p-8">
              <div>
                <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                  06 / PROFESSIONAL &amp; REGIONAL SERVICES
                </span>
                <h2 className="mt-3 font-editorial text-2xl font-semibold text-[#0E0F12]">
                  Custom Scopes for Adjacent Service Businesses
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                  Operate a law firm, accounting practice, B2B regional distributor, or specialized agency? Every Acendio architecture is scoped to your booking model on discovery.
                </p>
              </div>
              <div className="mt-6 border-t border-[#D9D4C7] pt-4">
                <PrefetchLink
                  to="/contact"
                  className="btn-signal inline-flex min-h-[44px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  <span>Discuss Your Business</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </PrefetchLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Industry Fit"
        headline="See How This Stack Maps to Your Day-to-Day Lead Flow"
        subtitle="Book a short discovery call to walk through call routing, website speed, and CRM follow-up for your sector."
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
