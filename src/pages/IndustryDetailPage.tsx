import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CtaBand } from '../components/CtaBand';
import NotFoundPage from './NotFoundPage';

interface IndustryDetailPageProps {
  onOpenBookModal: () => void;
}

export default function IndustryDetailPage({ onOpenBookModal }: IndustryDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const industry = INDUSTRIES_CONTENT.find((item) => item.slug === slug);

  if (!industry) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SeoHead
        title={industry.metaTitle}
        description={industry.metaDescription}
        path={`/industries/${industry.slug}`}
        ogImage={SITE_CONFIG.ogImages.industry}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: industry.shortName, url: `/industries/${industry.slug}` },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Industries', to: '/industries' },
              { label: industry.shortName },
            ]}
          />
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Sector Architecture · {industry.shortName}
              </p>
              <h1 className="mt-3 font-editorial text-[clamp(2rem,3.8vw,3.3rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                {industry.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                {industry.summary}
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: `industry_hero_${industry.slug}` });
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

      {/* Pain Points + Workflow Sequence */}
      <section className="border-b border-[#D9D4C7] bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Common Bottlenecks
              </p>
              <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
                Where {industry.shortName} Teams Lose Inquiries
              </h2>
              <ul className="mt-6 divide-y divide-[#D9D4C7] border-y border-[#D9D4C7]">
                {industry.painPoints.map((point, idx) => (
                  <li key={point} className="flex items-start gap-3 py-4">
                    <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-relaxed text-[#0E0F12]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="border border-[#0E0F12] bg-[#F4F1EA] p-6 sm:p-8">
                <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                  Illustrative Booking Sequence
                </p>
                <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12]">
                  How an Inbound Inquiry Moves to Booked Work
                </h2>
                <ol className="mt-6 space-y-4">
                  {industry.workflowExample.map((step, idx) => (
                    <li
                      key={step}
                      className="flex items-start gap-4 border border-[#D9D4C7] bg-[#FFFFFF] p-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#0E0F12] font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                        {idx + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-[#0E0F12]">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Stack */}
      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Recommended Systems
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
              Core Architecture for {industry.name}
            </h2>
          </div>

          <div className="mt-8 grid divide-y divide-[#D9D4C7] border border-[#D9D4C7] bg-[#FFFFFF] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {industry.recommendedStack.map((item) => (
              <div key={item.title} className="flex flex-col justify-between p-6">
                <div>
                  <div className="flex items-center gap-2 font-mono-tabular text-[11px] font-semibold text-[#FF5A1F]">
                    <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>RECOMMENDED MODULE</span>
                  </div>
                  <h3 className="mt-3 font-editorial text-xl font-semibold text-[#0E0F12]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">{item.detail}</p>
                </div>
                <Link
                  to={`/services/${item.serviceSlug}`}
                  className="link-editorial mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
                >
                  <span>Inspect Service Architecture</span>
                  <ArrowRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Form */}
      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Custom Proposal
            </p>
            <h2 className="mt-2 font-editorial text-3xl font-semibold text-[#0E0F12]">
              Request a {industry.shortName} Growth Proposal
            </h2>
          </div>
          <LeadCaptureForm idPrefix={`industry-${industry.slug}`} />
        </div>
      </section>

      <CtaBand
        eyebrow={industry.shortName}
        headline={industry.ctaHeadline}
        subtitle={industry.ctaSubtitle}
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
