import { createContext, useContext, useState } from "react";

// 1 Creamos el contexto
const OrderContext = createContext();

// 2 Creamos el provider (proveedor del contexto)
export function OrderProvider({ children }) {
  const [order, setOrder] = useState("casa"); // valor inicial

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// 3 Creamos un custom hook para usar el contexto fácilmente
export function useOrder() {
  return useContext(OrderContext);
}
