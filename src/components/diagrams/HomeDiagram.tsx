import { useState } from 'react';

type ChannelMode = 'voice' | 'web' | 'reviews';

const FLOW_MODES: Record<
  ChannelMode,
  {
    label: string;
    trigger: string;
    step1: string;
    step2: string;
    step3: string;
    output: string;
  }
> = {
  voice: {
    label: '01 / AI Voice Call Flow',
    trigger: 'Inbound Phone Ring (After-Hours or Overflow)',
    step1: 'AI Receptionist answers live, checks service area & need',
    step2: 'Logs recording, transcript & intent into GoHighLevel',
    step3: 'Reads live calendar slots and books confirmed window',
    output: 'Booked Appointment + Instant SMS Confirmation',
  },
  web: {
    label: '02 / Web & Ad Speed-to-Lead',
    trigger: 'Paid Ad Click or Website Inquiry Form',
    step1: 'Captures UTM source, service interest & consent timestamp',
    step2: 'Triggers sub-minute SMS & email acknowledgment',
    step3: 'Assigns pipeline stage + follow-up task with stop-on-reply',
    output: 'Qualified Lead Scheduled Without Manual Delay',
  },
  reviews: {
    label: '03 / Post-Service Review Routing',
    trigger: 'Job Marked Completed in CRM Pipeline',
    step1: 'Dispatches polite SMS & email feedback invitation',
    step2: 'Happy customers go to Google; concerns route privately',
    step3: 'Drafts tailored owner reply for Google Business Profile',
    output: 'Steady Public Reviews + Early Service Recovery',
  },
};

export function HomeDiagram() {
  const [mode, setMode] = useState<ChannelMode>('voice');
  const current = FLOW_MODES[mode];

  return (
    <div
      className="border border-[#D9D4C7] bg-[#FFFFFF] p-5 sm:p-6"
      aria-label="Interactive Acendio acquisition and booking schematic"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C7] pb-4">
        <span className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#5C5F66]">
          System Schematic
        </span>
        <div role="tablist" aria-label="Select workflow schematic" className="flex flex-wrap gap-1.5">
          {(Object.keys(FLOW_MODES) as ChannelMode[]).map((key) => {
            const selected = mode === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setMode(key)}
                className={`min-h-[34px] border px-2.5 py-1 font-mono-tabular text-[11px] font-medium transition-colors whitespace-nowrap ${
                  selected
                    ? 'border-[#0E0F12] bg-[#0E0F12] text-[#F4F1EA]'
                    : 'border-[#D9D4C7] bg-[#F4F1EA] text-[#5C5F66] hover:border-[#0E0F12] hover:text-[#0E0F12]'
                }`}
              >
                {FLOW_MODES[key].label.split(' / ')[1]}
              </button>
            );
          })}
        </div>
      </div>

      {/* Clean architectural SVG + Ledger flow */}
      <svg
        viewBox="0 0 560 300"
        className="mt-4 w-full"
        role="img"
        aria-label={`${current.label}: ${current.trigger} leads to ${current.output}`}
      >
        {/* Grid lines */}
        <rect x="0.5" y="0.5" width="559" height="299" fill="#F4F1EA" stroke="#D9D4C7" />
        <line x1="280" y1="66" x2="280" y2="88" stroke="#0E0F12" strokeWidth="1.5" />
        <line x1="280" y1="138" x2="280" y2="160" stroke="#0E0F12" strokeWidth="1.5" />
        <line x1="280" y1="210" x2="280" y2="232" stroke="#FF5A1F" strokeWidth="1.5" />

        {/* Trigger Box */}
        <rect x="24" y="18" width="512" height="48" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
        <text x="40" y="37" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">
          TRIGGER
        </text>
        <text x="40" y="55" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">
          {current.trigger}
        </text>

        {/* Step 1 */}
        <rect x="24" y="88" width="512" height="50" fill="#FFFFFF" stroke="#D9D4C7" strokeWidth="1" />
        <text x="40" y="108" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">
          STEP 01 · CAPTURE &amp; QUALIFY
        </text>
        <text x="40" y="126" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#0E0F12">
          {current.step1}
        </text>

        {/* Step 2 */}
        <rect x="24" y="160" width="512" height="50" fill="#FFFFFF" stroke="#D9D4C7" strokeWidth="1" />
        <text x="40" y="180" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">
          STEP 02 · GOHIGHLEVEL SYNC
        </text>
        <text x="40" y="198" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#0E0F12">
          {current.step2}
        </text>

        {/* Output */}
        <rect x="24" y="232" width="512" height="50" fill="#0E0F12" stroke="#0E0F12" strokeWidth="1" />
        <rect x="24" y="232" width="6" height="50" fill="#FF5A1F" />
        <text x="44" y="252" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">
          OUTCOME · CALENDAR &amp; CRM
        </text>
        <text x="44" y="270" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#F4F1EA">
          {current.output}
        </text>
      </svg>

      <div className="mt-3 flex items-center justify-between border-t border-[#D9D4C7] pt-3 font-mono-tabular text-[11px] text-[#5C5F66]">
        <span>{current.label}</span>
        <span>Logged to GoHighLevel</span>
      </div>
    </div>
  );
}
