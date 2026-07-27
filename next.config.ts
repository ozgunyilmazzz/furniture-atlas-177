import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // @react-pdf/renderer, /api/report route'unda report/assets/fonts altındaki
  // TTF dosyalarını dosya yolu (path) ile okuyor (bkz. report/registerFonts.ts).
  // Bu dosyalar doğrudan `require`/`import` edilmediği için Next'in otomatik
  // sunucu dosya izleme (output file tracing) mekanizması bunları kaçırabilir —
  // Netlify'daki serverless fonksiyon paketine kesin dahil olmaları için
  // burada açıkça belirtiliyor.
  outputFileTracingIncludes: {
    "/api/report": ["./report/assets/fonts/**"],
  },
};

export default nextConfig;
