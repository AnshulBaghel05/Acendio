import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HOME_CONTENT } from '../content/home';
import { SERVICES_CONTENT } from '../content/services';
import { SITE_CONFIG } from '../config/site';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/FaqAccordion';
import { CtaBand } from '../components/CtaBand';

interface FaqPageProps {
  onOpenBookModal: () => void;
}

export default function FaqPage({ onOpenBookModal }: FaqPageProps) {
  const allFaqs = [
    ...HOME_CONTENT.faqs,
    ...SERVICES_CONTENT.flatMap((svc) => svc.faqs.slice(1, 3)),
  ];

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | Acendio"
        description="Answers on how Acendio scopes custom proposals, deploys 24/7 AI voice receptionists, connects GoHighLevel pipelines, and maintains client websites."
        path="/faq"
        ogImage={SITE_CONFIG.ogImages.home}
        faqs={allFaqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />
          <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
            Frequently Asked Questions
          </p>
          <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
            Clear Answers on Scope, Ownership &amp; AI Guardrails
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
            Every engagement is scoped to your goals; we provide a custom proposal after a short discovery call. Review common technical and operational questions below.
          </p>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div>
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                General Engagement &amp; Method
              </p>
              <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
                Working With Acendio
              </h2>
              <div className="mt-5">
                <FaqAccordion items={HOME_CONTENT.faqs} idPrefix="faq-general" />
              </div>
            </div>

            <div className="border-t border-[#D9D4C7] pt-10">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Service-Specific Questions
              </p>
              <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
                Websites, AI Voice, Paid Ads &amp; CRM
              </h2>
              <div className="mt-6 grid gap-8 md:grid-cols-2">
                {SERVICES_CONTENT.slice(0, 6).map((svc) => (
                  <div key={svc.slug} className="border border-[#D9D4C7] bg-[#F4F1EA]/40 p-5">
                    <div className="flex items-center justify-between border-b border-[#D9D4C7] pb-3">
                      <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                        {svc.numeral} / {svc.shortTitle}
                      </span>
                      <Link
                        to={`/services/${svc.slug}`}
                        className="inline-flex items-center gap-1 font-mono-tabular text-[11px] font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                      >
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </Link>
                    </div>
                    <div className="mt-3 divide-y divide-[#D9D4C7]">
                      {svc.faqs.slice(1, 3).map((q) => (
                        <div key={q.question} className="py-3 first:pt-1 last:pb-0">
                          <h3 className="font-sans-tight text-sm font-semibold text-[#0E0F12]">
                            {q.question}
                          </h3>
                          <p className="mt-1.5 text-xs leading-relaxed text-[#5C5F66]">
                            {q.answer}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Still Have Questions?"
        headline="Walk Through Your Current Setup on a Short Discovery Call"
        subtitle="Get direct technical answers and a custom proposal scoped to your goals."
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
