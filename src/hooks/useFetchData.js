/**
 * src/hooks/useFetchData.js
 *
 * Custom hook para consumir una API.
 * Concentra TODA la logica de red y de estado, de modo que las pantallas
 * solo tengan que preocuparse por dibujar la interfaz.
 *
 * Uso:
 *   const { data, loading, error } = useFetchData('https://...');
 *
 * Retorna:
 *   data    -> arreglo con los datos recibidos (vacio mientras carga)
 *   loading -> true mientras la peticion esta en curso
 *   error   -> null si todo salio bien, o un texto con el mensaje de error
 */
import { useState, useEffect } from 'react';

export default function useFetchData(url) {
  // Estado de los datos, la carga y el error.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect se ejecuta despues del primer renderizado y cada vez que
  // cambie "url" (que esta en el arreglo de dependencias al final).
  useEffect(() => {
    // Bandera para evitar actualizar el estado si el componente ya se desmonto
    // (por ejemplo, si el usuario regresa a la pantalla 1 antes de que termine la carga).
    let cancelado = false;

    // El callback de useEffect no puede ser async, por eso se define
    // una funcion async interna y se llama justo despues.
    const obtenerDatos = async () => {
      try {
        setLoading(true);
        setError(null);

        // fetch devuelve una promesa; await espera a que se resuelva.
        const response = await fetch(url);

        // fetch NO lanza error con codigos como 404 o 500, hay que revisarlo a mano.
        if (!response.ok) {
          throw new Error(`Error del servidor (codigo ${response.status})`);
        }

        // Convierte el cuerpo de la respuesta de JSON a un objeto/arreglo de JS.
        const json = await response.json();

        if (!cancelado) {
          setData(json);
        }
      } catch (err) {
        // Cae aqui si no hay internet o si lanzamos un error arriba.
        if (!cancelado) {
          setError(err.message || 'No se pudo cargar la informacion');
        }
      } finally {
        // Se ejecuta siempre, haya exito o error: la carga termino.
        if (!cancelado) {
          setLoading(false);
        }
      }
    };

    obtenerDatos();

    // Funcion de limpieza: React la ejecuta al desmontar el componente
    // o antes de volver a correr el efecto.
    return () => {
      cancelado = true;
    };
  }, [url]);

  return { data, loading, error };
}