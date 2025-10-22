import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import Checkout from "./Checkout";

export default function ShoppingCart() {
  const { cartItems, isCartOpen, closeCart } = useCart();

  if (!isCartOpen) return null; // 👈 Solo se renderiza si está abierto

  const totalCartPrice = cartItems.reduce((accumulator, item) => {
    return accumulator + item.totalPrice;
  }, 0);

  return (
    <>
      {/* Fondo oscuro */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeCart}
      ></div>

      {/* Panel del carrito */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Pedido 🛒</h2>
          <button
            onClick={closeCart}
            className="text-gray-500 hover:text-gray-800"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100%-70px)]">
          {/* Lista de productos */}
          <ShoppingCartProduct />

          {/* Subtotal y botón */}
          <div className="border-t px-6 py-4">
            <div className="flex justify-between text-gray-700 mb-3">
              <span className="font-medium">Subtotal:</span>
              <span className="font-semibold">${totalCartPrice}</span>
            </div>
            <Checkout totalCartPrice={totalCartPrice} />
          </div>
        </div>
      </div>
    </>
  );
}
