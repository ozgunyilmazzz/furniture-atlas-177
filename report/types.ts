/**
 * FURNITURE ATLAS REPORT — VERİ SÖZLEŞMESİ (JSON ŞEMASI)
 * ============================================================
 * Bu dosya, raporun ihtiyaç duyduğu TÜM verinin şeklini tanımlar. Şu anda
 * bu şekle uyan ÖRNEK veri kullanılıyor (bkz. data/sampleData.ts). İleride
 * gerçek veri bağlanırken tek yapılması gereken: mevcut uygulamanın veri
 * katmanından (public/legacy/atlas-app.js içindeki COUNTRIES + withCategory +
 * generateExtraFields) bu tipte bir nesne üreten bir "adapter" fonksiyonu
 * yazmak. Component'lerin hiçbiri değişmeyecek.
 *
 * KURAL: Bilinmeyen/doğrulanmamış bir alan için rastgele veya uydurma değer
 * ASLA üretilmez — `value: null` + `tier: 'unknown'` kullanılır ve component'ler
 * bunu ekranda dürüstçe "Bilinmiyor" olarak gösterir (bkz. ui/DataQualityTag).
 */

export type DataQualityTier = 'real' | 'estimated' | 'unknown';

/** Tek bir metrik: değer + verinin güvenilirlik seviyesi. */
export interface Metric<T = string> {
  value: T | null;
  tier: DataQualityTier;
  /** İsteğe bağlı: kaynak/dipnot (ör. "IMF WEO, Nisan 2026"). */
  sourceNote?: string;
}

export interface SupplierShare {
  country: string;
  isTurkey: boolean;
  sharePct: number;
}

export interface RiskItem {
  label: string;
  score: number; // 0-100, yüksek = riskli
  note: string;
}

export interface RequirementItem {
  name: string;
  tier: DataQualityTier;
  note: string;
}

export interface CoverInfo {
  preparedDate: string;   // "27.07.2026"
  dataPeriod: string;     // "2025"
  source: string;         // "Furniture Atlas"
}

/** Section 3 — Pazara İlk Bakış */
export interface FirstLook {
  capital: string | null;
  population: Metric;
  currency: string | null;
  officialLanguage: string | null;
  timeDifference: string | null;   // "+1 saat" / "Aynı saat dilimi" / null
  distanceToTurkeyKm: number | null;
  avgFlightDuration: string | null; // "~3 sa 40 dk"
  summary: string;                  // kısa ülke özeti (1-2 cümle)
  /**
   * Ülke haritası SVG path verisi — coğrafi geometri şu an bu JSON şemasının
   * PARÇASI DEĞİL (mevcut sınır verisi legacy JS içinde gömülü duruyor).
   * Faz 2'de gerçek veri bağlanırken bir adapter bu alanı dolduracak; o ana
   * kadar MapPlaceholder component'i kullanılır (bkz. ui/MapPlaceholder.tsx).
   */
  mapSvgPathD?: string;
}

/** Section 4 — Genel Görünüm (büyük KPI kartları) */
export interface GeneralOverview {
  population: Metric;
  gdp: Metric;
  gdpPerCapita: Metric;
  currency: string | null;
  economicGrowthPct: Metric<number>;
  inflationPct: Metric<number>;
}

/** Section 5 — İthalat Analizi */
export interface ImportAnalysis {
  categoryLabel: string;      // "Döşemeli Oturma Grubu"
  hsCode: string;             // "HS 9401.61"
  totalImports: Metric;
  marketSize: Metric;
  annualImportGrowthPct: Metric<number>;
  narrative: string;
}

/** Section 6 — Türkiye Performansı */
export interface TurkeyPerformance {
  exportValue: Metric;
  marketSharePct: Metric<number>;
  yoyGrowthPct: Metric<number>;
  rankAmongSuppliers: { rank: number; totalSuppliers: number } | null;
  narrative: string;
}

/** Section 7 — Başlıca Tedarikçi Ülkeler */
export interface TopSuppliers {
  tier: DataQualityTier; // liste tamamen bilinmiyorsa 'unknown', shares boş kalır
  shares: SupplierShare[];
  dataYearNote?: string;
}

/** Section 8 — Vergiler ve Ticaret Bilgileri */
export interface TaxesAndTrade {
  importTax: Metric;
  vat: Metric;
  customsDifficultyLabel: string; // "Düşük" / "Orta" / "Yüksek"
  requiredCertifications: RequirementItem[];
  requiredDocuments: RequirementItem[];
}

/** Section 9 — Lojistik */
export interface Logistics {
  transportMode: 'road' | 'sea';
  mainGateOrPort: string | null;
  transitTime: Metric;
  freightCost: Metric;
}

/** Section 10 — Sonuç ve Genel Değerlendirme */
export interface ConclusionData {
  overallScore: number;          // 0-100
  recommendationLabel: string;   // "Güçlü Öneri" / "Değerlendirilebilir" / "Temkinli Yaklaşım"
  marketPotentialLabel: string;
  entryDifficultyScore: number;  // 0-100
  competitionLabel: string;
  opportunities: { title: string; description: string }[];
  risks: RiskItem[];
}

/** Raporun tamamı için tek giriş noktası — tüm bölümler burada toplanır. */
export interface CountryReportData {
  countryName: string;
  countryFlagEmoji: string;
  countryFlagImageUrl?: string; // varsa yüksek çözünürlüklü bayrak görseli (opsiyonel)
  isoCode: string;
  cover: CoverInfo;
  firstLook: FirstLook;
  generalOverview: GeneralOverview;
  importAnalysis: ImportAnalysis;
  turkeyPerformance: TurkeyPerformance;
  topSuppliers: TopSuppliers;
  taxesAndTrade: TaxesAndTrade;
  logistics: Logistics;
  conclusion: ConclusionData;
}
