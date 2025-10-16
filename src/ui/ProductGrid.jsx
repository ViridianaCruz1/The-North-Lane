import ProductCard from "./ProductCard";
import { useEffect, useState, useRef } from "react";
import getParfums from "../functions/getParfums";
import LoadingSpinner from "./LoadingSpinner";
import { useOrder } from "../context/OrderContext.jsx";
import Pagination from "./Paginacion.jsx";

export default function ProductGrid() {
  // Estados para manejar datos, carga y errores
  const [parfums, setParfums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { order } = useOrder();

  // Estados para la paginacion
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 36;
  const gridRef = useRef(null);

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getParfums();
        // Ordenamos alfabéticamente por nombre
        (order === "nombre" || order === "casa") &&
          data.sort((a, b) => a[order].localeCompare(b[order]));
        order === "precio" && data.sort((a, b) => a[order] - b[order]);

        setParfums(data); // Guardamos los resultados en el estado
        setCurrentPage(1); // Reseteamos la pagina actual al cambiar el orden
      } catch (err) {
        console.error(err);
        setError("Error al cargar los perfumes");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [order]);

  // Estado de carga
  if (loading) {
    return <LoadingSpinner />;
  }

  // Estado de error
  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  //PAGINACION
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentParfums = parfums.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(parfums.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-12xl mx-auto sm:mx-8 lg:mx-12 px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-8 md:gap-3">
          {currentParfums.map((parfum) => (
            <ProductCard key={parfum.id} parfum={parfum} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          maxPageButtons={5}
          scrollRef={gridRef}
        />
      </div>
    </section>
  );
}
