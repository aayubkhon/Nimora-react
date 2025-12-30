import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";

const initialState: HomePageState = {
  trendProducts: [],
  bestSellerProduct: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopTradings: (state, action) => {
      state.trendProducts = action.payload;
    },
    setBestSellerProduct: (state, action) => {
      state.bestSellerProduct = action.payload;
    },
  },
});

export const { setTopTradings, setBestSellerProduct: BestSellerProduct } = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer
export default HomePageReducer