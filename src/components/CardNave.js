import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardNave({ nave }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{nave.nome}</Text>
      <Text style={styles.modelo}>{nave.modelo}</Text>
      <Text style={styles.passageiros}>{nave.passageiros}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#444',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
  },
});