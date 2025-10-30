// import ProductCard from "./ProductCard";
// import { useEffect, useState, useRef, useMemo } from "react";
// import getProducts from "../functions/getProducts.jsx";
// import LoadingSpinner from "./LoadingSpinner";
// import { useOrder } from "../context/OrderContext.jsx";
// import Pagination from "./Paginacion.jsx";

// export default function ProductGrid({
//   selectedBrand,
//   selectedStore,
//   selectedCategoria,
//   onSelectLimpiar,
//   searchResult,
// }) {
//   // Estados para manejar datos, carga y errores
//   const [allProducts, setAllProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const { order } = useOrder();

//   // Estados para la paginacion
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 36;
//   const gridRef = useRef(null);

//   // Llamada a la API cuando el componente se monta
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getProducts();
//         // Ordenamos alfabéticamente por productName
//         setAllProducts(data);
//       } catch (err) {
//         console.error(err);
//         setError("Error al cargar los productos");
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   // ⬇️ Nuevo useEffect separado solo para restaurar el scroll
//   useEffect(() => {
//     if (!loading && allProducts.length > 0) {
//       const savedScroll = sessionStorage.getItem("scrollPosition");
//       if (savedScroll) {
//         setTimeout(() => {
//           // 🟩 Detectar el mismo contenedor que usamos para guardar el scroll
//           const scrollContainer = document.querySelector(".overflow-y-auto");

//           if (scrollContainer) {
//             scrollContainer.scrollTo({
//               top: parseInt(savedScroll, 10),
//               behavior: "instant", // evita el efecto suave
//             });
//           } else {
//             window.scrollTo({
//               top: parseInt(savedScroll, 10),
//               behavior: "instant",
//             });
//           }

//           sessionStorage.removeItem("scrollPosition");
//         }, 150); // pequeño retraso para que el DOM cargue por completo
//       }
//     }
//   }, [loading, allProducts]);

//   // Filtrado y ordenamiento dinámico
//   const filteredProducts = useMemo(() => {
//     if (!allProducts || allProducts.length === 0) return [];

//     if (searchResult && searchResult.productName) {
//       return allProducts.filter(
//         (p) =>
//           p.productName.toLowerCase() === searchResult.productName.toLowerCase()
//       );
//     }

//     return allProducts
//       .filter((p) => {
//         const brandMatch =
//           !selectedBrand ||
//           p.brand?.toLowerCase() === selectedBrand.toLowerCase();
//         const storeMatch =
//           !selectedStore ||
//           p.store?.toLowerCase() === selectedStore.toLowerCase();
//         const categoriaMatch =
//           !selectedCategoria ||
//           p.categoria?.toLowerCase() === selectedCategoria.toLowerCase();
//         return brandMatch && storeMatch && categoriaMatch;
//       })
//       .sort((a, b) => {
//         if (order === "productName") {
//           return a.productName.localeCompare(b.productName);
//         }

//         if (order === "brand") {
//           // Primero comparo brands
//           const brandComparison = a.brand.localeCompare(b.brand);
//           if (brandComparison !== 0) return brandComparison;

//           // Si las brands son iguales, comparo precio
//           return a.price - b.price;
//         }

//         if (order === "price") {
//           return a.price - b.price;
//         }
//         if (order === "precioMayor") {
//           return b.price - a.price;
//         }

//         return 0;
//       });
//   }, [
//     allProducts,
//     selectedBrand,
//     selectedStore,
//     selectedCategoria,
//     order,
//     searchResult,
//   ]);

//   // Reiniciar la página al cambiar filtros
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedBrand, selectedStore, selectedCategoria]);

//   // Reiniciar página cuando cambian los filtros
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [selectedBrand, selectedStore, selectedCategoria]);

//   // Estado de carga
//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   // Estado de error
//   if (error) {
//     return <div className="text-center text-red-500 mt-10">{error}</div>;
//   }

//   //PAGINACION
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = filteredProducts.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const pageNumbers = [];
//   for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

//   return (
//     <section className="bg-[#F3FAFF] py-12">
//       <div className="max-w-12xl mx-auto sm:mx-8 lg:mx-12 px-6">
//         {/* Botón Limpiar filtros */}
//         {(selectedBrand || selectedStore || selectedCategoria) && (
//           <div className="mb-4 text-right">
//             <button
//               onClick={onSelectLimpiar}
//               className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
//             >
//               Limpiar filtros
//             </button>
//           </div>
//         )}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500 mt-8">
//             No hay productos que coincidan con los filtros seleccionados.
//           </p>
//         ) : (
//           <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-8">
//             {currentProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}

