import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectShopPage = (state: AppRootState) => state.shopPage;
export const retrieveAllProducts = createSelector(
  selectShopPage,
  (ShopPage) => ShopPage.allProducts,
);

export const retrieveRelatedProducts = createSelector(
  selectShopPage,
  (ShopPage) => ShopPage.relatedProducts,
);

export const productReviewRetriever = createSelector(
  selectShopPage,
  (ShopPage) => ShopPage.targetReviews,
);

export const retrieveChosenProduct = createSelector(
  selectShopPage,
  (ShopPage) => ShopPage.chosenProduct,
);
