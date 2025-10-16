// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import FAQs from "./pages/FAQs";
import BestSellers from "./pages/BestSellers";
import Promociones from "./pages/Promociones";
import AppLayout from "./ui/AppLayout";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
      {
        path: "/best-sellers",
        element: <BestSellers />,
      },
      {
        path: "/promociones",
        element: <Promociones />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/faqs" element={<FAQs />} />
    //     <Route path="/best-sellers" element={<BestSellers />} />
    //     <Route path="/promociones" element={<Promociones />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
