import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { DonutGauge } from '../ui/DonutGauge';
import { BarChart } from '../ui/BarChart';
import { InfoBox } from '../ui/InfoBox';
import { Divider } from '../ui/Divider';
import { colors, typography, spacing, trUpper } from '../../theme';
import type { CoverInfo, ConclusionData } from '../../types';

const styles = StyleSheet.create({
  gaugeRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: spacing.xl },
  recoBox: {
    flexDirection: 'row', alignItems: 'center', marginBottom: spacing.lg,
    backgroundColor: colors.panel, borderWidth: 0.75, borderColor: colors.divider, borderRadius: 2,
    paddingVertical: 14, paddingHorizontal: 18,
  },
  recoLabel: { fontFamily: typography.serifBold, fontWeight: 700, fontSize: 15, color: colors.navy, marginRight: 14 },
  recoMeta: { fontFamily: typography.sans, fontSize: typography.small, color: colors.inkMuted },
  subheading: {
    fontFamily: typography.sansBold, fontWeight: 700, fontSize: typography.h3, color: colors.navy, letterSpacing: 0.4, marginBottom: spacing.sm, marginTop: spacing.md,
  },
  bulletRow: { flexDirection: 'row', marginBottom: 8 },
  bulletDash: { fontFamily: typography.sansBold, fontWeight: 700, color: colors.gold, marginRight: 6, fontSize: typography.body },
  bulletText: { flex: 1, fontFamily: typography.sans, fontSize: typography.body, lineHeight: 1.6, color: colors.ink },
  bulletTitle: { fontFamily: typography.sansBold, fontWeight: 700, color: colors.navy },
  copyright: {
    fontFamily: typography.sans, fontSize: typography.micro, color: colors.faint,
    textAlign: 'center', marginTop: spacing.lg,
  },
});

const FINAL_DISCLAIMER =
  'Bu rapor yalnızca bilgilendirme amacıyla hazırlanmıştır. Raporda yer alan veriler güvenilir uluslararası veri ' +
  'kaynaklarından derlenmiş olup düzenli olarak güncellenmektedir. Furniture Atlas, verilerin doğruluğu için azami ' +
  'özen göstermektedir; ancak ticari kararlar alınmadan önce resmi kurumlar ve ilgili otoritelerden doğrulama ' +
  'yapılması tavsiye edilir.';

export function ConclusionPage({ cover, countryName, data }: { cover: CoverInfo; countryName: string; data: ConclusionData }) {
  return (
    <PageShell sectionLabel="Sonuç ve Genel Değerlendirme" cover={cover} countryName={countryName}>
      <SectionTitle number="08" title="Sonuç ve Genel Değerlendirme" />

      <View style={styles.gaugeRow}>
        <DonutGauge score={data.overallScore} label="Genel Fırsat" />
        <DonutGauge score={data.entryDifficultyScore} label="Giriş Zorluğu" />
      </View>

      <View style={styles.recoBox}>
        <Text style={styles.recoLabel}>{data.recommendationLabel}</Text>
        <Text style={styles.recoMeta}>
          Pazar Potansiyeli: {data.marketPotentialLabel} · Rekabet Seviyesi: {data.competitionLabel}
        </Text>
      </View>

      <Text style={styles.subheading}>{trUpper('Öne Çıkan Fırsatlar')}</Text>
      {data.opportunities.map((o, i) => (
        <View style={styles.bulletRow} key={i} wrap={false}>
          <Text style={styles.bulletDash}>—</Text>
          <Text style={styles.bulletText}>
            <Text style={styles.bulletTitle}>{o.title}: </Text>
            {o.description}
          </Text>
        </View>
      ))}

      <Text style={styles.subheading}>{trUpper('Risk Değerlendirmesi')}</Text>
      <BarChart
        data={data.risks.map((r) => ({
          label: r.label,
          value: r.score,
          displayValue: `${r.score}/100`,
          color: r.score >= 60 ? colors.negative : r.score >= 35 ? colors.warning : colors.positive,
        }))}
      />

      <Divider />
      <InfoBox title="Bilgilendirme" variant="alt">
        {FINAL_DISCLAIMER}
      </InfoBox>
      <Text style={styles.copyright}>© Furniture Atlas{'\n'}www.furnitureatlas.org</Text>
    </PageShell>
  );
}
