import type { Metadata } from "next";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";

export const metadata: Metadata = {
  title: "Mobilya İhracat Pazarları — Ülke Listesi | Furniture Atlas",
  description:
    "Tüm ülkelerin mobilya ithalat verilerini, pazar büyüklüğünü ve fırsat skorunu tek bir listede karşılaştırın. Türk mobilya ihracatçıları için pazar istihbaratı.",
  alternates: { canonical: "/liste" },
  openGraph: {
    type: "website",
    siteName: "Furniture Atlas",
    title: "Mobilya İhracat Pazarları — Ülke Listesi | Furniture Atlas",
    description:
      "Tüm ülkelerin mobilya ithalat verilerini, pazar büyüklüğünü ve fırsat skorunu tek bir listede karşılaştırın.",
    url: "https://furnitureatlas.org/liste",
    locale: "tr_TR",
    images: [{ url: "https://furnitureatlas.org/og-icon-small.png", width: 200, height: 200, alt: "Furniture Atlas" }],
  },
  twitter: {
    card: "summary",
    title: "Mobilya İhracat Pazarları — Ülke Listesi | Furniture Atlas",
    description: "Tüm ülkelerin mobilya ithalat verilerini tek bir listede karşılaştırın.",
    images: ["https://furnitureatlas.org/og-icon-small.png"],
  },
  robots: { index: true, follow: true },
};

const BREADCRUMB_JSONLD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Furniture Atlas", item: "https://furnitureatlas.org/" },
    { "@type": "ListItem", position: 2, name: "Ülke Listesi", item: "https://furnitureatlas.org/liste" },
  ],
};

export default function ListePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <LegacyAtlasApp />
    </>
  );
}
