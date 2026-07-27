import type { MetadataRoute } from "next";
import { COUNTRIES } from "@/lib/countries-data.js";

type Country = { id: string };

const BASE_URL = "https://furnitureatlas.org";

// Not: /hedef-ulkelerim burada kasten YOK — kişiye özel/boş içerik olduğu
// için o sayfa noindex (bkz. app/hedef-ulkelerim/page.tsx), sitemap'e de
// dahil edilmiyor.
const STATIC_PATHS: {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
}[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/liste", priority: 0.8, changeFrequency: "daily" },
  { path: "/liste/ahsap-mobilya", priority: 0.7, changeFrequency: "daily" },
  { path: "/ahsap-mobilya", priority: 0.8, changeFrequency: "daily" },
  { path: "/premium", priority: 0.6, changeFrequency: "monthly" },
  { path: "/haberler", priority: 0.6, changeFrequency: "daily" },
  { path: "/fuarlar", priority: 0.6, changeFrequency: "weekly" },
  { path: "/seyahat-planla", priority: 0.5, changeFrequency: "monthly" },
  { path: "/atlas-research", priority: 0.5, changeFrequency: "monthly" },
  { path: "/hakkimizda", priority: 0.4, changeFrequency: "yearly" },
  { path: "/iletisim", priority: 0.4, changeFrequency: "yearly" },
  { path: "/is-ortaklari", priority: 0.4, changeFrequency: "yearly" },
  { path: "/yardim-merkezi", priority: 0.4, changeFrequency: "monthly" },
  { path: "/gizlilik-politikasi", priority: 0.3, changeFrequency: "yearly" },
  { path: "/kullanim-sartlari", priority: 0.3, changeFrequency: "yearly" },
  { path: "/cerez-politikasi", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));

  // 177 ülkenin tamamı, hem varsayılan (Oturma Grubu) hem Ahşap Mobilya
  // kategorisiyle — /country/[slug] ve /country/[slug]/[category] route'ları
  // generateStaticParams ile zaten aynı listeyi kullanıyor.
  const countryEntries: MetadataRoute.Sitemap = (COUNTRIES as Country[]).flatMap((c) => [
    {
      url: `${BASE_URL}/country/${c.id}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/country/${c.id}/ahsap-mobilya`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    },
  ]);

  return [...staticEntries, ...countryEntries];
}
