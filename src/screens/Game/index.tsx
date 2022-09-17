import { SafeAreaView } from 'react-native-safe-area-context';

import { Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, Image, TouchableOpacity, View } from 'react-native';
import { GameParams } from '../../@types/navigation';
import LogoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../components/Background';
import { CardComponent } from '../../components/CardComponent';
import { Heading } from '../../components/Heading';
import { ModalGame } from '../../components/ModalGame';
import { styles } from './styles';

type adsGameType = {
  hourEnd: string;
  id: string;
  hoursStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: [string];
  yearsPlaying: number;
};

export function Game() {
  const [adsGame, setAdsGame] = useState<adsGameType[]>([]);

  const [discordDuoSelectd, setDiscordDuoSelectd] = useState('');

  const navigate = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  useEffect(() => {
    fetch(`http://192.168.1.5:3000/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setAdsGame(data.data));
  }, []);

  function activeModal(idAds: string) {
    fetch(`http://192.168.1.5:3000/ads/${idAds}/discord`)
      .then((response) => response.json())
      .then((data) => setDiscordDuoSelectd(data.discord));
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Entypo
              style={styles.buttonLeft}
              name="chevron-thin-left"
              size={20}
              color={'#fff'}
            />
          </TouchableOpacity>

          <Image style={styles.logo} source={LogoImg} />
          <View style={styles.right}></View>
        </View>

        <Image style={styles.banner} source={{ uri: game.bannerUrl }} />

        <Heading
          title={game?.title}
          subtitle={'Conecte-se e comece a jogar!'}
        />

        <FlatList
          data={adsGame}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardComponent
              audioIsActive={item.useVoiceChannel ? 'Sim' : 'Náo'}
              hoursEnd={item.hoursStart}
              hoursStart={item.hourEnd}
              name={item.name}
              onPressButtom={() => activeModal(item.id)}
              weakDays={String(item.weekDays.length)}
              yearsPlay={String(item.yearsPlaying)}
            />
          )}
          style={styles.containerList}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />

        <ModalGame
          onClose={() => setDiscordDuoSelectd('')}
          visible={discordDuoSelectd.length > 0}
          discord={discordDuoSelectd}
        />
      </SafeAreaView>
    </Background>
  );
}
