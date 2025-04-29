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

      const responsePage1 = await api.get("people/?page=1");
      const responsePage2 = await api.get("people/?page=2");

      const allCharacters = [
        ...responsePage1.data.results,
        ...responsePage2.data.results,
      ].slice(0, 16);

      setCharacters(allCharacters);
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  }

  function extractCharacterId(url) {
    const parts = url.split("/");
    return parts[parts.length - 2];
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.url}
      renderItem={({ item }) => (
        <CharacterCard
          character={{ ...item, id: extractCharacterId(item.url) }}
          onPress={() =>
            navigation.navigate("Detalhes", {
              character: { ...item, id: extractCharacterId(item.url) },
            })
          }
        />
      )}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 12,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});