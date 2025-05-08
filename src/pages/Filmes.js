import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const Filmes = ({ route }) => {
  // Verifica se 'route.params' e 'route.params.personagem' existem antes de usar
  const personagem = route.params?.personagem;

  // Se 'personagem' não for encontrado, exiba uma mensagem de erro
  if (!personagem) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.textoBranco}>Erro: "personagem" não encontrado!</Text>
      </View>
    );
  }

  const { films: filmes } = personagem;
  const [filmesDados, setFilmesDados] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarFilmes = async () => {
      try {
        const dados = await Promise.all(
          filmes.map(async (url) => {
            const resposta = await fetch(url);
            return await resposta.json();
          })
        );
        setFilmesDados(dados);
      } catch (erro) {
        console.error('Erro ao buscar filmes:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarFilmes();
  }, [filmes]);

  if (carregando) {
    return (
      <View style={styles.centralizado}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  if (filmesDados.length === 0) {
    return (
      <View style={styles.centralizado}>
        <Text style={styles.textoBranco}>Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={filmesDados}
        keyExtractor={(item) => item.title}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.cartao}>
            <Text style={styles.textoBranco}>Título: {item.title}</Text>
            <Text style={styles.textoBranco}>Data de Lançamento: {item.release_date}</Text>
            <Text style={styles.textoBranco}>Diretor: {item.director}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    color: '#ffe81f',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  centralizado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBranco: {
    color: 'white',
    fontSize: 16,
    marginBottom: 4,
  },
  cartao: {
    backgroundColor: '#111',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    borderRadius: 10,
  },
  lista: {
    paddingVertical: 16,
  },
});


export default Filmes;
