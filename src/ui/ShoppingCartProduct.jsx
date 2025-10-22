import { useCart } from "../context/CartContext";
import { useState } from "react";

function ShoppingCartProduct() {
  const { cartItems, removeFromCart, updateCartItem } = useCart();
  const [editingItem, setEditingItem] = useState(null);

  const handleIncrease = (item) => {
    updateCartItem(item.id, item.mililitros + 1);
  };

  const handleDecrease = (item) => {
    if (item.mililitros > 1) {
      // evita que sea 0 o negativo
      updateCartItem(item.id, item.mililitros - 1);
    }
  };

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

              {editingItem === item.id ? (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleDecrease(item)}
                    className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
                  >
                    -
                  </button>
                  <p className="text-gray-500 text-sm">{item.mililitros} ml</p>
                  <button
                    onClick={() => handleIncrease(item)}
                    className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
                  >
                    +
                  </button>
                  <button
                    onClick={() => setEditingItem(null)}
                    className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100 ml-2"
                  >
                    Guardar
                  </button>
                </div>
              ) : (
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => setEditingItem(item.id)}
                    className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs px-2 py-1 border rounded-md hover:bg-gray-100"
                  >
                    Eliminar
                  </button>
                </div>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ShoppingCartProduct;
