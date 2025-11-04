// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";

import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Prehome from "./pages/Prehome";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Prehome />,
      },

      {
        path: "/product/:nombre/:id",
        element: <ProductDetail />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
