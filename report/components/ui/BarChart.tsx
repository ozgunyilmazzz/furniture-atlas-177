import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, spacing } from '../../theme';

const styles = StyleSheet.create({
  wrap: { marginBottom: spacing.lg },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  label: { width: 120, fontSize: typography.small, color: colors.ink, fontFamily: typography.sans },
  trackWrap: { flex: 1, height: 14, backgroundColor: colors.panel, borderRadius: 1, overflow: 'hidden' },
  fill: { height: '100%' },
  value: { width: 46, textAlign: 'right', fontSize: typography.small, fontFamily: typography.sansBold, fontWeight: 700, color: colors.navy },
});

export interface BarChartDatum {
  label: string;
  value: number;      // 0-100 ölçeğinde beklenir (yüzde barları için doğal)
  color?: string;
  displayValue?: string; // "%42" gibi — verilmezse value+'%' kullanılır
}

/**
 * Tam genişlikte yatay çubuk grafik. PDF vektör tabanlı olduğu için bu barlar
 * her çözünürlükte (ekran / yazıcı) piksel kaybı olmadan net görünür —
 * "yüksek çözünürlüklü grafik" gereksinimi View tabanlı dolgularla karşılanır.
 */
export function BarChart({ data }: { data: BarChartDatum[] }) {
  return (
    <View style={styles.wrap}>
      {data.map((d, i) => (
        <View style={styles.row} key={i} wrap={false}>
          <Text style={styles.label}>{d.label}</Text>
          <View style={styles.trackWrap}>
            <View style={[styles.fill, { width: `${Math.max(0, Math.min(100, d.value))}%`, backgroundColor: d.color || colors.navy }]} />
          </View>
          <Text style={styles.value}>{d.displayValue ?? `%${d.value}`}</Text>
        </View>
      ))}
    </View>
  );
}
