import type { Metadata } from "next";
import HomeContent from "@/components/HomeContent";
import { getDictionary } from "@/lib/i18n/dictionaries";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://sergiorobayo.com";

const t = getDictionary("es");

export const metadata: Metadata = {
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: `${SITE_URL}/es`,
    languages: {
      en: SITE_URL,
      es: `${SITE_URL}/es`,
      "x-default": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/es`,
    siteName: "Sergio Robayo",
    title: t.meta.title,
    description: t.meta.ogDescription,
    locale: "es_ES",
    alternateLocale: ["en_US"],
    images: [
      { url: "/sergio.jpg", width: 896, height: 1195, alt: "Sergio Robayo" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: t.meta.title,
    description: t.meta.twitterDescription,
    images: ["/sergio.jpg"],
  },
};

export default function HomeES() {
  return <HomeContent locale="es" />;
}
