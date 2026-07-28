import type { Metadata } from "next";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { buildStaticPageMetadata, staticPageBreadcrumbJsonLd } from "@/lib/staticPageMeta";

const PATH = "/turkiye";
const TITLE = "Türkiye Mobilya Sektörü";
const DESCRIPTION =
  "Türkiye mobilya sanayii rakamları: istihdam, üretim hacmi, ihracat ve en büyük ihracat pazarları. Dünyanın en büyük 10 mobilya üretici ve ihracatçısından biri.";

export const metadata: Metadata = buildStaticPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
});

const breadcrumbJsonLd = staticPageBreadcrumbJsonLd(TITLE, PATH);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <LegacyAtlasApp />
    </>
  );
}
