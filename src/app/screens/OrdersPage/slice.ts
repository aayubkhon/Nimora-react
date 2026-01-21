import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../types/screen";

const initialState: OrdersPageState = {
  processOrders: [],
  finishedOrders: [],
  cancelledOrders: [],
  pausedOrders: [],
  allOrders: [],
  chosenOrder: null,
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
    setCancelledOrders: (state, action) => {
      state.cancelledOrders = action.payload;
    },
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },
    setAllOrders: (state, action) => {
      state.allOrders = action.payload;
    },
    setChosenOrder: (state, action) => {
      state.chosenOrder = action.payload;
    },
  },
});

export const {
  setPausedOrders,
  setProcessOrders,
  setFinishedOrders,
  setCancelledOrders,
  setChosenOrder,
} = ordersPageSlice.actions;

const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
