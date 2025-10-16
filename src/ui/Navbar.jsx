// import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Menu,
} from "lucide-react";
import FilterMenu from "./FilterMenu";
import OrdenarPor from "./OrdenarPor";
import ExternalsNavbar from "./ExternalsNavbar";

export default function Navbar() {
  //   const [category, setCategory] = useState("All categories");

  return (
    <header className="w-full border-b border-gray-200 bg-gray-200">
      {/* --- Middle Section: Logo + Search + Icons --- */}
      <div className="flex flex-row justify-between items-center px-6 pt-4 pb-0 gap-3">
        {/* Logo */}
        <span className="flex gap-2 items-center">
          <img
            src="https://xpxfacujdaiugphvpili.supabase.co/storage/v1/object/public/perfumsImages/perfumes-de-diego-letras-horizontal.png"
            alt="Logo"
            className="sm:h-20 sm:w-48 w-36"
          />
        </span>

        {/* Search Bar */}
        <div className="flex items-center w-full sm:w-[500px] my-3 sm:mt-0">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full px-4 py-2 focus:outline-none text-sm h-10 rounded-l-md"
          />
          <button className="bg-[#A47E3B] hover:bg-[#D4AF7A] text-white px-4 py-2 rounded-r-md flex items-center justify-center h-10 ">
            <Search size={18} className="text-white" />
          </button>
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex  items-center gap-6 text-[#F5F5F5] mt-3 sm:mt-0">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#A47E3B]" />
            <div>
              <p className="text-xs text-[#2C2C2C]">Escríbeme 🙌🏻</p>
              <p className="text-sm text-[#2C2C2C] font-semibold">
                +52 221 203 4647
              </p>
            </div>
          </div>

          <div className="relative">
            <Heart className="w-5 h-5 hover:text-[#A47E3B] cursor-pointer text-[#2C2C2C]" />
            <span className="absolute -top-2 -right-2 bg-[#A47E3B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </div>
          <div className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-[#A47E3B] cursor-pointer text-[#2C2C2C]" />
            <span className="absolute -top-2 -right-2 bg-[#A47E3B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              1
            </span>
          </div>
        </div>
      </div>

      {/* --- Order by --- */}
      <OrdenarPor />

      {/* --- Bottom Navigation --- */}
      <nav className="flex justify-items-stretch justify-between sm:px-6 px-2 py-3 border-t border-gray-200 w-full">
        <FilterMenu />

        <ul className="lg:flex hidden flex-wrap gap-6 text-gray-700 font-medium">
          <ExternalsNavbar>FAQs</ExternalsNavbar>
          <ExternalsNavbar>Best Sellers</ExternalsNavbar>
          <ExternalsNavbar>Promociones</ExternalsNavbar>
          <ExternalsNavbar>Información</ExternalsNavbar>
        </ul>
      </nav>
    </header>
  );
}
