import { Suspense, lazy, useEffect, useState } from 'react';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { captureAttributionOnLoad } from './lib/utm';
import { scheduleGhlChatWidgetLoad, trackEvent } from './lib/analytics';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { BookCallModal } from './components/BookCallModal';
import { GrowthAuditModal } from './components/GrowthAuditModal';
import { CookieConsentBanner } from './components/CookieConsentBanner';

const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesOverviewPage = lazy(() => import('./pages/ServicesOverviewPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const IndustriesOverviewPage = lazy(() => import('./pages/IndustriesOverviewPage'));
const IndustryDetailPage = lazy(() => import('./pages/IndustryDetailPage'));
const BlogIndexPage = lazy(() => import('./pages/BlogIndexPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const FaqPage = lazy(() => import('./pages/FaqPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ThankYouPage = lazy(() => import('./pages/ThankYouPage'));
const LegalPage = lazy(() => import('./pages/LegalPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

function BlogSlugRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={slug ? `/insights/${slug}` : '/insights'} replace />;
}

function RouteLifecycleManager() {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

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
    <div className="mx-auto flex min-h-[50vh] max-w-7xl items-center justify-center px-4 py-20">
      <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#D9D4C7] border-t-[#FF5A1F]" />
    </div>
  );
}

function AppShell() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [cookieForceOpen, setCookieForceOpen] = useState(false);

  useEffect(() => {
    captureAttributionOnLoad();
    scheduleGhlChatWidgetLoad();
  }, []);

  const handleOpenBookModal = () => setBookModalOpen(true);

  return (
    <div className="flex min-h-screen flex-col bg-[#F4F1EA] text-[#0E0F12]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-[#0E0F12] focus:bg-[#FF5A1F] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#0E0F12]"
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

      <Footer onOpenCookiePreferences={() => setCookieForceOpen(true)} />
      <MobileStickyBar onOpenBookModal={handleOpenBookModal} />

      <BookCallModal isOpen={bookModalOpen} onClose={() => setBookModalOpen(false)} />
      <GrowthAuditModal />
      <CookieConsentBanner
        forceOpen={cookieForceOpen}
        onCloseForceOpen={() => setCookieForceOpen(false)}
      />
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
