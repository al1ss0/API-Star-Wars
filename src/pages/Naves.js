import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const Naves = ({ route }) => {
  const { personagem } = route.params;
  const { starships: naves } = personagem; // Alterando 'films' para 'starships'
  const [navesDados, setNavesDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarNaves = async () => {
      try {
        const dados = await Promise.all(
          naves.map(async (url) => {
            const resposta = await fetch(url);
            return await resposta.json();
          })
        );
        setNavesDados(dados);
      } catch (erro) {
        console.error('Erro ao buscar naves:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarNaves();
  }, []); // O array vazio significa que o efeito será executado apenas uma vez

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (navesDados.length === 0) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.textoBranco}>Nenhuma nave encontrada.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={navesDados}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.textoBranco}>Nome: {item.name}</Text>
            <Text style={styles.textoBranco}>Modelo: {item.model}</Text>
            <Text style={styles.textoBranco}>Fabricante: {item.manufacturer}</Text>
            <Text style={styles.textoBranco}>Capacidade de Passageiros: {item.passengers}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 200,
    flex: 1,
    backgroundColor: '#222',
  },
  centralizado: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBranco: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  cartao: {
    backgroundColor: '#333',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
    elevation: 2,
  },
  lista: {
    paddingVertical: 16,
  },
});

export default Naves;
