import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { getServiceBySlug, SERVICES_CONTENT } from '../content/services';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqAccordion } from '../components/FaqAccordion';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { ServiceIcon } from '../components/ServiceIcon';
import { TestimonialPlaceholder } from '../components/PlaceholderBlocks';
import NotFoundPage from './NotFoundPage';

interface ServiceDetailPageProps {
  onOpenBookModal: () => void;
}

export default function ServiceDetailPage({ onOpenBookModal }: ServiceDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServices = SERVICES_CONTENT.filter((item) =>
    service.relatedSlugs.includes(item.slug),
  );

  return (
    <>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        serviceSchema={{
          name: service.shortTitle,
          description: service.metaDescription,
          serviceType: service.primaryKeyword,
          url: `/services/${service.slug}`,
        }}
        faqs={service.faqs}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' },
          { name: service.shortTitle, url: `/services/${service.slug}` },
        ]}
      />

      {/* 1. HERO (Service-Specific H1 + CTA) */}
      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.shortTitle },
            ]}
          />
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2.5 text-xs font-medium text-[#22D3EE]">
                <ServiceIcon name={service.iconName} className="h-4 w-4" />
                <span className="font-mono-tabular">{service.shortTitle}</span>
              </div>
              <h1 className="mt-3 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-[1.1] text-[#F4F5F7]">
                {service.h1}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
                {service.heroSubheadline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', {
                      location: `service_hero_${service.slug}`,
                    });
                    onOpenBookModal();
                  }}
                  className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="#service-proposal-form"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#12141C] px-6 py-3 text-sm font-semibold text-[#F4F5F7] hover:border-[#22D3EE]/50 whitespace-nowrap"
                >
                  Get a Custom Proposal
                </a>
              </div>
            </div>
            <div className="lg:col-span-4">
              <TestimonialPlaceholder
                slotLabel={`[TESTIMONIAL_PLACEHOLDER_${service.slug.toUpperCase().slice(0, 12)}]`}
                context={`Verified client outcome for ${service.shortTitle}`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO IT'S FOR & 3. PROBLEM */}
      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="rounded-2xl border border-white/10 bg-[#12141C] p-7 lg:col-span-5">
              <h2 className="font-display text-2xl font-bold text-[#F4F5F7]">
                Who This Is Built For
              </h2>
              <ul className="mt-5 space-y-4">
                {service.whoItsFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[#9AA0AE]">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#22D3EE]"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
                Operational Bottleneck
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
                {service.problemTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-[#9AA0AE]">
                {service.problemParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT WE DELIVER */}
      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Deliverables
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7]">
              What Acendio Designs, Configures &amp; Maintains
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#12141C] p-6"
              >
                <h3 className="font-display text-lg font-bold text-[#F4F5F7]">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9AA0AE]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HOW IT WORKS + 6. TOOLS & INTEGRATIONS */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
                Rollout Sequence
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold text-[#F4F5F7]">
                How It Works From Discovery to Launch
              </h2>
              <div className="mt-8 space-y-4">
                {service.howItWorks.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-xl border border-white/10 bg-[#12141C] p-5"
                  >
                    <p className="font-mono-tabular text-xs font-semibold text-[#22D3EE]">
                      Step {step.step}
                    </p>
                    <h3 className="mt-1 font-display text-lg font-bold text-[#F4F5F7]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#9AA0AE]">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-[#12141C] p-6">
                <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
                  Tools &amp; Integrations
                </h2>
                <p className="mt-2 text-sm text-[#9AA0AE]">
                  Engineered to connect cleanly with your existing operational stack:
                </p>
                <div className="mt-5 grid gap-2.5">
                  {service.integrations.map((tool) => (
                    <div
                      key={tool}
                      className="rounded-lg border border-white/8 bg-[#0A0B10] px-4 py-2.5 text-sm text-[#F4F5F7]"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. QUALITATIVE OUTCOMES */}
              <div className="rounded-2xl border border-white/10 bg-[#12141C] p-6">
                <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
                  Outcomes You Can Expect
                </h2>
                <ul className="mt-4 space-y-3">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#9AA0AE]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                        aria-hidden="true"
                      />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SERVICE FAQ */}
      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-[#F4F5F7]">
            {service.shortTitle} Questions
          </h2>
          <div className="mt-8">
            <FaqAccordion items={service.faqs} idPrefix={`svc-${service.slug}`} />
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES (Internal Linking) */}
      <section className="border-t border-white/8 bg-[#0A0B10] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#F4F5F7]">
            Connected Services That Multiply Results
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/services/${rel.slug}`}
                className="gradient-border-card flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="flex items-center gap-2 text-[#22D3EE]">
                    <ServiceIcon name={rel.iconName} className="h-4 w-4" />
                    <span className="font-display text-base font-bold text-[#F4F5F7]">
                      {rel.shortTitle}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm text-[#9AA0AE]">{rel.bentoOutcome}</p>
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#22D3EE]">
                  View Service <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA BAND + PROPOSAL FORM */}
      <section
        id="service-proposal-form"
        className="border-t border-white/8 bg-gradient-to-b from-[#0A0B10] to-[#12141C] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold text-[#F4F5F7]">
                Scope {service.shortTitle} for Your Business
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#9AA0AE]">
                Every engagement is scoped to your goals, so we provide a custom proposal after a short discovery call.
              </p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: `service_bottom_${service.slug}` });
                    onOpenBookModal();
                  }}
                  className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7">
              <LeadCaptureForm
                idPrefix={`service-${service.slug}`}
                defaultService={service.shortTitle}
                heading={`Request a Custom ${service.shortTitle} Proposal`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
