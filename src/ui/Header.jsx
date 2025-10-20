import {
  Heart,
  ShoppingCart,
  User,
  Phone,
  ChevronDown,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Header({ onSearchResult }) {
  return (
    <header className="w-full border-b border-gray-200 bg-gray-200">
      {/* --- Middle Section: Logo + Search + Icons --- */}
      <div className="flex flex-row justify-between items-center px-6 pt-4 pb-0 gap-3">
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img
            src="https://xpxfacujdaiugphvpili.supabase.co/storage/v1/object/public/perfumsImages/perfumes-de-diego-letras-horizontal.png"
            alt="Logo"
            className="sm:h-20 sm:w-48 w-36"
          />
        </Link>

        {/* Search Bar */}
        <SearchBar onSearchResult={onSearchResult} />

        {/* Right Icons */}
        {/* <div className="hidden lg:flex  items-center gap-6 text-[#F5F5F5] mt-3 sm:mt-0">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#A47E3B]" />
            <div>
              <p className="text-xs text-[#2C2C2C]">Escríbeme</p>
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
        </div> */}
      </div>
    </header>
  );
}

export default Header;
