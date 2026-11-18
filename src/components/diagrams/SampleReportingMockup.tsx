/**
 * Sample GoHighLevel & Attribution Reporting Mockup.
 * Clearly labeled as an illustrative example, not client data.
 */
export function SampleReportingMockup() {
  const rows = [
    {
      channel: 'Google Search Ads',
      leads: '42',
      speed: '18 sec',
      booked: '19',
      stage: 'Discovery Booked',
    },
    {
      channel: 'AI Voice Reception (After-Hours)',
      leads: '27',
      speed: '0.8 sec',
      booked: '14',
      stage: 'Booked on Calendar',
    },
    {
      channel: 'Website Strategy Form',
      leads: '31',
      speed: '22 sec',
      booked: '16',
      stage: 'Proposal Sent',
    },
    {
      channel: 'Missed-Call Text-Back',
      leads: '15',
      speed: '9 sec',
      booked: '08',
      stage: 'Confirmed SMS',
    },
  ];

  return (
    <figure className="border border-[#26282E] bg-[#14161B] p-5 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#26282E] pb-4">
        <div>
          <p className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#FF5A1F]">
            Sample Attribution Ledger
          </p>
          <p className="mt-0.5 text-sm font-semibold text-[#F4F1EA]">
            Weekly Source-to-Calendar View (GoHighLevel)
          </p>
        </div>
        <span className="border border-[#26282E] bg-[#0E0F12] px-2.5 py-1 font-mono-tabular text-[11px] text-[#A5A8B0]">
          Illustrative example, not client data
        </span>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse text-left">
          <thead>
            <tr className="border-b border-[#26282E] font-mono-tabular text-[11px] uppercase text-[#A5A8B0]">
              <th className="py-2.5 pr-4 font-medium">Acquisition Source</th>
              <th className="py-2.5 px-3 font-medium">Inquiries</th>
              <th className="py-2.5 px-3 font-medium">First Touch</th>
              <th className="py-2.5 px-3 font-medium">Booked</th>
              <th className="py-2.5 pl-3 font-medium">Primary Stage</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#26282E] text-sm">
            {rows.map((row) => (
              <tr key={row.channel}>
                <td className="py-3 pr-4 font-medium text-[#F4F1EA]">{row.channel}</td>
                <td className="py-3 px-3 font-mono-tabular text-[#A5A8B0]">{row.leads}</td>
                <td className="py-3 px-3 font-mono-tabular text-[#FF5A1F]">{row.speed}</td>
                <td className="py-3 px-3 font-mono-tabular font-semibold text-[#F4F1EA]">
                  {row.booked}
                </td>
                <td className="py-3 pl-3 font-mono-tabular text-xs text-[#A5A8B0]">
                  {row.stage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <figcaption className="mt-4 border-t border-[#26282E] pt-3 font-mono-tabular text-[11px] text-[#A5A8B0]">
        Illustrative example, not client data. Every live client workspace connects your real UTM parameters, call logs, and booked slots.
      </figcaption>
    </figure>
  );
}
