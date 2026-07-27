import React from 'react';
import { Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, page as pageTokens, trUpper } from '../../theme';
import type { CoverInfo } from '../../types';

/**
 * PageShell — her bölüm sayfasının sarmalayıcısı.
 * Tüm sayfalarda TUTARLI header/footer burada tanımlanır (tek yer, tek
 * kaynak). Sayfa numarası react-pdf'in `render={({pageNumber, totalPages})}`
 * callback'iyle GERÇEK ve otomatik hesaplanır — web/print CSS'te mümkün
 * olmayan "Sayfa X / Y" burada native olarak çalışır.
 *
 * Not: Kapak sayfası (CoverPage) kasıtlı olarak bu shell'i KULLANMAZ —
 * kapak sayfasında header/footer/sayfa no. istenmiyor.
 */

const styles = StyleSheet.create({
  page: {
    paddingTop: pageTokens.paddingTop,
    paddingBottom: pageTokens.paddingBottom,
    paddingHorizontal: pageTokens.paddingHorizontal,
    fontFamily: typography.sans,
    color: colors.ink,
    backgroundColor: colors.white,
  },
  header: {
    position: 'absolute',
    top: 28,
    left: pageTokens.paddingHorizontal,
    right: pageTokens.paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.75,
    borderBottomColor: colors.divider,
    paddingBottom: 8,
  },
  headerBrand: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: 8.5,
    letterSpacing: 0.6,
    color: colors.navy,
  },
  headerSection: {
    fontFamily: typography.sans,
    fontSize: 8.5,
    letterSpacing: 0.4,
    color: colors.inkMuted,
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: pageTokens.paddingHorizontal,
    right: pageTokens.paddingHorizontal,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 0.75,
    borderTopColor: colors.divider,
    paddingTop: 8,
  },
  footerText: {
    fontSize: typography.micro,
    color: colors.faint,
  },
});

interface PageShellProps {
  sectionLabel: string;   // header sağında görünen bölüm adı, ör. "Genel Görünüm"
  cover: CoverInfo;
  countryName: string;
  children: React.ReactNode;
  /** Bazı bölümler (ör. tablo ağırlıklı) yatay taşmayı önlemek için wrap=false ister */
  wrap?: boolean;
}

export function PageShell({ sectionLabel, cover, countryName, children, wrap = true }: PageShellProps) {
  return (
    <Page size={pageTokens.size} style={styles.page} wrap={wrap}>
      <View style={styles.header} fixed>
        {/* "Furniture Atlas" İngilizce marka adı — trUpper (tr-TR) hatalı sonuç verir, düz metin kullanılır. */}
        <Text style={styles.headerBrand}>FURNITURE ATLAS</Text>
        <Text style={styles.headerSection}>{trUpper(`${countryName} · ${sectionLabel}`)}</Text>
      </View>

      {children}

      <View style={styles.footer} fixed>
        <Text style={styles.footerText}>Furniture Atlas | furnitureatlas.org</Text>
        <Text style={styles.footerText}>Hazırlanma: {cover.preparedDate} · Veri Dönemi: {cover.dataPeriod}</Text>
        <Text
          style={styles.footerText}
          render={({ pageNumber, totalPages }) => `Sayfa ${pageNumber} / ${totalPages}`}
        />
      </View>
    </Page>
  );
}
