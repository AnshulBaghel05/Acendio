import type { ComponentType } from 'react';

type PageModule = Promise<{ default: ComponentType<any> }>;

const prefetchedKeys = new Set<string>();
let idleScheduled = false;

export const pageLoaders = {
  servicesOverview: (): PageModule => import('../pages/ServicesOverviewPage'),
  serviceDetail: (): PageModule => import('../pages/ServiceDetailPage'),
  about: (): PageModule => import('../pages/AboutPage'),
  process: (): PageModule => import('../pages/ProcessPage'),
  industriesOverview: (): PageModule => import('../pages/IndustriesOverviewPage'),
  industryDetail: (): PageModule => import('../pages/IndustryDetailPage'),
  blogIndex: (): PageModule => import('../pages/BlogIndexPage'),
  blogPost: (): PageModule => import('../pages/BlogPostPage'),
  faq: (): PageModule => import('../pages/FaqPage'),
  contact: (): PageModule => import('../pages/ContactPage'),
  thankYou: (): PageModule => import('../pages/ThankYouPage'),
  legal: (): PageModule => import('../pages/LegalPage'),
  notFound: (): PageModule => import('../pages/NotFoundPage'),
};

function resolveLoaderKey(path: string): keyof typeof pageLoaders | null {
  const clean = (path.split(/[?#]/)[0] || '/').replace(/\/+$/, '') || '/';

  if (clean === '/') return null;
  if (clean === '/services') return 'servicesOverview';
  if (clean.startsWith('/services/')) return 'serviceDetail';
  if (clean === '/about') return 'about';
  if (clean === '/process') return 'process';
  if (clean === '/industries') return 'industriesOverview';
  if (clean.startsWith('/industries/')) return 'industryDetail';
  if (clean === '/insights' || clean === '/blog') return 'blogIndex';
  if (clean.startsWith('/insights/') || clean.startsWith('/blog/')) return 'blogPost';
  if (clean === '/faq') return 'faq';
  if (clean === '/contact') return 'contact';
  if (clean === '/thank-you') return 'thankYou';
  if (clean === '/privacy-policy' || clean === '/terms') return 'legal';
  return null;
}

/**
 * Prefetches the code chunk for a given route path at most once per session.
 * Safe to invoke on link hover, focus, or touch start.
 */
export function prefetchRoute(to: string): void {
  if (typeof window === 'undefined') return;
  const key = resolveLoaderKey(to);
  if (!key || prefetchedKeys.has(key)) return;

  prefetchedKeys.add(key);
  void pageLoaders[key]().catch(() => {
    prefetchedKeys.delete(key);
  });
}

export function getPrefetchHandlers(to: string) {
  const trigger = () => prefetchRoute(to);
  return {
    onMouseEnter: trigger,
    onFocus: trigger,
    onTouchStart: trigger,
  };
}

interface NetworkInfoLike {
  saveData?: boolean;
  effectiveType?: string;
}

function shouldAllowBackgroundPrefetch(): boolean {
  if (typeof navigator === 'undefined') return false;
  const conn = (navigator as Navigator & { connection?: NetworkInfoLike }).connection;
  if (!conn) return true;
  if (conn.saveData) return false;
  if (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g') return false;
  return true;
}

/**
 * Prefetches only the top-level primary navigation chunks during browser idle time.
 * Secondary nested routes stay on-demand / hover-prefetched so bandwidth is never wasted.
 */
export function scheduleIdlePrefetch(): void {
  if (idleScheduled || typeof window === 'undefined') return;
  if (!shouldAllowBackgroundPrefetch()) return;
  idleScheduled = true;

  const run = () => {
    if (!shouldAllowBackgroundPrefetch()) return;
    ['/services', '/industries', '/insights', '/contact'].forEach((route) => {
      prefetchRoute(route);
    });
  };

  const win = window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  };

  if (typeof win.requestIdleCallback === 'function') {
    win.requestIdleCallback(run, { timeout: 2200 });
  } else {
    window.setTimeout(run, 1500);
  }
}
