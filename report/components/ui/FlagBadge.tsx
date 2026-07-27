import React from 'react';
import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors, typography } from '../../theme';

/**
 * FlagBadge — bayrak emojisi (🇹🇷 gibi) PDF'e gömülü fontlarda (Inter/Lora)
 * GÜVENİLİR ŞEKİLDE BASILAMAZ: bu emojiler iki "bölgesel gösterge" Unicode
 * karakterinin birleşiminden oluşur ve yalnızca özel renkli emoji fontlarıyla
 * (Noto Color Emoji vb.) doğru görüntülenir — bunlar PDF'e gömülemez.
 * Bu yüzden: gerçek bir bayrak görseli (imageUrl) varsa o kullanılır; yoksa
 * ISO kodunu gösteren temiz, markalı bir rozet gösterilir (ör. "DE").
 */

const styles = StyleSheet.create({
  image: { width: 28, height: 20, borderWidth: 0.5, borderColor: colors.divider },
  imageLarge: { width: 64, height: 44, borderWidth: 0.75, borderColor: colors.divider },
  badge: {
    backgroundColor: colors.navy, paddingVertical: 4, paddingHorizontal: 8, borderRadius: 2,
    alignItems: 'center', justifyContent: 'center',
  },
  badgeText: {
    fontFamily: typography.sansBold, fontWeight: 700, color: colors.white,
    fontSize: 9, letterSpacing: 0.5,
  },
  badgeTextLarge: { fontSize: 15 },
});

interface FlagBadgeProps {
  isoCode: string;
  imageUrl?: string;
  size?: 'normal' | 'large';
}

export function FlagBadge({ isoCode, imageUrl, size = 'normal' }: FlagBadgeProps) {
  if (imageUrl) {
    return <Image src={imageUrl} style={size === 'large' ? styles.imageLarge : styles.image} />;
  }
  return (
    <View style={styles.badge}>
      <Text style={[styles.badgeText, size === 'large' ? styles.badgeTextLarge : {}]}>{isoCode.toUpperCase()}</Text>
    </View>
  );
}
