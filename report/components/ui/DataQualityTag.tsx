import React from 'react';
import { Text, StyleSheet } from '@react-pdf/renderer';
import { dqColor, dqLabel, typography, type DataQualityTier } from '../../theme';

const styles = StyleSheet.create({
  tag: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: 6.5,
    letterSpacing: 0.4,
  },
});

/** Her metriğin yanına eklenebilecek küçük "DOĞRULANMIŞ / TAHMİNİ / BİLİNMİYOR" etiketi. */
export function DataQualityTag({ tier }: { tier: DataQualityTier }) {
  return <Text style={[styles.tag, { color: dqColor(tier) }]}> {dqLabel(tier)}</Text>;
}
