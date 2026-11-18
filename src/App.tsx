import { Suspense, lazy, useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigationType,
  useParams,
} from 'react-router-dom';
import { captureAttributionOnLoad } from './lib/utm';
import {
  getStoredConsent,
  initializeTrackingScripts,
  scheduleGhlChatWidgetLoad,
  trackEvent,
} from './lib/analytics';
import { pageLoaders, scheduleIdlePrefetch } from './lib/routePrefetch';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import HomePage from './pages/HomePage';

const ServicesOverviewPage = lazy(pageLoaders.servicesOverview);
const ServiceDetailPage = lazy(pageLoaders.serviceDetail);
const AboutPage = lazy(pageLoaders.about);
const ProcessPage = lazy(pageLoaders.process);
const IndustriesOverviewPage = lazy(pageLoaders.industriesOverview);
const IndustryDetailPage = lazy(pageLoaders.industryDetail);
const BlogIndexPage = lazy(pageLoaders.blogIndex);
const BlogPostPage = lazy(pageLoaders.blogPost);
const FaqPage = lazy(pageLoaders.faq);
const ContactPage = lazy(pageLoaders.contact);
const ThankYouPage = lazy(pageLoaders.thankYou);
const LegalPage = lazy(pageLoaders.legal);
const NotFoundPage = lazy(pageLoaders.notFound);

const BookCallModal = lazy(() =>
  import('./components/BookCallModal').then((m) => ({ default: m.BookCallModal })),
);
const GrowthAuditModal = lazy(() =>
  import('./components/GrowthAuditModal').then((m) => ({ default: m.GrowthAuditModal })),
);
const CookieConsentBanner = lazy(() =>
  import('./components/CookieConsentBanner').then((m) => ({ default: m.CookieConsentBanner })),
);

const AUDIT_SESSION_KEY = 'acendio_growth_audit_prompted_v1';

function BlogSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/insights/${slug}` : '/insights'} replace />;
}

function RouteLifecycleManager() {
  const { pathname, search, hash } = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (hash) {
      const targetId = hash.slice(1);
      let attempts = 0;
      let rafId = 0;

      const tryScrollToHash = () => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
          return;
        }
        attempts += 1;
        if (attempts < 30) {
          rafId = window.requestAnimationFrame(tryScrollToHash);
        }
      };

      tryScrollToHash();
      return () => {
        if (rafId) window.cancelAnimationFrame(rafId);
      };
    }

    if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [pathname, hash, navigationType]);

  useEffect(() => {
    let fired = false;
    const onScroll = () => {
      if (fired) return;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      if (window.scrollY / docHeight >= 0.75) {
        fired = true;
        trackEvent('scroll_depth_75', { path: pathname });
        window.removeEventListener('scroll', onScroll);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  if (pathname !== '/' && pathname.endsWith('/')) {
    return <Navigate to={`${pathname.replace(/\/+$/, '')}${search}${hash}`} replace />;
  }

  return null;
}

function PageLoadingFallback() {
  return (
    <div aria-busy="true" aria-label="Loading page content" className="min-h-[65vh] bg-[#F4F1EA]">
      <div className="h-0.5 w-full overflow-hidden bg-[#D9D4C7]/60">
        <div className="h-full w-1/3 animate-pulse bg-[#FF5A1F]" />
      </div>
    </div>
  );
}

function AppShell() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [auditModalTriggered, setAuditModalTriggered] = useState(false);
  const [cookieForceOpen, setCookieForceOpen] = useState(false);
  const [needsCookieBanner, setNeedsCookieBanner] = useState(() => !getStoredConsent());

  useEffect(() => {
    captureAttributionOnLoad();
    scheduleGhlChatWidgetLoad();
    scheduleIdlePrefetch();

    const existingConsent = getStoredConsent();
    if (existingConsent) {
      setNeedsCookieBanner(false);
      if (existingConsent.analytics || existingConsent.marketing) {
        initializeTrackingScripts(existingConsent);
      }
    }
  }, []);

  // Lightweight exit-intent / mobile-dwell trigger so GrowthAuditModal + LeadCaptureForm stay out of initial bundle
  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      if (window.sessionStorage.getItem(AUDIT_SESSION_KEY) === '1') {
        return;
      }
    } catch {
      return;
    }

    let eligible = false;
    const minDwellTimer = window.setTimeout(() => {
      eligible = true;
    }, 8000);

    const triggerOnce = () => {
      try {
        if (window.sessionStorage.getItem(AUDIT_SESSION_KEY) === '1') return;
        window.sessionStorage.setItem(AUDIT_SESSION_KEY, '1');
      } catch {
        // ignore storage restrictions
      }
      setAuditModalTriggered(true);
    };

    const onMouseLeave = (e: MouseEvent) => {
      if (!eligible) return;
      if (e.clientY <= 4 && window.innerWidth >= 1024) {
        triggerOnce();
      }
    };

    const mobileTimer = window.setTimeout(() => {
      if (window.innerWidth < 1024) {
        triggerOnce();
      }
    }, 24000);

    document.addEventListener('mouseleave', onMouseLeave);
    return () => {
      window.clearTimeout(minDwellTimer);
      window.clearTimeout(mobileTimer);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const handleOpenBookModal = useCallback(() => setBookModalOpen(true), []);
  const handleCloseBookModal = useCallback(() => setBookModalOpen(false), []);
  const handleOpenCookiePreferences = useCallback(() => setCookieForceOpen(true), []);
  const handleCloseCookieForceOpen = useCallback(() => setCookieForceOpen(false), []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] text-[#0E0F12]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[#0E0F12] focus:bg-[#FF5A1F] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#0E0F12]"
      >
        Skip to main content
      </a>

      <RouteLifecycleManager />
      <Navbar onOpenBookModal={handleOpenBookModal} />

      <main id="main-content" className="flex-1">
        <Suspense fallback={<PageLoadingFallback />}>
          <Routes>
            <Route path="/" element={<HomePage onOpenBookModal={handleOpenBookModal} />} />
            <Route
              path="/services"
              element={<ServicesOverviewPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/services/:slug"
              element={<ServiceDetailPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/about"
              element={<AboutPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/process"
              element={<ProcessPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/industries"
              element={<IndustriesOverviewPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/industries/:slug"
              element={<IndustryDetailPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/insights"
              element={<BlogIndexPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route
              path="/insights/:slug"
              element={<BlogPostPage onOpenBookModal={handleOpenBookModal} />}
            />
            <Route path="/blog" element={<Navigate to="/insights" replace />} />
            <Route path="/blog/:slug" element={<BlogSlugRedirect />} />
            <Route path="/faq" element={<FaqPage onOpenBookModal={handleOpenBookModal} />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/privacy-policy" element={<LegalPage mode="privacy" />} />
            <Route path="/terms" element={<LegalPage mode="terms" />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer onOpenCookiePreferences={handleOpenCookiePreferences} />
      <MobileStickyBar onOpenBookModal={handleOpenBookModal} />

      {bookModalOpen && (
        <Suspense fallback={null}>
          <BookCallModal isOpen={bookModalOpen} onClose={handleCloseBookModal} />
        </Suspense>
      )}

      {auditModalTriggered && (
        <Suspense fallback={null}>
          <GrowthAuditModal
            initialOpen
            onClose={() => setAuditModalTriggered(false)}
          />
        </Suspense>
      )}

      {(needsCookieBanner || cookieForceOpen) && (
        <Suspense fallback={null}>
          <CookieConsentBanner
            forceOpen={cookieForceOpen}
            onCloseForceOpen={handleCloseCookieForceOpen}
          />
        </Suspense>
      )}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
