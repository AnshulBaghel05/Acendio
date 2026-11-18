import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
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
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
          { name: industry.name, url: `/industries/${industry.slug}` },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Industries', to: '/industries' },
              { label: industry.name },
            ]}
          />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              {industry.name}
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              {industry.headline}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              {industry.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={() => {
                  trackEvent('cta_click', { location: `industry_${industry.slug}` });
                  onOpenBookModal();
                }}
                className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
              >
                <span>Book a Free Strategy Call</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <Link
                to="/services"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#12141C] px-6 py-3 text-sm font-semibold text-[#F4F5F7] hover:border-[#22D3EE]/50 whitespace-nowrap"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="rounded-2xl border border-white/10 bg-[#12141C] p-7 lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-[#F4F5F7]">
                Common Leakage Points
              </h2>
              <ul className="mt-5 space-y-4">
                {industry.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[#9AA0AE]">
                    <span className="font-mono-tabular mt-0.5 text-xs text-[#22D3EE]">—</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#12141C] p-7 lg:col-span-7">
              <h2 className="font-display text-2xl font-bold text-[#F4F5F7]">
                Recommended Acendio System Stack
              </h2>
              <div className="mt-6 space-y-4">
                {industry.recommendedStack.map((item) => (
                  <div
                    key={item.title}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-white/8 bg-[#0A0B10] p-5 sm:flex-row sm:items-center"
                  >
                    <div>
                      <h3 className="font-display text-base font-bold text-[#F4F5F7]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#9AA0AE]">{item.detail}</p>
                    </div>
                    <Link
                      to={`/services/${item.serviceSlug}`}
                      className="inline-flex min-h-[36px] shrink-0 items-center gap-1 text-xs font-semibold text-[#22D3EE] hover:underline whitespace-nowrap"
                    >
                      View Service <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-[#12141C] p-7 sm:p-9">
            <h2 className="font-display text-2xl font-bold text-[#F4F5F7]">
              Example End-to-End Customer Journey
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {industry.workflowExample.map((step, idx) => (
                <div key={step} className="rounded-xl border border-white/8 bg-[#0A0B10] p-5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#22C55E]">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    <span className="font-mono-tabular">Step 0{idx + 1}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#F4F5F7]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <LeadCaptureForm
            idPrefix={`industry-${industry.slug}`}
            heading={`Request a Custom Proposal for Your ${industry.name.split(' ')[0]} Team`}
          />
        </div>
      </section>
    </>
  );
}
