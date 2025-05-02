import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { movies } from '../../services/image'; // <-- corrigido aqui

const MoviesScreen = ({ route }) => {
  const { films } = route.params;
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await Promise.all(
          films.map(url => axios.get(url).then(res => res.data))
        );
        setMovieData(results);
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="yellow" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={movieData}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Image
              source={{ uri: movies[item.title] || 'https://via.placeholder.com/150' }}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  image: { width: '100%', height: 200, borderRadius: 10 },
});

export default MoviesScreen;
