// import { createContext, useContext, useState, useMemo } from "react";

// const CartContext = createContext();

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   // 🛒 Añadir producto
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existing = prev.find((item) => item.id === product.id);
//       if (existing) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? {
//                 ...item,
//                 quantity: item.quantity + product.quantity,
//                 totalPrice: (item.quantity + product.quantity) * item.price, // recalcular proporcionalmente
//               }
//             : item
//         );
//       }
//       return [...prev, product];
//       // return [
//       //   ...prev,
//       //   { ...product, totalPrice: product.quantity * product.unitPrice },
//       // ];
//     });
//     // setIsCartOpen(true); // abrir el carrito al agregar algo
//   };

//   // ✏️ Actualizar cantidad (quantity) y total
//   const updateCartItem = (id, newQuantity) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id
//           ? {
//               ...item,
//               quantity: newQuantity,
//               totalPrice: newQuantity * (item.totalPrice / item.quantity), // mantener proporción de precio
//             }
//           : item
//       )
//     );
//   };

//   // 🗑️ Eliminar producto
//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const subtotal = useMemo(() => {
//     return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
//   }, [cartItems]);

//   // ⚙️ Abrir / Cerrar carrito
//   const openCart = () => setIsCartOpen(true);
//   const closeCart = () => setIsCartOpen(false);
//   const toggleCart = () => setIsCartOpen((prev) => !prev);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         isCartOpen,
//         openCart,
//         closeCart,
//         toggleCart,
//         updateCartItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   return useContext(CartContext);
// }

import { createContext, useContext, useState, useMemo } from "react";

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
                quantity: item.quantity + product.quantity,
                totalPrice: (item.quantity + product.quantity) * item.unitPrice,
              }
            : item
        );
      }
      return [
        ...prev,
        {
          ...product,
          unitPrice: product.price, // 🔹 Asegura coherencia
          totalPrice: product.price * product.quantity,
        },
      ];
    });
  };

  // ✏️ Actualizar cantidad
  const updateCartItem = (id, newQuantity) => {
    if (newQuantity <= 0) return removeFromCart(id);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
              totalPrice: newQuantity * item.unitPrice,
            }
          : item
      )
    );
  };

  // 🗑️ Eliminar producto
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 Subtotal general
  const subtotal = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  }, [cartItems]);

  // 🔢 Total de artículos en el carrito
  const totalQuantity = useMemo(() => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }, [cartItems]);

  // ⚙️ Control de visibilidad
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartItem,
        removeFromCart,
        subtotal,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
