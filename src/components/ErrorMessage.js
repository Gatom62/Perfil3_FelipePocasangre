/**
 * src/components/ErrorMessage.js
 *
 * Muestra un mensaje de error centrado en pantalla.
 * Prop: message (texto del error que llega desde el hook).
 */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ErrorMessage({ message }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No se pudo cargar la informacion</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.hint}>Revisa tu conexion a internet y vuelve a intentarlo.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    padding: 24,
  },
  title: {
    color: '#F87171',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    color: '#F8FAFC',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  hint: {
    color: '#94A3B8',
    fontSize: 13,
    textAlign: 'center',
  },
});