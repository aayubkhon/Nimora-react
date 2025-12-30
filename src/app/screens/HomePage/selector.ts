import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrieveTradingProducts = createSelector(
  selectHomePage,
  (HomePage) => HomePage.trendProducts
);

export const retrievebestSellerProduct = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestSellerProduct
);
