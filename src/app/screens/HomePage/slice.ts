import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../types/screen";

const initialState: HomePageState = {
  topTradings: [],
  bestSellerProduct: [],
};

const HomePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setTopTradings: (state, action) => {
      state.topTradings = action.payload;
    },
    setBestSellerProduct: (state, action) => {
      state.bestSellerProduct = action.payload;
    },
  },
});

export const { setTopTradings, setBestSellerProduct } = HomePageSlice.actions;

const HomePageReducer = HomePageSlice.reducer
export default HomePageReducer