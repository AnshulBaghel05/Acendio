import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SERVICE_NAV_LINKS, TOP_NAV_LINKS } from '../content/navigation';
import { trackEvent } from '../lib/analytics';
import { prefetchRoute } from '../lib/routePrefetch';
import { BrandMark } from './BrandMark';
import { PrefetchLink, PrefetchNavLink } from './PrefetchLink';

interface NavbarProps {
  onOpenBookModal: () => void;
}

export function Navbar({ onOpenBookModal }: NavbarProps) {
  const location = useLocation();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const prevOverflow = document.documentElement.style.overflowY;
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.overflowY = prevOverflow;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D9D4C7] bg-[#F4F1EA]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Lockup */}
        <PrefetchLink to="/" aria-label="Acendio Home" className="shrink-0">
          <BrandMark variant="horizontal" tone="light" size="md" />
        </PrefetchLink>

        {/* Zone 2: Concise Single-Line Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {TOP_NAV_LINKS.map((item) => {
            if (item.label === 'Services') {
              const isSvcActive = location.pathname.startsWith('/services');
              return (
                <div key={item.to} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onMouseEnter={() => {
                      prefetchRoute('/services');
                      prefetchRoute('/services/website-development-maintenance');
                    }}
                    onFocus={() => {
                      prefetchRoute('/services');
                      prefetchRoute('/services/website-development-maintenance');
                    }}
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`inline-flex min-h-[40px] items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                      isSvcActive
                        ? 'text-[#0E0F12] underline decoration-[#FF5A1F] decoration-2 underline-offset-8'
                        : 'text-[#5C5F66] hover:text-[#0E0F12]'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        servicesOpen ? 'rotate-180 text-[#FF5A1F]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full mt-2 w-[560px] -translate-x-1/2 border border-[#0E0F12] bg-[#FFFFFF] p-4">
                      <div className="grid grid-cols-2 divide-y divide-[#D9D4C7]/60">
                        {SERVICE_NAV_LINKS.map((service) => (
                          <PrefetchLink
                            key={service.to}
                            to={service.to}
                            className="p-3 transition-colors hover:bg-[#F4F1EA]"
                          >
                            <p className="text-sm font-semibold text-[#0E0F12]">
                              {service.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-[#5C5F66]">
                              {service.description}
                            </p>
                          </PrefetchLink>
                        ))}
                        <PrefetchLink
                          to="/services"
                          className="flex flex-col justify-center bg-[#0E0F12] p-3 text-[#F4F1EA] transition-colors hover:bg-[#1E2026]"
                        >
                          <p className="text-sm font-semibold text-[#FF5A1F]">
                            View All Services →
                          </p>
                          <p className="mt-1 text-xs text-[#A5A8B0]">
                            Compare all nine capabilities and rollout scopes.
                          </p>
                        </PrefetchLink>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <PrefetchNavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#0E0F12] underline decoration-[#FF5A1F] decoration-2 underline-offset-8'
                      : 'text-[#5C5F66] hover:text-[#0E0F12]'
                  }`
                }
              >
                {item.label}
              </PrefetchNavLink>
            );
          })}
        </nav>

        {/* Zone 3: Primary CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              trackEvent('cta_click', { location: 'navbar' });
              onOpenBookModal();
            }}
            className="btn-signal hidden min-h-[40px] items-center justify-center px-4 py-2 text-xs sm:inline-flex whitespace-nowrap shrink-0"
          >
            Book a Strategy Call
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center border border-[#D9D4C7] bg-[#FFFFFF] text-[#0E0F12] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-50 overflow-y-auto border-t border-[#D9D4C7] bg-[#F4F1EA] px-5 py-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-6">
            <div>
              <PrefetchLink
                to="/services"
                className="block border-b border-[#D9D4C7] py-3 font-editorial text-2xl font-semibold text-[#0E0F12]"
              >
                Services
              </PrefetchLink>
              <div className="mt-2 divide-y divide-[#D9D4C7]/70">
                {SERVICE_NAV_LINKS.map((s) => (
                  <PrefetchLink
                    key={s.to}
                    to={s.to}
                    className="block py-3 text-sm font-medium text-[#0E0F12] hover:text-[#FF5A1F]"
                  >
                    {s.label}
                  </PrefetchLink>
                ))}
              </div>
            </div>

            <div className="divide-y divide-[#D9D4C7] border-t border-[#0E0F12]">
              {TOP_NAV_LINKS.filter((l) => l.label !== 'Services').map((item) => (
                <PrefetchLink
                  key={item.to}
                  to={item.to}
                  className="block py-3.5 text-base font-semibold text-[#0E0F12]"
                >
                  {item.label}
                </PrefetchLink>
              ))}
              <PrefetchLink to="/faq" className="block py-3.5 text-base font-semibold text-[#0E0F12]">
                FAQ
              </PrefetchLink>
              <PrefetchLink to="/contact" className="block py-3.5 text-base font-semibold text-[#0E0F12]">
                Contact Us
              </PrefetchLink>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  trackEvent('cta_click', { location: 'mobile_menu' });
                  onOpenBookModal();
                }}
                className="btn-signal min-h-[48px] w-full px-5 py-3 text-sm"
              >
                Book a Free Strategy Call
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
