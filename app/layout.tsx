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
        // WhatsApp/Telegram gibi uygulamalarda büyük fotoğraf yerine KÜÇÜK,
        // kompakt bir önizleme çıkması için: WhatsApp, og:image genişliği
        // 300px'in ALTINDA olduğunda otomatik olarak küçük/kompakt önizleme
        // biçimine geçiyor (300px+ ise büyük tam-genişlik kart gösteriyor).
        // Bu yüzden bilerek 200×200 (küçük kare, opak zeminli) bir ikon
        // kullanıyoruz — 512×512'lük eski versiyon 300px eşiğinin ÜZERİNDE
        // kaldığı için hâlâ büyük kart olarak gösteriliyordu.
        url: "/og-icon-small.png",
        width: 200,
        height: 200,
        alt: "Furniture Atlas",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Furniture Atlas — Mobilya İhracatı için Pazar İstihbarat Platformu",
    description:
      "Türk mobilya ihracatçıları için interaktif pazar istihbaratı: ithalat verileri, gümrük tarifeleri, rakip analizi ve lojistik maliyetleriyle bir sonraki ihracat pazarınızı keşfedin.",
    images: ["/og-icon-small.png"],
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
