import { createSelector } from "reselect";
import { AppRootState } from "../../types/screen";

const selectOrdersPage = (state: AppRootState) => state.ordersPage;

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.processOrders
);
export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.finishedOrders
);
export const retrieveCancelledOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.cancelledOrders
);
export const retrievePauseddOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.pausedOrders
);
export const retrieveAllOrders = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.allOrders
);
export const retrieveChosenOrder = createSelector(
  selectOrdersPage,
  (OrdersPage) => OrdersPage.chosenOrder
);
