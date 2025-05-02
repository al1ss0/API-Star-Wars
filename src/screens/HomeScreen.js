import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import api from "../services/api";
import CharacterCard from "../components/CharacterCard";

export default function HomeScreen({ navigation }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCharacters() {
    try {
      setLoading(true);
      const response1 = await api.get("people/?page=1");
      const response2 = await api.get("people/?page=2");

      const all = [...response1.data.results, ...response2.data.results].slice(0, 16);
      setCharacters(all);
    } catch (err) {
      console.log("Erro ao buscar personagens:", err);
    } finally {
      setLoading(false);
    }
  }

  function getIdFromUrl(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#FFE81F" />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.name}
      renderItem={({ item }) => (
        <CharacterCard
          character={{ ...item, id: getIdFromUrl(item.url) }}
          onPress={() =>
            navigation.navigate("Detalhes", {
              character: { ...item, id: getIdFromUrl(item.url) },
            })
          }
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 12 },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
