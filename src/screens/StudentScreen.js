/**
 * src/screens/StudentScreen.js
 *
 * Pantalla 1: informacion del estudiante y boton para ir a la Pantalla 2.
 *
 * "navigation" llega automaticamente como prop porque esta pantalla
 * esta registrada dentro del Stack Navigator (ver AppNavigator.js).
 */
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { STUDENT_INFO } from '../services/api';

export default function StudentScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{STUDENT_INFO.nombre}</Text>

        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{STUDENT_INFO.carnet}</Text>

        <Text style={styles.label}>Seccion y grupo</Text>
        <Text style={styles.value}>
          {STUDENT_INFO.seccion} - {STUDENT_INFO.grupo}
        </Text>
      </View>

      {/* Pressable es el componente base para botones. El estilo puede ser una funcion
          que recibe "pressed" para cambiar la apariencia mientras se toca. */}
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        // "Api" debe coincidir EXACTAMENTE con el name de la Screen en AppNavigator.
        onPress={() => navigation.navigate('Api')}
      >
        <Text style={styles.buttonText}>Ver productos</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    padding: 24,
    justifyContent: 'center',
  },
  panel: {
    backgroundColor: '#1E293B',
    borderRadius: 14,
    padding: 20,
    marginBottom: 24,
  },
  label: {
    color: '#94A3B8',
    fontSize: 13,
    marginTop: 12,
  },
  value: {
    color: '#F8FAFC',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  button: {
    backgroundColor: '#38BDF8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
});