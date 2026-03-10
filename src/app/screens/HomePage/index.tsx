import React, { useEffect } from "react";
import "../../../css/home.css";
import TradingProduct from "./TradingProduct";
import DiamondCollection from "./DiamondCollection";
import BestSellerProducts from "./bestSellerProducts";
import Advertisements from "./Advertisements";
import Services from "./Services";
import Header from "./Header";

// ** REDUX SLICE */


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
  }, [])
  return (
    <div className="homepage">
      <Header />
      <TradingProduct />
      <DiamondCollection />
      <BestSellerProducts />
      <Advertisements />
      <Services />
    </div>
  );
};

export default HomePage;
