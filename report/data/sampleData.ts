import type { CountryReportData } from '../types';

/**
 * ÖRNEK VERİ — yalnızca Faz 1 (tasarım/mimari inceleme) içindir.
 * Gerçek rakamlar değildir; sadece template'in doğru yerleşip yerleşmediğini
 * görmek için kullanılır. Faz 2'de bu dosyanın yerini, mevcut uygulamanın
 * gerçek veri katmanından üretilen bir "adapter" fonksiyonu alacak.
 */

const cover = {
  preparedDate: '27.07.2026',
  dataPeriod: '2025',
  source: 'Furniture Atlas',
};

// Senaryo 1: Bol veri (gerçek + tahmini karışık) — çoğu ülke için tipik durum
export const sampleGermany: CountryReportData = {
  countryName: 'Almanya',
  countryFlagEmoji: '🇩🇪',
  isoCode: 'DE',
  cover,
  firstLook: {
    capital: 'Berlin',
    population: { value: '84,5 milyon', tier: 'real' },
    currency: 'Euro (EUR)',
    officialLanguage: 'Almanca',
    timeDifference: 'Aynı saat dilimi',
    distanceToTurkeyKm: 2400,
    avgFlightDuration: '~3 sa 30 dk',
    summary:
      'Almanya, Avrupa\'nın en büyük mobilya ithalat pazarlarından biri olup güçlü bir yerel üretim tabanına ' +
      'sahiptir. Yüksek kalite beklentisi ve sıkı sertifikasyon standartları nedeniyle giriş zorluğu orta-yüksek ' +
      'seviyededir; buna karşılık pazar hacmi ve ödeme güvenilirliği bölgedeki en yüksek seviyelerdendir.',
  },
  generalOverview: {
    population: { value: '84,5 milyon', tier: 'real' },
    gdp: { value: '$4,7 trilyon', tier: 'real' },
    gdpPerCapita: { value: '$55.800', tier: 'real' },
    currency: 'Euro (EUR)',
    economicGrowthPct: { value: 1.2, tier: 'estimated' },
    inflationPct: { value: 2.4, tier: 'real' },
  },
  importAnalysis: {
    categoryLabel: 'Döşemeli Oturma Grubu',
    hsCode: 'HS 9401.61',
    totalImports: { value: '$1,8 milyar', tier: 'estimated' },
    marketSize: { value: '$3,2 milyar', tier: 'estimated' },
    annualImportGrowthPct: { value: 3.4, tier: 'estimated' },
    narrative:
      'Döşemeli oturma grubu ithalatı istikrarlı bir büyüme eğilimi göstermektedir. Konut yenileme ve ofis ' +
      'mobilyası talebi, pazarın orta vadeli görünümünü olumlu yönde desteklemektedir.',
  },
  turkeyPerformance: {
    exportValue: { value: '$164 milyon', tier: 'real' },
    marketSharePct: { value: 9.1, tier: 'real' },
    yoyGrowthPct: { value: 6.2, tier: 'real' },
    rankAmongSuppliers: { rank: 3, totalSuppliers: 12 },
    narrative:
      'Türkiye\'den Almanya\'ya döşemeli oturma grubu ihracatı 2024→2025 döneminde doğrulanmış verilerle %6,2 ' +
      'artmıştır. Türkiye, 12 tedarikçi ülke arasında 3. sırada yer almaktadır; bu, bölgedeki güçlü ve büyüyen bir ' +
      'konumu yansıtmaktadır.',
  },
  topSuppliers: {
    tier: 'real',
    shares: [
      { country: 'Polonya', isTurkey: false, sharePct: 24 },
      { country: 'Çin', isTurkey: false, sharePct: 18 },
      { country: 'Türkiye', isTurkey: true, sharePct: 9 },
      { country: 'İtalya', isTurkey: false, sharePct: 8 },
      { country: 'Vietnam', isTurkey: false, sharePct: 6 },
    ],
    dataYearNote: 'Veri yılı: 2025 (Eurostat Comext).',
  },
  taxesAndTrade: {
    importTax: { value: '%0 (AB İçi Serbest Ticaret)', tier: 'real' },
    vat: { value: '%19', tier: 'real' },
    customsDifficultyLabel: 'Düşük',
    requiredCertifications: [
      { name: 'CE İşareti', tier: 'real', note: 'AB pazarına giriş için zorunlu güvenlik/uygunluk işareti.' },
      { name: 'REACH Uyumluluğu', tier: 'real', note: 'Kimyasal madde içeriği için AB regülasyon uyumu.' },
    ],
    requiredDocuments: [
      { name: 'EUR.1 Dolaşım Belgesi', tier: 'real', note: 'Gümrük Birliği kapsamında tercihli tarife için gereklidir.' },
      { name: 'Ticari Fatura', tier: 'real', note: 'Standart ihracat evrakı.' },
    ],
  },
  logistics: {
    transportMode: 'road',
    mainGateOrPort: 'Kapıkule Sınır Kapısı',
    transitTime: { value: '4-6 gün', tier: 'estimated' },
    freightCost: { value: '$2.400 / TIR', tier: 'estimated' },
  },
  conclusion: {
    overallScore: 78,
    recommendationLabel: 'Güçlü Öneri',
    marketPotentialLabel: 'Yüksek',
    entryDifficultyScore: 52,
    competitionLabel: 'Orta',
    opportunities: [
      { title: 'Büyüyen Segment', description: 'Döşemeli oturma grubu ithalatı yıllık %3,4 oranında büyüyor.' },
      { title: 'Yatırım Trendi', description: 'Pazar büyüklüğü $3,2 milyar ile istikrarlı bir yatırım ortamına işaret ediyor.' },
      { title: 'Gelecek Görünümü', description: 'Büyüme trendinin önümüzdeki yıllarda devam etmesi bekleniyor.' },
    ],
    risks: [
      { label: 'Kur Riski', score: 28, note: 'Euro/TL dalgalanmaları fiyatlama üzerinde orta düzey etkili.' },
      { label: 'Ödeme Riski', score: 15, note: 'AB içi ödeme güvenilirliği yüksek.' },
      { label: 'Rekabet Riski', score: 61, note: 'Polonya ve Çin menşeli rakiplerin fiyat/hacim baskısı yüksek.' },
    ],
  },
};

