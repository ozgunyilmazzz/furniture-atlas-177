import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, spacing } from '../../theme';

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.panel,
    borderRadius: 2,
    borderWidth: 0.75,
    borderColor: colors.divider,
    paddingVertical: 14,
    paddingHorizontal: 18,
    marginBottom: spacing.lg,
  },
  boxAlt: {
    // Son sayfa "Bilgilendirme" kutusu — istenen tam #F3F4F6 zemin
    backgroundColor: colors.panelAlt,
  },
  title: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: typography.h3,
    color: colors.navy,
    marginBottom: 6,
  },
  text: {
    fontFamily: typography.sans,
    fontSize: typography.small,
    lineHeight: 1.6,
    color: colors.ink,
  },
});

interface InfoBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'default' | 'alt';
  fullWidth?: boolean;
}

export function InfoBox({ title, children, variant = 'default' }: InfoBoxProps) {
  return (
    <View style={[styles.box, variant === 'alt' ? styles.boxAlt : {}]}>
      {title ? <Text style={styles.title}>{title}</Text> : null}
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
