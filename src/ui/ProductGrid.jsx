import ProductCard from "./ProductCard";
import { useEffect, useState, useRef, useMemo } from "react";
import getParfums from "../functions/getParfums";
import LoadingSpinner from "./LoadingSpinner";
import { useOrder } from "../context/OrderContext.jsx";
import Pagination from "./Paginacion.jsx";

export default function ProductGrid({
  selectedCasa,
  selectedOcasion,
  selectedCategoria,
  onSelectLimpiar,
  searchResult,
}) {
  // Estados para manejar datos, carga y errores
  const [allParfums, setAllParfums] = useState([]);
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
        setAllParfums(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los perfumes");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Filtrado y ordenamiento dinámico
  const filteredParfums = useMemo(() => {
    if (!allParfums || allParfums.length === 0) return [];

    if (searchResult && searchResult.nombre) {
      return allParfums.filter(
        (p) => p.nombre.toLowerCase() === searchResult.nombre.toLowerCase()
      );
    }

    return allParfums
      .filter((p) => {
        const casaMatch =
          !selectedCasa || p.casa?.toLowerCase() === selectedCasa.toLowerCase();
        const ocasionMatch =
          !selectedOcasion ||
          p.disponible?.toLowerCase() === selectedOcasion.toLowerCase();
        const categoriaMatch =
          !selectedCategoria ||
          p.categoria?.toLowerCase() === selectedCategoria.toLowerCase();
        return casaMatch && ocasionMatch && categoriaMatch;
      })
      .sort((a, b) => {
        if (order === "nombre") {
          return a.nombre.localeCompare(b.nombre);
        }

        if (order === "casa") {
          // Primero comparo casas
          const casaComparison = a.casa.localeCompare(b.casa);
          if (casaComparison !== 0) return casaComparison;

          // Si las casas son iguales, comparo precio
          return a.precio - b.precio;
        }

        if (order === "precio") {
          return a.precio - b.precio;
        }
        if (order === "precioMayor") {
          return b.precio - a.precio;
        }

        return 0;
      });
  }, [
    allParfums,
    selectedCasa,
    selectedOcasion,
    selectedCategoria,
    order,
    searchResult,
  ]);

  // Reiniciar la página al cambiar filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCasa, selectedOcasion, selectedCategoria]);

  // Reiniciar página cuando cambian los filtros
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCasa, selectedOcasion, selectedCategoria]);

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
  const currentParfums = filteredParfums.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const totalPages = Math.ceil(filteredParfums.length / itemsPerPage);
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-12xl mx-auto sm:mx-8 lg:mx-12 px-6">
        {/* Botón Limpiar filtros */}
        {(selectedCasa || selectedOcasion || selectedCategoria) && (
          <div className="mb-4 text-right">
            <button
              onClick={onSelectLimpiar}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
        {filteredParfums.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No hay perfumes que coincidan con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-8">
            {currentParfums.map((parfum) => (
              <ProductCard key={parfum.id} parfum={parfum} />
            ))}
          </div>
        )}

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
