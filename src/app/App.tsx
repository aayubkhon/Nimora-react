import React from "react";
import "../css/App.css";
import "../css/navbar.css";
import { Routes, Route,} from "react-router-dom";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import HelpPage from "./screens/HelpPage";
import LoginPage from "./screens/LoginPage";
import NavbarHome from "./components/header";
import NavbarShop from "./components/header/shop";
import NavbarOthers from "./components/header/others";
function App() {
  const main_path = window.location.pathname;
  return (
    <>
      {main_path === "/" ? (
        <NavbarHome />
      ) : main_path.includes("/shop") ? (
        <NavbarShop />
      ) : (
        <NavbarOthers />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
