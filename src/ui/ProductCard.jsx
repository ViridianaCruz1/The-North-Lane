import { useEffect, useState } from "react";
import getParfums from "../functions/getParfums";
import LoadingSpinner from "./LoadingSpinner";

function ProductCard() {
  // Estados para manejar datos, carga y errores
  const [parfums, setParfums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getParfums();
        // Ordenamos alfabéticamente por nombre
        const sortedData = data.sort((a, b) =>
          a.nombre.localeCompare(b.nombre)
        );
        console.log(sortedData);
        console.log(data);
        setParfums(data); // Guardamos los resultados en el estado
      } catch (err) {
        console.error(err);
        setError("Error al cargar los perfumes");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Estado de carga
  if (loading) {
    return <LoadingSpinner />;
  }

  // Estado de error
  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <>
      {parfums.map((parfum) => (
        <div
          key={parfum.id}
          className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
        >
          <img
            src={parfum.image}
            alt={parfum.nombre}
            className="w-full h-100 object-cover pt-2"
          />
          <div className="sm:p-5 px-2 py-5 flex flex-col justify-between">
            <h3 className="sm:text-lg text-sm font-semibold text-gray-900 mb-2 2xl:flex-row">
              {parfum.nombre}
            </h3>
            <p className="text-gray-500 text-xs mb-4">{parfum.casa}</p>
            <div className="border-t border-gray-200 pt-4 flex flex-col justify-between">
              <span className="text-gray-800 text-sm font-semibold">
                Precio: ${parfum.precio}/ml
              </span>
              <span className="hidden sm:block text-xs text-gray-600">
                {parfum.notas}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProductCard;
