/**
 * src/services/api.js
 *
 * Datos de configuracion que no cambian durante la ejecucion.
 * Se separan de las pantallas para que estas queden limpias.
 */

// Endpoint de la API elegida (Fake Store API).
// Devuelve un arreglo de productos con: id, title, price, description, category, image.
export const API_URL = 'https://fakestoreapi.com/products';

// Informacion que se muestra en la Pantalla 1.
// IMPORTANTE: reemplaza los valores marcados con tus datos reales.
export const STUDENT_INFO = {
  nombre: 'Felipe Pocasangre',
  carnet: '20240046',
  seccion: 'A',
  grupo: '1',
};