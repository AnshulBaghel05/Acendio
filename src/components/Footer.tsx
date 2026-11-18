import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config/site';
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_INDUSTRY_LINKS,
  SERVICE_NAV_LINKS,
} from '../content/navigation';
import { trackEvent } from '../lib/analytics';

interface FooterProps {
  onOpenCookiePreferences: () => void;
}

export function Footer({ onOpenCookiePreferences }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-[#0A0B10] pb-24 pt-16 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & NAP Block (Local SEO readiness) */}
          <div className="space-y-4">
            <Link to="/" className="font-display text-xl font-bold text-[#F4F5F7]">
              {SITE_CONFIG.brandName}
            </Link>
            <p className="text-sm leading-relaxed text-[#9AA0AE]">
              {SITE_CONFIG.tagline} Websites, 24/7 AI receptionists, paid acquisition, and CRM automation for growing businesses.
            </p>
            <address className="space-y-1.5 text-xs not-italic leading-relaxed text-[#9AA0AE]">
              <p className="font-semibold text-[#F4F5F7]">
                {SITE_CONFIG.brandName} · {SITE_CONFIG.location}
              </p>
              <p>{SITE_CONFIG.address}</p>
              <p>Serving: {SITE_CONFIG.targetRegions}</p>
              <p>
                Phone:{' '}
                <a
                  href={SITE_CONFIG.phoneHref}
                  onClick={() => trackEvent('phone_click', { location: 'footer' })}
                  className="text-[#F4F5F7] hover:text-[#22D3EE]"
                >
                  {SITE_CONFIG.phone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={SITE_CONFIG.emailHref} className="text-[#F4F5F7] hover:text-[#22D3EE]">
                  {SITE_CONFIG.email}
                </a>
              </p>
              <p>
                <a href={SITE_CONFIG.gbpUrl} className="text-[#22D3EE] hover:underline">
                  Google Business Profile
                </a>
              </p>
            </address>
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-display text-sm font-semibold text-[#F4F5F7]">Services</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9AA0AE]">
              <li>
                <Link to="/services" className="hover:text-[#22D3EE]">
                  All Services
                </Link>
              </li>
              {SERVICE_NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-[#22D3EE]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h2 className="font-display text-sm font-semibold text-[#F4F5F7]">Industries</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9AA0AE]">
              {FOOTER_INDUSTRY_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-[#22D3EE]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div>
            <h2 className="font-display text-sm font-semibold text-[#F4F5F7]">Company</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9AA0AE]">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-[#22D3EE]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-xs font-semibold text-[#F4F5F7]">Connect</p>
              <div className="mt-2 flex flex-wrap gap-3 text-xs text-[#9AA0AE]">
                <a href={SITE_CONFIG.socials.linkedin} className="hover:text-[#22D3EE]">
                  LinkedIn
                </a>
                <a href={SITE_CONFIG.socials.instagram} className="hover:text-[#22D3EE]">
                  Instagram
                </a>
                <a href={SITE_CONFIG.socials.facebook} className="hover:text-[#22D3EE]">
                  Facebook
                </a>
                <a href={SITE_CONFIG.socials.youtube} className="hover:text-[#22D3EE]">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-[#9AA0AE] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link to="/privacy-policy" className="hover:text-[#F4F5F7]">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F4F5F7]">
              Terms of Service
            </Link>
            <button
              type="button"
              onClick={onOpenCookiePreferences}
              className="hover:text-[#F4F5F7]"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
