import { useState } from "react";

export default function SelectQuantity({ onChange }) {
  const [cantidad, setCantidad] = useState(1);

  const opciones = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    setCantidad(value);
    if (onChange) onChange(value);
  };

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor="quantity"
        className="text-sm font-medium text-gray-700 mb-1"
      >
        Selecciona cantidad
      </label>
      <select
        id="quantity"
        value={cantidad}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-gray-800 bg-white shadow-sm focus:ring-2 focus:ring-[#B0C4DE] focus:border-[#B0C4DE] transition duration-200"
      >
        {opciones.map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>
    </div>
  );
}
