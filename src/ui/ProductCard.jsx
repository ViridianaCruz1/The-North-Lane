//const variableOrder = "casa"; // Valor por defecto

function ProductCard({ parfum }) {
  return (
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
        <div className="text-gray-500 text-xs mb-4">
          {parfum.casa}
          <p className="italic">{parfum.concentracion}</p>
        </div>
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
  );
}

export default ProductCard;
