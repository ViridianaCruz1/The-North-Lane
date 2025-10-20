import { Facebook, Twitter, Youtube, Linkedin, Phone } from "lucide-react";
import { FaTiktok, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa";
import NavLinkFooter from "./NavLinkFooter";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 md:py-8 py-3 px-6 md:px-12 lg:px-20 border-t">
      <div className="max-w-7xl mx-auto grid md:gap-10 gap-5 md:grid-cols-2">
        {/* Logo y descripción */}
        <div className="content-center">
          <div className="flex items-center mb-4 justify-center">
            <img
              src="https://xpxfacujdaiugphvpili.supabase.co/storage/v1/object/public/perfumsImages/perfumes-de-diego-letras-horizontal.png"
              className="sm:max-h-32 max-h-20"
            />
          </div>
          <p className="text-sm mb-2 font-italic">
            Entregas personales en Puebla, envíos a todo México.
            <br />
            Si tienes alguna duda, no dudes en contactarme 🙌🏻
          </p>
          <div className="flex items-center space-x-2 text-sm">
            <Phone size={16} className="text-[#C5A572]" />
            <span>+52 (221) 203 4647</span>
          </div>
        </div>

        {/* Enlaces rápidos y redes */}
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm mb-6">
            <NavLinkFooter to="/faqs">FAQs</NavLinkFooter>
            <NavLinkFooter to="/best-sellers">Best Sellers</NavLinkFooter>
            <NavLinkFooter to="/promociones">Promociones</NavLinkFooter>
          </ul>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Síguenos en</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-white shadow rounded-full hover:bg-[#A47E3B] hover:text-white transition"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white shadow rounded-full hover:bg-[#A47E3B] hover:text-white transition"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-10 border-t pt-6 text-center text-xs text-gray-500 italic">
        © 2025 Perfumes de Diego. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
