import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SERVICES_CONTENT } from '../content/services';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBand } from '../components/CtaBand';

interface ServicesOverviewPageProps {
  onOpenBookModal: () => void;
}

export default function ServicesOverviewPage({ onOpenBookModal }: ServicesOverviewPageProps) {
  return (
    <>
      <SeoHead
        title="AI & Digital Growth Services | Acendio"
        description="Explore Acendio services: websites, 24/7 AI receptionists, paid ads, social media management, UGC-style video/post creation, review automation, CRM follow-up, AI chat, and custom software."
        path="/services"
        ogImage={SITE_CONFIG.ogImages.service}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Services' }]} />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                System Index · 01 — 09
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.5rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                Nine Connected Growth Services Built to Work as One Stack
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                Start with your most immediate revenue leak—missed calls, slow follow-up, inconsistent social channels, fatigued ad creatives, or weak mobile conversion—or deploy the full stack connected to GoHighLevel.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: 'services_overview_hero' });
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

      {/* Architectural Ledger of Services */}
      <section className="bg-[#FFFFFF] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-[#D9D4C7] border-y border-[#0E0F12]">
            {SERVICES_CONTENT.map((service) => (
              <div
                key={service.slug}
                className="grid gap-6 py-8 lg:grid-cols-12 lg:items-start"
              >
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono-tabular text-xl font-semibold text-[#FF5A1F]">
                      {service.numeral}
                    </span>
                    <h2 className="font-editorial text-2xl font-semibold text-[#0E0F12]">
                      <Link to={`/services/${service.slug}`} className="hover:text-[#FF5A1F]">
                        {service.shortTitle}
                      </Link>
                    </h2>
                  </div>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-[#5C5F66]">
                    {service.heroSubheadline}
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#5C5F66]">
                    Core Deliverables Included
                  </p>
                  <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                    {service.deliverables.slice(0, 4).map((item) => (
                      <li
                        key={item.title}
                        className="border-l-2 border-[#D9D4C7] pl-3 text-xs font-medium text-[#0E0F12]"
                      >
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col items-start gap-2.5 lg:col-span-3 lg:items-end lg:text-right">
                  <span className="font-mono-tabular text-[11px] text-[#5C5F66]">
                    Scoped custom proposal after discovery
                  </span>
                  <Link
                    to={`/services/${service.slug}`}
                    className="btn-outline-ink inline-flex min-h-[42px] items-center gap-2 px-4 py-2 text-xs whitespace-nowrap"
                  >
                    <span>Explore {service.shortTitle.split(' ')[0]} Architecture</span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Balanced 10th-Slot Custom Scoping Block */}
          <div className="mt-10 grid items-center gap-6 border border-[#0E0F12] bg-[#F4F1EA] p-6 sm:p-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                10 / INTEGRATED BUNDLES
              </p>
              <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
                Need Multiple Systems Deployed Together?
              </h2>
              <p className="mt-2 text-sm text-[#5C5F66]">
                We sequence website development, AI receptionists, paid ads, social media management, UGC-style creative production, and GoHighLevel CRM automation under a single rollout plan—never cookie-cutter tiers.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="btn-signal inline-flex min-h-[46px] items-center gap-2 px-6 py-3 text-sm whitespace-nowrap"
              >
                <span>Request a Custom Scope</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Scoping & Architecture"
        headline="Not Sure Which Gap Is Costing You the Most Bookings?"
        subtitle="Book a short discovery call. We will inspect your current call flow, website speed, and CRM response times together."
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
