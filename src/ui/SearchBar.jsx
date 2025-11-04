import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import getProducts from "../functions/getProducts";
import { useNavigate } from "react-router-dom";

function SearchBar({ onSearchResult }) {
  // Estados para manejar datos, carga y errores
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const containerRef = useRef(null); //

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        // Ordenamos alfabéticamente por nombre
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError("Error al cargar los productos");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      onSearchResult(products);
      return;
    }

    const lowerQuery = query.toLowerCase();
    // Separar en dos grupos:
    // 1️⃣ los que empiezan con el texto
    const startsWithMatches = products.filter(
      (p) =>
        p.productName.toLowerCase().startsWith(lowerQuery) ||
        p.brand.toLowerCase().startsWith(lowerQuery)
    );
    // 2️⃣ los que contienen el texto pero no empiezan con él
    const containsMatches = products.filter(
      (p) =>
        !p.productName.toLowerCase().startsWith(lowerQuery) &&
        p.productName.toLowerCase().includes(lowerQuery)
    );
    // Combinar ambos, priorizando los que empiezan igual
    const orderedSuggestions = [...startsWithMatches, ...containsMatches];
    // Mostrar máximo 10 sugerencias
    setSuggestions(orderedSuggestions.slice(0, 10));
    setShowSuggestions(true);
  }, [query, products, onSearchResult]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (productName) => {
    setQuery(productName);
    setShowSuggestions(false);

    // Enviar el resultado completo al padre
    const selected = products.find(
      (p) => p.productName.toLowerCase() === productName.toLowerCase()
    );
    if (selected) {
      onSearchResult(selected);
      navigate("/");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSelect(query);
    setShowSuggestions(false);
  };

  if (error) {
    return <div className="text-center text-red-500 mt-10">{error}</div>;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full sm:w-[500px] my-3 sm:mt-0"
    >
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar..."
          className="w-full px-4 py-2 focus:outline-none text-sm h-10 rounded-l-md border border-gray-300 text-gray-800"
          onFocus={() => setShowSuggestions(true)}
        />
        <button
          type="submit"
          className="bg-[#1E2A38] hover:bg-[#4A6A8A] text-white px-4 py-2 rounded-r-md flex items-center justify-center h-10"
        >
          <Search size={18} />
        </button>
      </form>

      {/* Lista de sugerencias */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 shadow-md max-h-60 overflow-y-auto">
          {suggestions.map((item) => (
            <li
              key={item.id}
              className="flex items-center px-3 py-2 cursor-pointer hover:bg-gray-100"
              onMouseDown={(e) => {
                e.preventDefault(); // evita que el input pierda foco antes del click
                handleSelect(item.productName);
                setTimeout(() => {
                  setShowSuggestions(false);
                }, 0); // permite que React actualice antes de cerrar la lista
              }}
            >
              <img
                src={item.image}
                alt={item.productName}
                className="h-7 rounded object-cover mr-3"
              />
              <span className="text-sm text-gray-600">{item.productName}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
