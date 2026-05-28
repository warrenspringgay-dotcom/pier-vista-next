import Link from "next/link";
import { Mail } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/piervista";
const BUSINESS_EMAIL = "info@fishandchipsredcar.co.uk";

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
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
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
          <h3 className="font-bold text-white">Contact</h3>
          <div className="mt-3 space-y-3">
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
              className="inline-flex items-center gap-2 text-amber-300 hover:text-amber-200"
            >
              <FacebookIcon className="h-4 w-4" />
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} Pier Vista Fish & Chips. All rights reserved.
      </div>
    </footer>
  );
}