//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={setCurrentPage}
//           maxPageButtons={5}
//           scrollRef={gridRef}
//         />
//       </div>
//     </section>
//   );
// }

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

import ProductCard from "./ProductCard";
import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import getProducts from "../functions/getProducts.jsx";
import LoadingSpinner from "./LoadingSpinner";
import { useOrder } from "../context/OrderContext.jsx";

export default function ProductGrid({
  selectedBrand,
  selectedStore,
  selectedCategoria,
  onSelectLimpiar,
  searchResult,
}) {
  const [allProducts, setAllProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [itemsToShow, setItemsToShow] = useState(36);
  const { order } = useOrder();
  const loadMoreRef = useRef(null);

  // ---- Fetch de productos ----
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // ---- Filtrado y ordenamiento ----
  const filteredProducts = useMemo(() => {
    if (!allProducts || allProducts.length === 0) return [];

    if (searchResult && searchResult.productName) {
      return allProducts.filter(
        (p) =>
          p.productName.toLowerCase() === searchResult.productName.toLowerCase()
      );
    }

    return allProducts
      .filter((p) => {
        const brandMatch =
          !selectedBrand ||
          p.brand?.toLowerCase() === selectedBrand.toLowerCase();
        const storeMatch =
          !selectedStore ||
          p.store?.toLowerCase() === selectedStore.toLowerCase();
        const categoriaMatch =
          !selectedCategoria ||
          p.categoria?.toLowerCase() === selectedCategoria.toLowerCase();
        return brandMatch && storeMatch && categoriaMatch;
      })
      .sort((a, b) => {
        if (order === "productName")
          return a.productName.localeCompare(b.productName);
        if (order === "brand") {
          const brandComparison = a.brand.localeCompare(b.brand);
          return brandComparison !== 0 ? brandComparison : a.price - b.price;
        }
        if (order === "price") return a.price - b.price;
        if (order === "precioMayor") return b.price - a.price;
        return 0;
      });
  }, [
    allProducts,
    selectedBrand,
    selectedStore,
    selectedCategoria,
    order,
    searchResult,
  ]);

  // ---- Restaurar scroll al volver ----
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPosition");
    if (savedScroll && filteredProducts.length > 0) {
      const scrollY = parseInt(savedScroll, 10);

      // Calculamos cuántos productos necesitamos mostrar para que el scroll llegue a savedScroll
      const rows = Math.ceil(scrollY / 300); // asumimos aprox 300px por fila
      const productsPerRow = 3; // tu grid tiene 3 columnas en XL
      const neededItems = rows * productsPerRow + 9; // +9 extra para que no quede cortado
      if (neededItems > itemsToShow) setItemsToShow(neededItems);

      setTimeout(() => {
        window.scrollTo({ top: scrollY, behavior: "instant" });
        sessionStorage.removeItem("scrollPosition");
      }, 150);
    }
  }, [filteredProducts, itemsToShow]);

  // ---- Actualizamos los productos visibles ----
  useEffect(() => {
    setVisibleProducts(filteredProducts.slice(0, itemsToShow));
  }, [filteredProducts, itemsToShow]);

  // ---- Cargar más productos ----
  const loadMore = useCallback(() => {
    if (visibleProducts.length < filteredProducts.length) {
      setItemsToShow((prev) => prev + 36);
    }
  }, [visibleProducts.length, filteredProducts.length]);

  // ---- Intersection Observer para scroll infinito ----
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadMore();
      },
      {
        root: null,
        rootMargin: "500px",
      }
    );

    observer.observe(loadMoreRef.current);
    return () => observer.disconnect();
  }, [loadMore]);

  // ---- Guardar scroll antes de navegar ----
  const handleBeforeUnload = () => {
    sessionStorage.setItem("scrollPosition", window.scrollY.toString());
  };
  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // ---- Render ----
  if (loading) return <LoadingSpinner />;
  if (error)
    return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <section className="bg-[#F3FAFF] py-12">
      <div className="max-w-12xl mx-auto sm:mx-8 lg:mx-12 px-6">
        {(selectedBrand || selectedStore || selectedCategoria) && (
          <div className="mb-4 text-right">
            <button
              onClick={onSelectLimpiar}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No hay productos que coincidan con los filtros seleccionados.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-8">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Sentinel para scroll infinito */}
        {visibleProducts.length < filteredProducts.length && (
          <div ref={loadMoreRef} className="h-[1px] w-full"></div>
        )}
      </div>
    </section>
  );
}
