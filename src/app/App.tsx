import React, { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";

import { Routes, Route,} from "react-router-dom";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import HelpPage from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import NavbarHome from "./components/header";
import NavbarShop from "./components/header/shop";
import NavbarOthers from "./components/header/others";
import Footer from "./components/footer";
function App() {
  const main_path = window.location.pathname;
  const [path, setPath] = useState()
  return (
    <>
      {main_path === "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/shop") ? (
        <NavbarShop setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
