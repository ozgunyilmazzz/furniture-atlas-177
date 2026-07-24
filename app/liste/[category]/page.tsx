import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { CATEGORIES } from "@/lib/countries-data.js";

const CATEGORY_SLUG_MAP: Record<string, string> = {
  "ahsap-mobilya": "wood",
};

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_SLUG_MAP).map((category) => ({ category }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  if (!catKey) return {};

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];
  const title = `${catInfo.label} İhracat Pazarları — Ülke Listesi (${catInfo.hs}) | Furniture Atlas`;
  const description = `${catInfo.label} (${catInfo.hs}) kategorisinde tüm ülkelerin ithalat verilerini, pazar büyüklüğünü ve fırsat skorunu tek bir listede karşılaştırın.`;
  const canonical = `/liste/${category}`;
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
    twitter: { card: "summary_large_image", title, description, images: ["https://furnitureatlas.org/favicon-180.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function ListeCategoryPage({ params }: Props) {
  const { category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  if (!catKey) notFound();

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Furniture Atlas", item: "https://furnitureatlas.org/" },
      { "@type": "ListItem", position: 2, name: "Ülke Listesi", item: "https://furnitureatlas.org/liste" },
      { "@type": "ListItem", position: 3, name: catInfo.label, item: `https://furnitureatlas.org/liste/${category}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <LegacyAtlasApp />
    </>
  );
}
