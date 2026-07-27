import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { KPICardGrid } from '../ui/KPICard';
import { Divider } from '../ui/Divider';
import { colors, typography, spacing, trUpper } from '../../theme';
import type { CoverInfo, ImportAnalysis } from '../../types';

const styles = StyleSheet.create({
  catBadge: {
    fontFamily: typography.sansBold, fontWeight: 700, fontSize: typography.small, color: colors.gold, letterSpacing: 0.6, marginBottom: spacing.lg,
  },
  narrative: { fontFamily: typography.sans, fontSize: 11, lineHeight: 1.8, color: colors.ink, marginBottom: spacing.lg },
  footnote: { fontFamily: typography.sans, fontSize: typography.small, color: colors.faint, lineHeight: 1.6 },
});

export function ImportAnalysisPage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: ImportAnalysis }) {
  const growthUnknown = data.annualImportGrowthPct.value === null;
  return (
    <PageShell sectionLabel="İthalat Analizi" cover={cover} countryName={countryName}>
      <SectionTitle number="03" title="İthalat Analizi" />
      <Text style={styles.catBadge}>{trUpper(`${data.categoryLabel} · ${data.hsCode}`)}</Text>

      <KPICardGrid
        items={[
          { label: 'Toplam İthalat', value: data.totalImports.value ?? 'Bilinmiyor', tier: data.totalImports.tier },
          { label: 'Pazar Büyüklüğü', value: data.marketSize.value ?? 'Bilinmiyor', tier: data.marketSize.tier },
          {
            label: 'Yıllık İthalat Büyümesi',
            value: growthUnknown ? 'Bilinmiyor' : `%${data.annualImportGrowthPct.value}`,
            tier: data.annualImportGrowthPct.tier,
          },
        ]}
      />

      <Divider />
      <Text style={styles.narrative}>{data.narrative}</Text>
      <Text style={styles.footnote}>
        Pazar büyüklüğü ve toplam ithalat büyüme oranı, ilgili ülke için henüz tek ve kapsamlı bir ücretsiz
        resmi kaynak bulunamadığından model tahminidir.
      </Text>
    </PageShell>
  );
}
