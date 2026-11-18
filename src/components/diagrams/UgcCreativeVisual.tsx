import { useState } from 'react';

type CreativeFormatTab = 'problem-solution' | 'product-demo' | 'static-carousel';

const CREATIVE_BLUEPRINTS: Record<
  CreativeFormatTab,
  {
    label: string;
    ratio: string;
    aspectLabel: string;
    hook: string;
    body: string;
    cta: string;
    deliverableNotes: string[];
  }
> = {
  'problem-solution': {
    label: 'Problem–Solution Video',
    ratio: '9:16 Vertical · Reels / TikTok / Shorts',
    aspectLabel: '00:00 — 00:32',
    hook: '00:00–00:03 · Pattern-interrupt opening visual + bold on-screen caption identifying the core buyer frustration.',
    body: '00:03–00:24 · Tightly paced product or workflow demonstration with burned-in subtitles and crisp cutaways.',
    cta: '00:24–00:32 · Clear direct-response closing frame matching your landing page offer.',
    deliverableNotes: [
      '3 modular opening hook variations included for split testing',
      'Safe-zone checked so captions clear TikTok & Reels overlays',
      'Produced from client-supplied footage, screen captures & brand assets',
    ],
  },
  'product-demo': {
    label: 'Product Showcase & Unboxing',
    ratio: '9:16 & 4:5 · Meta Ads & Organic',
    aspectLabel: '00:00 — 00:40',
    hook: '00:00–00:04 · Close-up tactile reveal or side-by-side comparison showing key detail immediately.',
    body: '00:04–00:30 · Step-by-step walk-through highlighting three practical benefits with clean motion callouts.',
    cta: '00:30–00:40 · Social-native prompt directing viewers to tap through or message.',
    deliverableNotes: [
      'Audio normalization, color cleanup & crisp kinetic subtitle styling',
      'Cutdowns exported in 9:16 Stories/Reels and 4:5 Feed dimensions',
      'Zero fake customer claims or fabricated reviews',
    ],
  },
  'static-carousel': {
    label: 'Static & Carousel Ad Suite',
    ratio: '4:5 Feed & 1:1 · Paid Social & Promos',
    aspectLabel: '5-Card Set + Statics',
    hook: 'Card 01 · High-contrast headline framing one clear problem or product distinction.',
    body: 'Cards 02–04 · Structured proof points, feature comparisons, and visual close-ups with zero clutter.',
    cta: 'Card 05 · Direct offer framing aligned to landing page headline and UTM campaign.',
    deliverableNotes: [
      'Paired with 3 primary text + headline copy angles for A/B testing',
      'Consistent brand typography, spacing, and mobile readability',
      'Ready for direct upload into Meta Ads Manager and organic feeds',
    ],
  },
};

export function UgcCreativeVisual() {
  const [selected, setSelected] = useState<CreativeFormatTab>('problem-solution');
  const current = CREATIVE_BLUEPRINTS[selected];

  return (
    <div
      className="border border-[#0E0F12] bg-[#FFFFFF] p-5 sm:p-6"
      aria-label="UGC-style creative storyboard and format studio preview"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C7] pb-4">
        <div>
          <span className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#FF5A1F]">
            Creative Production Studio
          </span>
          <p className="mt-0.5 text-sm font-semibold text-[#0E0F12]">
            Format &amp; Storyboard Breakdown (Illustrative Spec)
          </p>
        </div>

        <div role="tablist" aria-label="Select creative format" className="flex flex-wrap gap-1.5">
          {(Object.keys(CREATIVE_BLUEPRINTS) as CreativeFormatTab[]).map((key) => {
            const active = selected === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelected(key)}
                className={`min-h-[34px] border px-2.5 py-1 font-mono-tabular text-[11px] font-medium transition-colors whitespace-nowrap ${
                  active
                    ? 'border-[#0E0F12] bg-[#0E0F12] text-[#F4F1EA]'
                    : 'border-[#D9D4C7] bg-[#F4F1EA] text-[#5C5F66] hover:border-[#0E0F12] hover:text-[#0E0F12]'
                }`}
              >
                {CREATIVE_BLUEPRINTS[key].label.split(' ')[0]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-12">
        {/* Safe-zone Vertical Preview Frame */}
        <div className="flex flex-col justify-between border border-[#0E0F12] bg-[#0E0F12] p-4 text-[#F4F1EA] sm:col-span-5">
          <div className="flex items-center justify-between font-mono-tabular text-[10px] text-[#A5A8B0]">
            <span>{current.aspectLabel}</span>
            <span className="text-[#FF5A1F]">SAFE-ZONE OK</span>
          </div>

          <div className="my-5 border border-dashed border-[#26282E] bg-[#14161B] p-4">
            <p className="font-mono-tabular text-[10px] uppercase text-[#FF5A1F]">
              On-Screen Hook Frame
            </p>
            <p className="mt-2 font-editorial text-lg font-semibold leading-snug text-[#F4F1EA]">
              {current.label}
            </p>
            <div className="mt-4 inline-block border border-[#FF5A1F] bg-[#FF5A1F]/15 px-2.5 py-1 font-mono-tabular text-[10px] text-[#F4F1EA]">
              [Burned-In Subtitle Track]
            </div>
          </div>

          <div className="border-t border-[#26282E] pt-2.5 font-mono-tabular text-[10px] text-[#A5A8B0]">
            {current.ratio}
          </div>
        </div>

        {/* Beat Breakdown */}
        <div className="flex flex-col justify-between space-y-3 sm:col-span-7">
          <div className="divide-y divide-[#D9D4C7] border border-[#D9D4C7] bg-[#F4F1EA]/60">
            <div className="p-3">
              <p className="font-mono-tabular text-[10px] font-semibold uppercase text-[#FF5A1F]">
                01 · Opening Hook
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#0E0F12]">{current.hook}</p>
            </div>
            <div className="p-3">
              <p className="font-mono-tabular text-[10px] font-semibold uppercase text-[#5C5F66]">
                02 · Core Value &amp; Proof
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#0E0F12]">{current.body}</p>
            </div>
            <div className="p-3">
              <p className="font-mono-tabular text-[10px] font-semibold uppercase text-[#5C5F66]">
                03 · Conversion Call to Action
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#0E0F12]">{current.cta}</p>
            </div>
          </div>

          <ul className="space-y-1 text-xs text-[#5C5F66]">
            {current.deliverableNotes.map((note) => (
              <li key={note} className="font-mono-tabular text-[11px]">
                · {note}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
