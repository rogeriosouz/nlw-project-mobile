import { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import LogoImg from '../../assets/logo-nlw-esports.png';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';

import { useNavigation } from '@react-navigation/native';
import { Background } from '../../components/Background';
import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigate = useNavigation();

  useEffect(() => {
    fetch('http://192.168.1.5:3000/games')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  function navigateGame({ id, bannerUrl, title }: GameCardProps) {
    navigate.navigate('game', { id, bannerUrl, title });
  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={LogoImg} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard
              data={{
                _count: item._count,
                bannerUrl: item.bannerUrl,
                id: item.id,
                title: item.title,
              }}
              onPressCard={() => navigateGame(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}
