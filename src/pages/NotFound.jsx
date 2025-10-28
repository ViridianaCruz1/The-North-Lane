import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center content-center bg-gray-50 text-gray-800 px-6 my-3">
      {/* Contenedor principal */}
      <div className="text-center max-w-md">
        {/* Ícono decorativo */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#1E2A38]/10 p-4 rounded-full animate-pulse">
            <Sparkles size={40} className="text-[#1E2A38]" />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-8xl font-serif text-[#1E2A38] mb-2">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>

        {/* Texto descriptivo */}
        <p className="text-gray-600 mb-8 leading-relaxed">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
          Te invitamos a volver al inicio y continuar explorando nuestros
          productos exclusivos.
        </p>

        {/* Botón de regreso */}
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-[#1E2A38] text-white rounded-full font-medium hover:bg-[#D4AF7A] transition-all shadow-md hover:shadow-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
