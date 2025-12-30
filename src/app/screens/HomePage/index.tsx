import React, { useEffect } from "react";
import "../../../css/home.css";
import TradingProduct from "./TradingProduct";
import DiamondCollection from "./DiamondCollection";
import BestSellerProducts from "./bestSellerProducts";
import Advertisements from "./Advertisements";
import Services from "./Services";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import { Shop } from "../../types/user";
import Header from "./Header";
import ShopApiServices from "../../apiServices/shopApiService";

// ** REDUX SLICE */
// const actionDispatch = (dispach: Dispatch) => ({
//   setTopTradings: (data: Shop[]) => dispach(setTopTradings(data)),
// });

// ** REDUX SELECTOR */
// const topShopRetriever = createSelector(retrieveTradingProducts, (topTradings) => ({
//   topTradings,
// }));
const HomePage = () => {
  // ** INITIALIZATION */
  // const { setTopTradings } = actionDispatch(useDispatch());
  useEffect(() => {

  }, []);
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
