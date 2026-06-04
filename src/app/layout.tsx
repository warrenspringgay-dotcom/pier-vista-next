import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
const siteUrl = "https://www.fishandchipsredcar.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pier Vista Fish & Chips | Fish and Chips Redcar Seafront",
    template: "%s | Pier Vista Fish & Chips",
  },
  description:
    "Traditional fish and chips on Redcar seafront, directly opposite the Redcar Beacon. Family run since 2013 with seating inside, disabled access, dog friendly service and a 5-star food hygiene rating.",
  keywords: [
    "fish and chips Redcar",
    "Redcar fish and chips",
    "fish and chips Redcar seafront",
    "Pier Vista",
    "Pier Vista Fish and Chips",
    "Redcar seafront food",
    "places to eat Redcar",
    "takeaway Redcar seafront",
    "fish and chips near Redcar Beacon",
    "family friendly food Redcar seafront",
    "dog friendly fish and chips Redcar",
  ],
  openGraph: {
    title: "Pier Vista Fish & Chips | Redcar Seafront",
    description:
      "Traditional fish and chips on Redcar seafront, directly opposite the Redcar Beacon.",
    url: siteUrl,
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
    title: "Pier Vista Fish & Chips | Redcar Seafront",
    description:
      "Traditional fish and chips on Redcar seafront, directly opposite the Redcar Beacon.",
    images: ["/images/fish-boxes.jpg"],
  },
  alternates: {
    canonical: siteUrl,
  },
icons: {
  icon: [
    { url: "/favicon.ico", sizes: "any" },
    { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    { url: "/favicon-512.png", type: "image/png", sizes: "512x512" },
  ],
  shortcut: "/favicon.ico",
  apple: "/apple-touch-icon.png",
},
manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GV9XLPK1XH"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-GV9XLPK1XH');
            `,
          }}
        />
      </head>
      <body>{children}</body>
      <Analytics/>
    </html>
  );
}