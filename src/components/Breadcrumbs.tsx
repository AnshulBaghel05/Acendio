import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 font-mono-tabular text-xs text-[#5C5F66]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-[#5C5F66]/60" aria-hidden="true" />
              )}
              {isLast || !item.to ? (
                <span aria-current="page" className="font-medium text-[#0E0F12]">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.to}
                  className="transition-colors hover:text-[#FF5A1F] whitespace-nowrap"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
