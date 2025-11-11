import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectHomePage = (state: AppRootState) => state.homePage;

export const retrievetopTradings = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topTradings
);

export const retrievebestSellerProduct = createSelector(
  selectHomePage,
  (HomePage) => HomePage.bestSellerProduct
);
