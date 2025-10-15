import { useState, useEffect } from "react";
import { Menu, ChevronDown } from "lucide-react";
import supabase from "../services/supabase"; // Asegúrate de tener tu conexión lista
import MenuDesplegado from "./MenuDesplegado";

export default function FilterMenu() {
  const [openMenu, setOpenMenu] = useState(null);
  const [casas, setCasas] = useState([]);
  const [ocasiones, setOcasiones] = useState([]);
  //   const [categorias, setCategorias] = useState([]);

  // Lógica para obtener los datos desde Supabase
  useEffect(() => {
    async function fetchData() {
      const { data: casasData } = await supabase.from("parfums").select("casa");
      const { data: ocasionesData } = await supabase
        .from("parfums")
        .select("nombre");
      //   const { data: categoriasData } = await supabase
      //     .from("parfums")
      //     .select("categoria");

      setCasas(casasData || []);
      setOcasiones(ocasionesData || []);
      // setCategorias(categoriasData || []); // No se usa en el menú desplegable
    }
    fetchData();
  }, []);

  //CATEGORIAS UNICAS
  const casasUnicas = [...new Set(casas.map((item) => item.casa))].sort(
    (a, b) => a.localeCompare(b)
  );
  const ocasionesUnicas = [
    ...new Set(ocasiones.map((item) => item.nombre)),
  ].sort((a, b) => a.localeCompare(b));
  const categoriasUnicas = ["Árabe", "Artista", "Diseñador", "Nicho"];

  // Función para alternar menús
  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="relative flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-4">
      {/* Botón Casa */}
      <MenuDesplegado
        menuType="casa"
        toggleMenu={toggleMenu}
        buttonName="Casa"
        openMenu={openMenu}
        array={casasUnicas}
      />

      {/* Botón Ocasión */}
      <MenuDesplegado
        menuType="ocasion"
        toggleMenu={toggleMenu}
        buttonName="Ocasión"
        openMenu={openMenu}
        array={ocasionesUnicas}
      />

      {/* Botón categoria */}
      <MenuDesplegado
        menuType="categoria"
        toggleMenu={toggleMenu}
        buttonName="Categoría"
        openMenu={openMenu}
        array={categoriasUnicas}
      />
    </div>
  );
}
