import { useState } from 'react';

type PreviewTab = 'calendar' | 'post' | 'reporting';

const CALENDAR_SLOTS = [
  { day: 'MON', format: 'Carousel', topic: '3 Signs Your Process Needs Automation', status: 'Approved' },
  { day: 'WED', format: 'Short Reel', topic: 'Behind-the-Scenes Walkthrough (45s)', status: 'Scheduled' },
  { day: 'FRI', format: 'Proof Post', topic: 'Client Workflow Breakdown & Takeaways', status: 'Approved' },
  { day: 'SUN', format: 'Story Q&A', topic: 'Common Buyer Question Prompt', status: 'Queued' },
];

export function SocialMediaVisual() {
  const [tab, setTab] = useState<PreviewTab>('calendar');

  return (
    <div
      className="border border-[#0E0F12] bg-[#FFFFFF] p-5 sm:p-6"
      aria-label="Social Media Management interactive editorial preview"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#D9D4C7] pb-4">
        <div>
          <span className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#FF5A1F]">
            Editorial Workspace Preview
          </span>
          <p className="mt-0.5 text-sm font-semibold text-[#0E0F12]">
            Illustrative Campaign &amp; Calendar View
          </p>
        </div>

        <div role="tablist" aria-label="Select social preview mode" className="flex flex-wrap gap-1.5">
          {(
            [
              { id: 'calendar', label: 'Calendar' },
              { id: 'post', label: 'Post & Carousel' },
              { id: 'reporting', label: 'Monthly Report' },
            ] as const
          ).map((item) => {
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setTab(item.id)}
                className={`min-h-[34px] border px-2.5 py-1 font-mono-tabular text-[11px] font-medium transition-colors whitespace-nowrap ${
                  active
                    ? 'border-[#0E0F12] bg-[#0E0F12] text-[#F4F1EA]'
                    : 'border-[#D9D4C7] bg-[#F4F1EA] text-[#5C5F66] hover:border-[#0E0F12] hover:text-[#0E0F12]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {tab === 'calendar' && (
        <div className="mt-4 space-y-2">
          <div className="grid grid-cols-12 border-b border-[#D9D4C7] pb-2 font-mono-tabular text-[10px] uppercase tracking-wider text-[#5C5F66]">
            <span className="col-span-2">Day</span>
            <span className="col-span-3">Format</span>
            <span className="col-span-5">Scheduled Angle</span>
            <span className="col-span-2 text-right">Stage</span>
          </div>
          <div className="divide-y divide-[#D9D4C7]">
            {CALENDAR_SLOTS.map((slot) => (
              <div
                key={slot.day}
                className="grid grid-cols-12 items-center gap-2 py-3 text-xs"
              >
                <span className="col-span-2 font-mono-tabular font-semibold text-[#FF5A1F]">
                  {slot.day}
                </span>
                <span className="col-span-3 font-medium text-[#0E0F12]">{slot.format}</span>
                <span className="col-span-5 text-[#5C5F66]">{slot.topic}</span>
                <span className="col-span-2 text-right font-mono-tabular text-[11px] text-[#0E0F12]">
                  {slot.status}
                </span>
              </div>
            ))}
          </div>
          <p className="border-t border-[#D9D4C7] pt-3 font-mono-tabular text-[11px] text-[#5C5F66]">
            Batch-prepared monthly for clean client sign-off prior to publishing.
          </p>
        </div>
      )}

      {tab === 'post' && (
        <div className="mt-4 grid gap-4 sm:grid-cols-12">
          <div className="border border-[#0E0F12] bg-[#0E0F12] p-4 text-[#F4F1EA] sm:col-span-6">
            <div className="flex items-center justify-between font-mono-tabular text-[10px] text-[#A5A8B0]">
              <span>SLIDE 01 / 05</span>
              <span className="text-[#FF5A1F]">4:5 CAROUSEL</span>
            </div>
            <p className="mt-5 font-editorial text-xl font-semibold leading-snug">
              Consistent Visibility Without Founder Bottlenecks
            </p>
            <p className="mt-2 text-xs leading-relaxed text-[#A5A8B0]">
              Structured monthly pillars, clean design templates, and clear next-step CTAs across your active channels.
            </p>
            <div className="mt-5 border-t border-[#26282E] pt-3 font-mono-tabular text-[10px] text-[#FF5A1F]">
              SWIPE FOR FRAMEWORK →
            </div>
          </div>

          <div className="flex flex-col justify-between border border-[#D9D4C7] bg-[#F4F1EA] p-4 sm:col-span-6">
            <div>
              <p className="font-mono-tabular text-[10px] uppercase tracking-wider text-[#5C5F66]">
                Caption &amp; Discovery Spec
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#0E0F12]">
                &ldquo;Most service teams post only when schedule gaps open up. A documented monthly content calendar keeps your brand visible before buyers compare options.&rdquo;
              </p>
            </div>
            <div className="mt-4 space-y-1.5 border-t border-[#D9D4C7] pt-3 font-mono-tabular text-[11px] text-[#5C5F66]">
              <p>Keywords: local service · strategy · intake</p>
              <p>Routing: Comment / DM → CRM Inbox</p>
            </div>
          </div>
        </div>
      )}

      {tab === 'reporting' && (
        <div className="mt-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[#D9D4C7] font-mono-tabular text-[10px] uppercase text-[#5C5F66]">
                  <th className="py-2 pr-3 font-medium">Review Dimension</th>
                  <th className="py-2 px-3 font-medium">Tracked Signals</th>
                  <th className="py-2 pl-3 font-medium">Next-Month Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D9D4C7] text-xs">
                <tr>
                  <td className="py-2.5 pr-3 font-semibold text-[#0E0F12]">Reach &amp; Saves</td>
                  <td className="py-2.5 px-3 text-[#5C5F66]">Non-follower reach, shares, saves</td>
                  <td className="py-2.5 pl-3 text-[#0E0F12]">Expand top pillars</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 font-semibold text-[#0E0F12]">Video Retention</td>
                  <td className="py-2.5 px-3 text-[#5C5F66]">3-sec hold rate, completion curve</td>
                  <td className="py-2.5 pl-3 text-[#0E0F12]">Refine opening hooks</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3 font-semibold text-[#0E0F12]">Profile Actions</td>
                  <td className="py-2.5 px-3 text-[#5C5F66]">Bio clicks, DM threads, call taps</td>
                  <td className="py-2.5 pl-3 text-[#0E0F12]">Align CTA &amp; CRM tag</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-3 border-t border-[#D9D4C7] pt-3 font-mono-tabular text-[11px] text-[#5C5F66]">
            Illustrative reporting structure — connected to your actual channel metrics monthly.
          </p>
        </div>
      )}
    </div>
  );
}
