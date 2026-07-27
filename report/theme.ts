/**
 * FURNITURE ATLAS REPORT — TASARIM TOKENLARI
 * ============================================================
 * Bu dosya, raporun TEK renk/tipografi/boşluk kaynağıdır. Yeni bir bölüm
 * eklerken burada tanımlı değerleri kullan — component içine renk/punto
 * gömme (hardcode). Amaç: McKinsey/Deloitte/Statista/World Bank seviyesinde
 * tutarlı, sade, kurumsal bir görünüm.
 *
 * ÖNEMLİ: Bu, web arayüzünün (public/legacy) print CSS'i DEĞİLDİR — bu paket
 * @react-pdf/renderer ile JSON verisinden sıfırdan PDF üretir; web
 * arayüzünden hiçbir HTML/CSS içe aktarılmaz.
 */

export const colors = {
  // Metin ve başlıklar
  navy: '#1A2240',        // ana başlık rengi ("Lacivert başlıklar")
  navyDeep: '#0F1730',    // kapak sayfası vurgusu / en koyu ton
  ink: '#374151',         // gövde metni
  inkMuted: '#6B7280',    // ikincil metin, alt bilgiler
  faint: '#9CA3AF',       // en soluk metin (dipnot, sayfa no.)

  // Yüzeyler ve çizgiler
  white: '#FFFFFF',
  panel: '#F9FAFB',       // KPI kart / tablo zebra zemin
  panelAlt: '#F3F4F6',    // son sayfa bilgilendirme kutusu (#F3F4F6 istendiği gibi)
  divider: '#E5E7EB',     // "açık gri ayırıcı çizgiler"
  dividerStrong: '#D1D5DB',

  // Vurgu / marka rengi (amber — mevcut marka kimliğiyle tutarlı, ama print'te sade kullanılır)
  gold: '#8A6D1F',
  goldMuted: '#C9B183',

  // Durum renkleri (skor/rozet/uyarı) — dashboard'daki gerçek/tahmini/bilinmiyor ayrımıyla tutarlı
  positive: '#1F7A5C',
  warning: '#B8862F',
  negative: '#B3392C',
  unknown: '#9CA3AF',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 28,
  xxl: 40,
} as const;

export const typography = {
  // Inter (gövde) ve Lora (başlık) — report/registerFonts.ts ile gömülü TTF'ler.
  // ÖNEMLİ: Helvetica/Times-Roman (PDF base14) Türkçe karakterleri (ı,İ,ş,Ş,ğ,Ğ)
  // doğru basamadığı için KULLANILMIYOR — bkz. registerFonts.ts üstündeki not.
  sans: 'Inter',
  sansBold: 'Inter',       // fontWeight:700 ile birlikte kullanılmalı
  serif: 'Lora',
  serifBold: 'Lora',       // fontWeight:700 ile birlikte kullanılmalı

  h1: 26,      // kapak / bölüm ana başlığı
  h2: 16,      // sayfa başlığı (bölüm adı)
  h3: 11,      // alt başlık
  body: 10,
  small: 8.5,
  micro: 7.5,
} as const;

export const page = {
  size: 'A4' as const,
  // Header/footer'ın sabit yüksekliğine göre içerik alanı boşluğu bırakılır.
  paddingTop: 78,
  paddingBottom: 56,
  paddingHorizontal: 44,
};

export type DataQualityTier = 'real' | 'estimated' | 'unknown';

/**
 * TÜRKÇE BÜYÜK HARF DÖNÜŞÜMÜ — neden gerekli?
 * @react-pdf/renderer'ın `textTransform: 'uppercase'` CSS özelliği içeride
 * düz JS `String.prototype.toUpperCase()` çağırıyor (locale farkındalığı yok).
 * Bu, Türkçe küçük "i" harfini YANLIŞ şekilde noktasız "I"ya çevirir
 * (doğrusu noktalı "İ" olmalı) — ör. "Türkiye" hatalı şekilde "TURKIYE" olur.
 * Bu yüzden raporda CSS textTransform ASLA kullanılmaz; bunun yerine tüm
 * "büyük harf" gösterimler bu fonksiyonla, `.toLocaleUpperCase('tr-TR')`
 * kullanılarak elle yapılır — bkz. her component'teki kullanım.
 */
export const trUpper = (s: string): string => s.toLocaleUpperCase('tr-TR');

export const dqColor = (tier: DataQualityTier): string =>
  tier === 'real' ? colors.positive : tier === 'estimated' ? colors.warning : colors.unknown;

export const dqLabel = (tier: DataQualityTier): string =>
  tier === 'real' ? 'DOĞRULANMIŞ' : tier === 'estimated' ? 'TAHMİNİ' : 'BİLİNMİYOR';
