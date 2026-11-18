import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SERVICE_NAV_LINKS, TOP_NAV_LINKS } from '../content/navigation';
import { SITE_CONFIG } from '../config/site';
import { trackEvent } from '../lib/analytics';

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
    <header className="sticky top-0 z-40 border-b border-white/8 bg-[#0A0B10]/85 backdrop-blur-md">
      {/* Strict 3-Zone Top Bar Contract */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-[#F4F5F7] whitespace-nowrap shrink-0"
        >
          {SITE_CONFIG.brandName}
        </Link>

        {/* Zone 2: Concise Single-Line Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {TOP_NAV_LINKS.map((item) => {
            if (item.label === 'Services') {
              return (
                <div key={item.to} ref={dropdownRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`inline-flex min-h-[40px] items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                      location.pathname.startsWith('/services')
                        ? 'text-[#22D3EE]'
                        : 'text-[#9AA0AE] hover:text-[#F4F5F7]'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-150 ${
                        servicesOpen ? 'rotate-180 text-[#22D3EE]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full mt-2 w-[560px] -translate-x-1/2 rounded-2xl border border-white/12 bg-[#12141C] p-4 shadow-2xl">
                      <div className="grid grid-cols-2 gap-2">
                        {SERVICE_NAV_LINKS.map((service) => (
                          <Link
                            key={service.to}
                            to={service.to}
                            className="rounded-xl p-3 transition-colors hover:bg-white/5"
                          >
                            <p className="text-sm font-semibold text-[#F4F5F7]">
                              {service.label}
                            </p>
                            <p className="mt-1 text-xs leading-relaxed text-[#9AA0AE]">
                              {service.description}
                            </p>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="flex flex-col justify-center rounded-xl border border-white/10 bg-[#0A0B10] p-3 transition-colors hover:border-[#22D3EE]/40"
                        >
                          <p className="text-sm font-semibold text-[#22D3EE]">
                            View All Services →
                          </p>
                          <p className="mt-1 text-xs text-[#9AA0AE]">
                            Compare capabilities &amp; custom growth stacks.
                          </p>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-[#22D3EE]'
                      : 'text-[#9AA0AE] hover:text-[#F4F5F7]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              trackEvent('cta_click', { location: 'navbar' });
              onOpenBookModal();
            }}
            className="btn-primary-gradient hidden min-h-[40px] items-center justify-center rounded-lg px-4 py-2 text-xs sm:inline-flex whitespace-nowrap shrink-0"
          >
            Book a Strategy Call
          </button>
          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-white/10 text-[#F4F5F7] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Menu */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0A0B10] px-4 py-6 lg:hidden">
          <nav aria-label="Mobile navigation" className="space-y-4">
            <div>
              <Link
                to="/services"
                className="block py-2 text-base font-semibold text-[#F4F5F7]"
              >
                Services Overview
              </Link>
              <div className="mt-1 space-y-1 pl-3">
                {SERVICE_NAV_LINKS.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block py-2 text-sm text-[#9AA0AE] hover:text-[#22D3EE]"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="space-y-1 border-t border-white/10 pt-3">
              {TOP_NAV_LINKS.filter((l) => l.label !== 'Services').map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block py-2.5 text-base font-medium text-[#F4F5F7] hover:text-[#22D3EE]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/faq"
                className="block py-2.5 text-base font-medium text-[#F4F5F7] hover:text-[#22D3EE]"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="block py-2.5 text-base font-medium text-[#F4F5F7] hover:text-[#22D3EE]"
              >
                Contact Us
              </Link>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  trackEvent('cta_click', { location: 'mobile_menu' });
                  onOpenBookModal();
                }}
                className="btn-primary-gradient min-h-[48px] w-full rounded-lg px-5 py-3 text-sm"
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
