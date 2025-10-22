import { useCart } from "../context/CartContext";

function Checkout({ totalCartPrice, postalCode }) {
  const { cartItems } = useCart();

  const mensajePedido = `Hola Diego, me gustaría realizar mi pedido:\n${cartItems
    .map(
      (item) => `${item.mililitros} ml de ${item.nombre} ($${item.totalPrice})`
    )
    .join("\n")}\n
Total del pedido: $${totalCartPrice}
Para calcular el costo de envío, este es mi CP: ${postalCode}
Gracias!`;

  const enlaceWhatsApp = `https://wa.me/2212034647?text=${encodeURIComponent(
    mensajePedido
  )}`;
  return (
    <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer">
      <button
        className="w-full bg-[#A47E3B] hover:bg-[#D4AF7A] text-white py-2 rounded-md font-medium"
        disabled={cartItems.length === 0}
      >
        Realizar pedido
      </button>
    </a>
  );
}

export default Checkout;
