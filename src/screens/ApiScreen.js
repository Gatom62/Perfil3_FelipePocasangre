/**
 * src/screens/ApiScreen.js
 *
 * Pantalla 2: muestra la lista de productos de la API.
 *
 * Esta pantalla NO hace fetch ni maneja estados de datos.
 * Todo eso lo hace el hook useFetchData; aqui solo se decide que dibujar
 * segun el estado: cargando, error o lista de datos.
 */
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Card';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { API_URL } from '../services/api';

export default function ApiScreen() {
  const { data, loading, error } = useFetchData(API_URL);

  // 1. Mientras la peticion esta en curso.
  if (loading) {
    return <Loading message="Cargando productos..." />;
  }

  // 2. Si la peticion fallo.
  if (error) {
    return <ErrorMessage message={error} />;
  }

  // 3. Si todo salio bien, se dibuja la lista.
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        // keyExtractor da a cada fila un identificador unico (evita warnings de "key").
        keyExtractor={(item) => String(item.id)}
        // renderItem se ejecuta por cada elemento del arreglo.
        renderItem={({ item }) => (
          <Card
            title={item.title}
            image={item.image}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  list: {
    padding: 16,
  },
});