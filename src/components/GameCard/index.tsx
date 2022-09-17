import { LinearGradient } from 'expo-linear-gradient';
import {
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardProps {
  _count: {
    Ad: number;
  };
  bannerUrl: string;
  id: string;
  title: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
  onPressCard: any;
}

export function GameCard({ data, onPressCard, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPressCard}>
      <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.Ad} anúcios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
