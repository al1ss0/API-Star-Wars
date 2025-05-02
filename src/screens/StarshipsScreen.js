import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Image, FlatList } from 'react-native';
import axios from 'axios';
import { starships } from '../../services/image'; // <-- corrigido aqui

const StarshipsScreen = ({ route }) => {
  const { starships: starshipUrls } = route.params;
  const [ships, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchShips = async () => {
      try {
        const results = await Promise.all(
          starshipUrls.map(url => axios.get(url).then(res => res.data))
        );
        setShips(results);
      } catch (error) {
        console.error('Erro ao buscar naves:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchShips();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="yellow" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={ships}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Image
              source={{ uri: starships[item.name] || 'https://via.placeholder.com/150' }}
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

export default StarshipsScreen;
