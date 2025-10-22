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
import { useCart } from "../context/CartContext";

function Header({ onSearchResult }) {
  const { toggleCart, cartItems } = useCart();

  const totalItems = cartItems.length;

  return (
    <header className="w-full border-b border-gray-200 bg-gray-200">
      {/* --- Middle Section: Logo + Search + Icons --- */}
      <div className="flex flex-row justify-between items-center px-3 sm:px-6 pt-4 pb-0 gap-3">
        {/* Logo */}
        <Link to="/" className="flex sm:gap-2 items-center">
          <img
            src="https://xpxfacujdaiugphvpili.supabase.co/storage/v1/object/public/perfumsImages/perfumes-de-diego-letras-horizontal.png"
            alt="Logo"
            className="sm:h-20 sm:w-48 w-24 my-3"
          />
        </Link>

        {/* Search + Carrito */}
        <div className="flex  items-center gap-6 text-[#F5F5F5] mt-3 sm:mt-0">
          {/* Search Bar */}
          <SearchBar onSearchResult={onSearchResult} />

          <div className="relative">
            <button onClick={toggleCart}>
              <ShoppingCart className="w-5 h-5 hover:text-[#A47E3B] cursor-pointer text-[#2C2C2C]" />
            </button>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#A47E3B] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
