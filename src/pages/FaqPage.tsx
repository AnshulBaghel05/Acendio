import { HOME_CONTENT } from '../content/home';
import { SERVICES_CONTENT } from '../content/services';
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
    ...SERVICES_CONTENT.flatMap((s) => s.faqs.slice(1, 3)),
  ];

  return (
    <>
      <SeoHead
        title="Frequently Asked Questions | Acendio"
        description="Answers on how Acendio scopes engagements, deploys 24/7 AI receptionists, builds websites, runs paid ads, and automates CRM follow-up."
        path="/faq"
        faqs={allFaqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'FAQ', url: '/faq' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'FAQ' }]} />
          <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
            Frequently Asked Questions
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
            Questions About Working With Acendio
          </h1>
          <p className="mt-4 text-base text-[#9AA0AE]">
            Everything you need to know about our discovery calls, custom proposals, AI systems, website maintenance, and CRM automation.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FaqAccordion items={allFaqs} idPrefix="full-faq" />
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
