import { useState, useEffect } from "react";
import supabase from "../services/supabase"; // Asegúrate de tener tu conexión lista
import MenuDesplegado from "./MenuDesplegado";

export default function FilterMenu({
  onSelectStore,
  onSelectBrand,
  onSelectCategoria,
}) {
  const [openMenu, setOpenMenu] = useState(null);
  const [brand, setBrand] = useState([]);
  const [store, setStore] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("inventario").select("*");
      console.log("Datos:", data);
      console.log("Error:", error);
    }
    testConnection();
  }, []);

  // Lógica para obtener los datos desde Supabase
  useEffect(() => {
    async function fetchData() {
      const { data: brandData } = await supabase
        .from("inventario")
        .select("brand");
      const { data: storeData } = await supabase
        .from("inventario")
        .select("store");
      const { data: categoriasData } = await supabase
        .from("inventario")
        .select("categoria");

      setBrand(brandData || []);
      setStore(storeData || []);
      setCategorias(categoriasData || []); // No se usa en el menú desplegable
    }
    fetchData();
  }, []);

  //CATEGORIAS UNICAS
  const brandUnicas = [...new Set(brand.map((item) => item.brand))].sort(
    (a, b) => a.localeCompare(b)
  );
  const storeUnicas = [...new Set(store.map((item) => item.store))].sort(
    (a, b) => a.localeCompare(b)
  );
  const categoriasUnicas = [
    ...new Set(categorias.map((item) => item.categoria)),
  ].sort((a, b) => a.localeCompare(b));

  const toggleMenu = (menu) => {
    setOpenMenu((prevOpenMenu) => (prevOpenMenu === menu ? null : menu));
  };

  // Nueva función: cuando se selecciona una BRAND - STORE - CATEGORIA
  const handleSelectBrand = (nombreBrand) => {
    onSelectBrand(nombreBrand); // comunica al componente padre
    setOpenMenu(null); // cierra el menú
  };
  const handleSelectStore = (nombreStore) => {
    onSelectStore(nombreStore); // comunica al componente padre
    setOpenMenu(null); // cierra el menú
  };
  const handleSelectCategoria = (nombreCategoria) => {
    onSelectCategoria(nombreCategoria); // comunica al componente padre
    setOpenMenu(null); // cierra el menú
  };

  return (
    <div className="relative flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-4">
      {/* Botón Store */}
      <MenuDesplegado
        menuType="store"
        toggleMenu={toggleMenu}
        buttonName="Tienda"
        openMenu={openMenu}
        array={storeUnicas}
        onSelectItem={handleSelectStore}
      />

      {/* Botón Brand */}
      <MenuDesplegado
        menuType="brand"
        toggleMenu={toggleMenu}
        buttonName="Marca"
        openMenu={openMenu}
        array={brandUnicas}
        onSelectItem={handleSelectBrand}
      />
      {/* Botón categoria */}
      <MenuDesplegado
        menuType="categoria"
        toggleMenu={toggleMenu}
        buttonName="Categoría"
        openMenu={openMenu}
        array={categoriasUnicas}
        onSelectItem={handleSelectCategoria}
      />
    </div>
  );
}
