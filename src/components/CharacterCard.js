import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CharacterCard({ character, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.name}>{character.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
    fontFamily: "monospace",
    textAlign: "center",
  },
});