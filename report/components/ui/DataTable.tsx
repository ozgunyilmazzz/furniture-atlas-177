import React from 'react';
import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, spacing, trUpper } from '../../theme';

const styles = StyleSheet.create({
  table: {
    marginBottom: spacing.lg,
  },
  headRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.navy,
    paddingBottom: 6,
    marginBottom: 2,
  },
  headCell: {
    fontFamily: typography.sansBold, fontWeight: 700,
    fontSize: typography.micro,
    color: colors.inkMuted,
    letterSpacing: 0.4,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.divider,
    paddingVertical: 7,
  },
  rowZebra: {
    backgroundColor: colors.panel,
  },
  cell: {
    fontFamily: typography.sans,
    fontSize: typography.body,
    color: colors.ink,
  },
  cellStrong: {
    fontFamily: typography.sansBold, fontWeight: 700,
    color: colors.navy,
  },
});

export interface DataTableColumn {
  key: string;
  label: string;
  width: string;       // "40%" gibi
  align?: 'left' | 'right';
}

interface DataTableProps {
  columns: DataTableColumn[];
  rows: Record<string, React.ReactNode>[];
  zebra?: boolean;
  /** İlk sütunu kalın/vurgulu göstermek için (ör. ülke/madde adı) */
  emphasizeFirstColumn?: boolean;
}

export function DataTable({ columns, rows, zebra = true, emphasizeFirstColumn = false }: DataTableProps) {
  return (
    <View style={styles.table} wrap={false}>
      <View style={styles.headRow}>
        {columns.map((col) => (
          <Text key={col.key} style={[styles.headCell, { width: col.width, textAlign: col.align || 'left' }]}>
            {trUpper(col.label)}
          </Text>
        ))}
      </View>
      {rows.map((row, i) => (
        <View key={i} style={[styles.row, zebra && i % 2 === 1 ? styles.rowZebra : {}]} wrap={false}>
          {columns.map((col, ci) => (
            <Text
              key={col.key}
              style={[
                styles.cell,
                { width: col.width, textAlign: col.align || 'left' },
                emphasizeFirstColumn && ci === 0 ? styles.cellStrong : {},
              ]}
            >
              {row[col.key]}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}
