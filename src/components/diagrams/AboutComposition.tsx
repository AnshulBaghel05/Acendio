/**
 * Meaningful architectural SVG & typographic composition for the About hero.
 * Replaces empty image box with Acendio's connected five-layer system view.
 */
export function AboutComposition() {
  const layers = [
    { num: '01', name: 'Conversion Web', role: 'Mobile UX, local SEO, daily care' },
    { num: '02', name: '24/7 Voice & Chat', role: 'AI call qualification & FAQ chat' },
    { num: '03', name: 'Paid Acquisition', role: 'Google & Meta ads + creatives' },
    { num: '04', name: 'Reputation Loop', role: 'Automated review requests & replies' },
    { num: '05', name: 'GoHighLevel CRM', role: 'Unified pipeline, SMS & calendar' },
  ];

  return (
    <div className="border border-[#0E0F12] bg-[#FFFFFF] p-6">
      <div className="flex items-center justify-between border-b border-[#D9D4C7] pb-3">
        <span className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#5C5F66]">
          Single-Partner Architecture
        </span>
        <span className="font-mono-tabular text-[11px] font-semibold text-[#FF5A1F]">
          5 Connected Layers
        </span>
      </div>

      <div className="divide-y divide-[#D9D4C7]">
        {layers.map((layer) => (
          <div
            key={layer.num}
            className="flex items-center justify-between gap-4 py-3.5"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono-tabular text-xs font-semibold text-[#FF5A1F]">
                {layer.num}
              </span>
              <span className="font-sans-tight text-sm font-semibold text-[#0E0F12]">
                {layer.name}
              </span>
            </div>
            <span className="text-right text-xs text-[#5C5F66]">{layer.role}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-[#0E0F12] pt-3 font-mono-tabular text-[11px] text-[#0E0F12]">
        Result: Every click, call, and message converges on one calendar.
      </div>
    </div>
  );
}
