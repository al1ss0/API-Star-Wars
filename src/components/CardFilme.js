import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardFilme({filme}) {
        return (
            <View style={styles.card}>
                <Text style={styles.title}>{filme.titulo}</Text>
                <Text style={styles.year}>{filme.ano}</Text>
            </View>
        );
    }

    const styles = StyleSheet.create({
        card: {
          backgroundColor: '#444',
          padding: 10,
          alignItems: 'center',
          marginBottom: 10,
        },
        image: {
          width: 150,
          height: 100,
          borderRadius: 10,
        },
        title: {
          color: 'white',
          fontWeight: 'bold',
          marginTop: 8,
        },
        year: {
          color: '#ccc',
        },
      });