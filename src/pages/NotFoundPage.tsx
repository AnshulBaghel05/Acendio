import { ArrowLeft, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { PrefetchLink } from '../components/PrefetchLink';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Acendio"
        description="The requested page could not be found."
        path="/404"
        noIndex
      />

      <section className="bg-[#F4F1EA] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="font-mono-tabular text-xs font-semibold uppercase tracking-wider text-[#FF5A1F]">
            Error 404
          </p>
          <h1 className="mt-3 font-editorial text-4xl font-semibold text-[#0E0F12] sm:text-5xl">
            That Page Does Not Exist
          </h1>
          <p className="mt-4 text-base text-[#5C5F66]">
            The URL may have moved or been typed incorrectly. Jump back into our core service systems or book a discovery call directly.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <PrefetchLink
              to="/"
              className="btn-signal inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              <span>Return Home</span>
            </PrefetchLink>
            <PrefetchLink
              to="/services"
              className="btn-outline-ink inline-flex min-h-[46px] items-center gap-2 px-5 py-2.5 text-sm whitespace-nowrap"
            >
              <span>Browse Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </PrefetchLink>
          </div>
        </div>
      </section>
    </>
  );
}
