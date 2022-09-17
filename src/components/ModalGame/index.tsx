import React from 'react';
import {
  Alert,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { AntDesign, Feather } from '@expo/vector-icons';
import { styles } from './styles';

import * as Clipborad from 'expo-clipboard';

interface ModalGameProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function ModalGame({ discord, onClose, ...rest }: ModalGameProps) {
  async function handleCopyDiscord() {
    await Clipborad.setStringAsync(discord);
    Alert.alert('Discord copiado', 'Usuario copiado');
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.containerIcon}>
            <AntDesign name="checkcircleo" size={48} color="#34D399" />
          </View>

          <Text style={styles.title}>Let’s play!</Text>
          <Text style={styles.subTitle}>Agora é só começar a jogar!</Text>

          <Text style={styles.titleBox}>Adicione no Discord</Text>
          <View style={styles.box}>
            <Text onPress={handleCopyDiscord} style={styles.textBox}>
              {discord}
            </Text>
          </View>

          <TouchableOpacity style={styles.iconClose} onPress={onClose}>
            <Feather name="x" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
