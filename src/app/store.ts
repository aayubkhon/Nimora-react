import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/HomePage/slice";
import reduxLoger from "redux-logger";
import shopPageReducer from "./screens/ShopPage/slice";
import OrdersPageReducer from "./screens/OrdersPage/slice";

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    shopPage: shopPageReducer,
    OrdersPage: OrdersPageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reduxLoger as any),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
