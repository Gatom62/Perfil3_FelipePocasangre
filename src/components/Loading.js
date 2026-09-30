/**
 * src/components/Loading.js
 *
 * Indicador de carga que ocupa toda la pantalla y queda centrado.
 * Prop opcional: message (texto debajo del indicador).
 */
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#38BDF8" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo el espacio disponible
    justifyContent: 'center', // centra en vertical
    alignItems: 'center', // centra en horizontal
    backgroundColor: '#0F172A',
  },
  text: {
    color: '#94A3B8',
    marginTop: 12,
    fontSize: 14,
  },
});