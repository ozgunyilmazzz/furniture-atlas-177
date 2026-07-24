import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://furnitureatlas.org"),
  title: "Furniture Atlas — Mobilya İhracatı için Pazar İstihbarat Platformu",
  description:
    "Türk mobilya ihracatçıları için interaktif pazar istihbaratı: ithalat verileri, gümrük tarifeleri, rakip analizi ve lojistik maliyetleriyle bir sonraki ihracat pazarınızı keşfedin.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Furniture Atlas",
    title: "Furniture Atlas — Mobilya İhracatı için Pazar İstihbarat Platformu",
    description:
      "Türk mobilya ihracatçıları için interaktif pazar istihbaratı: ithalat verileri, gümrük tarifeleri, rakip analizi ve lojistik maliyetleriyle bir sonraki ihracat pazarınızı keşfedin.",
    url: "https://furnitureatlas.org/",
    locale: "tr_TR",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 800,
        alt: "Furniture Atlas — Dünya Pazarları. Doğru Veri. Doğru Karar.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furniture Atlas — Mobilya İhracatı için Pazar İstihbarat Platformu",
    description:
      "Türk mobilya ihracatçıları için interaktif pazar istihbaratı: ithalat verileri, gümrük tarifeleri, rakip analizi ve lojistik maliyetleriyle bir sonraki ihracat pazarınızı keşfedin.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Furniture Atlas",
  url: "https://furnitureatlas.org/",
  logo: "https://furnitureatlas.org/favicon-180.png",
  description: "Türk mobilya ihracatçıları için interaktif pazar istihbarat platformu.",
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Furniture Atlas",
  url: "https://furnitureatlas.org/",
  inLanguage: "tr",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://furnitureatlas.org/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#080a0f" />
        <link rel="stylesheet" href="/legacy/atlas.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
