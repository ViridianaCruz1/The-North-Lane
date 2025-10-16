import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/form" element={<FormTemplate />} />
        <Route path="/form/datos-de-vivienda" element={<FormTemplate />} />
        <Route path="/form/contrato" element={<FormTemplate />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
