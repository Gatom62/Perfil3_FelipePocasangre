/**
 * App.js
 *
 * Punto de entrada de la aplicacion.
 * Solo monta el navegador; toda la logica vive en src/.
 */
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <>
      {/* Iconos claros en la barra de estado, porque el fondo es oscuro. */}
      <StatusBar style="light" />
      <AppNavigator />
    </>
  );
}