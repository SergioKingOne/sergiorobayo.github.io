import type { Metadata, Viewport } from "next";
import { buildAutoDetectScript } from "@/lib/i18n/auto-detect";
import { getDictionary } from "@/lib/i18n/dictionaries";
import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sergiorobayo.com";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

const tEn = getDictionary("en");

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a0b0e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: tEn.meta.title,
  description: tEn.meta.description,
  alternates: {
    canonical: "/",
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Sergio Robayo",
    title: tEn.meta.title,
    description: tEn.meta.ogDescription,
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      { url: "/sergio.jpg", width: 896, height: 1195, alt: "Sergio Robayo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: tEn.meta.title,
    description: tEn.meta.twitterDescription,
    images: ["/sergio.jpg"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sergio Robayo",
  alternateName: "SergioKingOne",
  url: SITE_URL,
  jobTitle: "Lead Backend Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Surt AI",
    url: "https://surt.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bogotá",
    addressCountry: "CO",
  },
  knowsAbout: [
    "Rust",
    "AWS",
    "Fraud Prevention",
    "Identity Verification",
    "Serverless Architecture",
    "Distributed Systems",
  ],
  sameAs: [
    "https://github.com/SergioKingOne",
    "https://www.linkedin.com/in/sergio-robayo-500584216/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Locale auto-detect — runs before hydration to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: buildAutoDetectScript(BASE_PATH),
          }}
        />
      </head>
      <body className="antialiased">
        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] focus:px-3 focus:py-2 focus:bg-[var(--color-ink-1)] focus:text-[var(--color-text-bright)] focus:border focus:border-[var(--color-signal)]"
        >
          skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
      </body>
    </html>
  );
}
