import { useState } from 'react';
import { CalendarCheck, PhoneIncoming, MessageSquareText, Star, ArrowRight, CheckCircle2 } from 'lucide-react';

type ScenarioKey = 'voice' | 'web' | 'reviews';

interface ScenarioData {
  id: ScenarioKey;
  tabLabel: string;
  triggerLabel: string;
  triggerDetail: string;
  steps: {
    stage: string;
    action: string;
    result: string;
  }[];
  footerNote: string;
}

const SCENARIOS: Record<ScenarioKey, ScenarioData> = {
  voice: {
    id: 'voice',
    tabLabel: 'AI Voice Reception',
    triggerLabel: 'Inbound Call Received',
    triggerDetail: 'After-hours or busy line routed to Acendio Voice Agent',
    steps: [
      {
        stage: '01. Instant Answer',
        action: 'AI Receptionist greets caller and checks service area eligibility',
        result: 'Zero voicemail drop',
      },
      {
        stage: '02. Qualification',
        action: 'Captures scope, urgency, and contact info into GoHighLevel',
        result: 'Structured CRM contact',
      },
      {
        stage: '03. Calendar Booking',
        action: 'Confirms open slot and sends automated SMS confirmation',
        result: 'Booked on calendar',
      },
    ],
    footerNote: 'Full call transcript, audio recording, and lead tags synced automatically.',
  },
  web: {
    id: 'web',
    tabLabel: 'Web & Ad Speed-to-Lead',
    triggerLabel: 'Ad Click & Form Submit',
    triggerDetail: 'Prospect submits consultation request with UTM attribution',
    steps: [
      {
        stage: '01. Attribution Capture',
        action: 'Webhook logs source, campaign, and service interest in CRM',
        result: 'Pipeline stage: New Lead',
      },
      {
        stage: '02. Instant Response',
        action: 'Automated SMS & email outreach starts within seconds',
        result: 'Two-way conversation',
      },
      {
        stage: '03. Reminder Cadence',
        action: 'Calendar invite plus 24h and 2h SMS reminders prevent no-shows',
        result: 'Confirmed consultation',
      },
    ],
    footerNote: 'Automation halts immediately when prospect replies or staff steps in.',
  },
  reviews: {
    id: 'reviews',
    tabLabel: 'Review Flywheel',
    triggerLabel: 'Completed Job Trigger',
    triggerDetail: 'CRM opportunity moves to Service Completed',
    steps: [
      {
        stage: '01. Automated Invite',
        action: 'Polite SMS & email review request dispatched post-service',
        result: 'Frictionless 1-tap flow',
      },
      {
        stage: '02. Sentiment Routing',
        action: 'Satisfied buyers go to Google; concerns alert management privately',
        result: 'Protected reputation',
      },
      {
        stage: '03. AI-Assisted Reply',
        action: 'Drafts timely, brand-aligned owner reply for Google Profile',
        result: 'Active local authority',
      },
    ],
    footerNote: 'Compounds Google Business Profile visibility without manual staff chasing.',
  },
};

export function HeroDashboardVisual() {
  const [active, setActive] = useState<ScenarioKey>('voice');
  const current = SCENARIOS[active];

  return (
    <div
      className="relative rounded-2xl border border-white/10 bg-[#12141C] p-5 sm:p-6"
      aria-label="Interactive Acendio growth automation workflow preview"
    >
      {/* Subtle architectural gradient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-[#6366F1]/25 via-transparent to-[#22D3EE]/20 blur-sm"
      />

      {/* Interactive workflow switcher */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
        <span className="font-display text-sm font-semibold text-[#F4F5F7]">
          Connected Acquisition Flow
        </span>
        <div
          role="tablist"
          aria-label="Workflow channels"
          className="flex items-center gap-1 rounded-lg bg-[#0A0B10] p-1"
        >
          {(Object.keys(SCENARIOS) as ScenarioKey[]).map((key) => {
            const isSelected = active === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActive(key)}
                className={`min-h-[36px] rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                  isSelected
                    ? 'bg-[#1C2030] text-[#22D3EE] ring-1 ring-[#6366F1]/40'
                    : 'text-[#9AA0AE] hover:text-[#F4F5F7]'
                }`}
              >
                {SCENARIOS[key].tabLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Trigger Header */}
      <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-white/8 bg-[#0A0B10] p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#6366F1]/20 to-[#22D3EE]/20 text-[#22D3EE]">
            {active === 'voice' && <PhoneIncoming className="h-5 w-5" aria-hidden="true" />}
            {active === 'web' && <MessageSquareText className="h-5 w-5" aria-hidden="true" />}
            {active === 'reviews' && <Star className="h-5 w-5" aria-hidden="true" />}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#F4F5F7]">{current.triggerLabel}</p>
            <p className="text-xs text-[#9AA0AE]">{current.triggerDetail}</p>
          </div>
        </div>
        <ArrowRight className="hidden h-4 w-4 shrink-0 text-[#9AA0AE] sm:block" aria-hidden="true" />
      </div>

      {/* Workflow SVG / Structured Pipeline Steps */}
      <div className="mt-4 space-y-3">
        {current.steps.map((step, index) => (
          <div
            key={step.stage}
            className="flex flex-col justify-between gap-2 rounded-xl border border-white/8 bg-[#0A0B10]/70 px-4 py-3.5 sm:flex-row sm:items-center"
          >
            <div>
              <p className="font-mono-tabular text-xs font-medium text-[#818CF8]">
                {step.stage}
              </p>
              <p className="mt-0.5 text-sm text-[#F4F5F7]">{step.action}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-medium text-[#22C55E] shrink-0">
              <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{step.result}</span>
            </div>
            {index < current.steps.length - 1 && (
              <span className="sr-only">Next step</span>
            )}
          </div>
        ))}
      </div>

      {/* Output Bar */}
      <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs text-[#9AA0AE]">
        <div className="flex items-center gap-2">
          <CalendarCheck className="h-4 w-4 shrink-0 text-[#22D3EE]" aria-hidden="true" />
          <span>{current.footerNote}</span>
        </div>
      </div>
    </div>
  );
}
