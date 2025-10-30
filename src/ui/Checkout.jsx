import { useCart } from "../context/CartContext";

function Checkout({ totalCartPrice, disabled }) {
  const { cartItems } = useCart();
  const mensajePedido = `Holaa, me gustaría realizar mi pedido:  
${cartItems
  .map((item) => {
    return `${item.quantity > 1 ? item.quantity : ""} - ${
      item.productName
    } de ${item.store} ${item.tone === null ? "" : `(${item.tone})`} ($${
      item.price * item.quantity
    })`;
  })
  .join("\n")}
Total del pedido: $${totalCartPrice}\n
Gracias!`;

  const enlaceWhatsApp = `https://wa.me/2227333376?text=${encodeURIComponent(
    mensajePedido
  )}`;
  return (
    <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
      <button
        className="w-full bg-[#1E2A38] hover:bg-[#4A6A8A] text-white py-2 rounded-md font-medium"
        disabled={cartItems.length === 0 || disabled}
      >
        Realizar pedido
      </button>
    </a>
  );
}

export default Checkout;
