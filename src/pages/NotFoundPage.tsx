import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

export default function NotFoundPage() {
  return (
    <>
      <SeoHead
        title="Page Not Found | Acendio"
        description="The requested page could not be found. Explore Acendio services, insights, or contact our team."
        path="/404"
        noIndex
      />

      <section className="bg-mesh-hero py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="font-mono-tabular text-sm font-semibold text-[#22D3EE]">404</p>
          <h1 className="mt-2 font-display text-4xl font-extrabold text-[#F4F5F7]">
            That Page Does Not Exist
          </h1>
          <p className="mt-4 text-base text-[#9AA0AE]">
            The URL may have moved or been typed incorrectly. Use the links below to explore our services or book a strategy call.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="btn-primary-gradient inline-flex min-h-[48px] items-center gap-2 rounded-lg px-6 py-3 text-sm whitespace-nowrap"
            >
              <span>Return Home</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#12141C] px-6 py-3 text-sm font-semibold text-[#F4F5F7] hover:border-[#22D3EE]/50 whitespace-nowrap"
            >
              Browse Services
            </Link>
            <Link
              to="/contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 bg-[#12141C] px-6 py-3 text-sm font-semibold text-[#F4F5F7] hover:border-[#22D3EE]/50 whitespace-nowrap"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
