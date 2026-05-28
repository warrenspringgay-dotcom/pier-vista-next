import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/piervista";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090b]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="font-serif text-2xl font-black tracking-wide">
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
          <Link className="hover:text-white" href="/#faq">
            FAQ
          </Link>
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>

        <Link
          href="/menu"
          className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-black text-black hover:bg-amber-300"
        >
          View Menu
        </Link>
      </div>
    </header>
  );
}
