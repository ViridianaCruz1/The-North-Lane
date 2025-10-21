import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFlotante from "./WhatsAppFlotante";

function AppLayout() {
  const [searchResult, setSearchResult] = useState(null);
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header onSearchResult={setSearchResult} />
      <main className="flex-1">
        <Outlet context={{ searchResult }} />
      </main>
      <Footer />
      <WhatsAppFlotante />
    </div>
  );
}

export default AppLayout;
