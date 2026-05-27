import type { Metadata } from "next";
import Image from "next/image";
import {
  Accessibility,
  Baby,
  Car,
  Dog,
  ExternalLink,
  MapPin,
  ShieldCheck,
  Star,
  Utensils,
  Waves,
} from "lucide-react";

const siteUrl = "https://www.fishandchipsredcar.co.uk";
const pageUrl = `${siteUrl}/fish-and-chips-redcar-seafront`;
const businessName = "Pier Vista Fish & Chips";
const facebookUrl = "https://www.facebook.com/piervista";
const email = "info@fishandchipsredcar.co.uk";

const mapQuery = encodeURIComponent("Pier Vista Fish & Chips Redcar TS10 3AA");
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

const majubaQuery = encodeURIComponent("Majuba Road Car Park Redcar TS10 5BJ");
const majubaMapsUrl = `https://www.google.com/maps/search/?api=1&query=${majubaQuery}`;

export const metadata: Metadata = {
  title: "Fish and Chips Redcar Seafront | Pier Vista Fish & Chips",
  description:
    "Traditional fish and chips on Redcar seafront, directly opposite the Redcar Beacon. Seating inside, takeaway available, dog friendly, disabled access and nearby parking at Majuba.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Fish and Chips Redcar Seafront | Pier Vista Fish & Chips",
    description:
      "Visit Pier Vista for traditional fish and chips on Redcar seafront, opposite the Redcar Beacon and close to Majuba Beach.",
    url: pageUrl,
    siteName: "Pier Vista Fish & Chips",
    images: [
      {
        url: "/images/fish-boxes.jpg",
        width: 1200,
        height: 630,
        alt: "Pier Vista fish and chips on Redcar seafront",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fish and Chips Redcar Seafront | Pier Vista Fish & Chips",
    description:
      "Traditional fish and chips on Redcar seafront, directly opposite the Redcar Beacon.",
    images: ["/images/fish-boxes.jpg"],
  },
};

const faqs = [
  {
    question: "Where can I get fish and chips on Redcar seafront?",
    answer:
      "Pier Vista Fish & Chips is directly on Redcar seafront, opposite the Redcar Beacon, serving traditional fish and chips with seating inside and takeaway available.",
  },
  {
    question: "Is Pier Vista near Redcar Beacon?",
    answer:
      "Yes. Pier Vista is directly opposite the Redcar Beacon, making it easy to find from the seafront and promenade.",
  },
  {
    question: "Where can I park near Pier Vista?",
    answer:
      "Majuba Road Car Park is a useful nearby seafront parking option. From there, Pier Vista is only a short walk along the front.",
  },
  {
    question: "Is Pier Vista family friendly?",
    answer:
      "Yes. Pier Vista has seating inside for around 25 customers, high chairs available and a menu with family favourites and kids options.",
  },
  {
    question: "Is Pier Vista dog friendly?",
    answer:
      "Yes. Pier Vista is dog friendly, which makes it a useful stop for visitors walking along Redcar seafront.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Restaurant",
      "@id": `${siteUrl}/#restaurant`,
      name: businessName,
      url: siteUrl,
      email,
      image: [
        `${siteUrl}/images/fish-boxes.jpg`,
        `${siteUrl}/images/shop-front.jpg`,
        `${siteUrl}/images/staff-frying.jpg`,
      ],
      priceRange: "£",
      servesCuisine: ["Fish and chips", "British", "Seafood"],
      acceptsReservations: false,
      foundingDate: "2013",
      hasMenu: `${siteUrl}/#menu`,
      sameAs: [facebookUrl],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Redcar Seafront",
        addressLocality: "Redcar",
        postalCode: "TS10 3AA",
        addressCountry: "GB",
      },
      areaServed: [
        "Redcar",
        "Redcar Seafront",
        "Redcar Beacon",
        "Majuba Beach",
      ],
      amenityFeature: [
        {
          "@type": "LocationFeatureSpecification",
          name: "Seating inside",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Takeaway available",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Dog friendly",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "Disabled access",
          value: true,
        },
        {
          "@type": "LocationFeatureSpecification",
          name: "High chairs available",
          value: true,
        },
      ],
      description:
        "Traditional family-run fish and chips on Redcar seafront, directly opposite the Redcar Beacon. Established in 2013 with seating inside, takeaway available, disabled access, dog friendly service and a 5-star food hygiene rating.",
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "Fish and Chips on Redcar Seafront",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#restaurant`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/fish-boxes.jpg`,
      },
      description:
        "A visitor guide to Pier Vista Fish & Chips on Redcar seafront, opposite the Redcar Beacon and close to Majuba Beach.",
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
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

const highlights = [
  {
    icon: Waves,
    title: "On Redcar Seafront",
    text: "Pier Vista is directly on the seafront, opposite the Redcar Beacon.",
  },
  {
    icon: Utensils,
    title: "Traditional Fish & Chips",
    text: "Freshly cooked chip-shop classics, proper chips, sides and seaside favourites.",
  },
  {
    icon: Car,
    title: "Nearby Parking",
    text: "Majuba Road Car Park is a useful parking option for visitors.",
  },
  {
    icon: ShieldCheck,
    title: "5★ Food Hygiene",
    text: "A clean, well-run kitchen with a top food hygiene rating.",
  },
];

const visitorFeatures = [
  {
    icon: Accessibility,
    title: "Disabled Access",
    text: "Accessible entry and seating inside.",
  },
  {
    icon: Dog,
    title: "Dog Friendly",
    text: "Well-behaved dogs welcome.",
  },
  {
    icon: Baby,
    title: "High Chairs",
    text: "Family-friendly seating available.",
  },
];

export default function FishAndChipsRedcarSeafrontPage() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <section className="relative isolate overflow-hidden border-b border-amber-400/20">
        <ScalePattern />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_38%),linear-gradient(to_bottom,rgba(7,9,11,0.2),#07090b)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.04fr_.96fr] md:px-8 lg:py-24">
          <div>
            <a
              href="/"
              className="mb-6 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-zinc-300 transition hover:border-amber-300/50 hover:text-white"
            >
              ← Back to Pier Vista
            </a>

            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-amber-200">
              <Star className="h-4 w-4" />
              Redcar Seafront Fish & Chips
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Fish and Chips on Redcar Seafront
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Visit Pier Vista Fish & Chips for traditional fish and chips on
              Redcar seafront, directly opposite the Redcar Beacon and close to
              Majuba Beach, the promenade, amusements and family attractions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#menu"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                View Menu
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Get Directions
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
              <Image
                src="/images/fish-boxes.jpg"
                alt="Traditional fish and chips from Pier Vista on Redcar seafront"
                width={1200}
                height={900}
                className="aspect-[4/3] rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-amber-400/40 hover:bg-white/[0.06]"
            >
              <Icon className="mb-4 h-9 w-9 text-amber-300" />
              <h2 className="font-bold">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-amber-400/20 bg-zinc-950 p-8 shadow-2xl md:p-10">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Opposite Redcar Beacon
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
              Traditional fish and chips in the heart of the seafront.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                Pier Vista is a family-run fish and chip shop established in
                2013. We are based on Redcar seafront, directly opposite the
                Redcar Beacon, making us easy to find for visitors walking the
                promenade or spending the day by the beach.
              </p>

              <p>
                Whether you are searching for fish and chips in Redcar, a
                takeaway near the Redcar Beacon, or somewhere family friendly to
                eat on the seafront, Pier Vista is set up for both quick
                takeaway visits and seated meals inside.
              </p>

              <p>
                We keep the food traditional: fish, chips, sides, sauces, kids
                meals and seaside favourites cooked properly and served hot.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
              <Image
                src="/images/shop-front.jpg"
                alt="Pier Vista Fish and Chips shop front on Redcar seafront"
                width={1200}
                height={800}
                className="aspect-[16/10] object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {visitorFeatures.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <Icon className="mb-3 h-7 w-7 text-amber-300" />
                  <h3 className="font-bold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/80 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Visitor Planning
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
              Parking near Majuba and food on the seafront
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              If you are visiting Redcar beach, Majuba, the amusements or the
              promenade, Pier Vista is well placed for food before or after your
              walk along the seafront.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-[#0b0f12] p-8 shadow-xl">
              <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                <Car className="h-8 w-8" />
              </div>

              <h3 className="font-serif text-3xl font-black">
                Nearby parking at Majuba
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Majuba Road Car Park is a useful parking option for Redcar
                seafront visitors. From there, you can walk along the front
                towards the Redcar Beacon and stop at Pier Vista for traditional
                fish and chips.
              </p>

              <a
                href={majubaMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black transition hover:bg-amber-300"
              >
                Open Majuba Parking
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0b0f12] p-8 shadow-xl">
              <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                <MapPin className="h-8 w-8" />
              </div>

              <h3 className="font-serif text-3xl font-black">
                Easy to find opposite Redcar Beacon
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                We are directly opposite the Redcar Beacon, close to the
                promenade, beach, arcades and seafront attractions. Look for
                Pier Vista Fish & Chips when you reach the front.
              </p>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Open Pier Vista on Google Maps
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Menu Highlights
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
              Fish, chips, kids meals, sides and seaside favourites.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-300">
              Our menu includes cod and chips, chips, chip butties, scampi,
              sausage, fishcake, sauces, mushy peas, gravy, curry, kids meals,
              drinks and pensioners specials. It is a proper seafront fish and
              chip menu built around familiar favourites.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#menu"
                className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                View Full Menu
              </a>

              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-6 py-3 font-black text-amber-200 transition hover:bg-amber-400/20"
              >
                Facebook Updates
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <ImageCard
              src="/images/fish-fryer-closeup.jpg"
              alt="Fresh battered fish being cooked at Pier Vista"
            />
            <ImageCard
              src="/images/chips-serving.jpg"
              alt="Fresh chips being served at Pier Vista Redcar"
            />
            <ImageCard
              src="/images/scraps-box.jpg"
              alt="Fish and chips box served at Pier Vista"
            />
            <ImageCard
              src="/images/staff-frying.jpg"
              alt="Pier Vista team cooking fish and chips"
            />
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-5 pb-20 md:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            FAQs
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            Visiting Pier Vista
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <h3 className="font-serif text-2xl font-black">{faq.question}</h3>
              <p className="mt-3 leading-7 text-zinc-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ImageCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
      <Image
        src={src}
        alt={alt}
        width={700}
        height={700}
        className="aspect-square object-cover transition duration-500 hover:scale-105"
      />
    </div>
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
