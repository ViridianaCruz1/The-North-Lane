// import { useCart } from "../context/CartContext";
// import { X } from "lucide-react";
// import ShoppingCartProduct from "./ShoppingCartProduct";
// import Checkout from "./Checkout";
// import { useState } from "react";

// export default function ShoppingCart() {
//   const { cartItems, isCartOpen, closeCart } = useCart();
//   const [postalCode, setPostalCode] = useState("");

//   if (!isCartOpen) return null; // solo se renderiza si está abierto

//   const totalCartPrice = cartItems.reduce((accumulator, item) => {
//     return accumulator + item.totalPrice;
//   }, 0);

//   // Validar solo 5 dígitos numéricos
//   const handlePostalCodeChange = (e) => {
//     const value = e.target.value;
//     if (/^\d{0,5}$/.test(value)) {
//       setPostalCode(value);
//     }
//   };

//   return (
//     <>
//       {/* Fondo oscuro */}
//       <div
//         className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
//           isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//         onClick={closeCart}
//       ></div>

//       {/* Panel del carrito */}
//       <div
//         className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out
//           ${isCartOpen ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         <div className="flex items-center justify-between px-6 py-4 border-b">
//           <h2 className="text-xl font-semibold">Pedido 🛒</h2>
//           <button
//             onClick={closeCart}
//             className="text-gray-500 hover:text-gray-800"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <div className="flex flex-col h-[calc(100%-70px)]">
//           <div className=" px-4 pt-3 text-sm text-gray-600 italic">
//             El costo de envío se calcula al momento de realizar tu pago
//           </div>

//           {/* Campo para ingresar el CP */}
//           <div className="border-b px-4 py-2 flex flex-col gap-2">
//             <label
//               htmlFor="postalCode"
//               className="text-sm font-medium text-gray-700"
//             >
//               Ingresa tu código postal:
//             </label>
//             <input
//               id="postalCode"
//               type="text"
//               value={postalCode}
//               onChange={handlePostalCodeChange}
//               placeholder="Ej. 12345"
//               className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#A47E3B] focus:outline-none"
//               inputMode="numeric"
//               maxLength={5}
//               required
//             />
//             {postalCode.length > 0 && postalCode.length < 5 && (
//               <p className="text-xs text-red-500">
//                 El código postal debe tener 5 dígitos.
//               </p>
//             )}
//           </div>

//           {/* Lista de productos */}
//           <ShoppingCartProduct />

//           {/* Subtotal y botón */}
//           <div className="border-t px-6 py-4">
//             <div className="flex justify-between text-gray-700 mb-3">
//               <span className="font-medium">Subtotal:</span>
//               <span className="font-semibold">${totalCartPrice}</span>
//             </div>
//             <Checkout totalCartPrice={totalCartPrice} postalCode={postalCode} />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { useCart } from "../context/CartContext";
import { X } from "lucide-react";
import ShoppingCartProduct from "./ShoppingCartProduct";
import Checkout from "./Checkout";
import { useState } from "react";

export default function ShoppingCart() {
  const { cartItems, isCartOpen, closeCart } = useCart();
  const [postalCode, setPostalCode] = useState("");

  if (!isCartOpen) return null;

  const totalCartPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.totalPrice,
    0
  );

  const handlePostalCodeChange = (e) => {
    const value = e.target.value;
    if (/^\d{0,5}$/.test(value)) {
      setPostalCode(value);
    }
  };

  const isPostalCodeValid = postalCode.length === 5;

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
          <div className="border-b p-3 text-sm text-gray-600 italic">
            El costo de envío se calcula al momento de realizar tu pago
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
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-[#A47E3B] focus:outline-none"
              inputMode="numeric"
              maxLength={5}
            />
            {postalCode.length > 0 && postalCode.length < 5 && (
              <p className="text-xs text-red-500">
                El código postal debe tener 5 dígitos.
              </p>
            )}
          </div>

          {/* Lista de productos */}
          <ShoppingCartProduct />

          {/* Subtotal y botón */}
          <div className="border-t px-6 py-4 mt-auto">
            <div className="flex justify-between text-gray-700 mb-3">
              <span className="font-medium">Subtotal:</span>
              <span className="font-semibold">${totalCartPrice}</span>
            </div>

            {/* Checkout deshabilitado si el CP no es válido */}
            <div
              className={`${
                !isPostalCodeValid ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <Checkout
                totalCartPrice={totalCartPrice}
                disabled={!isPostalCodeValid}
              />
            </div>

            {!isPostalCodeValid && (
              <p className="text-xs text-red-500 mt-2">
                Ingresa un código postal válido para continuar con el pago.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
