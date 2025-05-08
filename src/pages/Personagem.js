import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import Header from '../components/Header';
import api from '../services/api';
import { useNavigation, useRoute } from '@react-navigation/native';

const imagensPersonagens = {
  1: require('../../assets/imagens/luke.png'),
  4: require('../../assets/imagens/darth.png'),
  14: require('../../assets/imagens/Hansolo.png'),
  20: require('../../assets/imagens/yoda.png'),
  13: require('../../assets/imagens/chewbacca.png'),
};

export default function Personagem() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [personagem, setPersonagem] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/people/${id}`);
        setPersonagem(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [id]);

  if (!personagem) {
    return <Text style={{ color: 'white', marginTop: 50, textAlign: 'center' }}>Carregando...</Text>;
  }

  return (
    <View style={styles.container}>
      <Header title={personagem.name} showBackButton />
      <View style={styles.content}>
        <Image source={imagensPersonagens[id]} style={styles.image} />
        <Text style={styles.text}>Nome: {personagem.name}</Text>
        <Text style={styles.text}>Altura: {personagem.height} cm</Text>
        <Text style={styles.text}>Peso: {personagem.mass} kg</Text>
        <Text style={styles.text}>Cabelo: {personagem.hair_color}</Text>
        <Text style={styles.text}>Pele: {personagem.skin_color}</Text>
        <Text style={styles.text}>Olhos: {personagem.eye_color}</Text>
        <Text style={styles.text}>Gênero: {personagem.gender}</Text>
        <View style={styles.buttons}>
        <Button
  title="Filmes"
  color="#FFD700" // Cor do texto
  buttonStyle={{ backgroundColor: '#007BFF' }} // Cor do fundo do botão
  onPress={() => navigation.navigate('Filmes', { personagem: personagem })}
/>

<Button
  title="Naves"
  color="#FFD700" // Cor do texto
  buttonStyle={{ backgroundColor: '#28a745' }} // Cor do fundo do botão
  onPress={() => navigation.navigate('Naves', { personagem: personagem })}
/>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  content: {
    padding: 30,
    alignItems: 'center',
    marginTop: 100,
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 30,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  buttons: {
    marginTop: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#111',
    paddingVertical: 10,
  },
});
