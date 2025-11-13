import React, { useEffect } from "react";
import OurCollection from "./OurCollection";
import "../../../css/home.css";
import TradingProduct from "./TradingProduct";
import DiamondCollection from "./DiamondCollection";
import RecentProducts from "./RecentProducts";
import Advertisements from "./Advertisements";
import Services from "./Services";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrievetopTradings } from "../../screens/HomePage/selector";
import { Shop } from "../../types/user";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopTradings: (data: Shop[]) => dispach(setTopTradings(data)),
});
// ** REDUX SELECTOR */
const topShopRetriever = createSelector(
  retrievetopTradings, 
(topTradings)=>({
  topTradings
})
)
const HomePage = () => {
  // ** INITIALIZATION */
  const {setTopTradings} = actionDispatch(useDispatch());
  const {topTradings} = useSelector(topShopRetriever)
  console.log("topTradings",topTradings)
  useEffect(() => {
    setTopTradings([])
  }, []);
  return (
    <div className="homepage">
      <OurCollection />
      <TradingProduct />
      <DiamondCollection />
      <RecentProducts />
      <Advertisements />
      <Services />
    </div>
  );
};

export default HomePage;
