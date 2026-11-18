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
    <div className="divide-y divide-[#D9D4C7] border-y border-[#D9D4C7] bg-[#FFFFFF]">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${idPrefix}-panel-${idx}`;
        const buttonId = `${idPrefix}-button-${idx}`;

        return (
          <div key={item.question} className="px-5 py-1 sm:px-6">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex min-h-[54px] w-full items-center justify-between gap-4 py-4 text-left text-base font-semibold text-[#0E0F12] transition-colors hover:text-[#FF5A1F] focus-visible:outline-none"
              >
                <span className="flex items-baseline gap-3">
                  <span className="font-mono-tabular text-xs font-medium text-[#FF5A1F]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#5C5F66] transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#FF5A1F]' : ''
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
              className="pb-5 pl-7 pr-6 text-[15px] leading-relaxed text-[#5C5F66]"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
