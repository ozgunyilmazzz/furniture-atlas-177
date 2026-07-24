import type { Metadata } from "next";

type BuildArgs = {
  title: string;
  description: string;
  path: string; // örn. "/haberler"
  noindex?: boolean;
};

export function buildStaticPageMetadata({ title, description, path, noindex }: BuildArgs): Metadata {
  const fullTitle = `${title} | Furniture Atlas`;
  const url = `https://furnitureatlas.org${path}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Furniture Atlas",
      title: fullTitle,
      description,
      url,
      locale: "tr_TR",
      images: ["https://furnitureatlas.org/favicon-180.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["https://furnitureatlas.org/favicon-180.png"],
    },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
  };
}

export function staticPageBreadcrumbJsonLd(label: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Furniture Atlas", item: "https://furnitureatlas.org/" },
      { "@type": "ListItem", position: 2, name: label, item: `https://furnitureatlas.org${path}` },
    ],
  };
}
