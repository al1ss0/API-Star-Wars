import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardPersonagem({ personagem, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={personagem.imagem} style={styles.image} />
      <Text style={styles.name}>{personagem.nome}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#444',
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
});