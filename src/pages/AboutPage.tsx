import { ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../content/about';
import { HOME_CONTENT } from '../content/home';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrefetchLink } from '../components/PrefetchLink';
import { AboutComposition } from '../components/diagrams/AboutComposition';
import { CtaBand } from '../components/CtaBand';

interface AboutPageProps {
  onOpenBookModal: () => void;
}

export default function AboutPage({ onOpenBookModal }: AboutPageProps) {
  return (
    <>
      <SeoHead
        title={ABOUT_CONTENT.seo.title}
        description={ABOUT_CONTENT.seo.description}
        path="/about"
        ogImage={SITE_CONFIG.ogImages.home}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                About Acendio
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(2.1rem,3.9vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                {ABOUT_CONTENT.h1}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                {ABOUT_CONTENT.subheadline}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: 'about_hero' });
                    onOpenBookModal();
                  }}
                  className="btn-signal inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <PrefetchLink
                  to="/process"
                  className="btn-outline-ink inline-flex min-h-[46px] items-center px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  See Our 4-Phase Process
                </PrefetchLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <AboutComposition />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Built Acendio */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Agency Model
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                One Accountable Partner Instead of Four Vendors
              </h2>
            </div>

            <div className="space-y-5 lg:col-span-8">
              {ABOUT_CONTENT.storyParagraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base leading-relaxed text-[#5C5F66]"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles Ledger */}
      <section className="bg-[#F4F1EA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Operating Standards
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
              How Every Client System Is Built and Maintained
            </h2>
          </div>

          <div className="mt-8 grid border-l border-t border-[#D9D4C7] bg-[#FFFFFF] md:grid-cols-2">
            {ABOUT_CONTENT.principles.map((principle, idx) => (
              <div
                key={principle.title}
                className="border-b border-r border-[#D9D4C7] p-6 sm:p-8"
              >
                <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Differentiators summary table */}
          <div className="mt-10 border border-[#D9D4C7] bg-[#FFFFFF] p-6 sm:p-8">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              {HOME_CONTENT.differentiators.eyebrow}
            </p>
            <h3 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
              {HOME_CONTENT.differentiators.title}
            </h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {HOME_CONTENT.differentiators.items.map((item) => (
                <div key={item.title} className="border-t border-[#D9D4C7] pt-3">
                  <p className="font-sans-tight text-sm font-semibold text-[#0E0F12]">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#5C5F66]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Discovery"
        headline={ABOUT_CONTENT.ctaHeadline}
        subtitle={ABOUT_CONTENT.ctaSubtitle}
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
