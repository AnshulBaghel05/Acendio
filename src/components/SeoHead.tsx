import { useLayoutEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export interface BreadcrumbSchemaItem {
  name: string;
  url: string;
}

export interface FaqSchemaItem {
  question: string;
  answer: string;
}

export interface SeoHeadProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  serviceSchema?: {
    name: string;
    description: string;
    serviceType: string;
    url: string;
  };
  faqs?: FaqSchemaItem[];
  breadcrumbs?: BreadcrumbSchemaItem[];
  articleSchema?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified: string;
    authorName: string;
    image: string;
    url: string;
  };
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string): void {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonical(href: string): void {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function SeoHead({
  title,
  description,
  path,
  ogImage = SITE_CONFIG.ogImages.home,
  ogType = 'website',
  noIndex = false,
  serviceSchema,
  faqs,
  breadcrumbs,
  articleSchema,
}: SeoHeadProps) {
  useLayoutEffect(() => {
    const origin =
      SITE_CONFIG.siteUrl ||
      (typeof window !== 'undefined' && window.location.origin ? window.location.origin : '');
    const cleanPath = path === '/' ? '/' : path.replace(/\/+$/, '');
    const canonicalUrl = origin ? `${origin}${cleanPath}` : cleanPath;
    const absoluteOgImage =
      ogImage.startsWith('http') || !origin ? ogImage : `${origin}${ogImage}`;

    const shouldIndex = SITE_CONFIG.isIndexable && !noIndex;

    document.title = title;
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', shouldIndex ? 'index, follow' : 'noindex, nofollow');
    if (canonicalUrl) {
      setCanonical(canonicalUrl);
    }

    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:site_name', SITE_CONFIG.brandName);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    if (canonicalUrl) {
      setMetaTag('property', 'og:url', canonicalUrl);
    }
    setMetaTag('property', 'og:image', absoluteOgImage);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', absoluteOgImage);

    const sameAs = Object.values(SITE_CONFIG.socials).filter(Boolean);
    const orgNode: Record<string, unknown> = {
      '@type': 'Organization',
      '@id': `${origin}/#organization`,
      name: SITE_CONFIG.brandName,
      url: origin || '/',
      description:
        'AI and digital growth agency delivering conversion websites, AI receptionists, paid ads, review automation, and CRM workflows.',
    };
    if (SITE_CONFIG.email) orgNode.email = SITE_CONFIG.email;
    if (SITE_CONFIG.phone) orgNode.telephone = SITE_CONFIG.phone;
    if (SITE_CONFIG.targetRegions) orgNode.areaServed = SITE_CONFIG.targetRegions;
    if (sameAs.length > 0) orgNode.sameAs = sameAs;

    const localBusinessNode: Record<string, unknown> = {
      '@type': 'ProfessionalService',
      '@id': `${origin}/#localbusiness`,
      name: SITE_CONFIG.brandName,
      url: origin || '/',
      parentOrganization: { '@id': `${origin}/#organization` },
    };
    if (SITE_CONFIG.phone) localBusinessNode.telephone = SITE_CONFIG.phone;
    if (SITE_CONFIG.email) localBusinessNode.email = SITE_CONFIG.email;
    if (SITE_CONFIG.targetRegions) localBusinessNode.areaServed = SITE_CONFIG.targetRegions;
    if (SITE_CONFIG.address || SITE_CONFIG.location) {
      localBusinessNode.address = {
        '@type': 'PostalAddress',
        ...(SITE_CONFIG.address ? { streetAddress: SITE_CONFIG.address } : {}),
        ...(SITE_CONFIG.location ? { addressLocality: SITE_CONFIG.location } : {}),
      };
    }

    const graph: Record<string, unknown>[] = [
      orgNode,
      {
        '@type': 'WebSite',
        '@id': `${origin}/#website`,
        url: origin || '/',
        name: SITE_CONFIG.brandName,
        publisher: { '@id': `${origin}/#organization` },
      },
      localBusinessNode,
    ];

    if (serviceSchema) {
      const svcNode: Record<string, unknown> = {
        '@type': 'Service',
        name: serviceSchema.name,
        description: serviceSchema.description,
        serviceType: serviceSchema.serviceType,
        url: origin ? `${origin}${serviceSchema.url}` : serviceSchema.url,
        provider: { '@id': `${origin}/#organization` },
      };
      if (SITE_CONFIG.targetRegions) svcNode.areaServed = SITE_CONFIG.targetRegions;
      graph.push(svcNode);
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        '@type': 'FAQPage',
        mainEntity: faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      });
    }

    if (breadcrumbs && breadcrumbs.length > 0) {
      graph.push({
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item:
            crumb.url.startsWith('http') || !origin
              ? crumb.url
              : `${origin}${crumb.url}`,
        })),
      });
    }

    if (articleSchema) {
      graph.push({
        '@type': 'Article',
        headline: articleSchema.headline,
        description: articleSchema.description,
        datePublished: articleSchema.datePublished,
        dateModified: articleSchema.dateModified,
        image:
          articleSchema.image.startsWith('http') || !origin
            ? articleSchema.image
            : `${origin}${articleSchema.image}`,
        author: {
          '@type': 'Organization',
          name: articleSchema.authorName,
        },
        publisher: { '@id': `${origin}/#organization` },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': origin ? `${origin}${articleSchema.url}` : articleSchema.url,
        },
      });
    }

    const scriptId = 'acendio-structured-data';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph,
    });
  }, [title, description, path, ogImage, ogType, noIndex, serviceSchema, faqs, breadcrumbs, articleSchema]);

  return null;
}
