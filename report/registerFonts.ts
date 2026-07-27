import path from 'node:path';
import { Font } from '@react-pdf/renderer';

/**
 * FONT KAYDI — neden bu yaklaşım?
 * ============================================================
 * 1) Varsayılan Helvetica/Times-Roman (PDF'in gömülü "base14" fontları)
 *    Türkçe karakterleri (ı, İ, ş, Ş, ğ, Ğ) DOĞRU BASAMAZ — WinAnsi kodlaması
 *    bu karakterleri desteklemez. Bu yüzden Inter (gövde/sans) ve Lora (başlık/serif)
 *    gömülü TTF fontları kullanılıyor — ikisi de Latin Extended (Türkçe dahil)
 *    karakter setini içeriyor.
 *
 * 2) @fontsource'un hazır WOFF dosyaları denendi ama render sonrası metin
 *    katmanında "ı" harfi "1" rakamına dönüşüyordu (subset edilmiş WOFF'un
 *    ToUnicode/cmap tablosunda bilinen bir sorun). Google Fonts'un ORİJİNAL
 *    değişken (variable) TTF dosyaları bu sorunu çözdü, ANCAK değişken font
 *    ağırlık ekseni react-pdf/fontkit tarafından enstantane edilmiyor —
 *    yani fontWeight:700 istense de görsel olarak kalınlaşmıyordu (ölçülüp
 *    doğrulandı: glyph mürekkep alanı fark etmiyordu).
 *
 * 3) ÇÖZÜM: fontTools ile değişken fontlardan GERÇEK statik 400/700
 *    enstantaneleri üretildi (bkz. report/assets/fonts/). Bu dosyalarda hem
 *    Türkçe karakterler doğru basılıyor HEM DE Bold gerçekten daha kalın
 *    (glyph mürekkep alanı %48-66 daha fazla — ölçülüp doğrulandı).
 *
 * Fontlar dosya yolu (string) olarak Font.register'a veriliyor — @react-pdf/font'un
 * ortak API'si `src: string` bekliyor (Buffer, Text/Image'daki src'den farklı olarak
 * burada tip düzeyinde desteklenmiyor). Bu tam olarak elle test edilip Türkçe
 * karakterlerin ve Bold ağırlığının doğru çalıştığı doğrulanan yöntemdir.
 * Netlify/Next serverless paketlemesinde bu font dosyalarının fonksiyon paketine
 * dahil edilmesi için next.config.ts'te outputFileTracingIncludes tanımlandı.
 */

const FONTS_DIR = path.join(__dirname, 'assets', 'fonts');

let registered = false;

export function registerReportFonts(): void {
  if (registered) return; // Font.register birden fazla kez çağrılırsa react-pdf uyarı basar
  registered = true;

  Font.register({
    family: 'Inter',
    fonts: [
      { src: path.join(FONTS_DIR, 'Inter-Regular.ttf'), fontWeight: 400 },
      { src: path.join(FONTS_DIR, 'Inter-Bold.ttf'), fontWeight: 700 },
    ],
  });

  Font.register({
    family: 'Lora',
    fonts: [
      { src: path.join(FONTS_DIR, 'Lora-Regular.ttf'), fontWeight: 400 },
      { src: path.join(FONTS_DIR, 'Lora-Bold.ttf'), fontWeight: 700 },
    ],
  });

  // Tire/kısa çizgi gibi karakterlerde kelime ortasında hatalı hecelemeyi önler.
  Font.registerHyphenationCallback((word) => [word]);
}
