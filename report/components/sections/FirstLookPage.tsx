import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { CountryMap } from '../ui/CountryMap';
import { FlagBadge } from '../ui/FlagBadge';
import { Divider } from '../ui/Divider';
import { colors, typography, spacing, trUpper } from '../../theme';
import type { CoverInfo, FirstLook } from '../../types';

const styles = StyleSheet.create({
  topRow: { flexDirection: 'row', marginBottom: spacing.xl },
  facts: { flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginLeft: spacing.xl },
  fact: { width: '50%', marginBottom: spacing.lg },
  factLabel: {
    fontFamily: typography.sansBold, fontWeight: 700, fontSize: typography.small, color: colors.inkMuted, letterSpacing: 0.5, marginBottom: 4,
  },
  factValue: { fontFamily: typography.serif, fontSize: 13, color: colors.navy },
  summary: { fontFamily: typography.sans, fontSize: 11, lineHeight: 1.8, color: colors.ink },
});

interface FirstLookPageProps {
  cover: CoverInfo;
  countryName: string;
  isoCode: string;
  flagImageUrl?: string;
  data: FirstLook;
}

export function FirstLookPage({ cover, countryName, isoCode, flagImageUrl, data }: FirstLookPageProps) {
  return (
    <PageShell sectionLabel="Pazara İlk Bakış" cover={cover} countryName={countryName}>
      <SectionTitle number="01" title="Pazara İlk Bakış" />

      <View style={styles.topRow}>
        <CountryMap pathD={data.mapSvgPathD} isoCode={isoCode} countryName={countryName} />
        <View style={styles.facts}>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Bayrak')}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FlagBadge isoCode={isoCode} imageUrl={flagImageUrl} />
              <Text style={[styles.factValue, { marginLeft: 8 }]}>{countryName}</Text>
            </View>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Başkent')}</Text>
            <Text style={styles.factValue}>{data.capital ?? 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Nüfus')}</Text>
            <Text style={styles.factValue}>{data.population.value ?? 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Para Birimi')}</Text>
            <Text style={styles.factValue}>{data.currency ?? 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Resmi Dil')}</Text>
            <Text style={styles.factValue}>{data.officialLanguage ?? 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper("Saat Farkı (TR'ye göre)")}</Text>
            <Text style={styles.factValue}>{data.timeDifference ?? 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper("Türkiye'ye Uzaklık")}</Text>
            <Text style={styles.factValue}>{data.distanceToTurkeyKm ? `~${data.distanceToTurkeyKm.toLocaleString('tr-TR')} km` : 'Bilinmiyor'}</Text>
          </View>
          <View style={styles.fact}>
            <Text style={styles.factLabel}>{trUpper('Ort. Uçuş Süresi')}</Text>
            <Text style={styles.factValue}>{data.avgFlightDuration ?? 'Bilinmiyor'}</Text>
          </View>
        </View>
      </View>

      <Divider />
      <Text style={styles.summary}>{data.summary}</Text>
    </PageShell>
  );
}
