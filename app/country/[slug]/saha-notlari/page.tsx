import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { COUNTRIES } from "@/lib/countries-data.js";

type Country = {
  id: string;
  iso: string;
  name: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Build-time'da 177 ülkenin her biri için ayrı statik Saha Notları sayfası üretir.
export function generateStaticParams() {
  return (COUNTRIES as Country[]).map((c) => ({ slug: c.id }));
}

function findCountry(slug: string): Country | undefined {
  return (COUNTRIES as Country[]).find((c) => c.id === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const country = findCountry(slug);
  if (!country) return {};

  const title = `${country.name} Saha Notları — Üye Deneyimleri | Furniture Atlas`;
  const description = `${country.name} pazarında ticari ve seyahat deneyimi yaşayan Furniture Atlas üyelerinin paylaşımları: ödeme süreci, gümrük, fuarlar, iş yapma kültürü ve daha fazlası.`;
  const canonical = `/country/${country.id}/saha-notlari`;
  const url = `https://furnitureatlas.org${canonical}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: "Furniture Atlas",
      title,
      description,
      url,
      locale: "tr_TR",
      images: [{ url: "https://furnitureatlas.org/og-icon-small.png", width: 200, height: 200, alt: "Furniture Atlas" }],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["https://furnitureatlas.org/og-icon-small.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CountryFieldNotesPage({ params }: Props) {
  const { slug } = await params;
  const country = findCountry(slug);
  if (!country) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Furniture Atlas", item: "https://furnitureatlas.org/" },
      {
        "@type": "ListItem",
        position: 2,
        name: country.name,
        item: `https://furnitureatlas.org/country/${country.id}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Saha Notları",
        item: `https://furnitureatlas.org/country/${country.id}/saha-notlari`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <LegacyAtlasApp />
    </>
  );
}
