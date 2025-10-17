import FilterMenu from "./FilterMenu";
import OrdenarPor from "./OrdenarPor";
import ExternalsNavbar from "./ExternalsNavbar";

export default function Navbar({
  onSelectCasa,
  onSelectOcasion,
  onSelectCategoria,
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
        />

        <ul className="lg:flex hidden flex-wrap gap-6 text-gray-700 font-medium">
          <ExternalsNavbar>FAQs</ExternalsNavbar>
          <ExternalsNavbar>Best Sellers</ExternalsNavbar>
          <ExternalsNavbar>Promociones</ExternalsNavbar>
        </ul>
      </nav>
    </div>
  );
}
