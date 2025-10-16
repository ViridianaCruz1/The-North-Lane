export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  maxPageButtons = 5,
  scrollRef,
}) {
  // Calcular el rango de páginas visibles
  let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  let endPage = startPage + maxPageButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) pageNumbers.push(i);

  // Función que maneja el cambio de página y hace scroll al top
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    onPageChange(pageNumber);
    // Scroll al top del grid de productos
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center mt-6 gap-2">
      {/* Flecha anterior */}
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`px-3 py-1 bg-transparent 
            ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 hover:text-[#A47E3B]"
            }
        ${currentPage === 1 || totalPages === 1 ? "hidden" : ""}`}
      >
        {"<"}
      </button>

      {/* Botones de página */}
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => handlePageChange(number)}
          className={`px-3 py-1 rounded-md ${
            currentPage === number
              ? "bg-[#A47E3B] text-white"
              : "bg-white text-gray-800 hover:bg-gray-200"
          }`}
        >
          {number}
        </button>
      ))}

      {/* Flecha siguiente */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`px-3 py-1 bg-transparent 
            ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-800 hover:text-[#A47E3B]"
            }
        ${currentPage === endPage || totalPages === 1 ? "hidden" : ""}`}
      >
        {">"}
      </button>
    </div>
  );
}
