import { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { getServiceBySlug, SERVICES_CONTENT, ServicePageData } from '../content/services';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PrefetchLink } from '../components/PrefetchLink';
import { ServiceDiagram } from '../components/diagrams/ServiceDiagram';
import { FaqAccordion } from '../components/FaqAccordion';
import { LeadCaptureForm } from '../components/LeadCaptureForm';
import { CtaBand } from '../components/CtaBand';
import NotFoundPage from './NotFoundPage';

const SocialMediaVisual = lazy(() =>
  import('../components/diagrams/SocialMediaVisual').then((m) => ({
    default: m.SocialMediaVisual,
  })),
);

const UgcCreativeVisual = lazy(() =>
  import('../components/diagrams/UgcCreativeVisual').then((m) => ({
    default: m.UgcCreativeVisual,
  })),
);

interface ServiceDetailPageProps {
  onOpenBookModal: () => void;
}

type SectionKey =
  | 'diagram'
  | 'who'
  | 'problem'
  | 'deliverables'
  | 'platforms'
  | 'creative-formats'
  | 'process'
  | 'outcomes-integrations'
  | 'faq'
  | 'form';

const SERVICE_SECTION_ORDERS: Record<ServicePageData['diagramType'], SectionKey[]> = {
  'site-architecture': ['problem', 'deliverables', 'process', 'outcomes-integrations', 'faq', 'form'],
  'call-flow': ['diagram', 'who', 'problem', 'process', 'deliverables', 'outcomes-integrations', 'faq', 'form'],
  'ads-funnel': ['who', 'deliverables', 'problem', 'process', 'outcomes-integrations', 'faq', 'form'],
  'review-routing': ['diagram', 'deliverables', 'problem', 'outcomes-integrations', 'process', 'faq', 'form'],
  'crm-pipeline': ['diagram', 'problem', 'deliverables', 'process', 'outcomes-integrations', 'faq', 'form'],
  'chat-graph': ['diagram', 'problem', 'outcomes-integrations', 'deliverables', 'process', 'faq', 'form'],
  'custom-middleware': ['problem', 'deliverables', 'outcomes-integrations', 'process', 'who', 'faq', 'form'],
  'social-calendar': ['platforms', 'deliverables', 'diagram', 'problem', 'process', 'outcomes-integrations', 'faq', 'form'],
  'ugc-studio': ['creative-formats', 'deliverables', 'problem', 'diagram', 'outcomes-integrations', 'process', 'faq', 'form'],
};

const HERO_VARIANTS_WITH_INLINE_DIAGRAM = new Set<ServicePageData['diagramType']>([
  'site-architecture',
  'ads-funnel',
  'custom-middleware',
  'social-calendar',
  'ugc-studio',
]);

const SECTION_LABELS: Record<SectionKey, string> = {
  diagram: 'Architecture Diagram',
  who: 'Who This Is Built For',
  problem: 'Bottleneck Diagnosis',
  deliverables: 'Included Deliverables',
  platforms: 'Supported Platforms',
  'creative-formats': 'Creative Formats & Clarity',
  process: 'Rollout Sequence',
  'outcomes-integrations': 'Outcomes & Compatibility',
  faq: 'Questions & Answers',
  form: 'Request a Proposal',
};

