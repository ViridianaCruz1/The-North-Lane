import { Menu, ChevronDown } from "lucide-react";

function MenuDesplegado({
  toggleMenu,
  menuType,
  buttonName,
  openMenu,
  array,
  onSelectItem,
}) {
  return (
    <div className="relative">
      <button
        onClick={() => toggleMenu(menuType)}
        className="flex items-center text-xs sm:text-sm gap-2 bg-[#A47E3B] text-white sm:px-4 px-1 py-2 rounded-md hover:bg-[#D4AF7A] transition-colors"
      >
        <Menu className="sm:h-4 sm:w-4 h-3 w-3" />
        {buttonName}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            openMenu === menuType ? "rotate-180" : ""
          }`}
        />
      </button>

      {openMenu === menuType && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-md border border-gray-200 w-40 sm:w-48 z-20 max-h-64 overflow-y-auto">
          {array.length > 0 ? (
            array.map((item, index) => (
              <div
                key={index}
                onClick={() => onSelectItem(item)}
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer border-t border-gray-100"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="px-3 py-2 text-sm text-gray-500">Sin datos</div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuDesplegado;
