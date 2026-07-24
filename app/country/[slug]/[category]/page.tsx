import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { COUNTRIES, CATEGORIES, buildWoodVariant } from "@/lib/countries-data.js";

type Country = {
  id: string;
  iso: string;
  name: string;
  marketSize?: string;
  annualImports?: string;
};

// Path segment <-> kategori anahtarı eşlemesi. atlas-app.js içindeki
// CATEGORY_SLUGS ile birebir aynı olmalı — yeni bir HS kodu/kategori
// eklendiğinde iki tarafı da güncelle.
const CATEGORY_SLUG_MAP: Record<string, string> = {
  "ahsap-mobilya": "wood",
};

type Props = {
  params: Promise<{ slug: string; category: string }>;
};

export function generateStaticParams() {
  const params: { slug: string; category: string }[] = [];
  for (const country of COUNTRIES as Country[]) {
    for (const categorySlug of Object.keys(CATEGORY_SLUG_MAP)) {
      params.push({ slug: country.id, category: categorySlug });
    }
  }
  return params;
}

function findCountry(slug: string): Country | undefined {
  return (COUNTRIES as Country[]).find((c) => c.id === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  const country = findCountry(slug);
  if (!country || !catKey) return {};

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];
  const variant = buildWoodVariant(country);

  const title = `${country.name} ${catInfo.label} İhracat Pazarı (${catInfo.hs}) — Pazar Verileri | Furniture Atlas`;
  const description = `${country.name} ${catInfo.label.toLocaleLowerCase("tr")} pazarı (${catInfo.hs}): pazar büyüklüğü ${variant.marketSize}, yıllık ithalat ${variant.annualImports}. Türk mobilya ihracatçıları için gümrük, lojistik ve rakip analiziyle pazar istihbaratı.`;
  const canonical = `/country/${country.id}/${category}`;
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

export default async function CountryCategoryPage({ params }: Props) {
  const { slug, category } = await params;
  const catKey = CATEGORY_SLUG_MAP[category];
  const country = findCountry(slug);
  if (!country || !catKey) notFound();

  const catInfo = (CATEGORIES as Record<string, { label: string; hs: string }>)[catKey];

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
        name: catInfo.label,
        item: `https://furnitureatlas.org/country/${country.id}/${category}`,
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
