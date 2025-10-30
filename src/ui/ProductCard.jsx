import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Convertir el nombre a formato URL-friendly
    const nombreURL = product.productName
      .toLowerCase()
      .normalize("NFD") // elimina acentos
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-") // reemplaza espacios por guiones
      .replace(/[^\w-]+/g, ""); // elimina caracteres especiales

    // 🟩 Buscar el contenedor que controla el scroll
    const scrollContainer = document.querySelector(".overflow-y-auto");

    // 🟦 Guardar la posición de scroll (si existe el contenedor)
    if (scrollContainer) {
      sessionStorage.setItem("scrollPosition", scrollContainer.scrollTop);
    } else {
      sessionStorage.setItem("scrollPosition", window.scrollY);
    }

    navigate(`/product/${nombreURL}/${product.id}`);
  };

  return (
    <div
      key={product.id}
      onClick={handleCardClick}
      className={`cursor-pointer bg-white relative shadow-md rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300
        `}
    >
      <img
        src={product.image}
        alt={product.productName}
        className="w-full object-cover mt-2 px-2 rounded-2xl justify center"
      />
      <div className="sm:p-5 px-2 py-5 flex flex-col justify-between">
        <h3 className="sm:text-lg text-sm font-semibold text-gray-900 mb-2 2xl:flex-row">
          {product.productName}
        </h3>
        <div className="text-gray-500 text-xs mb-4">
          {product.brand}
          <p className="italic">{product.store}</p>
        </div>
        <div className="border-t border-gray-200 pt-4 flex flex-col justify-between">
          <span className="text-gray-800 text-sm font-semibold">
            Precio: ${product.price}
          </span>
          <span className="hidden sm:block text-xs text-gray-600">
            {product.description}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
