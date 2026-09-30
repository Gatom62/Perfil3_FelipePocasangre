/**
 * src/navigation/AppNavigator.js
 *
 * Define la navegacion de la app con React Navigation (Stack Navigator).
 * Un Stack apila pantallas: al navegar se pone una encima de otra y
 * el boton "atras" del header vuelve a la anterior.
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StudentScreen from '../screens/StudentScreen';
import ApiScreen from '../screens/ApiScreen';

// Crea el objeto Stack que contiene los componentes Navigator y Screen.
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    // NavigationContainer gestiona el estado de la navegacion; va una sola vez en toda la app.
    <NavigationContainer>
      <Stack.Navigator
        // La primera pantalla que se muestra.
        initialRouteName="Student"
        // Estilos del header aplicados a todas las pantallas.
        screenOptions={{
          headerStyle: { backgroundColor: '#1E293B' },
          headerTintColor: '#F8FAFC',
          headerTitleStyle: { fontWeight: '700' },
        }}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ title: 'Perfil del estudiante' }}
        />
        <Stack.Screen
          name="Api"
          component={ApiScreen}
          options={{ title: 'Productos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}