import { useState } from "react";
import Navbar from "../ui/Navbar";
import ProductGrid from "../ui/ProductGrid";
import { useOutletContext } from "react-router-dom";

function Home() {
  const { searchResult } = useOutletContext();

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleSelectBrand = (value) => {
    setSelectedBrand(value);
    setSelectedStore(null); // limpiar otros filtros
    setSelectedCategoria(null);
  };

  const handleSelectStore = (value) => {
    setSelectedStore(value);
    setSelectedBrand(null); // limpiar otros filtros
    setSelectedCategoria(null);
  };

  const handleSelectCategoria = (value) => {
    setSelectedCategoria(value);
    setSelectedBrand(null); // limpiar otros filtros
    setSelectedStore(null);
  };
  const handleSelectLimpiar = () => {
    setSelectedCategoria(null);
    setSelectedBrand(null); // limpiar otros filtros
    setSelectedStore(null);
  };

  return (
    <div>
      <Navbar
        onSelectBrand={handleSelectBrand}
        onSelectStore={handleSelectStore}
        onSelectCategoria={handleSelectCategoria}
      />
      <ProductGrid
        selectedBrand={selectedBrand}
        selectedStore={selectedStore}
        selectedCategoria={selectedCategoria}
        onSelectLimpiar={handleSelectLimpiar}
        searchResult={searchResult}
      />
    </div>
  );
}

export default Home;
