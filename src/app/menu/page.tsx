import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, Star } from "lucide-react";

const siteUrl = "https://www.fishandchipsredcar.co.uk";
const pageUrl = `${siteUrl}/menu`;
const facebookUrl = "https://www.facebook.com/piervista";
const email = "info@fishandchipsredcar.co.uk";

type MenuItem = { name: string; price: string; note?: string };

const menuSections: { title: string; intro: string; items: MenuItem[] }[] = [
  {
    title: "Fish & Chips",
    intro: "Freshly cooked chip-shop classics on Redcar seafront.",
    items: [
      { name: "Cod & Chips", price: "£11.00" },
      { name: "Cod", price: "£8.10" },
      { name: "Chips", price: "£3.10 / £3.50" },
      { name: "Chip Buttie", price: "£3.60 / £4.10" },
      { name: "Scampi, Chips & Mushy Peas", price: "£8.00" },
    ],
  },
  {
    title: "Classics",
    intro: "Proper favourites for all the family.",
    items: [
      { name: "Southern Fried Chicken", price: "£4.00" },
      { name: "Sausage", price: "£1.80 / £2.20" },
      { name: "Beef Burger", price: "£2.00" },
      { name: "Fish Cake", price: "£2.60" },
      { name: "Cheesy", price: "£2.60" },
      { name: "Spam Fritter", price: "£1.70" },
      { name: "Pineapple Ring", price: "80p" },
      { name: "Ocean Sticks (4)", price: "£1.50" },
      { name: "Chicken Nuggets (6)", price: "£2.80" },
      { name: "Mozzarella Dippers & Dip", price: "£2.50" },
    ],
  },
  {
    title: "Sides & Sauces",
    intro: "Add the proper chip-shop extras.",
    items: [
      { name: "Breadbun", price: "80p" },
      { name: "Mushy Peas", price: "£1.20 / £1.50" },
      { name: "Curry Sauce", price: "£1.20 / £1.50" },
      { name: "Gravy", price: "£1.20 / £1.50" },
      { name: "Garlic Dip", price: "£1.20" },
      { name: "Homemade Tartare Sauce", price: "£1.20" },
      { name: "Heinz SqueezeMe Sauce Sachet", price: "50p" },
    ],
  },
  {
    title: "Drinks & Specials",
    intro: "Family options and seaside favourites.",
    items: [
      { name: "500ml Bottle", price: "£2.30" },
      { name: "Can", price: "£1.60" },
      { name: "Kids Drink", price: "60p" },
      { name: "Tea / Coffee", price: "£1.50" },
      {
        name: "Kids Box Meal",
        price: "£5.50",
        note: "Sausage, cheesy spam, chicken nuggets or fishcake with chips & drink",
      },
      { name: "Kids Fish & Chips", price: "£6.50" },
      {
        name: "Pensioners Special",
        price: "£9.50",
        note: "Cod & chips with bread & butter or mushy peas, plus hot drink",
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Pier Vista Menu | Fish and Chips Redcar Seafront Prices",
  description:
    "View the Pier Vista Fish & Chips menu. Traditional fish and chips, chip-shop classics, kids meals, sides, sauces and pensioners specials on Redcar seafront.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Pier Vista Fish & Chips Menu | Redcar Seafront",
    description:
      "Traditional fish and chips, kids meals, sides and specials on Redcar seafront.",
    url: pageUrl,
    siteName: "Pier Vista Fish & Chips",
    images: [
      {
        url: "/images/fish-boxes.jpg",
        width: 1200,
        height: 630,
        alt: "Pier Vista fish and chips menu on Redcar seafront",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

const menuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "@id": `${pageUrl}#menu`,
  name: "Pier Vista Fish & Chips Menu",
  url: pageUrl,
  hasMenuSection: menuSections.map((section) => ({
    "@type": "MenuSection",
    name: section.title,
    description: section.intro,
    hasMenuItem: section.items.map((item) => ({
      "@type": "MenuItem",
      name: item.name,
      description: item.note || item.name,
      offers: {
        "@type": "Offer",
        priceCurrency: "GBP",
        price: item.price.replace("£", ""),
      },
    })),
  })),
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      <section className="relative isolate overflow-hidden border-b border-amber-400/20">
        <ScalePattern />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_38%),linear-gradient(to_bottom,rgba(7,9,11,0.3),#07090b)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 lg:py-24">
          <div>
            <a
              href="/"
              className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-amber-300/50 hover:text-white"
            >
              ← Back to Pier Vista
            </a>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-amber-200">
              <Star className="h-4 w-4" />
              Redcar Seafront Menu
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Pier Vista Fish & Chips Menu
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Traditional fish and chips, chip-shop classics, kids meals, sides,
              sauces and specials from Pier Vista on Redcar seafront.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/fish-and-chips-redcar-seafront"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                Seafront Guide
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Facebook Updates
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
                src="/images/fish-boxes.jpg"
                alt="Pier Vista fish and chips menu food"
                width={1200}
                height={900}
                className="aspect-[4/3] rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {menuSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-amber-400/30 bg-[#0b0f12] p-5 shadow-xl"
            >
              <h2 className="rounded-2xl bg-amber-400/10 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-amber-200">
                {section.title}
              </h2>
              <p className="mx-auto mt-3 max-w-[16rem] text-center text-xs leading-5 text-zinc-500">
                {section.intro}
              </p>
              <div className="mt-5 space-y-3">
                {section.items.map((item) => (
                  <div key={item.name} className="border-b border-white/10 pb-3 last:border-b-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium text-zinc-100">{item.name}</span>
                      <span className="shrink-0 font-black text-white">{item.price}</span>
                    </div>
                    {item.note ? <p className="mt-1 max-w-[18rem] text-xs leading-5 text-zinc-400">{item.note}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
          <h2 className="font-serif text-3xl font-black">Opening times vary seasonally</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
            Pier Vista is a seasonal seafront business. Please check Facebook
            for the latest opening updates before travelling.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black transition hover:bg-amber-300">
              Visit Facebook <ExternalLink className="h-4 w-4" />
            </a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10">
              Email Us <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function ScalePattern() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 opacity-[0.13]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 100%, transparent 12px, rgba(255,255,255,.55) 13px, rgba(255,255,255,.55) 14px, transparent 15px)",
        backgroundSize: "44px 28px",
      }}
    />
  );
}
