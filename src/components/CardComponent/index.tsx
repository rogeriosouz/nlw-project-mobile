import { Text, TouchableOpacity, View } from 'react-native';
import { TextComponentCard } from '../TextComponentCard';

import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';

type CardComponentProps = {
  name: string;
  yearsPlay: string;
  hoursStart: string;
  hoursEnd: string;
  weakDays: string;
  audioIsActive: 'Sim' | 'Náo';

  onPressButtom: any;
};

export function CardComponent({
  hoursEnd,
  hoursStart,
  name,
  yearsPlay,
  weakDays,
  audioIsActive,
  onPressButtom,
}: CardComponentProps) {
  return (
    <View style={styles.container}>
      <TextComponentCard isVoice={false} title="Nome" contnet={name} />
      <TextComponentCard
        isVoice={false}
        title="Tempo de jogo"
        contnet={`${yearsPlay} anos`}
      />

      <TextComponentCard
        isVoice={false}
        title="Disponibilidade"
        contnet={`${weakDays} dias . ${hoursStart.slice(
          0,
          2
        )}H - ${hoursEnd.slice(0, 2)}H`}
      />

      <TextComponentCard
        isVoice
        isVoiceConect={audioIsActive === 'Sim' ? true : false}
        title="Chamada de audio?"
        contnet={audioIsActive}
      />

      <TouchableOpacity onPress={onPressButtom} style={styles.button}>
        <Ionicons
          style={styles.iconButton}
          name="md-game-controller-outline"
          size={20}
          color="#fff"
        />
        <Text style={styles.textButton}>Conectar</Text>
      </TouchableOpacity>
    </View>
  );
}
