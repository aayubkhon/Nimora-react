import { createSlice } from "@reduxjs/toolkit";
import { ShopPageState } from "../../types/screen";
import { Review } from "../../types/review";

const initialState: ShopPageState = {
  allProducts: [],
  relatedProducts: [],
  chosenProduct: null,
  productReviews: [],
  targetReviews: [],
};

const ShopPageSlice = createSlice({
  name: "shopPage",
  initialState,
  reducers: {
    setAllProducts: (state, action) => {
      state.allProducts = action.payload;
    },
    setRelatedProducts: (state, action) => {
      state.relatedProducts = action.payload;
    },
    setProductReviews: (state, action) => {
      state.productReviews = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
    setTargetReviews: (state, action) => {
      state.targetReviews = action.payload;
    },
  },
});

export const {
  setAllProducts,
  setRelatedProducts,
  setProductReviews,
  setChosenProduct,
  setTargetReviews
} = ShopPageSlice.actions;

const shopPageReducer = ShopPageSlice.reducer;
export default shopPageReducer;
