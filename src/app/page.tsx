import Image from "next/image";
import {
  Accessibility,
  Baby,
  Car,
  Clock,
  Dog,
  ExternalLink,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  Waves,
} from "lucide-react";

type MenuItem = {
  name: string;
  price: string;
  note?: string;
};

const BUSINESS_NAME = "Pier Vista Fish & Chips";
const MAP_QUERY = encodeURIComponent("Pier Vista Fish & Chips, Redcar TS10 3AA");
const GOOGLE_MAPS_EMBED_URL = `https://maps.google.com/maps?q=${MAP_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

const MAJUBA_MAP_QUERY = encodeURIComponent("Majuba Road Car Park Redcar TS10 5BJ");
const MAJUBA_MAP_URL = `https://maps.google.com/maps?q=${MAJUBA_MAP_QUERY}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
const MAJUBA_DIRECTIONS_URL = `https://www.google.com/maps/search/?api=1&query=${MAJUBA_MAP_QUERY}`;

const FACEBOOK_URL = "https://www.facebook.com/piervista";

const heroStats = [
  "Family Run Since 2013",
  "5★ Food Hygiene Rating",
  "Seating Inside for 25",
];

const menuSections: { title: string; intro: string; items: MenuItem[] }[] = [
  {
    title: "Fish & Chips",
    intro: "Freshly cooked chip-shop classics.",
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
    title: "Why Not Add...",
    intro: "Sides, sauces and extras.",
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

const featureCards = [
  {
    icon: ShieldCheck,
    title: "5★ Food Hygiene",
    text: "A clean, well-run kitchen with a top hygiene rating.",
  },
  {
    icon: Accessibility,
    title: "Disabled Access",
    text: "Seating inside with accessible entry.",
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

const galleryImages = [
  {
    src: "/images/fish-fryer-closeup.jpg",
    alt: "Fresh battered fish being lifted from the fryer",
  },
  {
    src: "/images/scraps-box.jpg",
    alt: "Freshly cooked chips and scraps in a fish and chips box",
  },
  {
    src: "/images/chips-serving.jpg",
    alt: "Chips being served into a takeaway box",
  },
  {
    src: "/images/staff-frying.jpg",
    alt: "Pier Vista staff member cooking fish and chips",
  },
];

const attractions = [
  {
    title: "Redcar Beacon",
    text: "We are directly opposite the Redcar Beacon, so Pier Vista is easy to spot from the seafront.",
  },
  {
    title: "Majuba Beach & Crazy Golf",
    text: "A family-friendly area nearby with beach access and adventure golf close to the seafront.",
  },
  {
    title: "Seafront Amusements",
    text: "Arcades, amusements, beach walks and seaside shops are all within easy walking distance.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090b] text-white">
      <Header />

      <HeroSection />
      <IntroSection />
      <FeatureStrip />
      <MenuSection />
      <SocialSection />
      <FreshlyCookedSection />
      <VisitSection />
      <PlanningSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-amber-400/20">
      <ScalePattern />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_38%),linear-gradient(to_bottom,rgba(7,9,11,0.3),#07090b)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.02fr_.98fr] md:px-8 lg:py-24">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.26em] text-amber-200">
            <Star className="h-4 w-4" />
            Redcar Seafront • TS10 3AA
          </p>

          <h1 className="max-w-3xl font-serif text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Traditional Fish & Chips on Redcar Seafront
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Freshly cooked fish and chips from a family-run seaside shop,
            established in 2013 and located directly opposite the Redcar Beacon.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:bg-white/10"
            >
              Plan Your Visit
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-6 py-3 font-black text-amber-200 transition hover:bg-amber-400/20"
            >
              <FacebookIcon className="h-4 w-4" />
              Follow Us
            </a>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-amber-400/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
            <Image
              src="/images/fish-boxes.jpg"
              alt="Pier Vista fish and chips boxes"
              width={1200}
              height={900}
              className="aspect-[4/3] rounded-[1.5rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-zinc-950 via-[#0c1013] to-black shadow-2xl">
        <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Family Run Since 2013
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
              Proper seaside fish and chips, cooked the traditional way.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-zinc-300">
              <p>
                Pier Vista has been part of Redcar seafront since 2013, serving
                freshly cooked fish and chips to families, day visitors, local
                regulars and people enjoying the coastline.
              </p>

              <p>
                We keep things simple: good ingredients, proper chip-shop
                favourites, generous portions and friendly service. Whether you
                are sitting in after a walk along the front or taking food away
                to enjoy by the sea, the aim is the same — hot, traditional fish
                and chips done properly.
              </p>

              <p>
                We proudly hold a 5-star food hygiene rating, with seating
                inside for around 25 customers. We also have disabled access,
                high chairs available and a dog-friendly approach for visitors
                enjoying Redcar with the whole family.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Established 2013</Badge>
              <Badge>5★ Food Hygiene</Badge>
              <Badge>Seating for 25</Badge>
              <Badge>Takeaway Available</Badge>
            </div>
          </div>

          <div className="relative min-h-[440px]">
            <Image
              src="/images/staff-frying.jpg"
              alt="Cooking traditional fish and chips at Pier Vista"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureStrip() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
      <div className="grid gap-4 md:grid-cols-4">
        {featureCards.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-center transition hover:border-amber-400/40 hover:bg-white/[0.06]"
          >
            <Icon className="mx-auto mb-4 h-9 w-9 text-amber-300" />
            <h2 className="font-bold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section id="menu" className="relative border-y border-white/10 bg-zinc-950/80 py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            Our Menu
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            Freshly cooked favourites
          </h2>
          <p className="mt-4 leading-7 text-zinc-300">
            From cod and chips to kids meals, sauces, sides and seaside
            favourites, our menu is built around proper chip-shop classics.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {menuSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-amber-400/30 bg-[#0b0f12] p-5 shadow-xl"
            >
              <h3 className="rounded-2xl bg-amber-400/10 px-4 py-3 text-center text-sm font-black uppercase tracking-[0.2em] text-amber-200">
                {section.title}
              </h3>

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

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-zinc-500">
          Prices and availability can vary seasonally. Please check in-store for
          the latest menu and opening information.
        </p>
      </div>
    </section>
  );
}


function SocialSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-amber-400/10 via-zinc-950 to-black shadow-2xl">
        <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
              Latest Updates
            </p>

            <h2 className="mt-4 font-serif text-4xl font-black leading-tight md:text-5xl">
              Follow Pier Vista on Facebook
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              For seasonal opening times, updates, photos and local notices,
              follow Pier Vista on Facebook. It is the easiest place to check
              what is happening before you travel to Redcar seafront.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-400 text-black">
                <FacebookIcon className="h-7 w-7" />
              </div>

              <div>
                <h3 className="font-serif text-2xl font-black">
                  Pier Vista Fish & Chips
                </h3>
                <p className="mt-1 text-sm text-zinc-400">
                  Redcar seafront updates and opening times.
                </p>
              </div>
            </div>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              Visit Facebook Page
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreshlyCookedSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            Freshly Cooked
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            One taste and you&apos;ll be hooked
          </h2>
          <p className="mt-5 leading-8 text-zinc-300">
            We cook in the traditional chip-shop style, serving food hot and
            fresh from the range. It is the food people come to the coast for:
            crisp batter, proper chips, classic sauces and familiar favourites.
          </p>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={900}
                  height={900}
                  className="aspect-square object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="bg-[#07090b] px-5 py-20 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
            Find Us
          </p>
          <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
            Visit Pier Vista on Redcar Seafront
          </h2>
          <p className="mt-4 text-zinc-300">
            We are directly on the seafront, opposite the Redcar Beacon, making
            us easy to find whether you are walking the promenade, visiting the
            beach or planning a day out in Redcar.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950 shadow-2xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 lg:p-10">
            <h3 className="font-serif text-3xl font-black">{BUSINESS_NAME}</h3>

            <div className="mt-6 space-y-4 text-zinc-200">
              <p className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                Redcar seafront, TS10 3AA
              </p>

              <p className="flex gap-3">
                <Waves className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                Directly opposite the Redcar Beacon.
              </p>

              <p className="flex gap-3">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                Opening times vary seasonally.
              </p>

              <p className="flex gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-amber-300" />
                Add phone number here
              </p>
            </div>

            <a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
            >
              Open in Google Maps
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="min-h-[420px] border-t border-white/10 lg:border-l lg:border-t-0">
            <iframe
              title="Pier Vista Google Map"
              src={GOOGLE_MAPS_EMBED_URL}
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanningSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="mb-10 text-center">
        <p className="text-xs font-black uppercase tracking-[0.35em] text-amber-300">
          Plan Your Day
        </p>
        <h2 className="mt-3 font-serif text-4xl font-black md:text-5xl">
          Parking, beach and attractions nearby
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-zinc-300">
          Pier Vista is well placed for a full Redcar seafront visit. Park
          nearby, enjoy the beach or attractions, then stop for traditional fish
          and chips by the sea.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 shadow-2xl">
          <div className="mb-4 inline-flex rounded-2xl bg-amber-400/10 p-3 text-amber-300">
            <Car className="h-7 w-7" />
          </div>

          <h3 className="font-serif text-3xl font-black">
            Nearby parking at Majuba
          </h3>

          <div className="mt-5 space-y-4 leading-8 text-zinc-300">
            <p>
              A useful parking option for visitors is Majuba Road Car Park on
              the seafront. From there, Pier Vista is only a short walk along
              the front.
            </p>

            <p>
              We are directly opposite the Redcar Beacon, so once you reach the
              seafront it is easy to find us. The shop is also close to the
              promenade, amusements, beach areas and family attractions.
            </p>
          </div>

          <a
            href={MAJUBA_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-amber-400 px-6 py-3 font-black text-black shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
          >
            Open Majuba Parking
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <iframe
            title="Majuba Road Car Park Google Map"
            src={MAJUBA_MAP_URL}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {attractions.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-amber-400/20 bg-white/[0.04] p-6"
          >
            <h3 className="font-serif text-2xl font-black">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-zinc-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
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
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Follow</h3>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-amber-300 hover:text-amber-200"
          >
            <FacebookIcon className="h-4 w-4" />
            Facebook
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-xs text-zinc-600">
        © {new Date().getFullYear()} Pier Vista Fish & Chips. All rights
        reserved.
      </div>
    </footer>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090b]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#" className="font-serif text-2xl font-black tracking-wide">
          Pier Vista
        </a>

        <nav className="hidden items-center gap-7 text-sm font-bold text-zinc-300 md:flex">
          <a className="hover:text-white" href="#menu">
            Menu
          </a>
          <a className="hover:text-white" href="#visit">
            Visit
          </a>
          <a
            className="inline-flex items-center gap-2 hover:text-white"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
        </nav>

        <a
          href="#menu"
          className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-black text-black hover:bg-amber-300"
        >
          View Menu
        </a>
      </div>
    </header>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-amber-400/20 bg-amber-400/10 px-5 py-3">
      <p className="text-sm font-black text-amber-200">{children}</p>
    </div>
  );
}


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
