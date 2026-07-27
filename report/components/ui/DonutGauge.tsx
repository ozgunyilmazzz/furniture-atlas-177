import React from 'react';
import { View, Text, Svg, Circle, StyleSheet } from '@react-pdf/renderer';
import { colors, typography, trUpper } from '../../theme';

const styles = StyleSheet.create({
  box: { alignItems: 'center' },
  valueOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' },
  valueText: { fontFamily: typography.serifBold, fontWeight: 700, color: colors.navy },
  captionLabel: {
    fontFamily: typography.sansBold, fontWeight: 700, fontSize: typography.small, color: colors.inkMuted, letterSpacing: 0.4, marginTop: 8, textAlign: 'center',
  },
});

function scoreToColor(score: number): string {
  if (score >= 80) return colors.positive;
  if (score >= 55) return colors.warning;
  return colors.inkMuted;
}

interface DonutGaugeProps {
  score: number;      // 0-100
  label: string;
  size?: number;
}

/** Fırsat skoru / alt skorlar için vektörel dairesel gösterge (SVG — bulanıklaşmaz). */
export function DonutGauge({ score, label, size = 78 }: DonutGaugeProps) {
  const strokeWidth = 7;
  const r = size / 2 - strokeWidth;
  const cx = size / 2;
  const cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const clampedScore = Math.max(0, Math.min(100, score));
  const arcLength = circumference * clampedScore / 100;
  const col = scoreToColor(score);

  return (
    <View style={styles.box}>
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <Circle cx={cx} cy={cy} r={r} stroke={colors.divider} strokeWidth={strokeWidth} fill="none" />
          {clampedScore > 0 ? (
            <Circle
              cx={cx} cy={cy} r={r}
              stroke={col} strokeWidth={strokeWidth} fill="none"
              strokeDasharray={`${arcLength} ${circumference}`}
              strokeLinecap="round"
              transform={`rotate(-90 ${cx} ${cy})`}
            />
          ) : null}
        </Svg>
        <View style={styles.valueOverlay}>
          <Text style={[styles.valueText, { fontSize: size * 0.24 }]}>{score}</Text>
        </View>
      </View>
      <Text style={styles.captionLabel}>{trUpper(label)}</Text>
    </View>
  );
}
