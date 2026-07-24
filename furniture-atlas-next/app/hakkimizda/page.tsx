import type { Metadata } from "next";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { buildStaticPageMetadata, staticPageBreadcrumbJsonLd } from "@/lib/staticPageMeta";

const PATH = "/hakkimizda";
const TITLE = "Hakkımızda";
const DESCRIPTION = "Furniture Atlas'ın misyonu ve hikayesi.";

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
