import {
  SITE_CONFIG,
  getEmailHref,
  getPhoneHref,
  getWhatsappHref,
} from '../config/site';
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_INDUSTRY_LINKS,
  SERVICE_NAV_LINKS,
} from '../content/navigation';
import { trackEvent } from '../lib/analytics';
import { BrandMark } from './BrandMark';
import { PrefetchLink } from './PrefetchLink';

interface FooterProps {
  onOpenCookiePreferences: () => void;
}

export function Footer({ onOpenCookiePreferences }: FooterProps) {
  const phoneHref = getPhoneHref();
  const whatsappHref = getWhatsappHref();
  const emailHref = getEmailHref();

  const socialEntries = [
    { label: 'LinkedIn', url: SITE_CONFIG.socials.linkedin },
    { label: 'Instagram', url: SITE_CONFIG.socials.instagram },
    { label: 'Facebook', url: SITE_CONFIG.socials.facebook },
    { label: 'X', url: SITE_CONFIG.socials.x },
    { label: 'YouTube', url: SITE_CONFIG.socials.youtube },
  ].filter((item) => Boolean(item.url));

  const hasNapDetails = Boolean(
    SITE_CONFIG.location ||
      SITE_CONFIG.address ||
      SITE_CONFIG.targetRegions ||
      SITE_CONFIG.phone ||
      SITE_CONFIG.whatsappNumber ||
      SITE_CONFIG.email ||
      SITE_CONFIG.gbpUrl,
  );

  return (
    <footer className="border-t border-[#26282E] bg-[#0E0F12] pb-24 pt-16 text-[#F4F1EA] md:pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Conditional NAP Block */}
          <div className="space-y-4">
            <PrefetchLink to="/" aria-label="Acendio Home" className="inline-block">
              <BrandMark variant="horizontal" tone="dark" size="md" />
            </PrefetchLink>
            <p className="text-sm leading-relaxed text-[#A5A8B0]">{SITE_CONFIG.tagline}</p>

            {hasNapDetails && (
              <address className="space-y-1.5 border-t border-[#26282E] pt-4 text-xs not-italic leading-relaxed text-[#A5A8B0]">
                {(SITE_CONFIG.location || SITE_CONFIG.address) && (
                  <p className="font-semibold text-[#F4F1EA]">
                    {SITE_CONFIG.brandName}
                    {SITE_CONFIG.location ? ` · ${SITE_CONFIG.location}` : ''}
                  </p>
                )}
                {SITE_CONFIG.address && <p>{SITE_CONFIG.address}</p>}
                {SITE_CONFIG.targetRegions && (
                  <p>Serving: {SITE_CONFIG.targetRegions}</p>
                )}
                {SITE_CONFIG.phone && phoneHref && (
                  <p>
                    Phone:{' '}
                    <a
                      href={phoneHref}
                      onClick={() => trackEvent('phone_click', { location: 'footer' })}
                      className="text-[#F4F1EA] hover:text-[#FF5A1F]"
                    >
                      {SITE_CONFIG.phone}
                    </a>
                  </p>
                )}
                {SITE_CONFIG.whatsappNumber && whatsappHref && (
                  <p>
                    WhatsApp:{' '}
                    <a
                      href={whatsappHref}
                      onClick={() => trackEvent('whatsapp_click', { location: 'footer' })}
                      className="text-[#F4F1EA] hover:text-[#FF5A1F]"
                    >
                      {SITE_CONFIG.whatsappNumber}
                    </a>
                  </p>
                )}
                {SITE_CONFIG.email && emailHref && (
                  <p>
                    Email:{' '}
                    <a href={emailHref} className="text-[#F4F1EA] hover:text-[#FF5A1F]">
                      {SITE_CONFIG.email}
                    </a>
                  </p>
                )}
                {SITE_CONFIG.gbpUrl && (
                  <p>
                    <a
                      href={SITE_CONFIG.gbpUrl}
                      rel="noopener noreferrer"
                      className="text-[#FF5A1F] hover:underline"
                    >
                      Google Business Profile →
                    </a>
                  </p>
                )}
              </address>
            )}
          </div>

          {/* Services Column */}
          <div>
            <h2 className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#A5A8B0]">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-[#F4F1EA]">
              <li>
                <PrefetchLink to="/services" className="hover:text-[#FF5A1F]">
                  All Services
                </PrefetchLink>
              </li>
              {SERVICE_NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <PrefetchLink to={item.to} className="text-[#A5A8B0] hover:text-[#F4F1EA]">
                    {item.label}
                  </PrefetchLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h2 className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#A5A8B0]">
              Industries
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <PrefetchLink to="/industries" className="text-[#F4F1EA] hover:text-[#FF5A1F]">
                  All Industries
                </PrefetchLink>
              </li>
              {FOOTER_INDUSTRY_LINKS.map((item) => (
                <li key={item.to}>
                  <PrefetchLink to={item.to} className="text-[#A5A8B0] hover:text-[#F4F1EA]">
                    {item.label}
                  </PrefetchLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Conditional Socials */}
          <div>
            <h2 className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#A5A8B0]">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_COMPANY_LINKS.map((item) => (
                <li key={item.to}>
                  <PrefetchLink to={item.to} className="text-[#A5A8B0] hover:text-[#F4F1EA]">
                    {item.label}
                  </PrefetchLink>
                </li>
              ))}
            </ul>

            {socialEntries.length > 0 && (
              <div className="mt-6 border-t border-[#26282E] pt-4">
                <p className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#A5A8B0]">
                  Connect
                </p>
                <div className="mt-2.5 flex flex-wrap gap-4 text-xs text-[#F4F1EA]">
                  {socialEntries.map((item) => (
                    <a
                      key={item.label}
                      href={item.url}
                      rel="noopener noreferrer"
                      className="hover:text-[#FF5A1F]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#26282E] pt-6 text-xs text-[#A5A8B0] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <PrefetchLink to="/privacy-policy" className="hover:text-[#F4F1EA]">
              Privacy Policy
            </PrefetchLink>
            <PrefetchLink to="/terms" className="hover:text-[#F4F1EA]">
              Terms of Service
            </PrefetchLink>
            <button
              type="button"
              onClick={onOpenCookiePreferences}
              className="hover:text-[#F4F1EA]"
            >
              Cookie Preferences
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
