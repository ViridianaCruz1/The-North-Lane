import FilterMenu from "./FilterMenu";
import OrdenarPor from "./OrdenarPor";

import { NavLink } from "react-router-dom";

export default function Navbar({
  onSelectBrand,
  onSelectStore,
  onSelectCategoria,
  onSelectLimpiar,
}) {
  return (
    <div className="bg-[#F3FAFF]">
      {/* --- Order by --- */}
      <OrdenarPor />

      {/* --- Bottom Navigation --- */}
      <nav className="flex justify-items-stretch justify-between sm:px-6 px-2 py-3 border-t border-gray-200 w-full">
        <FilterMenu
          onSelectBrand={onSelectBrand}
          onSelectStore={onSelectStore}
          onSelectCategoria={onSelectCategoria}
          onSelectLimpiar={onSelectLimpiar}
        />
      </nav>
    </div>
  );
}
