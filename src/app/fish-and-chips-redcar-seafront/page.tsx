import type { Metadata } from "next";
import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import {
  Accessibility,
  Baby,
  Car,
  Dog,
  ExternalLink,
  FerrisWheel,
  IceCreamBowl,
  Landmark,
  LifeBuoy,
  MapPin,
  Music,
  Palette,
  ShieldCheck,
  Star,
  Utensils,
  Waves,
  Wind,
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
  title: "Things to Do on Redcar Seafront | Fish and Chips Near Redcar Beacon",
  description:
    "Plan a Redcar seafront visit with fish and chips at Pier Vista, opposite Redcar Beacon. Nearby parking, promenade walks, Majuba Beach, amusements, lifeboat museum, summer events and lemon top ice creams.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Things to Do on Redcar Seafront | Pier Vista Fish & Chips",
    description:
      "A practical visitor guide to Redcar seafront, Majuba Beach, Redcar Beacon, amusements, events and traditional fish and chips at Pier Vista.",
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
    title: "Things to Do on Redcar Seafront | Pier Vista Fish & Chips",
    description:
      "Plan a Redcar seafront visit with fish and chips, promenade walks, Majuba Beach, amusements, events and Redcar Beacon.",
    images: ["/images/fish-boxes.jpg"],
  },
};

