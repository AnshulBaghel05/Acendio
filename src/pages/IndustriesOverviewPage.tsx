import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_CONTENT } from '../content/industries';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
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
        title="Industries Served | Acendio AI & Growth Agency"
        description="Industry-specific websites, AI voice receptionists, paid ads, and GoHighLevel CRM automation for real estate, home services, clinics, hospitality, and retail."
        path="/industries"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Industries' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Industries Served Across [TARGET REGIONS]
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              AI &amp; Digital Growth Playbooks Engineered for Your Industry
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              Different verticals lose leads in different ways. We tailor call scripts, ad offers, CRM stages, and review triggers to match how your buyers actually book.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_CONTENT.map((industry) => (
              <article
                key={industry.slug}
                className="gradient-border-card flex flex-col justify-between rounded-2xl p-7"
              >
                <div>
                  <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
                    {industry.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
                    {industry.summary}
                  </p>
                  <ul className="mt-5 space-y-1.5 border-t border-white/10 pt-4 text-xs text-[#9AA0AE]">
                    {industry.painPoints.slice(0, 2).map((point) => (
                      <li key={point}>· {point}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-2">
                  <Link
                    to={`/industries/${industry.slug}`}
                    className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                  >
                    <span>Explore Playbook</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
