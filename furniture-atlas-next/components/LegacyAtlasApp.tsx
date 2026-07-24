import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import Script from "next/script";

// Faz 1-2 ortak parçası: hem "/" hem "/country/[slug]" aynı SPA gövdesini
// ve aynı JS mantığını kullanıyor. Hangi ülkenin açılacağına, sayfa
// yüklendiğinde tarayıcıdaki atlas-app.js içindeki initHistoryFromUrl()
// karar veriyor (URL'deki /country/<slug> path'ini okuyarak).
function readLegacy(file: string) {
  return fs.readFileSync(path.join(process.cwd(), "public", "legacy", file), "utf8");
}

// Faz 10: init/app/ticker script'leri artık next/script'e "dangerouslySetInnerHTML"
// ile gömülü (inline) değil, /legacy/*.js altındaki gerçek dosyalara "src" ile
// işaret edilerek yükleniyor. Sebep: 500KB'lık atlas-app.js gibi devasa script'leri
// inline gömmek, Next.js'in Script bileşeninde nadir bir hydration/reconciliation
// hatasına yol açıp script içeriğinin bazen HAM METİN olarak sayfada görünmesine
// (footer altında "saçma metinler") neden oluyordu. Harici dosya olarak yüklemek
// bu sınıf hatayı tamamen ortadan kaldıran, resmi olarak desteklenen yöntemdir.
// ?v= parametresi, her yeni deploy'da tarayıcı önbelleğini kırmak için dosya
// içeriğinin kısa bir özetinden (hash) üretilir.
function fileVersion(file: string) {
  const full = path.join(process.cwd(), "public", "legacy", file);
  const buf = fs.readFileSync(full);
  return crypto.createHash("md5").update(buf).digest("hex").slice(0, 10);
}

export default function LegacyAtlasApp() {
  const bodyHtml = readLegacy("atlas-body.html");

  return (
    <>
      <div id="legacy-root" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

      {/* Sıra önemli: supabase -> init -> app (veri + routing mantığı) -> ticker */}
      <Script
        src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js"
        strategy="beforeInteractive"
      />
      <Script id="atlas-init" src={`/legacy/atlas-init.js?v=${fileVersion("atlas-init.js")}`} strategy="afterInteractive" />
      <Script id="atlas-app" src={`/legacy/atlas-app.js?v=${fileVersion("atlas-app.js")}`} strategy="afterInteractive" />
      <Script id="atlas-ticker" src={`/legacy/atlas-router.js?v=${fileVersion("atlas-router.js")}`} strategy="afterInteractive" />
    </>
  );
}
