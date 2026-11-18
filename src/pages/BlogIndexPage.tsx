import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../content/blog';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CtaBand } from '../components/CtaBand';

interface BlogIndexPageProps {
  onOpenBookModal: () => void;
}

export default function BlogIndexPage({ onOpenBookModal }: BlogIndexPageProps) {
  return (
    <>
      <SeoHead
        title="AI Growth & Automation Insights | Acendio Blog"
        description="Practical engineering guides on AI voice receptionists, speed-to-lead CRM automation, conversion websites, and Google review systems."
        path="/blog"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/blog' },
        ]}
      />

      <section className="bg-mesh-hero border-b border-white/8 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium text-[#22D3EE]">
              Acendio Insights
            </p>
            <h1 className="mt-2 font-display text-[clamp(2rem,3.6vw,3.25rem)] font-extrabold leading-tight text-[#F4F5F7]">
              Systems Playbooks for Local &amp; Growing Businesses
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#9AA0AE] sm:text-lg">
              Deep-dive implementation guides on AI reception, GoHighLevel lead pipelines, paid acquisition, and reputation engines.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0B10] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="gradient-border-card flex flex-col justify-between overflow-hidden rounded-2xl"
              >
                <div>
                  <Link to={`/blog/${post.slug}`} className="block overflow-hidden bg-[#0A0B10]">
                    <img
                      src={post.coverImage}
                      alt={post.coverAlt}
                      width={1280}
                      height={720}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </Link>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#9AA0AE]">
                      <span className="text-[#22D3EE]">{post.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="mt-3 font-display text-xl font-bold leading-snug text-[#F4F5F7]">
                      <Link to={`/blog/${post.slug}`} className="hover:text-[#22D3EE]">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#9AA0AE]">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-sm font-semibold text-[#22D3EE] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand onOpenBookModal={onOpenBookModal} />
    </>
  );
}
