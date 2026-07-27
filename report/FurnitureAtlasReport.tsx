import React from 'react';
import { Document } from '@react-pdf/renderer';
import { registerReportFonts } from './registerFonts';
import { CoverPage } from './components/sections/CoverPage';
import { TableOfContentsPage } from './components/sections/TableOfContentsPage';
import { FirstLookPage } from './components/sections/FirstLookPage';
import { GeneralOverviewPage } from './components/sections/GeneralOverviewPage';
import { ImportAnalysisPage } from './components/sections/ImportAnalysisPage';
import { TurkeyPerformancePage } from './components/sections/TurkeyPerformancePage';
import { TopSuppliersPage } from './components/sections/TopSuppliersPage';
import { TaxesTradePage } from './components/sections/TaxesTradePage';
import { LogisticsPage } from './components/sections/LogisticsPage';
import { ConclusionPage } from './components/sections/ConclusionPage';
import type { CountryReportData } from './types';

registerReportFonts();

/**
 * FurnitureAtlasReport — RAPORUN TEK GİRİŞ NOKTASI
 * ============================================================
 * Web arayüzünden (public/legacy) TAMAMEN bağımsızdır: hiçbir HTML/CSS
 * içe aktarmaz, hiçbir DOM/print mantığı kullanmaz. Girdisi salt JSON'dur
 * (CountryReportData — bkz. types.ts).
 *
 * YENİ BÖLÜM EKLEMEK İÇİN:
 *   1) types.ts'e ilgili veri tipini ekle,
 *   2) components/sections/ altına yeni bir <XyzPage> component'i yaz
 *      (PageShell'i sarmalayıcı olarak kullan — header/footer otomatik gelir),
 *   3) aşağıdaki <Document> içine sırayla ekle.
 * Mevcut bölümlerin hiçbirine dokunman gerekmez.
 *
 * logoSrc: Base64 data-URI. Sağlanmazsa CoverPage metin amblemi kullanır.
 */
interface FurnitureAtlasReportProps {
  data: CountryReportData;
  logoSrc?: string;
}

export function FurnitureAtlasReport({ data, logoSrc }: FurnitureAtlasReportProps) {
  return (
    <Document title={`${data.countryName} — Mobilya Pazarı Raporu`} author="Furniture Atlas" creator="Furniture Atlas">
      <CoverPage
        countryName={data.countryName}
        isoCode={data.isoCode}
        flagImageUrl={data.countryFlagImageUrl}
        cover={data.cover}
        logoSrc={logoSrc}
      />
      <TableOfContentsPage cover={data.cover} countryName={data.countryName} />
      <FirstLookPage cover={data.cover} countryName={data.countryName} isoCode={data.isoCode} flagImageUrl={data.countryFlagImageUrl} data={data.firstLook} />
      <GeneralOverviewPage cover={data.cover} countryName={data.countryName} data={data.generalOverview} />
      <ImportAnalysisPage cover={data.cover} countryName={data.countryName} data={data.importAnalysis} />
      <TurkeyPerformancePage cover={data.cover} countryName={data.countryName} data={data.turkeyPerformance} />
      <TopSuppliersPage cover={data.cover} countryName={data.countryName} data={data.topSuppliers} />
      <TaxesTradePage cover={data.cover} countryName={data.countryName} data={data.taxesAndTrade} />
      <LogisticsPage cover={data.cover} countryName={data.countryName} data={data.logistics} />
      <ConclusionPage cover={data.cover} countryName={data.countryName} data={data.conclusion} />
    </Document>
  );
}
