import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { KPICardGrid } from '../ui/KPICard';
import { colors, typography } from '../../theme';
import type { CoverInfo, GeneralOverview } from '../../types';

const styles = StyleSheet.create({
  footnote: { fontFamily: typography.sans, fontSize: typography.small, color: colors.faint, lineHeight: 1.6 },
});

export function GeneralOverviewPage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: GeneralOverview }) {
  const items = [
    { label: 'Nüfus', value: data.population.value ?? 'Bilinmiyor', tier: data.population.tier },
    { label: 'GSYH', value: data.gdp.value ?? 'Bilinmiyor', tier: data.gdp.tier },
    { label: 'Kişi Başı GSYH', value: data.gdpPerCapita.value ?? 'Bilinmiyor', tier: data.gdpPerCapita.tier },
    { label: 'Para Birimi', value: data.currency ?? 'Bilinmiyor' },
    { label: 'Ekonomik Büyüme', value: data.economicGrowthPct.value !== null ? `%${data.economicGrowthPct.value}` : 'Bilinmiyor', tier: data.economicGrowthPct.tier },
    { label: 'Enflasyon', value: data.inflationPct.value !== null ? `%${data.inflationPct.value}` : 'Bilinmiyor', tier: data.inflationPct.tier },
  ];

  return (
    <PageShell sectionLabel="Genel Görünüm" cover={cover} countryName={countryName}>
      <SectionTitle number="02" title="Genel Görünüm" />
      <KPICardGrid items={items} />
      <Text style={styles.footnote}>
        Nüfus ve GSYH rakamları en güncel yıllık tahminlere; enflasyon verisi bir önceki takvim yılına aittir.
        Etiketsiz alanlar (ör. Para Birimi) doğası gereği sabit veridir.
      </Text>
    </PageShell>
  );
}
