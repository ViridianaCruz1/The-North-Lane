import { Phone } from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#F3FAFF] text-gray-700 md:py-8 py-3 px-6 md:px-12 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid md:gap-10 gap-5 md:grid-cols-2">
        {/* Logo y descripción */}
        <div className="content-center">
          <div className="flex items-center mb-4 justify-center">
            <img
              src="https://zstwxxjeisnfqpzdddca.supabase.co/storage/v1/object/sign/inventario/logoCuadrado.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmEyNzUyMy0wNWZmLTQyNWYtOTFjOS1iY2M5MzYzMjNiYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbnZlbnRhcmlvL2xvZ29DdWFkcmFkby5wbmciLCJpYXQiOjE3NjE2MDMzMjUsImV4cCI6MTc5MzEzOTMyNX0.84Y3BbRy9mKXIE-2pDbjXaJk3qUqo1Ee8JbcRKf3hvg"
              className="sm:max-h-36 max-h-20"
            />
          </div>
          <p className="text-sm mb-2 font-italic">
            Entregas personales en Puebla, envíos a todo México.
            <br />
            Si tienes alguna duda, no dudes en contactarme 🙌🏻
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <Phone size={16} className="text-[#4A6A8A]" />
            <span>+52 (222) 733 3376</span>
          </div>
        </div>

        {/* Enlaces rápidos y redes */}
        <div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Escríbeme en</h3>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/2227333376"
                className="p-2 bg-white shadow rounded-full hover:bg-[#1E2A38] hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={18} />
              </a>
              {/* <a
                href="https:..."
                className="p-2 bg-white shadow rounded-full hover:bg-[#1E2A38] hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok size={18} />
              </a> */}
            </div>
            <div className="mt-2">
              Podemos cotizar cualquier producto que no veas en el catálogo,
              solo escríbenos :)
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500 italic">
        © 2025 The North Lane. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
