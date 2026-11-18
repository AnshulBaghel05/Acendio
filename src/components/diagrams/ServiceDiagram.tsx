import { ServiceDiagramType } from '../../content/services';

interface ServiceDiagramProps {
  type: ServiceDiagramType;
  title: string;
}

/**
 * Renders a service-specific architectural SVG diagram tailored to each of the 7 service pages.
 */
export function ServiceDiagram({ type, title }: ServiceDiagramProps) {
  return (
    <figure className="border border-[#D9D4C7] bg-[#FFFFFF] p-4 sm:p-5">
      <div className="mb-3 flex items-center justify-between border-b border-[#D9D4C7] pb-2.5">
        <span className="font-mono-tabular text-[11px] uppercase tracking-wider text-[#5C5F66]">
          Architecture Schematic
        </span>
        <span className="font-mono-tabular text-[11px] text-[#FF5A1F]">{title}</span>
      </div>

      {type === 'site-architecture' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Website architecture and maintenance diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="24" width="176" height="84" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">01 / ENTRY</text>
          <text x="34" y="70" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#0E0F12">Semantic HTML +</text>
          <text x="34" y="90" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#5C5F66">Local SEO Schema</text>

          <line x1="196" y1="66" x2="232" y2="66" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="232" y="24" width="176" height="84" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="246" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">02 / CONVERSION</text>
          <text x="246" y="70" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#0E0F12">Fast Mobile UX +</text>
          <text x="246" y="90" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#5C5F66">UTM-Tagged Forms</text>

          <line x1="408" y1="66" x2="444" y2="66" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="444" y="24" width="176" height="84" fill="#0E0F12" />
          <text x="458" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">03 / CRM</text>
          <text x="458" y="70" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#F4F1EA">GoHighLevel</text>
          <text x="458" y="90" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#A5A8B0">Webhook &amp; Calendar</text>

          <rect x="20" y="138" width="600" height="78" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="162" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">CONTINUOUS MAINTENANCE LAYER</text>
          <text x="34" y="188" fontFamily="Inter Tight, sans-serif" fontSize="13" fill="#0E0F12">
            Daily Off-Site Backups  ·  Uptime Checks  ·  SSL &amp; Security Patching  ·  Core Web Vitals Tuning
          </text>
        </svg>
      )}

      {type === 'call-flow' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="AI Receptionist call routing and escalation diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="84" width="142" height="72" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="32" y="108" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">INBOUND CALL</text>
          <text x="32" y="132" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Busy / After-Hours</text>

          <line x1="162" y1="120" x2="196" y2="120" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="196" y="64" width="178" height="112" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="210" y="90" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">AI VOICE AGENT</text>
          <text x="210" y="114" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Answers in 1 Ring</text>
          <text x="210" y="136" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Qualifies area &amp; urgency</text>
          <text x="210" y="156" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Checks calendar slots</text>

          <line x1="374" y1="90" x2="416" y2="52" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="374" y1="120" x2="416" y2="120" stroke="#FF5A1F" strokeWidth="1.5" />
          <line x1="374" y1="150" x2="416" y2="188" stroke="#0E0F12" strokeWidth="1.5" />

          <rect x="416" y="24" width="204" height="52" fill="#0E0F12" />
          <text x="430" y="46" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">QUALIFIED</text>
          <text x="430" y="64" fontFamily="Inter Tight, sans-serif" fontSize="12.5" fontWeight="600" fill="#F4F1EA">Books Calendar + SMS Confirm</text>

          <rect x="416" y="94" width="204" height="52" fill="#FFFFFF" stroke="#FF5A1F" strokeWidth="1.5" />
          <text x="430" y="116" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">URGENT RULE</text>
          <text x="430" y="134" fontFamily="Inter Tight, sans-serif" fontSize="12.5" fontWeight="600" fill="#0E0F12">Warm Transfer to On-Call Staff</text>

          <rect x="416" y="164" width="204" height="52" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="430" y="186" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">HANG-UP RECOVERY</text>
          <text x="430" y="204" fontFamily="Inter Tight, sans-serif" fontSize="12.5" fill="#0E0F12">Instant Missed-Call Text-Back</text>
        </svg>
      )}

      {type === 'ads-funnel' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Google Ads and Meta Ads acquisition funnel diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="24" width="180" height="84" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="48" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">GOOGLE SEARCH</text>
          <text x="34" y="70" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">Active Local Intent</text>
          <text x="34" y="90" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Exact &amp; phrase match</text>

          <rect x="20" y="132" width="180" height="84" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="156" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">META ADS</text>
          <text x="34" y="178" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">Static + Video Creatives</text>
          <text x="34" y="198" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">A/B hooks &amp; retargeting</text>

          <line x1="200" y1="66" x2="244" y2="120" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="200" y1="174" x2="244" y2="120" stroke="#0E0F12" strokeWidth="1.5" />

          <rect x="244" y="64" width="176" height="112" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="258" y="90" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">POST-CLICK</text>
          <text x="258" y="114" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#0E0F12">Message-Matched</text>
          <text x="258" y="134" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#0E0F12">Landing Page</text>
          <text x="258" y="158" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">GA4 + Meta CAPI + UTMs</text>

          <line x1="420" y1="120" x2="452" y2="120" stroke="#FF5A1F" strokeWidth="1.5" />
          <rect x="452" y="64" width="168" height="112" fill="#0E0F12" />
          <text x="466" y="90" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">CRM ROUTING</text>
          <text x="466" y="114" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#F4F1EA">Instant Follow-Up</text>
          <text x="466" y="136" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#A5A8B0">SMS + Call Alert</text>
          <text x="466" y="156" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#A5A8B0">Booked Slot Attribution</text>
        </svg>
      )}

      {type === 'review-routing' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Automated Google review request and sentiment routing diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="84" width="150" height="72" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="108" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">JOB COMPLETE</text>
          <text x="34" y="132" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">CRM Stage Trigger</text>

          <line x1="170" y1="120" x2="202" y2="120" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="202" y="76" width="168" height="88" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="216" y="102" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">SMS / EMAIL CHECK-IN</text>
          <text x="216" y="124" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">&quot;How was your</text>
          <text x="216" y="142" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">experience?&quot;</text>

          <line x1="370" y1="100" x2="412" y2="66" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="370" y1="140" x2="412" y2="174" stroke="#FF5A1F" strokeWidth="1.5" />

          <rect x="412" y="28" width="208" height="76" fill="#0E0F12" />
          <text x="426" y="52" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">POSITIVE EXPERIENCE</text>
          <text x="426" y="74" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#F4F1EA">1-Tap Google Review Link</text>
          <text x="426" y="92" fontFamily="Inter Tight, sans-serif" fontSize="11.5" fill="#A5A8B0">+ AI-assisted reply draft</text>

          <rect x="412" y="136" width="208" height="76" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="426" y="160" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">NEEDS ATTENTION</text>
          <text x="426" y="182" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Private Manager Alert</text>
          <text x="426" y="200" fontFamily="Inter Tight, sans-serif" fontSize="11.5" fill="#5C5F66">Fast internal service recovery</text>
        </svg>
      )}

      {type === 'crm-pipeline' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="GoHighLevel CRM speed-to-lead pipeline stages diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          {[
            { x: 16, num: '01', title: 'New Lead', sub: 'Sub-min SMS + email' },
            { x: 138, num: '02', title: 'Nurture', sub: 'Multi-day check-ins' },
            { x: 260, num: '03', title: 'Booked', sub: '24h & 2h reminders' },
            { x: 382, num: '04', title: 'Proposal', sub: 'Follow-up tasks' },
            { x: 504, num: '05', title: 'Won', sub: 'Review trigger' },
          ].map((col, idx) => (
            <g key={col.num}>
              <rect
                x={col.x}
                y="34"
                width="116"
                height="120"
                fill={idx === 2 ? '#0E0F12' : '#FFFFFF'}
                stroke={idx === 2 ? '#0E0F12' : '#D9D4C7'}
                strokeWidth="1.5"
              />
              <text
                x={col.x + 12}
                y="60"
                fontFamily="JetBrains Mono, monospace"
                fontSize="11"
                fill="#FF5A1F"
              >
                {col.num}
              </text>
              <text
                x={col.x + 12}
                y="88"
                fontFamily="Inter Tight, sans-serif"
                fontSize="14"
                fontWeight="700"
                fill={idx === 2 ? '#F4F1EA' : '#0E0F12'}
              >
                {col.title}
              </text>
              <text
                x={col.x + 12}
                y="112"
                fontFamily="Inter Tight, sans-serif"
                fontSize="11"
                fill={idx === 2 ? '#A5A8B0' : '#5C5F66'}
              >
                {col.sub}
              </text>
            </g>
          ))}
          <rect x="16" y="176" width="604" height="42" fill="#FFFFFF" stroke="#0E0F12" />
          <text x="30" y="201" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#0E0F12">
            SAFEGUARD: AUTOMATION PAUSES IMMEDIATELY ON PROSPECT REPLY OR MANUAL TEAM TAKEOVER
          </text>
        </svg>
      )}

      {type === 'chat-graph' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Multi-channel AI chat knowledge and handoff diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="26" width="160" height="44" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="53" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Website Chat</text>
          <rect x="20" y="96" width="160" height="44" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="123" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Instagram &amp; FB DM</text>
          <rect x="20" y="166" width="160" height="44" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="193" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Two-Way SMS</text>

          <line x1="180" y1="48" x2="232" y2="118" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="180" y1="118" x2="232" y2="118" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="180" y1="188" x2="232" y2="118" stroke="#0E0F12" strokeWidth="1.5" />

          <rect x="232" y="56" width="186" height="124" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="246" y="82" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">GROUNDED AI CHAT</text>
          <text x="246" y="106" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">Approved FAQs Only</text>
          <text x="246" y="128" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Captures name, phone &amp; scope</text>
          <text x="246" y="148" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">No guessing or fake pricing</text>

          <line x1="418" y1="90" x2="452" y2="66" stroke="#0E0F12" strokeWidth="1.5" />
          <line x1="418" y1="146" x2="452" y2="170" stroke="#FF5A1F" strokeWidth="1.5" />

          <rect x="452" y="34" width="168" height="64" fill="#0E0F12" />
          <text x="466" y="58" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">STANDARD</text>
          <text x="466" y="78" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#F4F1EA">In-Chat Booking Link</text>

          <rect x="452" y="138" width="168" height="64" fill="#FFFFFF" stroke="#FF5A1F" strokeWidth="1.5" />
          <text x="466" y="162" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">COMPLEX SCOPE</text>
          <text x="466" y="182" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Instant Human Handoff</text>
        </svg>
      )}

      {type === 'custom-middleware' && (
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Custom software, API bridge, and schema-validated LLM workflow diagram">
          <rect width="640" height="240" fill="#F4F1EA" />
          <rect x="20" y="32" width="164" height="176" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="56" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#5C5F66">EXISTING STACK</text>
          <text x="34" y="84" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">GoHighLevel CRM</text>
          <text x="34" y="114" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Billing / Quoting</text>
          <text x="34" y="144" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Dispatch / ERP</text>
          <text x="34" y="174" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="600" fill="#0E0F12">Intake Documents</text>

          <line x1="184" y1="120" x2="226" y2="120" stroke="#0E0F12" strokeWidth="1.5" />

          <rect x="226" y="32" width="194" height="176" fill="#0E0F12" />
          <text x="242" y="56" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">TYPESCRIPT BRIDGE</text>
          <text x="242" y="86" fontFamily="Inter Tight, sans-serif" fontSize="14" fontWeight="600" fill="#F4F1EA">Idempotent Webhooks</text>
          <text x="242" y="112" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#A5A8B0">Strict JSON schema checks</text>
          <text x="242" y="138" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#A5A8B0">Retry queues &amp; audit logs</text>
          <text x="242" y="164" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#A5A8B0">Validated LLM extraction</text>

          <line x1="420" y1="120" x2="456" y2="120" stroke="#FF5A1F" strokeWidth="1.5" />

          <rect x="456" y="32" width="164" height="176" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="470" y="56" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#FF5A1F">TEAM OUTPUT</text>
          <text x="470" y="86" fontFamily="Inter Tight, sans-serif" fontSize="13.5" fontWeight="600" fill="#0E0F12">Internal Dashboard</text>
          <text x="470" y="116" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Zero manual re-typing</text>
          <text x="470" y="144" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Human approval queue</text>
          <text x="470" y="172" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#5C5F66">Synced client records</text>
        </svg>
      )}
    </figure>
  );
}
