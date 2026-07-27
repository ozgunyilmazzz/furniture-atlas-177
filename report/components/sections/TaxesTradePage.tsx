import React from 'react';
import { StyleSheet, Text } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { KPICardGrid } from '../ui/KPICard';
import { DataTable } from '../ui/DataTable';
import { colors, typography, spacing, trUpper } from '../../theme';
import type { CoverInfo, TaxesAndTrade } from '../../types';

const styles = StyleSheet.create({
  subheading: {
    fontFamily: typography.sansBold, fontWeight: 700, fontSize: typography.h3, color: colors.navy, letterSpacing: 0.4, marginBottom: spacing.sm, marginTop: spacing.md,
  },
});

export function TaxesTradePage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: TaxesAndTrade }) {
  return (
    <PageShell sectionLabel="Vergiler ve Ticaret Bilgileri" cover={cover} countryName={countryName}>
      <SectionTitle number="06" title="Vergiler ve Ticaret Bilgileri" />

      <KPICardGrid
        items={[
          { label: 'İthalat Vergisi', value: data.importTax.value ?? 'Bilinmiyor', tier: data.importTax.tier },
          { label: 'KDV', value: data.vat.value ?? 'Bilinmiyor', tier: data.vat.tier },
          { label: 'Gümrük Zorluğu', value: data.customsDifficultyLabel },
        ]}
      />

      <Text style={styles.subheading}>{trUpper('Gerekli Sertifikasyon')}</Text>
      <DataTable
        columns={[
          { key: 'name', label: 'Sertifika', width: '35%' },
          { key: 'note', label: 'Açıklama', width: '65%' },
        ]}
        emphasizeFirstColumn
        rows={data.requiredCertifications.map((cert) => ({ name: cert.name, note: cert.note }))}
      />

      <Text style={styles.subheading}>{trUpper('Gerekli İhracat Evrakları')}</Text>
      <DataTable
        columns={[
          { key: 'name', label: 'Evrak', width: '35%' },
          { key: 'note', label: 'Açıklama', width: '65%' },
        ]}
        emphasizeFirstColumn
        rows={data.requiredDocuments.map((doc) => ({ name: doc.name, note: doc.note }))}
      />
    </PageShell>
  );
}
