import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { PageShell } from '../layout/PageShell';
import { SectionTitle } from '../ui/SectionTitle';
import { colors, typography, spacing } from '../../theme';
import type { CoverInfo } from '../../types';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingVertical: 11,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.divider,
  },
  num: {
    width: 30,
    fontFamily: typography.serifBold, fontWeight: 700,
    fontSize: 13,
    color: colors.gold,
  },
  title: {
    flex: 1,
    fontFamily: typography.sans,
    fontSize: 11.5,
    color: colors.navy,
  },
});

const TOC_ITEMS = [
  { num: '01', title: 'Pazara İlk Bakış' },
  { num: '02', title: 'Genel Görünüm' },
  { num: '03', title: 'İthalat Analizi' },
  { num: '04', title: "Türkiye'nin Performansı" },
  { num: '05', title: 'Başlıca Tedarikçi Ülkeler' },
  { num: '06', title: 'Vergiler ve Ticaret Bilgileri' },
  { num: '07', title: 'Lojistik' },
  { num: '08', title: 'Sonuç ve Genel Değerlendirme' },
];

export function TableOfContentsPage({ cover, countryName }: { cover: CoverInfo; countryName: string }) {
  return (
    <PageShell sectionLabel="İçindekiler" cover={cover} countryName={countryName}>
      <SectionTitle title="İçindekiler" />
      <View>
        {TOC_ITEMS.map((item) => (
          <View style={styles.row} key={item.num}>
            <Text style={styles.num}>{item.num}</Text>
            <Text style={styles.title}>{item.title}</Text>
          </View>
        ))}
      </View>
    </PageShell>
  );
}
