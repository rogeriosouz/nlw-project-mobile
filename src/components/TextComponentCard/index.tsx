import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

type TextComponentCardProps = {
  title: string;
  contnet: string;
  isVoice: boolean;
  isVoiceConect?: boolean;
};

export function TextComponentCard({
  contnet,
  title,
  isVoice,
  isVoiceConect,
}: TextComponentCardProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.tiltle}>{title}</Text>

      {isVoice ? (
        <>
          {isVoiceConect ? (
            <Text numberOfLines={1} style={styles.noConect}>
              {contnet}
            </Text>
          ) : (
            <Text numberOfLines={1} style={styles.conect}>
              {contnet}
            </Text>
          )}
        </>
      ) : (
        <Text numberOfLines={1} style={styles.content}>
          {contnet}
        </Text>
      )}
    </View>
  );
}