const faqs = [
  {
    question: "Where is Pier Vista Fish & Chips?",
    answer:
      "Pier Vista Fish & Chips is on Redcar seafront, directly opposite the Redcar Beacon and close to Majuba Beach, the promenade and seafront attractions.",
  },
  {
    question: "What can families do near Pier Vista?",
    answer:
      "Families can enjoy Redcar beach, promenade walks, nearby amusements, seasonal children’s rides, crazy golf around Majuba and local events during the warmer months.",
  },
  {
    question: "Where can I park near Redcar seafront?",
    answer:
      "Majuba Road Car Park is a useful seafront parking option for visitors planning to walk along the front, visit the beach or stop for fish and chips.",
  },
  {
    question: "Is Redcar good for a simple seaside day out?",
    answer:
      "Yes. Redcar is good for beach walks, traditional seaside food, lemon top ice creams, amusements, events, the Redcar Beacon and local heritage such as the Zetland Lifeboat Museum.",
  },
  {
    question: "Do Pier Vista opening times change?",
    answer:
      "Yes. Pier Vista is a seasonal seafront business, so opening times can vary with weather, school holidays and visitor demand. Check the Facebook page before travelling.",
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
      hasMenu: `${siteUrl}/menu`,
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
      name: "Things to Do on Redcar Seafront",
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
        "A visitor guide to Redcar seafront, Redcar Beacon, Majuba Beach, events, attractions and Pier Vista Fish & Chips.",
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

const quickHighlights = [
  {
    icon: Waves,
    title: "Seafront & Beach",
    text: "Promenade walks, beach views, sea air and easy access to the front.",
  },
  {
    icon: Landmark,
    title: "Redcar Beacon",
    text: "Pier Vista is directly opposite the Beacon, one of Redcar’s easiest landmarks.",
  },
  {
    icon: Car,
    title: "Majuba Parking",
    text: "Majuba Road Car Park is a useful base for visiting the beach and seafront.",
  },
  {
    icon: Utensils,
    title: "Traditional Food",
    text: "Fish and chips, sides, sauces, kids meals and seaside favourites.",
  },
];

const thingsToDo = [
  {
    icon: Landmark,
    title: "Redcar Beacon",
    text: "The Beacon is the vertical landmark on the seafront. It is useful as a meeting point, photo stop and wayfinding point when visiting the front.",
  },
  {
    icon: Waves,
    title: "Promenade & Beach Walks",
    text: "Redcar’s seafront is ideal for a simple walk along the promenade, beach time, sea views and a traditional seaside food stop.",
  },
  {
    icon: FerrisWheel,
    title: "Amusements & Family Fun",
    text: "The seafront has classic family attractions nearby, including amusements, arcades and seasonal children’s rides during busier summer periods.",
  },
  {
    icon: Palette,
    title: "Public Art & Seafront Installations",
    text: "Look out for seafront artwork and installations around Redcar, including playful features such as the penguins and other pieces that make the front more memorable for families.",
  },
  {
    icon: LifeBuoy,
    title: "Zetland Lifeboat Museum",
    text: "A strong heritage stop for visitors. The Zetland lifeboat is an important part of Redcar’s coastal history and is a good add-on to a seafront day out.",
  },
  {
    icon: IceCreamBowl,
    title: "Lemon Top Ice Creams",
    text: "A Redcar classic. A lemon top is part of the local seaside experience and pairs perfectly with a walk along the front.",
  },
];

const eventCards = [
  {
    icon: Wind,
    title: "Kite Festival at Majuba Beach",
    text: "Redcar’s kite festival brings colour to the seafront with large inflatable kites, stunt kites and family activity around Majuba Beach.",
  },
  {
    icon: Music,
    title: "Music, Markets & Summer Events",
    text: "Majuba and the seafront often host seasonal events, markets, live music and festival-style weekends through the warmer months.",
  },
  {
    icon: FerrisWheel,
    title: "School Holiday Family Days",
    text: "In summer and school holidays the seafront usually has a stronger family feel, with beach visits, rides, amusements and food stops all close together.",
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
  {
    icon: ShieldCheck,
    title: "5★ Hygiene",
    text: "A clean, well-run kitchen.",
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

      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-amber-400/20">
        <ScalePattern />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_38%),linear-gradient(to_bottom,rgba(7,9,11,0.2),#07090b)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.04fr_.96fr] md:px-8 lg:py-24">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-amber-200">
              <Star className="h-4 w-4" />
              Redcar Seafront Visitor Guide
            </p>

            <h1 className="max-w-4xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
              Things to Do on Redcar Seafront
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Plan a proper Redcar seaside visit: promenade walks, Majuba Beach,
              Redcar Beacon, amusements, family attractions, local events,
              lemon top ice creams and traditional fish and chips at Pier Vista.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/menu"
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
                alt="Pier Vista fish and chips on Redcar seafront"
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
          {quickHighlights.map(({ icon: Icon, title, text }) => (
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
              Start with the seafront, then stop for proper fish and chips.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                Pier Vista is a family-run fish and chip shop established in
                2013. We are based directly on Redcar seafront opposite the
                Redcar Beacon, so we are easy to find if you are walking the
                promenade, visiting the beach or heading towards Majuba.
              </p>

              <p>
                Redcar works best as a simple seaside day out: park near Majuba,
                walk the front, visit the amusements or beach, look out for
                local art and installations, grab a lemon top, then finish with
                hot fish and chips.
              </p>

              <p>
                Pier Vista has seating inside for around 25, takeaway available,
                disabled access, high chairs and a dog-friendly approach for
                visitors enjoying the front with the whole family.
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

            <div className="grid gap-4 sm:grid-cols-4">
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
              Redcar Seafront Guide
            </p>
            <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
              What to do near Pier Vista
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Redcar seafront has more to it than a quick beach walk. Use Pier
              Vista as a food stop while planning a simple route around the
              Beacon, promenade, amusements, Majuba and local heritage spots.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {thingsToDo.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-[2rem] border border-white/10 bg-[#0b0f12] p-7 shadow-xl transition hover:border-amber-400/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-3xl font-black">{title}</h3>
                <p className="mt-4 leading-8 text-zinc-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 shadow-2xl">
            <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
              <Car className="h-7 w-7" />
            </div>

            <h2 className="font-serif text-4xl font-black">
              Parking near Majuba Beach
            </h2>

            <div className="mt-5 space-y-4 leading-8 text-zinc-300">
              <p>
                Majuba Road Car Park is a useful option for Redcar seafront
                visitors. It puts you close to Majuba Beach, the promenade and
                family attractions, with Pier Vista only a short walk along the
                front towards the Redcar Beacon.
              </p>

              <p>
                This makes it easy to build a simple route: park at Majuba, walk
                the beach or promenade, visit the amusements or Beacon, then
                call into Pier Vista for fish and chips before heading home.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={majubaMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
              >
                Open Majuba Parking
                <ExternalLink className="h-4 w-4" />
              </a>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/15 px-6 py-3 font-black text-white transition hover:bg-white/10"
              >
                Open Pier Vista
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Seasonal Events
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight">
              Festivals, markets and summer days out
            </h2>

            <div className="mt-6 grid gap-4">
              {eventCards.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <Icon className="mb-3 h-7 w-7 text-amber-300" />
                  <h3 className="font-serif text-2xl font-black">{title}</h3>
                  <p className="mt-2 leading-7 text-zinc-300">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-zinc-500">
              Events and seasonal attractions change, so check local listings
              and our Facebook page before travelling.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-950/80 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
                Simple Visitor Route
              </p>

              <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
                A straightforward Redcar seafront plan
              </h2>

              <p className="mt-5 text-lg leading-8 text-zinc-300">
                This is the cleanest visitor flow: park at Majuba, walk the
                promenade, see the Beacon, enjoy the beach or amusements, grab a
                lemon top if you are doing the full Redcar experience, then stop
                at Pier Vista for traditional fish and chips.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Park near Majuba Road Car Park",
                "Walk the promenade towards Redcar Beacon",
                "Visit the beach, amusements, artwork and local attractions",
                "Stop at Pier Vista for fish and chips on the seafront",
                "Check Facebook for opening updates before travelling",
              ].map((step, index) => (
                <div
                  key={step}
                  className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-400 font-black text-black">
                    {index + 1}
                  </div>
                  <p className="self-center font-bold text-zinc-100">{step}</p>
                </div>
              ))}
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
                href="/menu"
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
            Visiting Redcar Seafront
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

      <SiteFooter />
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
