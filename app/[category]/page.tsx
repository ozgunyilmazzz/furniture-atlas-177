import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { CATEGORIES } from "@/lib/countries-data.js";

// Küre (ana sayfa) görünümünün kategoriye göre statik varyantı.
// /ahsap-mobilya -> küre + Ahşap Mobilya (HS 9403.60)
const CATEGORY_SLUG_MAP: Record<string, string> = {
  "ahsap-mobilya": "wood",
};

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_SLUG_MAP).map((category) => ({ category }));
}

// Bilinmeyen tek segmentli path'ler (ör. yanlışlıkla /foo) 404 dönsün.
export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  if (!catKey) return {};

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];
  const title = `${catInfo.label} İhracat Pazar İstihbaratı (${catInfo.hs}) | Furniture Atlas`;
  const description = `Türk ${catInfo.label.toLocaleLowerCase("tr")} (${catInfo.hs}) ihracatçıları için dünya genelinde pazar büyüklüğü, ithalat verileri, gümrük tarifeleri ve rakip analizi — ülke ülke interaktif harita üzerinde.`;
  const canonical = `/${category}`;
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
      images: [{ url: "https://furnitureatlas.org/og-icon.png", width: 512, height: 512, alt: "Furniture Atlas" }],
    },
    twitter: { card: "summary", title, description, images: ["https://furnitureatlas.org/og-icon.png"] },
    robots: { index: true, follow: true },
  };
}

export default async function GlobeCategoryPage({ params }: Props) {
  const { category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  if (!catKey) notFound();

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Furniture Atlas", item: "https://furnitureatlas.org/" },
      { "@type": "ListItem", position: 2, name: catInfo.label, item: `https://furnitureatlas.org/${category}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <LegacyAtlasApp />
    </>
  );
}
