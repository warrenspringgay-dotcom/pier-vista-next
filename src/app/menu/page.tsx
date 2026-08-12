import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Mail, MapPin, Star } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const siteUrl = "https://www.fishandchipsredcar.co.uk";
const pageUrl = `${siteUrl}/menu`;
const facebookUrl = "https://www.facebook.com/piervista";
const email = "info@fishandchipsredcar.co.uk";
const mapsUrl = "https://www.google.com/maps/search/?api=1&query=Pier%20Vista%20Fish%20%26%20Chips%2C%20Redcar%20TS10%203AA";
const seafrontGuideUrl = "/fish-and-chips-redcar-seafront";

type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

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
  title: "Pier Vista Menu | Fish & Chips, Kids Meals & Prices in Redcar",
  description:
    "View the Pier Vista Fish & Chips menu in Redcar. Cod and chips, kids meals, pensioners specials, sides, sauces and takeaway food on Redcar seafront opposite Redcar Beacon.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Pier Vista Menu | Fish & Chips Redcar Seafront",
    description:
      "Fish and chips, kids meals, pensioners specials, sides and sauces from Pier Vista on Redcar seafront opposite Redcar Beacon.",
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

const getFirstPrice = (price: string) => {
  const match = price.match(/£?([0-9]+(?:\.[0-9]{1,2})?)/);
  return match?.[1];
};

const faqItems = [
  {
    question: "Where is Pier Vista Fish & Chips?",
    answer:
      "Pier Vista Fish & Chips is on Redcar seafront, directly opposite Redcar Beacon in TS10 3AA.",
  },
  {
    question: "Do you sell kids meals?",
    answer:
      "Yes. Pier Vista offers kids meals including a Kids Box Meal and Kids Fish & Chips with chips and a drink.",
  },
  {
    question: "Do opening times change?",
    answer:
      "Yes. Pier Vista is a seasonal seafront fish and chip shop, so opening times can change with weather, holidays and visitor demand. Check Facebook before travelling.",
  },
  {
    question: "Is Pier Vista near Redcar Beacon?",
    answer:
      "Yes. Pier Vista is directly opposite Redcar Beacon, close to the promenade, beach, arcades and Majuba area.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Menu",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "Menu",
      "@id": `${pageUrl}#menu`,
      name: "Pier Vista Fish & Chips Menu in Redcar",
      url: pageUrl,
      inLanguage: "en-GB",
      provider: {
        "@type": "Restaurant",
        "@id": `${siteUrl}/#restaurant`,
        name: "Pier Vista Fish & Chips",
        url: siteUrl,
        hasMap: mapsUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Redcar Seafront",
          addressLocality: "Redcar",
          postalCode: "TS10 3AA",
          addressCountry: "GB",
        },
        servesCuisine: ["Fish and chips", "British", "Seafood"],
      },
      hasMenuSection: menuSections.map((section) => ({
        "@type": "MenuSection",
        name: section.title,
        description: section.intro,
        hasMenuItem: section.items.map((item) => {
          const price = getFirstPrice(item.price);

          return {
            "@type": "MenuItem",
            name: item.name,
            description: item.note || item.name,
            ...(price
              ? {
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "GBP",
                    price,
                  },
                }
              : {}),
          };
        }),
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-amber-400/20">
        <ScalePattern />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_38%),linear-gradient(to_bottom,rgba(7,9,11,0.3),#07090b)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1fr_.9fr] md:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-amber-200">
              <Star className="h-4 w-4" />
              Pier Vista Redcar Menu
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Pier Vista Fish & Chips Menu in Redcar
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              View our fish and chips menu on Redcar seafront, including cod and chips, kids meals, pensioners specials, sides, sauces and takeaway favourites opposite Redcar Beacon.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={seafrontGuideUrl}
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                Plan Your Visit
              </a>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-6 py-3 font-black text-amber-200 transition hover:bg-amber-400/20"
              >
                Get Directions
                <MapPin className="h-4 w-4" />
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
                alt="Cod and chips from Pier Vista Fish & Chips on Redcar seafront"
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
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            Fish & Chips Redcar Prices
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            Fish and chips, kids meals, sides and specials
          </h2>
          <p className="mt-4 leading-7 text-zinc-300">
            Choose from freshly cooked cod and chips, chip-shop classics, kids
            meals, pensioners specials, sauces and drinks. Pier Vista is on
            Redcar seafront opposite Redcar Beacon, with takeaway and seating
            inside available.
          </p>
        </div>

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
                  <div
                    key={item.name}
                    className="border-b border-white/10 pb-3 last:border-b-0"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="text-sm font-medium text-zinc-100">
                        {item.name}
                      </span>
                      <span className="shrink-0 font-black text-white">
                        {item.price}
                      </span>
                    </div>
                    {item.note ? (
                      <p className="mt-1 max-w-[18rem] text-xs leading-5 text-zinc-400">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 text-center">
          <h2 className="font-serif text-3xl font-black">
            Opening times vary seasonally
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-zinc-300">
            Pier Vista is a seasonal seafront business, so opening times can
            change with weather, school holidays and visitor demand. Please
            check Facebook for today's opening update before travelling.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black transition hover:bg-amber-300"
            >
              Visit Facebook
              <ExternalLink className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              Email Us
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-amber-400/20 bg-zinc-950 p-8 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Near Redcar Beacon
            </p>
            <h2 className="mt-4 font-serif text-3xl font-black md:text-4xl">
              Fish and chips on Redcar seafront
            </h2>
            <div className="mt-5 space-y-4 leading-8 text-zinc-300">
              <p>
                Pier Vista is directly opposite Redcar Beacon, close to the
                promenade, Majuba Beach, arcades and Redcar town centre. It is a
                simple stop for fish and chips before or after a walk along the
                seafront.
              </p>
              <p>
                For the latest opening times, seasonal updates and photos, check
                our Facebook page before travelling.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black transition hover:bg-amber-300"
              >
                Get Directions
                <MapPin className="h-4 w-4" />
              </a>
              <a
                href={seafrontGuideUrl}
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Read Seafront Guide
              </a>
            </div>
          </div>

          <div id="faq" className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Menu Questions
            </p>
            <h2 className="mt-4 font-serif text-3xl font-black md:text-4xl">
              Quick answers before visiting
            </h2>
            <div className="mt-6 space-y-5">
              {faqItems.map((faq) => (
                <div key={faq.question} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                  <h3 className="font-bold text-white">{faq.question}</h3>
                  <p className="mt-2 leading-7 text-zinc-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
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
