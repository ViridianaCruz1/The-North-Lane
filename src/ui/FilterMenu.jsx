import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import supabase from "../services/supabase"; // Asegúrate de tener tu conexión lista

export default function FilterMenu() {
  const [openMenu, setOpenMenu] = useState(null);
  const [casas, setCasas] = useState([]);
  const [ocasiones, setOcasiones] = useState([]);
  //   const [origenes, setOrigenes] = useState([]);

  // Lógica para obtener los datos desde Supabase
  useEffect(() => {
    async function fetchData() {
      const { data: casasData } = await supabase.from("parfums").select("casa");
      const { data: ocasionesData } = await supabase
        .from("parfums")
        .select("nombre");
      //   const { data: origenesData } = await supabase
      //     .from("parfums")
      //     .select("origen");

      setCasas(casasData || []);
      setOcasiones(ocasionesData || []);
      // setOrigenes(origenesData || []); // No se usa en el menú desplegable
    }
    fetchData();
  }, []);

  //CATEGORIAS UNICAS
  const casasUnicas = [...new Set(casas.map((item) => item.casa))].sort(
    (a, b) => a.localeCompare(b)
  );
  const origenesUnicos = ["Nicho", "Diseñador", "Árabe"];

  // Función para alternar menús
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="relative flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 mt-4">
      {/* Botón Casa */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("casa")}
          className="flex items-center text-xs sm:text-sm gap-2 bg-[#A47E3B] text-white sm:px-4 px-2 py-2 rounded-md hover:bg-[#D4AF7A] transition-colors"
        >
          <Menu className="sm:h-4 sm:w-4 h-3 w-3" />
          Casa
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openMenu === "casa" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "casa" && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-md border border-gray-200 w-40 sm:w-48 z-20">
            {casasUnicas.length > 0 ? (
              casasUnicas.map((casa) => (
                <div
                  key={casa.id}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer border-t border-gray-100"
                >
                  {casa}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">Sin datos</div>
            )}
          </div>
        )}
      </div>

      {/* Botón Ocasión */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("ocasion")}
          className="flex items-center text-xs sm:text-sm gap-2 bg-[#A47E3B] text-white sm:px-4 px-2 py-2 rounded-md hover:bg-[#D4AF7A] transition-colors"
        >
          <Menu className="sm:h-4 sm:w-4 h-3 w-3" />
          Ocasión
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openMenu === "ocasion" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "ocasion" && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-md border border-gray-200 w-40 sm:w-48 z-20">
            {ocasiones.length > 0 ? (
              ocasiones.map((item) => (
                <div
                  key={item.id}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {item.nombre}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">Sin datos</div>
            )}
          </div>
        )}
      </div>

      {/* Botón Origen */}
      <div className="relative">
        <button
          onClick={() => toggleMenu("origen")}
          className="flex items-center text-xs sm:text-sm gap-2 bg-[#A47E3B] text-white sm:px-4 px-2 py-2 rounded-md hover:bg-[#D4AF7A] transition-colors"
        >
          <Menu className="sm:h-4 sm:w-4 h-3 w-3" />
          Origen
          <ChevronDown
            className={`h-4 w-4 transition-transform ${
              openMenu === "origen" ? "rotate-180" : ""
            }`}
          />
        </button>

        {openMenu === "origen" && (
          <div className="absolute mt-2 bg-white shadow-lg rounded-md border border-gray-200 w-40 sm:w-48 z-20">
            {origenesUnicos.length > 0 ? (
              origenesUnicos.map((item) => (
                <div
                  key={item}
                  className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">Sin datos</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
