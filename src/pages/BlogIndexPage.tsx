import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../content/blog';
import { SITE_CONFIG } from '../config/site';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { BlogDiagramCover } from '../components/diagrams/BlogDiagramCover';
import { CtaBand } from '../components/CtaBand';

interface BlogIndexPageProps {
  onOpenBookModal: () => void;
}

export default function BlogIndexPage({ onOpenBookModal }: BlogIndexPageProps) {
  return (
    <>
      <SeoHead
        title="Insights & Architecture Guides | Acendio"
        description="Practical blueprints on 24/7 AI voice receptionists, GoHighLevel speed-to-lead pipelines, conversion websites, and Google review automation."
        path="/insights"
        ogImage={SITE_CONFIG.ogImages.insights}
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Insights', url: '/insights' },
        ]}
      />

      <section className="border-b border-[#D9D4C7] bg-[#F4F1EA] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
          <div className="max-w-3xl">
            <p className="font-mono-tabular text-xs font-medium uppercase tracking-wider text-[#FF5A1F]">
              Acendio Insights
            </p>
            <h1 className="mt-3 font-editorial text-[clamp(2.1rem,4vw,3.45rem)] font-semibold leading-[1.06] tracking-[-0.025em] text-[#0E0F12]">
              Implementation Guides for Web, AI Voice &amp; Revenue Automation
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#5C5F66] sm:text-lg">
              Detailed architecture blueprints covering inbound call recovery, GoHighLevel speed-to-lead workflows, and local conversion flywheels—without filler.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFFFFF] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col border border-[#D9D4C7] bg-[#FFFFFF] transition-colors hover:border-[#0E0F12]"
              >
                <BlogDiagramCover type={post.diagramType} category={post.category} />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between font-mono-tabular text-xs text-[#5C5F66]">
                    <time dateTime={post.publishedDate}>{post.displayPublishedDate}</time>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="mt-3 font-editorial text-2xl font-semibold leading-snug text-[#0E0F12]">
                    <Link to={`/insights/${post.slug}`} className="hover:text-[#FF5A1F]">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5C5F66]">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#D9D4C7] pt-4">
                    <span className="font-mono-tabular text-[11px] text-[#5C5F66]">
                      {post.author}
                    </span>
                    <Link
                      to={`/insights/${post.slug}`}
                      className="inline-flex items-center gap-1.5 font-mono-tabular text-xs font-semibold text-[#0E0F12] hover:text-[#FF5A1F]"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Apply the Blueprint"
        headline="Want This Architecture Implemented Inside Your Business?"
        subtitle="Book a short discovery strategy call to inspect your call handling, website speed, and CRM follow-up."
        onOpenBookModal={onOpenBookModal}
      />
    </>
  );
}
