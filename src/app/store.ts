import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice';
import reduxLoger from 'redux-logger';
import shopPageReducer from './screens/ShopPage/slice';

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
    shopPage: shopPageReducer,
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
