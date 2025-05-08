import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { Audio } from 'expo-av'; 

export default function AboutScreen() {
  const sound = useRef(null);

  useEffect(() => {
    async function loadAndPlaySound() {
      try {
        await Audio.requestPermissionsAsync(); 
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: true,
          playsInSilentModeIOS: true,
        });
  
        const { sound: loadedSound } = await Audio.Sound.createAsync(
          require('../assets/audio/musica.mp3')
        );
  
        sound.current = loadedSound;
        await sound.current.setVolumeAsync(1.0);
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
  }, []);
  

  return (
    <View style={styles.container}>
      <Header title="Sobre" showBackButton />
      <View style={styles.content}>
        <Text style={styles.text}>Alisson de Morais Bosa - 1134723</Text>
        <Text style={styles.email}>Email: 1134723@atitus.edu.br</Text>

        <Text style={styles.text}>Júlia de Lima Miranda - 1136869 </Text>
        <Text style={styles.email}>Email: 1136869@atitus.edu.br</Text>

        <Text style={styles.text}>Renan Terre Gomes - 1136179</Text>
        <Text style={styles.email}>Email: 11361798@atitus.edu.br</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  content: {
    padding: 20,
  },
  email: {
    marginBottom: 30,
    color: '#fff',
    fontSize: 16,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 8,
  },
});

