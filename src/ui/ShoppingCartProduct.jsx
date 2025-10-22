import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function ShoppingCartProduct() {
  const { cartItems, removeFromCart } = useCart();
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Tu carrito está vacío.
        </p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 border-b pb-4">
            <img
              src={item.image}
              alt={item.nombre}
              className="w-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-sm font-medium">{item.nombre}</h3>
              <p className="text-gray-500 text-sm">
                Cantidad: {item.mililitros} ml
              </p>
              <p className="text-gray-900 font-semibold">${item.totalPrice}</p>
              <div className="flex gap-2 mt-2">
                <Link
                  to={`/product/${item.nombre
                    .toLowerCase()
                    .replace(/\s+/g, "-")}/${item.id}`}
                >
                  <button className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100">
                    Editar
                  </button>
                </Link>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCartProduct;
