export default function WhatsAppFlotante() {
  const numero = "2212034647"; // Cambia por tu número con código de país
  const mensaje = "Hola, quiero más información"; // Mensaje predeterminado

  const enlaceWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(
    mensaje
  )}`;

  return (
    <a
      href={enlaceWhatsApp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50"
    >
      <img
        src="https://xpxfacujdaiugphvpili.supabase.co/storage/v1/object/public/perfumsImages/whatsapp-logo.png"
        alt="WhatsApp"
        className="sm:w-14 w-12 rounded-full shadow-sm hover:scale-110 transition-transform hover:shadow-md"
      />
    </a>
  );
}
