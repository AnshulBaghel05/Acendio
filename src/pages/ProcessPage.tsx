import { CheckCircle2 } from 'lucide-react';
import { PROCESS_CONTENT } from '../content/process';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBand } from '../components/CtaBand';

interface ProcessPageProps {
  onOpenBookModal: () => void;
}

export default function ProcessPage({ onOpenBookModal }: ProcessPageProps) {
  return (
    <>
      <SeoHead
        title={PROCESS_CONTENT.seo.title}
        description={PROCESS_CONTENT.seo.description}
        path="/process"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Process', url: '/process' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Process' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Delivery Lifecycle
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              {PROCESS_CONTENT.h1}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              {PROCESS_CONTENT.subheadline}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
          {PROCESS_CONTENT.phases.map((phase) => (
            <article
              key={phase.number}
              className="grid gap-8 rounded-2xl border border-white/10 bg-[#12141C] p-6 sm:p-8 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <span className="font-mono-tabular text-sm font-semibold text-[#22D3EE]">
                  Phase {phase.number}
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold text-[#F4F5F7]">
                  {phase.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
                  {phase.objective}
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-xs font-semibold text-[#F4F5F7]">Key Outputs</p>
                  <ul className="mt-2 space-y-1.5 text-xs text-[#22D3EE]">
                    {phase.outputs.map((output) => (
                      <li key={output}>· {output}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-8">
                <h3 className="text-sm font-semibold text-[#F4F5F7]">Execution Activities</h3>
                <ul className="mt-4 space-y-3.5">
                  {phase.activities.map((act) => (
                    <li
                      key={act}
                      className="flex items-start gap-3 text-sm leading-relaxed text-[#9AA0AE]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#22C55E]"
                        aria-hidden="true"
                      />
                      <span>{act}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
