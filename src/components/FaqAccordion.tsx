import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FaqItem } from '../content/home';

interface FaqAccordionProps {
  items: FaqItem[];
  idPrefix?: string;
}

export function FaqAccordion({ items, idPrefix = 'faq' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-xl border border-white/10 bg-[#12141C]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        const buttonId = `${idPrefix}-button-${idx}`;

        return (
          <div key={item.question} className="px-6 py-1">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex min-h-[52px] w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[#F4F5F7] transition-colors hover:text-[#22D3EE] focus-visible:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#9AA0AE] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#22D3EE]' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-5 pr-8 text-sm leading-relaxed text-[#9AA0AE]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
