import { useState } from "react";
import "../css/App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import LoginPage from "./screens/LoginPage";
import StorePage from "./screens/StorePage/store";
import NavbarHome from "./components/header";
import NavbarOthers from "./components/header/others";
import Footer from "./components/footer";
import OneJewellry from "./screens/ShopPage/oneJewellry";
import ChoosenCatagory from "./screens/ShopPage/choosenCatagory";
import Community from "./screens/CommunityPage/community";
import { HelpPage } from "./screens/HelpPage";
import VisitMyPage from "./screens/MemberPage/visitMyPage";
import VisitOtherPage from './screens/MemberPage/visitOtherPage';
import OrdersPage from "./screens/OrdersPage";
import NotFound from "./screens/NotFound";
import { navbar } from "./lib/navbar";
function App() {
  
  return (
     <>
    
  <div>
        <Routes>
          <Route element={<NavbarHome />}>
            {navbar.map(({ path, element }, id) => {
              return <Route key={id} path={path} element={element} />;
            })}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
  </div>
    
    </>

  );

}

export default App;
