import { BlogDiagramType } from '../../content/blog';

interface BlogDiagramCoverProps {
  type: BlogDiagramType;
  category: string;
}

/**
 * Consistent editorial SVG diagram covers for Insights index and article pages.
 */
export function BlogDiagramCover({ type, category }: BlogDiagramCoverProps) {
  return (
    <div className="border-b border-[#D9D4C7] bg-[#FFFFFF] p-4">
      <div className="mb-2 flex items-center justify-between font-mono-tabular text-[10px] uppercase tracking-wider text-[#5C5F66]">
        <span>{category}</span>
        <span className="text-[#FF5A1F]">Acendio Diagram</span>
      </div>

      {type === 'voice-recovery' && (
        <svg viewBox="0 0 480 210" className="w-full" aria-hidden="true">
          <rect width="480" height="210" fill="#F4F1EA" />
          <rect x="20" y="34" width="110" height="58" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="32" y="58" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">RING 01</text>
          <text x="32" y="76" fontFamily="Inter Tight, sans-serif" fontSize="12" fontWeight="600" fill="#0E0F12">Inbound Call</text>

          <line x1="130" y1="63" x2="174" y2="63" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="174" y="24" width="144" height="78" fill="#0E0F12" />
          <text x="188" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">VOICE AGENT</text>
          <text x="188" y="68" fontFamily="Inter Tight, sans-serif" fontSize="12" fontWeight="600" fill="#F4F1EA">Answers &amp; Qualifies</text>
          <text x="188" y="86" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#A5A8B0">Logs CRM transcript</text>

          <line x1="318" y1="63" x2="352" y2="63" stroke="#FF5A1F" strokeWidth="1.5" />
          <rect x="352" y="34" width="108" height="58" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="364" y="58" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5C5F66">CALENDAR</text>
          <text x="364" y="76" fontFamily="Inter Tight, sans-serif" fontSize="12" fontWeight="600" fill="#0E0F12">Slot Booked</text>

          <rect x="20" y="130" width="440" height="54" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="153" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">FALLBACK SAFETY NET</text>
          <text x="34" y="171" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#0E0F12">
            Early Hang-Up → Instant Two-Way Missed-Call Text-Back Within Seconds
          </text>
        </svg>
      )}

      {type === 'speed-to-lead' && (
        <svg viewBox="0 0 480 210" className="w-full" aria-hidden="true">
          <rect width="480" height="210" fill="#F4F1EA" />
          <rect x="20" y="24" width="196" height="72" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">T + 0 SEC · ATTRIBUTION</text>
          <text x="34" y="68" fontFamily="Inter Tight, sans-serif" fontSize="12.5" fontWeight="600" fill="#0E0F12">Form + UTM Payload</text>
          <text x="34" y="84" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Webhook → GoHighLevel</text>

          <line x1="216" y1="60" x2="264" y2="60" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="264" y="24" width="196" height="72" fill="#0E0F12" />
          <text x="278" y="48" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">T + 15 SEC · FIRST TOUCH</text>
          <text x="278" y="68" fontFamily="Inter Tight, sans-serif" fontSize="12.5" fontWeight="600" fill="#F4F1EA">SMS + Email + Task</text>
          <text x="278" y="84" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#A5A8B0">Direct booking link sent</text>

          <rect x="20" y="118" width="440" height="68" fill="#FFFFFF" stroke="#D9D4C7" />
          <text x="34" y="142" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5C5F66">NURTURE &amp; SHOW-RATE PROTECTION</text>
          <text x="34" y="162" fontFamily="Inter Tight, sans-serif" fontSize="12" fill="#0E0F12">
            Multi-Day Check-Ins (Stop on Reply) → 24h &amp; 2h Calendar Reminders
          </text>
        </svg>
      )}

      {type === 'review-flywheel' && (
        <svg viewBox="0 0 480 210" className="w-full" aria-hidden="true">
          <rect width="480" height="210" fill="#F4F1EA" />
          <rect x="20" y="26" width="132" height="158" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="34" y="52" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">01 / DISCOVERY</text>
          <text x="34" y="74" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="700" fill="#0E0F12">Fast Website</text>
          <text x="34" y="96" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Local SEO pages</text>
          <text x="34" y="114" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Mobile clarity</text>
          <text x="34" y="132" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Clean booking CTA</text>

          <line x1="152" y1="105" x2="174" y2="105" stroke="#0E0F12" strokeWidth="1.5" />
          <rect x="174" y="26" width="132" height="158" fill="#0E0F12" />
          <text x="188" y="52" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">02 / DELIVERY</text>
          <text x="188" y="74" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="700" fill="#F4F1EA">Completed Job</text>
          <text x="188" y="96" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#A5A8B0">CRM stage updated</text>
          <text x="188" y="114" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#A5A8B0">Auto SMS review</text>
          <text x="188" y="132" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#A5A8B0">invite triggered</text>

          <line x1="306" y1="105" x2="328" y2="105" stroke="#FF5A1F" strokeWidth="1.5" />
          <rect x="328" y="26" width="132" height="158" fill="#FFFFFF" stroke="#0E0F12" strokeWidth="1.5" />
          <text x="342" y="52" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#FF5A1F">03 / COMPOUND</text>
          <text x="342" y="74" fontFamily="Inter Tight, sans-serif" fontSize="13" fontWeight="700" fill="#0E0F12">Google Profile</text>
          <text x="342" y="96" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Fresh weekly reviews</text>
          <text x="342" y="114" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Timely owner replies</text>
          <text x="342" y="132" fontFamily="Inter Tight, sans-serif" fontSize="11" fill="#5C5F66">Higher Map Pack trust</text>
        </svg>
      )}
    </div>
  );
}
