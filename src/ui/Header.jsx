import { ShoppingCart, ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useCart } from "../context/CartContext";

function Header({ onSearchResult }) {
  const { toggleCart, totalQuantity } = useCart();

  return (
    <header className="w-full border-b border-[#F3FAFF] bg-[#F3FAFF]">
      {/* --- Middle Section: Logo + Search + Icons --- */}
      <div className="flex flex-row justify-between items-center px-3 sm:px-6 pt-4 pb-0 gap-3">
        {/* Logo */}
        <Link to="/" className="flex sm:gap-2 items-center">
          <img
            src="https://zstwxxjeisnfqpzdddca.supabase.co/storage/v1/object/sign/inventario/logoHorizontal.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zYmEyNzUyMy0wNWZmLTQyNWYtOTFjOS1iY2M5MzYzMjNiYzMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbnZlbnRhcmlvL2xvZ29Ib3Jpem9udGFsLnBuZyIsImlhdCI6MTc2MTYwMzc5NCwiZXhwIjoxNzkzMTM5Nzk0fQ.cAMlLPeuXv5Sg4ETKj5ycGUdtY93F9kaN9LkMH4OMK4"
            alt="Logo"
            className=" sm:w-48 w-24 my-3"
          />
        </Link>

        {/* Search + Carrito */}
        <div className="flex  items-center gap-6 text-[#F3FAFF] mt-3 sm:mt-0">
          {/* Search Bar */}
          <SearchBar onSearchResult={onSearchResult} />

          <div className="relative">
            <button onClick={toggleCart}>
              <ShoppingCart className="w-5 h-5 hover:text-[#1E2A38] cursor-pointer text-[#1E2A38]" />
            </button>
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#1E2A38] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[#F3FAFF]">
                {totalQuantity}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
