import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import HomePageReducer from './screens/HomePage/slice';
import reduxLoger from 'redux-logger';

export const store = configureStore({
  reducer: {
    homePage: HomePageReducer,
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
