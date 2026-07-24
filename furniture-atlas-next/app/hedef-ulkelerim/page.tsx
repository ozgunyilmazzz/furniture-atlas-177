import type { Metadata } from "next";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { buildStaticPageMetadata, staticPageBreadcrumbJsonLd } from "@/lib/staticPageMeta";

const PATH = "/hedef-ulkelerim";
const TITLE = "Hedef Ülkelerim";
const DESCRIPTION = "Takip ettiğiniz ülkeleri kaydedin, pazar verilerindeki değişiklikleri tek yerden izleyin.";

export const metadata: Metadata = buildStaticPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  noindex: true,
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
