import Link from "next/link";
import { ExternalLink, Mail, MessageCircle, Star } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/piervista";
const BUSINESS_EMAIL = "info@fishandchipsredcar.co.uk";
const GOOGLE_REVIEW_URL = "https://g.page/r/CUMiWx0cA4MWEBM/review";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.44 2.91h-2.34V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-10 text-sm text-zinc-400">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.1fr_0.8fr_1.1fr]">
        <div>
          <h2 className="font-serif text-3xl font-black text-white">
            Pier Vista
          </h2>
          <p className="mt-3 max-w-md leading-7">
            Traditional fish and chips on Redcar seafront. Family run since
            2013, with seating inside and takeaway available.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-white">Visit</h3>
          <div className="mt-3 space-y-2">
            <p>Redcar Seafront</p>
            <p>TS10 3AA</p>
            <p>Opposite Redcar Beacon</p>
            <Link href="/menu" className="block text-amber-300 hover:text-amber-200">
              View Menu
            </Link>
            <Link
              href="/fish-and-chips-redcar-seafront"
              className="block text-amber-300 hover:text-amber-200"
            >
              Redcar Seafront Guide
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Group visits & enquiries</h3>
          <p className="mt-3 leading-7">
            For school trips, nursing home visits, group enquiries, opening
            questions or accessibility queries, message us on Facebook or email.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-4 py-3 font-black text-black hover:bg-amber-300"
            >
              <MessageCircle className="h-4 w-4" />
              Message on Facebook
            </a>

            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Pier%20Vista%20group%20visit%20enquiry`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-4 py-3 font-black text-white hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>

          <div className="mt-4 space-y-2">
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200"
            >
              <Mail className="h-4 w-4" />
              {BUSINESS_EMAIL}
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-amber-300 hover:text-amber-200"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl rounded-[2rem] border border-amber-400/20 bg-white/[0.04] p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.28em] text-amber-300">
              <Star className="h-4 w-4" />
              Enjoyed your visit?
            </p>
            <h3 className="mt-2 font-serif text-2xl font-black text-white">
              Leave Pier Vista a Google review
            </h3>
            <p className="mt-2 max-w-2xl leading-7">
              Reviews help visitors find us when searching for fish and chips on
              Redcar seafront. If you enjoyed your food or visit, a quick review
              makes a real difference.
            </p>
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black hover:bg-amber-300"
          >
            Leave a Google Review
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} Pier Vista Fish & Chips. All rights reserved.
      </div>
    </footer>
  );
}
