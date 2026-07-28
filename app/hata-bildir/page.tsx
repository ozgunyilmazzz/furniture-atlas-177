import type { Metadata } from "next";
import LegacyAtlasApp from "@/components/LegacyAtlasApp";
import { buildStaticPageMetadata, staticPageBreadcrumbJsonLd } from "@/lib/staticPageMeta";

const PATH = "/hata-bildir";
const TITLE = "Hata Bildir";
const DESCRIPTION = "Furniture Atlas'ta karşılaştığın bir veri hatasını veya teknik sorunu ekibimize bildir.";

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
