import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { BarChart } from '../ui/BarChart';
import { InfoBox } from '../ui/InfoBox';
import { colors, typography } from '../../theme';
import type { CoverInfo, TopSuppliers } from '../../types';

const styles = StyleSheet.create({
  footnote: { fontFamily: typography.sans, fontSize: typography.small, color: colors.faint, lineHeight: 1.6, marginTop: 4 },
});

export function TopSuppliersPage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: TopSuppliers }) {
  if (data.tier === 'unknown' || data.shares.length === 0) {
    return (
      <PageShell sectionLabel="Başlıca Tedarikçi Ülkeler" cover={cover} countryName={countryName}>
        <SectionTitle number="05" title="Başlıca Tedarikçi Ülkeler" />
        <InfoBox title="Bilinmiyor">
          Bu ülke için doğrulanmış veya gözden geçirilmiş tahmini bir tedarikçi ülke verisi bulunmuyor.
        </InfoBox>
      </PageShell>
    );
  }

  return (
    <PageShell sectionLabel="Başlıca Tedarikçi Ülkeler" cover={cover} countryName={countryName}>
      <SectionTitle number="05" title="Başlıca Tedarikçi Ülkeler" />
      <BarChart
        data={data.shares.map((s) => ({
          label: s.isTurkey ? 'Türkiye' : s.country,
          value: s.sharePct,
          color: s.isTurkey ? colors.navy : colors.goldMuted,
        }))}
      />
      {data.dataYearNote ? <Text style={styles.footnote}>{data.dataYearNote}</Text> : null}
    </PageShell>
  );
}
