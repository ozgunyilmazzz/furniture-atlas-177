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

// Build-time'da 177 ülkenin her biri için ayrı statik İş Haritası sayfası üretir.
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

  const title = `${country.name} İş Haritası — Otel, Mağaza ve Distribütör Arama | Furniture Atlas`;
  const description = `${country.name} sınırları içinde mobilya alıcısı olabilecek otel, mağaza, showroom ve distribütörleri Google Haritalar üzerinden tek tıkla ara.`;
  const canonical = `/country/${country.id}/is-haritasi`;
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
      images: ["https://furnitureatlas.org/favicon-180.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://furnitureatlas.org/favicon-180.png"],
    },
    robots: { index: true, follow: true },
  };
}

export default async function CountryBusinessMapPage({ params }: Props) {
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
        name: "İş Haritası",
        item: `https://furnitureatlas.org/country/${country.id}/is-haritasi`,
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
