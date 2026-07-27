import React from 'react';
import { Page, View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, page as pageTokens, trUpper } from '../../theme';
import type { CoverInfo } from '../../types';
import { FlagBadge } from '../ui/FlagBadge';

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    paddingHorizontal: pageTokens.paddingHorizontal,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImg: { width: 34, height: 34, marginBottom: 8 },
  wordmark: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: 15,
    letterSpacing: 1,
    color: colors.navy,
    marginBottom: 90,
  },
  wordmarkAccent: { color: colors.gold },
  countryName: {
    fontFamily: typography.serif,
    fontSize: 36,
    color: colors.navy,
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: 13,
    letterSpacing: 3,
    color: colors.gold,
    marginBottom: 120,
  },
  url: {
    fontFamily: typography.sans,
    fontSize: 10,
    letterSpacing: 0.5,
    color: colors.faint,
    marginBottom: 30,
  },
  infoBox: {
    flexDirection: 'row',
    borderWidth: 0.75,
    borderColor: colors.divider,
    borderRadius: 2,
    paddingVertical: 16,
    paddingHorizontal: 30,
  },
  infoItem: { marginHorizontal: 18, alignItems: 'flex-start' },
  infoLabel: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: typography.micro,
    color: colors.faint,
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  infoValue: {
    fontFamily: typography.serif,
    fontSize: 12,
    color: colors.navy,
  },
});

interface CoverPageProps {
  countryName: string;
  flagImageUrl?: string;
  isoCode: string;
  cover: CoverInfo;
  /** Base64 data-URI logo — sağlanmazsa metin amblem (wordmark) kullanılır. */
  logoSrc?: string;
}

export function CoverPage({ countryName, flagImageUrl, isoCode, cover, logoSrc }: CoverPageProps) {
  return (
    <Page size={pageTokens.size} style={styles.page}>
      {logoSrc ? (
        <Image src={logoSrc} style={styles.logoImg} />
      ) : null}
      <Text style={styles.wordmark}>
        {/* "Furniture Atlas" İngilizce marka adı — trUpper (tr-TR) burada YANLIŞ olur
            ("FURNİTURE" gibi hatalı noktalı İ üretir). Marka adı için düz metin kullanılır. */}
        FURNITURE<Text style={styles.wordmarkAccent}>ATLAS</Text>
      </Text>

      <View style={{ marginBottom: 22 }}>
        <FlagBadge isoCode={isoCode} imageUrl={flagImageUrl} size="large" />
      </View>
      <Text style={styles.countryName}>{countryName}</Text>
      <Text style={styles.subtitle}>{trUpper('Mobilya Pazarı Raporu')}</Text>
      <Text style={styles.url}>furnitureatlas.org</Text>

      <View style={styles.infoBox}>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>{trUpper('Hazırlanma Tarihi')}</Text>
          <Text style={styles.infoValue}>{cover.preparedDate}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>{trUpper('Veri Dönemi')}</Text>
          <Text style={styles.infoValue}>{cover.dataPeriod}</Text>
        </View>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>{trUpper('Kaynak')}</Text>
          <Text style={styles.infoValue}>{cover.source}</Text>
        </View>
      </View>
    </Page>
  );
}
