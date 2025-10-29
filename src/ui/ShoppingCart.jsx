import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import Checkout from "./Checkout";
import { useState } from "react";

export default function ShoppingCart() {
  const { cartItems, isCartOpen, closeCart, subtotal } = useCart();
  const [postalCode, setPostalCode] = useState("");

  if (!isCartOpen) return null;

  const handlePostalCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setPostalCode(value);
    }
  };

  // const isPostalCodeValid = postalCode.length === 5;

  const totalCart = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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

        <div className="flex flex-col h-[calc(100%-70px)] overflow-y-auto">
          <div className={`${cartItems.length === 0 ? "hidden" : ""}`}>
            <div className="border-b p-3 text-sm text-gray-600 italic">
              El costo de envío se calcula al momento de realizar tu pago. O si
              eres de Puebla, podemos agendar una entrega personal sin costo 🤞🏻
            </div>

            {/* Campo de código postal */}
            <div className="border-b p-4 flex flex-col gap-2">
              <label
                htmlFor="postalCode"
                className="text-sm font-medium text-gray-700"
              >
                Ingresa tu código postal:
              </label>
              <input
                id="postalCode"
                type="text"
                value={postalCode}
                onChange={handlePostalCodeChange}
                placeholder="Ej. 12345"
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#1E2A38] focus:outline-none"
                inputMode="numeric"
                maxLength={5}
              />
              {postalCode.length > 0 && postalCode.length < 5 && (
                <p className="text-xs text-red-500">
                  El código postal debe tener 5 dígitos.
                </p>
              )}
            </div>
          </div>

          {/* Lista de productos */}
          <ShoppingCartProduct totalCartPrice={totalCart} />

          {/* Subtotal y botón */}
          <div
            className={`border-t px-6 py-4 mt-auto ${
              cartItems.length === 0 ? "hidden" : ""
            }`}
          >
            <div className="flex justify-between text-gray-700 mb-3">
              <span className="font-medium">Subtotal:</span>
              <span className="font-semibold">${subtotal}</span>
            </div>

            {/* Checkout deshabilitado si el CP no es válido */}
            {/* <div
              className={`${
                !isPostalCodeValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            > */}
            <Checkout
              totalCartPrice={subtotal}
              postalCode={postalCode}
              // disabled={!isPostalCodeValid}
            />
            {/* </div> */}

            {/* {!isPostalCodeValid && (
              <p className="text-xs text-red-500 mt-2">
                Ingresa un código postal válido para continuar con el pago.
              </p>
            )} */}

            <p className="text-xs text-[#1E2A38] mt-2">
              Si tienes cualquier duda, la podemos resolver en el chat 💙
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
