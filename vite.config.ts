import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

const ROUTES = [
  '/',
  '/services',
  '/services/website-development-maintenance',
  '/services/ai-receptionist',
  '/services/ads-management-creatives',
  '/services/review-management-automation',
  '/services/crm-lead-follow-up-automation',
  '/services/ai-chat-support',
  '/services/custom-software-ai-automation',
  '/about',
  '/process',
  '/industries',
  '/industries/real-estate',
  '/industries/home-services',
  '/industries/clinics-healthcare',
  '/industries/hospitality',
  '/industries/local-retail',
  '/insights',
  '/insights/missed-call-text-back-and-ai-receptionists-for-local-businesses',
  '/insights/speed-to-lead-crm-automation-architecture',
  '/insights/conversion-websites-and-google-review-automation-flywheel',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms',
];

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isIndexable = env.VITE_INDEXABLE === 'true';
  const siteUrl = (env.VITE_SITE_URL || '').replace(/\/+$/, '');

  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'acendio-seo-build-files',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) return;
          const distDir = path.resolve(__dirname, 'dist');
          if (!fs.existsSync(distDir)) return;

          // Update index.html robots meta if VITE_INDEXABLE=true
          const htmlPath = path.join(distDir, 'index.html');
          if (fs.existsSync(htmlPath) && isIndexable) {
            const html = fs.readFileSync(htmlPath, 'utf-8');
            fs.writeFileSync(
              htmlPath,
              html.replace(
                '<meta name="robots" content="noindex, nofollow" />',
                '<meta name="robots" content="index, follow" />',
              ),
            );
          }

          // Generate dist/robots.txt based on VITE_INDEXABLE & VITE_SITE_URL
          const sitemapRef = siteUrl ? `${siteUrl}/sitemap.xml` : '/sitemap.xml';
          const robotsContent = isIndexable
            ? `User-agent: *\nAllow: /\n\nSitemap: ${sitemapRef}\n`
            : `User-agent: *\nDisallow: /\n\nSitemap: ${sitemapRef}\n`;
          fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsContent);

          // Generate dist/sitemap.xml with absolute domain URLs when VITE_SITE_URL is set
          const urlEntries = ROUTES.map((route) => {
            const loc = siteUrl ? `${siteUrl}${route}` : route;
            const priority =
              route === '/' ? '1.0' : route === '/contact' ? '0.95' : route.startsWith('/services') ? '0.9' : '0.8';
            return `  <url><loc>${loc}</loc><priority>${priority}</priority></url>`;
          }).join('\n');

          const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
          fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml);
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
