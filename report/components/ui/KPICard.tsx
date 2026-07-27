import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, spacing, trUpper, type DataQualityTier } from '../../theme';
import { DataQualityTag } from './DataQualityTag';

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -spacing.sm / 2,
    marginBottom: spacing.lg,
  },
  card: {
    width: '50%',
    paddingHorizontal: spacing.sm / 2,
    marginBottom: spacing.md,
  },
  cardInner: {
    backgroundColor: colors.panel,
    borderRadius: 2,
    borderWidth: 0.75,
    borderColor: colors.divider,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  label: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: typography.small,
    color: colors.inkMuted,
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  value: {
    fontFamily: typography.serif,
    fontSize: 20,
    color: colors.navy,
  },
});

export interface KPICardItem {
  label: string;
  value: string;
  tier?: DataQualityTier;
}

/** "Büyük KPI kartları" — Genel Görünüm bölümünde 2 sütunlu geniş nefes alan kartlar. */
export function KPICardGrid({ items }: { items: KPICardItem[] }) {
  return (
    <View style={styles.grid}>
      {items.map((item, i) => (
        <View style={styles.card} key={i}>
          <View style={styles.cardInner}>
            <Text style={styles.label}>
              {trUpper(item.label)}
              {item.tier ? <DataQualityTag tier={item.tier} /> : null}
            </Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
