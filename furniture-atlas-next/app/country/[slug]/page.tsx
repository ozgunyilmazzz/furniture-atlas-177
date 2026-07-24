import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { COUNTRIES } from "@/lib/countries-data.js";

type Country = {
  id: string;
  iso: string;
  name: string;
  flag?: string;
  marketSize?: string;
  annualImports?: string;
  turkeyShare?: string;
};

type Props = {
  params: Promise<{ slug: string }>;
};

// Build-time'da 177 ülkenin her biri için ayrı statik sayfa üretir.
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

  const title = `${country.name} Mobilya İhracat Pazarı — Pazar Verileri | Furniture Atlas`;
  const description = `${country.name} mobilya pazarı için ithalat verileri, gümrük tarifeleri, lojistik maliyetleri ve rakip analizi. Türk mobilya ihracatçıları için pazar istihbaratı.`;
  const canonical = `/country/${country.id}`;
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

export default async function CountryPage({ params }: Props) {
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
