import React from 'react';
import { View, Text, Svg, Path, StyleSheet } from '@react-pdf/renderer';
import { colors, typography } from '../../theme';

const styles = StyleSheet.create({
  frame: {
    width: 190, height: 150,
    borderWidth: 0.75, borderColor: colors.divider, borderRadius: 2,
    backgroundColor: colors.panel,
    alignItems: 'center', justifyContent: 'center',
  },
  placeholderIso: {
    fontFamily: typography.serifBold, fontWeight: 700, fontSize: 22, color: colors.dividerStrong, marginBottom: 6,
  },
  placeholderLabel: {
    fontFamily: typography.sans, fontSize: typography.micro, color: colors.faint, letterSpacing: 0.4, textAlign: 'center', paddingHorizontal: 12,
  },
});

interface CountryMapProps {
  pathD?: string;         // gerçek ülke sınır verisi (henüz JSON şemasında yok — bkz. types.ts notu)
  isoCode: string;
  countryName: string;
}

/**
 * Ülke haritası. `pathD` verilirse gerçek sınır çizimi vektörel olarak basılır.
 * Şu an (Faz 1 — mimari/tasarım aşaması) gerçek coğrafi veri bu JSON şemasının
 * parçası değil, bu yüzden temiz/etiketli bir yer tutucu gösterilir. Faz 2'de
 * gerçek veri bağlandığında bu component DEĞİŞMEDEN kalır — sadece pathD dolar.
 */
export function CountryMap({ pathD, isoCode, countryName }: CountryMapProps) {
  if (pathD) {
    return (
      <View style={styles.frame}>
        <Svg width={190} height={150} viewBox="0 0 220 170">
          <Path d={pathD} fill="#E7E9EE" stroke={colors.navy} strokeWidth={1} />
        </Svg>
      </View>
    );
  }
  return (
    <View style={styles.frame}>
      <Text style={styles.placeholderIso}>{isoCode.toUpperCase()}</Text>
      <Text style={styles.placeholderLabel}>{countryName}{'\n'}harita — Faz 2&apos;de bağlanacak</Text>
    </View>
  );
}