// Senaryo 2: Çoğu alan bilinmiyor — dürüst "Bilinmiyor" gösterimini doğrulamak için
export const sampleUnknownHeavy: CountryReportData = {
  countryName: 'Antarktika',
  countryFlagEmoji: '🇦🇶',
  isoCode: 'AQ',
  cover,
  firstLook: {
    capital: null,
    population: { value: null, tier: 'unknown' },
    currency: null,
    officialLanguage: null,
    timeDifference: null,
    distanceToTurkeyKm: null,
    avgFlightDuration: null,
    summary: 'Bu bölge için ticari mobilya pazarı analizine temel oluşturacak doğrulanmış veri bulunmamaktadır.',
  },
  generalOverview: {
    population: { value: null, tier: 'unknown' },
    gdp: { value: null, tier: 'unknown' },
    gdpPerCapita: { value: null, tier: 'unknown' },
    currency: null,
    economicGrowthPct: { value: null, tier: 'unknown' },
    inflationPct: { value: null, tier: 'unknown' },
  },
  importAnalysis: {
    categoryLabel: 'Döşemeli Oturma Grubu',
    hsCode: 'HS 9401.61',
    totalImports: { value: null, tier: 'unknown' },
    marketSize: { value: null, tier: 'unknown' },
    annualImportGrowthPct: { value: null, tier: 'unknown' },
    narrative: 'Bu bölge için doğrulanmış veya tahmini bir ithalat verisi bulunmamaktadır.',
  },
  turkeyPerformance: {
    exportValue: { value: null, tier: 'unknown' },
    marketSharePct: { value: null, tier: 'unknown' },
    yoyGrowthPct: { value: null, tier: 'unknown' },
    rankAmongSuppliers: null,
    narrative: "Türkiye'den bu bölgeye yönelik doğrulanmış bir ihracat verisi bulunmamaktadır.",
  },
  topSuppliers: { tier: 'unknown', shares: [] },
  taxesAndTrade: {
    importTax: { value: null, tier: 'unknown' },
    vat: { value: null, tier: 'unknown' },
    customsDifficultyLabel: 'Bilinmiyor',
    requiredCertifications: [],
    requiredDocuments: [],
  },
  logistics: {
    transportMode: 'sea',
    mainGateOrPort: null,
    transitTime: { value: null, tier: 'unknown' },
    freightCost: { value: null, tier: 'unknown' },
  },
  conclusion: {
    overallScore: 0,
    recommendationLabel: 'Değerlendirme Dışı',
    marketPotentialLabel: 'Bilinmiyor',
    entryDifficultyScore: 0,
    competitionLabel: 'Bilinmiyor',
    opportunities: [],
    risks: [],
  },
};

export const SAMPLE_REPORTS: Record<string, CountryReportData> = {
  germany: sampleGermany,
  'unknown-heavy': sampleUnknownHeavy,
};
