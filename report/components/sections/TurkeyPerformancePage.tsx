import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { KPICardGrid } from '../ui/KPICard';
import { Divider } from '../ui/Divider';
import { colors, typography, spacing } from '../../theme';
import type { CoverInfo, TurkeyPerformance } from '../../types';

const styles = StyleSheet.create({
  narrative: { fontFamily: typography.sans, fontSize: 11, lineHeight: 1.8, color: colors.ink, marginBottom: spacing.md },
  rankBox: {
    flexDirection: 'row', alignItems: 'baseline', backgroundColor: colors.panel,
    borderWidth: 0.75, borderColor: colors.divider, borderRadius: 2,
    paddingVertical: 14, paddingHorizontal: 18, marginBottom: spacing.lg,
  },
  rankNum: { fontFamily: typography.serifBold, fontWeight: 700, fontSize: 22, color: colors.navy, marginRight: 10 },
  rankLabel: { fontFamily: typography.sans, fontSize: typography.body, color: colors.inkMuted },
});

export function TurkeyPerformancePage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: TurkeyPerformance }) {
  return (
    <PageShell sectionLabel="Türkiye'nin Performansı" cover={cover} countryName={countryName}>
      <SectionTitle number="04" title="Türkiye'nin Performansı" />

      <KPICardGrid
        items={[
          { label: 'Türkiye’den İhracat', value: data.exportValue.value ?? 'Bilinmiyor', tier: data.exportValue.tier },
          { label: 'Türkiye Pazar Payı', value: data.marketSharePct.value !== null ? `%${data.marketSharePct.value}` : 'Bilinmiyor', tier: data.marketSharePct.tier },
          { label: '2024→2025 Büyüme', value: data.yoyGrowthPct.value !== null ? `${data.yoyGrowthPct.value >= 0 ? '+' : ''}${data.yoyGrowthPct.value}%` : 'Bilinmiyor', tier: data.yoyGrowthPct.tier },
        ]}
      />

      {data.rankAmongSuppliers ? (
        <View style={styles.rankBox}>
          <Text style={styles.rankNum}>{data.rankAmongSuppliers.rank}. sıra</Text>
          <Text style={styles.rankLabel}>{data.rankAmongSuppliers.totalSuppliers} tedarikçi ülke arasında</Text>
        </View>
      ) : null}

      <Divider />
      <Text style={styles.narrative}>{data.narrative}</Text>
    </PageShell>
  );
}
