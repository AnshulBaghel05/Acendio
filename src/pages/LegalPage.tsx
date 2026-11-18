import { LEGAL_CONTENT } from '../content/legal';
import { SITE_CONFIG } from '../config/site';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export default function LegalPage({ mode }: LegalPageProps) {
  const isPrivacy = mode === 'privacy';
  const doc = isPrivacy ? LEGAL_CONTENT.privacy : LEGAL_CONTENT.terms;
  const pageTitle = isPrivacy ? 'Privacy Policy' : 'Terms of Service';
  const path = isPrivacy ? '/privacy-policy' : '/terms';

  return (
    <>
      <SeoHead
        title={doc.title}
        description={doc.description}
        path={path}
        ogImage={SITE_CONFIG.ogImages.home}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: pageTitle, url: path },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: pageTitle }]} />
          <h1 className="font-editorial text-3xl font-semibold text-[#0E0F12] sm:text-4xl">
            {pageTitle}
          </h1>
          <p className="mt-2 font-mono-tabular text-xs text-[#5C5F66]">
            Last updated: {LEGAL_CONTENT.lastUpdated}
          </p>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-14 sm:py-16">
        <div className="mx-auto max-w-4xl space-y-8 px-4 sm:px-6 lg:px-8">
          {doc.sections.map((section) => (
            <div key={section.heading} className="border-b border-[#D9D4C7] pb-6 last:border-b-0">
              <h2 className="font-editorial text-2xl font-semibold text-[#0E0F12]">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 32)}
                    className="text-sm leading-relaxed text-[#5C5F66] sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
