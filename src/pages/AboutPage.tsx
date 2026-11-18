import { ABOUT_CONTENT } from '../content/about';
import { SITE_CONFIG } from '../config/site';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBand } from '../components/CtaBand';
import { TestimonialPlaceholder } from '../components/PlaceholderBlocks';

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
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About', url: '/about' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
                About Acendio · {SITE_CONFIG.location}
              </p>
              <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
                {ABOUT_CONTENT.h1}
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
                {ABOUT_CONTENT.subheadline}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#12141C]">
                <img
                  src="/src/assets/images/acendio_agency_hero_og_1795014087000.jpg"
                  alt="Acendio modern architectural digital engineering workspace"
                  width={1280}
                  height={720}
                  referrerPolicy="no-referrer"
                  className="aspect-video w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
            Why We Built an Integrated AI &amp; Growth Studio
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-[#9AA0AE]">
            {ABOUT_CONTENT.storyParagraphs.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/8 bg-[#12141C]/40 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
            Operating Principles
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {ABOUT_CONTENT.principles.map((p, idx) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-[#12141C] p-6">
                <span className="font-mono-tabular text-xs font-semibold text-[#22D3EE]">
                  0{idx + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-[#F4F5F7]">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#9AA0AE]">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <TestimonialPlaceholder
              slotLabel="[TESTIMONIAL_PLACEHOLDER_ABOUT_1]"
              context="Long-term agency partner endorsement"
            />
            <TestimonialPlaceholder
              slotLabel="[TESTIMONIAL_PLACEHOLDER_ABOUT_2]"
              context="Operations leader quote"
            />
          </div>
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} showTestimonial={false} />
    </>
  );
}
