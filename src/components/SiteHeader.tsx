import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/piervista";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090b]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link href="/" className="shrink-0 font-serif text-2xl font-black tracking-wide">
          Pier Vista
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 md:flex">
          <Link className="hover:text-white" href="/menu">
            Menu
          </Link>
          <Link className="hover:text-white" href="/fish-and-chips-redcar-seafront">
            Seafront Guide
          </Link>
          <Link className="hover:text-white" href="/#visit">
            Visit
          </Link>
          <Link className="hover:text-white" href="/#contact">
            Contact
          </Link>
          <Link className="hover:text-white" href="/#faq">
            FAQ
          </Link>
          <a
            className="hover:text-white"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>

        <Link
          href="/#contact"
          className="shrink-0 rounded-xl bg-amber-400 px-4 py-2 text-sm font-black text-black hover:bg-amber-300"
        >
          Contact Us
        </Link>
      </div>

      <nav className="border-t border-white/10 px-3 py-2 md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-4 gap-2 text-center text-xs font-black text-zinc-300">
          <Link
            href="/menu"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:border-amber-300/40 hover:text-white"
          >
            Menu
          </Link>
          <Link
            href="/fish-and-chips-redcar-seafront"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:border-amber-300/40 hover:text-white"
          >
            Guide
          </Link>
          <Link
            href="/#contact"
            className="rounded-xl border border-amber-400/30 bg-amber-400/10 px-2 py-2 text-amber-200 hover:border-amber-300/60 hover:text-amber-100"
          >
            Contact
          </Link>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2 hover:border-amber-300/40 hover:text-white"
          >
            Facebook
          </a>
        </div>
      </nav>
    </header>
  );
}
