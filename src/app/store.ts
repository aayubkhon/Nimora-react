import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReducer from "./screens/HomePage/slice";
import reduxLoger from "redux-logger";
import ShopPageReducer from "./screens/ShopPage/slice";
import OrdersPageReducer from "./screens/OrdersPage/slice";
import CommunityPageReducer from "./screens/CommunityPage/slice";
import MemberPageReducer from "./screens/MemberPage/slice";
import StorePageReducer from "./screens/StorePage/slice";

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    shopPage: ShopPageReducer,
    storePage: StorePageReducer,
    ordersPage: OrdersPageReducer,
    communityPage: CommunityPageReducer,
    memberPage: MemberPageReducer,
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
