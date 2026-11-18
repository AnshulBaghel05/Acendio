import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS, getBlogPostBySlug } from '../content/blog';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
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

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <SeoHead
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        ogType="article"
        ogImage={post.coverImage}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/blog' },
          { name: post.title, url: `/blog/${post.slug}` },
        ]}
        articleSchema={{
          headline: post.title,
          description: post.metaDescription,
          datePublished: post.publishedDate,
          dateModified: post.modifiedDate,
          authorName: post.author,
          image: post.coverImage,
          url: `/blog/${post.slug}`,
        }}
      />

      <article className="bg-[#0A0B10] py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Home', to: '/' },
              { label: 'Insights', to: '/blog' },
              { label: post.title },
            ]}
          />

          <header>
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#9AA0AE]">
              <span className="font-medium text-[#22D3EE]">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span>Published {post.publishedDate}</span>
              <span aria-hidden="true">·</span>
              <span>Updated {post.modifiedDate}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="mt-3 font-display text-[clamp(1.9rem,3.4vw,3rem)] font-extrabold leading-tight text-[#F4F5F7]">
              {post.title}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-sm text-[#9AA0AE]">
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <span>{post.authorRole}</span>
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-[#12141C]">
              <img
                src={post.coverImage}
                alt={post.coverAlt}
                width={1280}
                height={720}
                referrerPolicy="no-referrer"
                className="aspect-video w-full object-cover"
              />
            </div>
          </header>

          {/* Table of Contents */}
          <nav
            aria-label="Table of contents"
            className="mt-10 rounded-2xl border border-white/10 bg-[#12141C] p-6"
          >
            <p className="font-display text-sm font-bold text-[#F4F5F7]">Table of Contents</p>
            <ol className="mt-3 space-y-2 text-sm text-[#9AA0AE]">
              {post.toc.map((item, idx) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="hover:text-[#22D3EE]">
                    <span className="font-mono-tabular mr-2 text-xs text-[#818CF8]">
                      0{idx + 1}.
                    </span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Article Body */}
          <div className="mt-12 space-y-12">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold text-[#F4F5F7] sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-base leading-[1.75] text-[#9AA0AE]">
                  {section.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="mt-5 space-y-2.5 rounded-xl border border-white/10 bg-[#12141C] p-5 text-sm text-[#F4F5F7]">
                    {section.bullets.map((b) => (
                      <li key={b}>· {b}</li>
                    ))}
                  </ul>
                )}
                {section.internalLink && (
                  <div className="mt-5">
                    <Link
                      to={section.internalLink.to}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                    >
                      <span>{section.internalLink.label}</span>
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Further Reading */}
          <div className="mt-16 border-t border-white/10 pt-10">
            <h2 className="font-display text-xl font-bold text-[#F4F5F7]">
              More Insights From Acendio
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {otherPosts.map((other) => (
                <Link
                  key={other.slug}
                  to={`/blog/${other.slug}`}
                  className="gradient-border-card rounded-xl p-5"
                >
                  <p className="text-xs text-[#22D3EE]">{other.category}</p>
                  <h3 className="mt-1.5 font-display text-base font-bold text-[#F4F5F7]">
                    {other.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
