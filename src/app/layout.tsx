import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pier Vista Fish & Chips | Redcar Seafront",
  description:
    "Traditional fish and chips on Redcar seafront. Seating inside, disabled access, dog friendly and high chairs available.",
  icons: {
    icon: "/favicon.ico",
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
      <body>{children}</body>
    </html>
  );
}
