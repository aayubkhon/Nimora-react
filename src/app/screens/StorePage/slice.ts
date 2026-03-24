import { createSlice } from "@reduxjs/toolkit";
import { StorePageState } from "../../types/screen";

const initialState: StorePageState = {
      storeShops: []
};

const StorePageSlice = createSlice({
   name:"storePage",
   initialState,
   reducers:{
      setStoreShops:(state,action) =>{
         state.storeShops = action.payload
      }
   }
})

export const { setStoreShops} = StorePageSlice.actions;

const StorePageReducer = StorePageSlice.reducer
export default StorePageReducer