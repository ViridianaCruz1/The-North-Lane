import FilterMenu from "./FilterMenu";
import OrdenarPor from "./OrdenarPor";
import ExternalsNavbar from "./ExternalsNavbar";
import { NavLink } from "react-router-dom";

export default function Navbar({
  onSelectCasa,
  onSelectOcasion,
  onSelectCategoria,
  onSelectLimpiar,
}) {
  return (
    <div className="bg-gray-200">
      {/* --- Order by --- */}
      <OrdenarPor />

      {/* --- Bottom Navigation --- */}
      <nav className="flex justify-items-stretch justify-between sm:px-6 px-2 py-3 border-t border-gray-200 w-full">
        <FilterMenu
          onSelectCasa={onSelectCasa}
          onSelectOcasion={onSelectOcasion}
          onSelectCategoria={onSelectCategoria}
          onSelectLimpiar={onSelectLimpiar}
        />

        <ul className="lg:flex hidden flex-wrap gap-6 text-gray-700 font-medium">
          <NavLink to="/faqs">
            <ExternalsNavbar>FAQs</ExternalsNavbar>
          </NavLink>
          <NavLink to="/best-sellers">
            <ExternalsNavbar>Best Sellers</ExternalsNavbar>
          </NavLink>
          <NavLink to="/promociones">
            <ExternalsNavbar>Promociones</ExternalsNavbar>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}
