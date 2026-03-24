import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectStorePage = (state: AppRootState) => state.storePage;

export const retrieveStoreShop = createSelector(
  selectStorePage,
  (StorePage) => StorePage.storeShops,
);
