import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 🛒 Añadir producto
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                mililitros: item.mililitros + product.mililitros,
                totalPrice:
                  (item.mililitros + product.mililitros) *
                  (item.totalPrice / item.mililitros), // recalcular proporcionalmente
              }
            : item
        );
      }
      return [...prev, product];
    });
    // setIsCartOpen(true); // abrir el carrito al agregar algo
  };

  // ✏️ Actualizar cantidad (mililitros) y total
  const updateCartItem = (id, newMililitros) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              mililitros: newMililitros,
              totalPrice: newMililitros * (item.totalPrice / item.mililitros), // mantener proporción de precio
            }
          : item
      )
    );
  };

  // 🗑️ Eliminar producto
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // ⚙️ Abrir / Cerrar carrito
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