export default function ServiceDetailPage({ onOpenBookModal }: ServiceDetailPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <NotFoundPage />;
  }

  const relatedServices = service.relatedSlugs
    .map((s) => getServiceBySlug(s))
    .filter((item): item is ServicePageData => Boolean(item));

  const useInlineHeroDiagram = HERO_VARIANTS_WITH_INLINE_DIAGRAM.has(service.diagramType);
  const sectionOrder = SERVICE_SECTION_ORDERS[service.diagramType];
  const darkBandKey: SectionKey =
    service.diagramType === 'review-routing' ||
    service.diagramType === 'chat-graph' ||
    service.diagramType === 'custom-middleware' ||
    service.diagramType === 'ugc-studio'
      ? 'outcomes-integrations'
      : 'process';

  const renderSection = (key: SectionKey) => {
    const isDark = key === darkBandKey;

    switch (key) {
      case 'diagram':
        return (
          <div id="diagram" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <ServiceDiagram type={service.diagramType} title={service.shortTitle} />
          </div>
        );

      case 'who':
        return (
          <div id="who" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Ideal Fit
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              Built for Teams Facing These Conditions
            </h2>
            <ul className="mt-6 divide-y divide-[#D9D4C7] border-y border-[#D9D4C7] bg-[#FFFFFF]">
              {service.whoItsFor.map((item, idx) => (
                <li key={item} className="flex items-start gap-4 px-5 py-4">
                  <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm leading-relaxed text-[#0E0F12]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );

      case 'problem':
        return (
          <div id="problem" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Problem Analysis
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              {service.problemTitle}
            </h2>
            <div className="mt-5 space-y-4">
              {service.problemParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 32)} className="text-base leading-relaxed text-[#5C5F66]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        );

      case 'deliverables':
        return (
          <div id="deliverables" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Scope of Implementation
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              What Acendio Builds &amp; Manages
            </h2>
            <div className="mt-6 grid border-l border-t border-[#D9D4C7] bg-[#FFFFFF] sm:grid-cols-2">
              {service.deliverables.map((item, idx) => (
                <div
                  key={item.title}
                  className="border-b border-r border-[#D9D4C7] p-5"
                >
                  <p className="font-mono-tabular text-[11px] font-semibold text-[#FF5A1F]">
                    {String(idx + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-1.5 font-sans-tight text-base font-semibold text-[#0E0F12]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div
            id="process"
            key={key}
            className={`scroll-mt-24 p-6 sm:p-8 ${
              isDark
                ? 'section-ink border border-[#0E0F12]'
                : 'border border-[#D9D4C7] bg-[#FFFFFF]'
            }`}
          >
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Rollout Cadence
            </p>
            <h2
              className={`mt-2 font-editorial text-2xl font-semibold sm:text-3xl ${
                isDark ? 'text-[#F4F1EA]' : 'text-[#0E0F12]'
              }`}
            >
              How Deployment Works Step by Step
            </h2>
            <div
              className={`mt-6 grid gap-6 sm:grid-cols-2 ${
                isDark ? 'divide-[#26282E]' : 'divide-[#D9D4C7]'
              }`}
            >
              {service.howItWorks.map((step) => (
                <div
                  key={step.step}
                  className={`border-t pt-4 ${isDark ? 'border-[#26282E]' : 'border-[#D9D4C7]'}`}
                >
                  <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                    STEP {step.step}
                  </span>
                  <h3
                    className={`mt-1.5 font-sans-tight text-base font-semibold ${
                      isDark ? 'text-[#F4F1EA]' : 'text-[#0E0F12]'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      isDark ? 'text-[#A5A8B0]' : 'text-[#5C5F66]'
                    }`}
                  >
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'outcomes-integrations':
        return (
          <div
            id="outcomes-integrations"
            key={key}
            className={`scroll-mt-24 grid gap-8 p-6 sm:p-8 lg:grid-cols-12 ${
              isDark
                ? 'section-ink border border-[#0E0F12]'
                : 'border border-[#D9D4C7] bg-[#FFFFFF]'
            }`}
          >
            <div className="lg:col-span-7">
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Operational Outcomes
              </p>
              <h2
                className={`mt-2 font-editorial text-2xl font-semibold ${
                  isDark ? 'text-[#F4F1EA]' : 'text-[#0E0F12]'
                }`}
              >
                What Changes Once Live
              </h2>
              <ul className="mt-5 space-y-3">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                    <span className={isDark ? 'text-[#F4F1EA]' : 'text-[#0E0F12]'}>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`border-t pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 ${
                isDark ? 'border-[#26282E]' : 'border-[#D9D4C7]'
              }`}
            >
              <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                Connected Tools
              </p>
              <ul className="mt-4 space-y-2">
                {service.integrations.map((tool) => (
                  <li
                    key={tool}
                    className={`border px-3 py-2 font-mono-tabular text-xs ${
                      isDark
                        ? 'border-[#26282E] bg-[#14161B] text-[#F4F1EA]'
                        : 'border-[#D9D4C7] bg-[#F4F1EA] text-[#0E0F12]'
                    }`}
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'platforms':
        if (!service.platforms || service.platforms.length === 0) return null;
        return (
          <div id="platforms" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Channel Scope
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              Platforms Managed Around Buyer Behavior
            </h2>
            <div className="mt-6 grid border-l border-t border-[#D9D4C7] bg-[#FFFFFF] sm:grid-cols-2">
              {service.platforms.map((platform) => (
                <div key={platform.name} className="border-b border-r border-[#D9D4C7] p-5">
                  <h3 className="font-sans-tight text-base font-semibold text-[#0E0F12]">
                    {platform.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C5F66]">{platform.role}</p>
                  <p className="mt-3 border-t border-[#D9D4C7] pt-2.5 font-mono-tabular text-[11px] text-[#0E0F12]">
                    Best for: {platform.bestFor}
                  </p>
                </div>
              ))}
            </div>
            {service.platformScopeNote && (
              <p className="mt-4 border border-[#D9D4C7] bg-[#FFFFFF] px-5 py-3.5 text-xs leading-relaxed text-[#5C5F66]">
                <strong className="font-semibold text-[#0E0F12]">Scope note: </strong>
                {service.platformScopeNote}
              </p>
            )}
          </div>
        );

      case 'creative-formats':
        if (!service.creativeFormats || service.creativeFormats.length === 0) return null;
        return (
          <div id="creative-formats" key={key} className="scroll-mt-24 border-b border-[#D9D4C7] pb-12">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Creative Lineup
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              Video, Static &amp; Carousel Formats Built for Feed Performance
            </h2>
            <div className="mt-6 grid border-l border-t border-[#D9D4C7] bg-[#FFFFFF] md:grid-cols-3">
              {service.creativeFormats.map((group) => (
                <div key={group.category} className="border-b border-r border-[#D9D4C7] p-5">
                  <p className="font-mono-tabular text-[10px] uppercase tracking-wider text-[#FF5A1F]">
                    {group.ratioSpec}
                  </p>
                  <h3 className="mt-1.5 font-sans-tight text-base font-semibold text-[#0E0F12]">
                    {group.category}
                  </h3>
                  <ul className="mt-4 space-y-2 border-t border-[#D9D4C7] pt-3">
                    {group.formats.map((format) => (
                      <li key={format} className="flex items-start gap-2 text-xs leading-relaxed text-[#5C5F66]">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF5A1F]" aria-hidden="true" />
                        <span>{format}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {service.productionClarification && (
              <div className="mt-5 border border-[#0E0F12] bg-[#FFFFFF] p-5">
                <p className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                  {service.productionClarification.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[#0E0F12]">
                  {service.productionClarification.body}
                </p>
              </div>
            )}
          </div>
        );

      case 'faq':
        return (
          <div id="faq" key={key} className="scroll-mt-24">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Service FAQ
            </p>
            <h2 className="mt-2 font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
              Common Questions About {service.shortTitle}
            </h2>
            <div className="mt-5">
              <FaqAccordion items={service.faqs} idPrefix={`svc-${service.slug}`} />
            </div>
          </div>
        );

      case 'form':
        return (
          <div id="form" key={key} className="scroll-mt-24">
            <LeadCaptureForm
              idPrefix={`service-${service.slug}`}
              defaultService={service.shortTitle}
              heading={`Request a Custom ${service.shortTitle} Proposal`}
            />
          </div>
        );
    }
  };

  return (
    <>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
        ogImage={SITE_CONFIG.ogImages.service}
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

      {/* Distinct Hero Variant per Service Architecture */}
      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: service.shortTitle },
            ]}
          />

          {useInlineHeroDiagram ? (
            <div className="grid items-start gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                  {service.numeral} / {service.shortTitle}
                </p>
                <h1 className="mt-3 font-editorial text-[clamp(2rem,3.6vw,3.15rem)] font-semibold leading-[1.07] tracking-[-0.02em] text-[#0E0F12]">
                  {service.h1}
                </h1>
                <p className="mt-4 text-base leading-relaxed text-[#5C5F66]">
                  {service.heroSubheadline}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      trackEvent('cta_click', { location: `service_hero_${service.slug}` });
                      onOpenBookModal();
                    }}
                    className="btn-signal inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
                  >
                    <span>Book a Free Strategy Call</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <a
                    href="#form"
                    className="btn-outline-ink inline-flex min-h-[46px] items-center px-5 py-2.5 text-sm whitespace-nowrap"
                  >
                    Get a Custom Proposal
                  </a>
                </div>
              </div>
              <div className="lg:col-span-6">
                {service.diagramType === 'social-calendar' ? (
                  <Suspense
                    fallback={
                      <div
                        className="min-h-[380px] border border-[#0E0F12] bg-[#FFFFFF]"
                        aria-hidden="true"
                      />
                    }
                  >
                    <SocialMediaVisual />
                  </Suspense>
                ) : service.diagramType === 'ugc-studio' ? (
                  <Suspense
                    fallback={
                      <div
                        className="min-h-[380px] border border-[#0E0F12] bg-[#FFFFFF]"
                        aria-hidden="true"
                      />
                    }
                  >
                    <UgcCreativeVisual />
                  </Suspense>
                ) : (
                  <ServiceDiagram type={service.diagramType} title={service.shortTitle} />
                )}
              </div>
            </div>
          ) : (
            <div className="grid items-end gap-8 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                  {service.numeral} / {service.shortTitle}
                </p>
                <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.45rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
                  {service.h1}
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
                  {service.heroSubheadline}
                </p>
              </div>
              <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
                <button
                  type="button"
                  onClick={() => {
                    trackEvent('cta_click', { location: `service_hero_${service.slug}` });
                    onOpenBookModal();
                  }}
                  className="btn-signal inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  <span>Book a Free Strategy Call</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
                <a
                  href="#form"
                  className="btn-outline-ink inline-flex min-h-[46px] items-center px-5 py-2.5 text-sm whitespace-nowrap"
                >
                  Custom Proposal
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content with Sticky Side Index on Desktop */}
      <section className="bg-[#F4F1EA] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            {/* Sticky Left Index */}
            <aside className="hidden lg:sticky lg:top-24 lg:col-span-3 lg:block">
              <div className="border border-[#D9D4C7] bg-[#FFFFFF] p-5">
                <p className="font-mono-tabular text-[11px] font-semibold uppercase tracking-wider text-[#FF5A1F]">
                  System {service.numeral} Index
                </p>
                <nav aria-label="Service sections" className="mt-3 space-y-1.5">
                  {sectionOrder.map((key) => (
                    <a
                      key={key}
                      href={`#${key}`}
                      className="block border-l-2 border-transparent py-1 pl-3 text-xs font-medium text-[#5C5F66] transition-colors hover:border-[#FF5A1F] hover:text-[#0E0F12]"
                    >
                      {SECTION_LABELS[key]}
                    </a>
                  ))}
                </nav>

                {useInlineHeroDiagram && service.whoItsFor.length > 0 && (
                  <div className="mt-5 border-t border-[#D9D4C7] pt-4">
                    <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#0E0F12]">
                      Best Suited For
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#5C5F66]">
                      {service.whoItsFor[0]}
                    </p>
                  </div>
                )}

                <div className="mt-5 border-t border-[#D9D4C7] pt-4">
                  <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#5C5F66]">
                    Switch Service
                  </p>
                  <div className="mt-2 space-y-1">
                    {SERVICES_CONTENT.map((item) => (
                      <PrefetchLink
                        key={item.slug}
                        to={`/services/${item.slug}`}
                        className={`block text-xs ${
                          item.slug === service.slug
                            ? 'font-semibold text-[#FF5A1F]'
                            : 'text-[#5C5F66] hover:text-[#0E0F12]'
                        }`}
                      >
                        {item.numeral} · {item.shortTitle}
                      </PrefetchLink>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Composed Service Sections */}
            <div className="space-y-12 lg:col-span-9">
              {sectionOrder.map((key) => renderSection(key))}

              {/* Related Systems */}
              {relatedServices.length > 0 && (
                <div className="border-t border-[#0E0F12] pt-8">
                  <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
                    Pairs Well With
                  </p>
                  <div className="mt-4 grid gap-4 sm:grid-cols-3">
                    {relatedServices.map((rel) => (
                      <PrefetchLink
                        key={rel.slug}
                        to={`/services/${rel.slug}`}
                        className="group border border-[#D9D4C7] bg-[#FFFFFF] p-4 transition-colors hover:border-[#0E0F12]"
                      >
                        <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                          {rel.numeral}
                        </span>
                        <h3 className="mt-1 font-sans-tight text-sm font-semibold text-[#0E0F12] group-hover:text-[#FF5A1F]">
                          {rel.shortTitle}
                        </h3>
                        <p className="mt-1.5 text-xs leading-relaxed text-[#5C5F66]">
                          {rel.bentoOutcome}
                        </p>
                      </PrefetchLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow={`${service.numeral} / ${service.shortTitle}`}
        headline={service.ctaHeadline}
        subtitle={service.ctaSubheadline}
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
