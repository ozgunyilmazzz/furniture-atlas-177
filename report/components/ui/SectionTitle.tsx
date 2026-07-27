import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, spacing } from '../../theme';

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'baseline',
    borderBottomWidth: 1.5,
    borderBottomColor: colors.navy,
    paddingBottom: spacing.sm,
    marginBottom: spacing.lg,
  },
  num: {
    fontFamily: typography.serifBold, fontWeight: 700,
    fontSize: typography.h2,
    color: colors.gold,
    marginRight: 10,
  },
  title: {
    fontFamily: typography.serifBold, fontWeight: 700,
    fontSize: typography.h2,
    color: colors.navy,
  },
});

interface SectionTitleProps {
  number?: string;   // "04" gibi — kapak/içindekiler bölümlerinde boş bırakılır
  title: string;
}

export function SectionTitle({ number, title }: SectionTitleProps) {
  return (
    <View style={styles.wrap}>
      {number ? <Text style={styles.num}>{number}</Text> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
