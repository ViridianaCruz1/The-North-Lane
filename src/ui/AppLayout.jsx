// import { useState } from "react";
// import { Outlet } from "react-router-dom";
// import Header from "./Header";
// import Footer from "./Footer";
// import WhatsAppFlotante from "./WhatsAppFlotante";
// import ShoppingCart from "./ShoppingCart";

// function AppLayout() {
//   const [searchResult, setSearchResult] = useState(null);
//   return (
//     <div className="flex flex-col min-h-screen bg-gray-50">
//       <Header onSearchResult={setSearchResult} />
//       <main className=" flex-1 bg-[#F3FAFF]">
//         <Outlet context={{ searchResult }} />
//       </main>
//       <ShoppingCart />
//       <Footer />
//       <WhatsAppFlotante />
//     </div>
//   );
// }

// export default AppLayout;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFlotante from "./WhatsAppFlotante";
import ShoppingCart from "./ShoppingCart";

function AppLayout() {
  const [searchResult, setSearchResult] = useState(null);

  // 🔹 Estados globales para Home / Prehome
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedStore, setSelectedStore] = useState(null);
  const [selectedCategoria, setSelectedCategoria] = useState(null);

  const handleSelectBrand = (value) => {
    setSelectedBrand(value);
    setSelectedStore(null);
    setSelectedCategoria(null);
  };

  const handleSelectStore = (value) => {
    setSelectedStore(value);
    setSelectedBrand(null);
    setSelectedCategoria(null);
  };

  const handleSelectCategoria = (value) => {
    setSelectedCategoria(value);
    setSelectedBrand(null);
    setSelectedStore(null);
  };

  const handleSelectLimpiar = () => {
    setSelectedCategoria(null);
    setSelectedBrand(null);
    setSelectedStore(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onSearchResult={setSearchResult} />
      <main className="flex-1 bg-[#F3FAFF]">
        {/* 🔹 Pasas todos los estados y funciones al contexto */}
        <Outlet
          context={{
            searchResult,
            selectedBrand,
            selectedStore,
            selectedCategoria,
            handleSelectBrand,
            handleSelectStore,
            handleSelectCategoria,
            handleSelectLimpiar,
          }}
        />
      </main>
      <ShoppingCart />
      <Footer />
      <WhatsAppFlotante />
    </div>
  );
}

export default AppLayout;
