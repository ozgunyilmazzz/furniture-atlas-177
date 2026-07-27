import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { KPICardGrid } from '../ui/KPICard';
import { colors, typography } from '../../theme';
import type { CoverInfo, Logistics } from '../../types';

const styles = StyleSheet.create({
  modeLabel: { fontFamily: typography.sans, fontSize: 11, color: colors.ink, marginBottom: 10 },
  modeStrong: { fontFamily: typography.sansBold, fontWeight: 700, color: colors.navy },
  footnote: { fontFamily: typography.sans, fontSize: typography.small, color: colors.faint, lineHeight: 1.6, marginTop: 4 },
});

export function LogisticsPage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: Logistics }) {
  const modeLabel = data.transportMode === 'road' ? 'Karayolu (TIR)' : 'Deniz Yolu (Konteyner)';
  return (
    <PageShell sectionLabel="Lojistik" cover={cover} countryName={countryName}>
      <SectionTitle number="07" title="Lojistik" />
      <Text style={styles.modeLabel}>Taşıma Yöntemi: <Text style={styles.modeStrong}>{modeLabel}</Text></Text>

      <KPICardGrid
        items={[
          { label: data.transportMode === 'road' ? 'Ana Kara Sınır Kapısı' : 'Ana Liman', value: data.mainGateOrPort ?? 'Bilinmiyor' },
          { label: 'Nakliye Süresi', value: data.transitTime.value ?? 'Bilinmiyor', tier: data.transitTime.tier },
          {
            label: data.transportMode === 'road' ? 'Ort. TIR Maliyeti' : 'Ort. Konteyner Maliyeti',
            value: data.freightCost.value ?? 'Bilinmiyor',
            tier: data.freightCost.tier,
          },
        ]}
      />
      <Text style={styles.footnote}>
        Maliyet ve süre, İstanbul&apos;a olan mesafeye dayalı bir formülle hesaplanmıştır — gerçek navlun teklifi
        değildir. Kesin fiyat için bir lojistik firmasından teklif alınması tavsiye edilir.
      </Text>
    </PageShell>
  );
}
