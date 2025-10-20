import { useState } from "react";
import Navbar from "../ui/Navbar";
import ProductGrid from "../ui/ProductGrid";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { searchResult } = useOutletContext();

  const [selectedCasa, setSelectedCasa] = useState(null);
  const [selectedOcasion, setSelectedOcasion] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleSelectCasa = (value) => {
    setSelectedCasa(value);
    setSelectedOcasion(null); // limpiar otros filtros
    setSelectedCategoria(null);
  };

  const handleSelectOcasion = (value) => {
    setSelectedOcasion(value);
    setSelectedCasa(null); // limpiar otros filtros
    setSelectedCategoria(null);
  };

  const handleSelectCategoria = (value) => {
    setSelectedCategoria(value);
    setSelectedCasa(null); // limpiar otros filtros
    setSelectedOcasion(null);
  };
  const handleSelectLimpiar = () => {
    setSelectedCategoria(null);
    setSelectedCasa(null); // limpiar otros filtros
    setSelectedOcasion(null);
  };

  return (
    <div>
      <Navbar
        onSelectCasa={handleSelectCasa}
        onSelectOcasion={handleSelectOcasion}
        onSelectCategoria={handleSelectCategoria}
      />
      <ProductGrid
        selectedCasa={selectedCasa}
        selectedOcasion={selectedOcasion}
        selectedCategoria={selectedCategoria}
        onSelectLimpiar={handleSelectLimpiar}
        searchResult={searchResult}
      />
    </div>
  );
}

export default Home;
