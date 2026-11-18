import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug } from '../content/blog';
import { SITE_CONFIG } from '../config/site';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogDiagramCover } from '../components/diagrams/BlogDiagramCover';
import { CtaBand } from '../components/CtaBand';
import NotFoundPage from './NotFoundPage';

interface BlogPostPageProps {
  onOpenBookModal: () => void;
}

export default function BlogPostPage({ onOpenBookModal }: BlogPostPageProps) {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFoundPage />;
  }

  const otherPosts = BLOG_POSTS.filter((item) => item.slug !== post.slug);

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/insights/${post.slug}`}
        ogType="article"
        ogImage={SITE_CONFIG.ogImages.insights}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
          { name: post.title, url: `/insights/${post.slug}` },
        ]}
        articleSchema={{
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedDate,
          dateModified: post.modifiedDate,
          authorName: post.author,
          image: SITE_CONFIG.ogImages.insights,
          url: `/insights/${post.slug}`,
        }}
      />

      <article>
        <header className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Home', to: '/' },
                { label: 'Insights', to: '/insights' },
                { label: post.category },
              ]}
            />

            <div className="flex flex-wrap items-center gap-3 font-mono-tabular text-xs text-[#5C5F66]">
              <span className="font-semibold text-[#FF5A1F]">{post.category}</span>
              <span>·</span>
              <time dateTime={post.publishedDate}>{post.displayPublishedDate}</time>
              <span>·</span>
              <span>Updated {post.displayModifiedDate}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-4 font-editorial text-[clamp(2rem,3.6vw,3.1rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#0E0F12]">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#5C5F66] sm:text-lg">
              {post.excerpt}
            </p>
            <p className="mt-4 font-mono-tabular text-xs text-[#0E0F12]">
              By {post.author} · {post.authorRole}
            </p>

            <div className="mt-8 border border-[#D9D4C7] bg-[#FFFFFF]">
              <BlogDiagramCover type={post.diagramType} category={post.category} />
            </div>
          </div>
        </header>

        <section className="bg-[#FFFFFF] py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-12">
              {/* Sticky TOC */}
              <aside className="lg:sticky lg:top-24 lg:col-span-4">
                <div className="border border-[#D9D4C7] bg-[#F4F1EA] p-5">
                  <p className="font-mono-tabular text-[11px] font-semibold uppercase tracking-wider text-[#FF5A1F]">
                    In This Guide
                  </p>
                  <nav aria-label="Article table of contents" className="mt-3 space-y-2">
                    {post.toc.map((item, idx) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-start gap-2.5 text-xs leading-snug text-[#5C5F66] hover:text-[#0E0F12]"
                      >
                        <span className="font-mono-tabular text-[#FF5A1F]">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{item.label}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-5 border-t border-[#D9D4C7] pt-4">
                    <Link
                      to="/insights"
                      className="inline-flex items-center gap-1.5 font-mono-tabular text-xs font-semibold text-[#0E0F12] hover:text-[#FF5A1F]"
                    >
                      <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>All Insights</span>
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Editorial Body */}
              <div className="space-y-10 lg:col-span-8">
                {post.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24 border-b border-[#D9D4C7] pb-8 last:border-b-0"
                  >
                    <h2 className="font-editorial text-2xl font-semibold text-[#0E0F12] sm:text-3xl">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((para) => (
                        <p
                          key={para.slice(0, 32)}
                          className="text-base leading-relaxed text-[#5C5F66]"
                        >
                          {para}
                        </p>
                      ))}
                    </div>

                    {section.bullets && section.bullets.length > 0 && (
                      <ul className="mt-5 space-y-2 border-l-2 border-[#FF5A1F] bg-[#F4F1EA] py-3 pl-5 pr-4">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="text-sm leading-relaxed text-[#0E0F12]">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.internalLink && (
                      <div className="mt-5">
                        <Link
                          to={section.internalLink.to}
                          className="link-editorial inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0F12]"
                        >
                          <span>{section.internalLink.label}</span>
                          <ArrowRight className="h-4 w-4 text-[#FF5A1F]" aria-hidden="true" />
                        </Link>
                      </div>
                    )}
                  </section>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Insights */}
        <section className="border-t border-[#D9D4C7] bg-[#F4F1EA] py-12">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Further Reading
            </p>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  to={`/insights/${other.slug}`}
                  className="group border border-[#D9D4C7] bg-[#FFFFFF] p-5 transition-colors hover:border-[#0E0F12]"
                >
                  <div className="flex items-center justify-between font-mono-tabular text-[11px] text-[#5C5F66]">
                    <span>{other.category}</span>
                    <span>{other.displayPublishedDate}</span>
                  </div>
                  <h3 className="mt-2 font-editorial text-xl font-semibold text-[#0E0F12] group-hover:text-[#FF5A1F]">
                    {other.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <CtaBand
        eyebrow="Custom Implementation"
        headline="Ready to Connect Your Website, Voice Coverage & CRM?"
        subtitle="Schedule a discovery call to audit your existing setup and receive a custom proposal."
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
