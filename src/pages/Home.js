import React, { useEffect, useRef } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import CardPersonagem from '../components/CardPersonagem';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';

const personagens = [
  { id: 1, nome: 'Luke Skywalker', imagem: require('../../assets/imagens/luke.png') },
  { id: 4, nome: 'Darth Vader', imagem: require('../../assets/imagens/darth.png') },
  { id: 14, nome: 'Han Solo', imagem: require('../../assets/imagens/Hansolo.png') },
  { id: 20, nome: 'Yoda', imagem: require('../../assets/imagens/yoda.png') },
  { id: 13, nome: 'Chewbacca', imagem: require('../../assets/imagens/chewbacca.png') },
];

export default function Home() {
  const navigation = useNavigation();
  const sound = useRef(null);

  useEffect(() => {
    async function loadAndPlaySound() {
      try {
        // Solicitar permissões para o áudio
        const permission = await Audio.requestPermissionsAsync();
        console.log('Permissão para áudio:', permission);

        // Verificar se as permissões foram concedidas
        if (!permission.granted) {
          console.log('Permissão de áudio negada.');
          return;
        }

        // Configurar o modo de áudio
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
        });

        // Carregar o som
        const { sound: loadedSound } = await Audio.Sound.createAsync(
          require('../assets/audio/musica.mp3')
        );
        console.log('Áudio carregado:', loadedSound);

        sound.current = loadedSound;
        await sound.current.setVolumeAsync(1.0);

        // Reproduzir o áudio
        await sound.current.playAsync();
        console.log('Som reproduzindo...');

      } catch (error) {
        console.log('[Erro ao carregar o áudio]:', error);
      }
    }

    loadAndPlaySound();

    return () => {
      if (sound.current) {
        sound.current.unloadAsync();
      }
    };
  }, []);  // Efeito roda apenas na montagem da tela
  return (
    <View style={styles.container}>
      <Header title="Star Wars" showSobreButton />
      <ScrollView contentContainerStyle={styles.cards}>
        {personagens.map(personagem => (
          <CardPersonagem
            key={personagem.id}
            personagem={personagem}
            onPress={() => navigation.navigate('Personagem', { id: personagem.id })}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffe81f', 
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'column',
    width: '90%', 
    alignSelf: 'center', 
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  characterName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  scrollContent: {
    paddingBottom: 40,
  },
});
