import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { characters } from '../../services/image'; // <-- corrigido aqui

const CharacterScreen = ({ route }) => {
  const { character } = route.params;
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const results = await Promise.all(
          character.starships.map(url => axios.get(url).then(res => res.data))
        );
        setStarships(results);
      } catch (error) {
        console.error('Erro ao buscar naves:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStarships();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="yellow" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>
      <Image source={{ uri: character.image }} style={styles.image} />
      {/* render starships here... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold' },
  image: { width: 200, height: 200, marginVertical: 20 },
});

export default CharacterScreen;
