import { LEGAL_CONTENT } from '../content/legal';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

// NOT LEGAL ADVICE — REVIEW WITH LEGAL COUNSEL BEFORE PUBLISHING.

interface LegalPageProps {
  mode: 'privacy' | 'terms';
}

export default function LegalPage({ mode }: LegalPageProps) {
  const doc = mode === 'privacy' ? LEGAL_CONTENT.privacy : LEGAL_CONTENT.terms;
  const path = mode === 'privacy' ? '/privacy-policy' : '/terms';
  const label = mode === 'privacy' ? 'Privacy Policy' : 'Terms of Service';

  return (
    <>
      <SeoHead
        title={doc.title}
        description={doc.description}
        path={path}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: label, url: path },
        ]}
      />

      <section className="bg-[#0A0B10] py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: label }]} />
          <p className="font-mono-tabular text-xs text-[#9AA0AE]">
            Last Updated: {LEGAL_CONTENT.lastUpdated}
          </p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-[#F4F5F7] sm:text-4xl">
            {label}
          </h1>

          <div className="mt-6 rounded-xl border border-amber-500/25 bg-amber-500/10 p-4 text-xs leading-relaxed text-amber-200">
            {LEGAL_CONTENT.notice}
          </div>

          <div className="mt-10 space-y-8">
            {doc.sections.map((section) => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
                  {section.heading}
                </h2>
                {section.body.map((p) => (
                  <p key={p} className="text-sm leading-relaxed text-[#9AA0AE]">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
