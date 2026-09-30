/**
 *
 * Componente reutilizable que dibuja una tarjeta.
 * No sabe nada de la API: solo muestra lo que recibe por props.
 *
 * Props:
 *   title       -> titulo o nombre del elemento
 *   image       -> URL de la imagen
 *   description -> texto descriptivo (se recorta a 4 lineas)
 */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Card({ title, image, description }) {
  return (
    <View style={styles.card}>
      {/* Contenedor blanco: las fotos de la API tienen fondo blanco y asi se ven integradas. */}
      <View style={styles.imageWrapper}>
        {/* Una imagen remota necesita source={{ uri }} y un alto/ancho explicito. */}
        <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      </View>

      <View style={styles.content}>
        {/* numberOfLines corta el texto y agrega "..." si es muy largo. */}
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    marginBottom: 16,
    overflow: 'hidden', // evita que la imagen se salga de las esquinas redondeadas
  },
  imageWrapper: {
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  image: {
    width: '100%',
    height: 180,
  },
  content: {
    padding: 14,
  },
  title: {
    color: '#F8FAFC',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    color: '#94A3B8',
    fontSize: 13,
    lineHeight: 19,
  },
});