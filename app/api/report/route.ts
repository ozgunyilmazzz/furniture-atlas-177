import { NextRequest, NextResponse } from 'next/server';
import { renderToBuffer } from '@react-pdf/renderer';
import fs from 'node:fs';
import path from 'node:path';
import { FurnitureAtlasReport } from '../../../report/FurnitureAtlasReport';
import { SAMPLE_REPORTS } from '../../../report/data/sampleData';

// @react-pdf/renderer Node API'lerine (fs, Buffer) ihtiyaç duyar — Edge runtime'da çalışmaz.
export const runtime = 'nodejs';

/**
 * FAZ 1 NOTU: Bu route şu an yalnızca ÖRNEK veriyle (SAMPLE_REPORTS) çalışır.
 * Faz 2'de ?country= parametresi, mevcut uygulamanın veri katmanından
 * (public/legacy/atlas-app.js → COUNTRIES/withCategory/generateExtraFields)
 * gerçek CountryReportData üreten bir adapter fonksiyonuna bağlanacak.
 * Component mimarisinin tamamı (report/) bu değişiklikten etkilenmeyecek.
 *
 * Kullanım (tasarım incelemesi):
 *   /api/report                      → örnek: Almanya (bol veri)
 *   /api/report?sample=unknown-heavy → örnek: veri yoksa "Bilinmiyor" davranışı
 */
export async function GET(req: NextRequest) {
  const sampleKey = req.nextUrl.searchParams.get('sample') || 'germany';
  const data = SAMPLE_REPORTS[sampleKey];
  if (!data) {
    return NextResponse.json(
      { error: `Bilinmeyen örnek: "${sampleKey}". Geçerli değerler: ${Object.keys(SAMPLE_REPORTS).join(', ')}` },
      { status: 400 },
    );
  }

  // Logo: public/logo.png şeffaf zeminli — kapak sayfasında beyaz üstünde doğrudan kullanılabilir.
  let logoSrc: string | undefined;
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png');
    const logoBuffer = fs.readFileSync(logoPath);
    logoSrc = `data:image/png;base64,${logoBuffer.toString('base64')}`;
  } catch {
    logoSrc = undefined; // dosya yoksa CoverPage metin amblemine düşer
  }

  const buffer = await renderToBuffer(FurnitureAtlasReport({ data, logoSrc }));

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${data.countryName}-mobilya-pazari-raporu.pdf"`,
      'Cache-Control': 'no-store',
    },
  });
}
