import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing } from '../../theme';

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 0.75,
    borderBottomColor: colors.divider,
    marginVertical: spacing.lg,
  },
});

export function Divider() {
  return <View style={styles.line} />;
}
