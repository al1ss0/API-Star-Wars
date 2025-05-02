import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

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
    borderRadius: 25,
    marginVertical: 6,
    padding: 16,
    alignItems: "center",
    borderColor: "#FFE81F",
    borderWidth: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    fontFamily: "monospace",
  },
});
