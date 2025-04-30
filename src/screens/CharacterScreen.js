import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function CharacterScreen({ route, navigation }) {
  const { character } = route.params;

  const handleMoviesPress = () => {
    alert("Filmes:\n" + character.films?.join("\n"));
  };

  const handleStarshipsPress = () => {
    alert("Naves:\n" + character.starships?.join("\n"));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.text}>Height: {character.height} cm</Text>
        <Text style={styles.text}>Mass: {character.mass} kg</Text>
        <Text style={styles.text}>Hair Color: {character.hair_color}</Text>
        <Text style={styles.text}>Eyes Color: {character.eye_color}</Text>
        <Text style={styles.text}>Birth Year: {character.birth_year}</Text>

        <TouchableOpacity style={styles.button} onPress={handleMoviesPress}>
          <Text style={styles.buttonText}>Movies</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleStarshipsPress}>
          <Text style={styles.buttonText}>Starships</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#111",
    borderRadius: 30,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    maxWidth: 400,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: "#ccc",
    marginVertical: 2,
  },
  button: {
    backgroundColor: "grey",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "yellow",
    fontSize: 20,
    fontWeight: "bold",
  },
});