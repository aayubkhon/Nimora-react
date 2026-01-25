import React, { useState } from "react";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Stack } from "@mui/material";
import moment from "moment";
import "../../../css/orders.scss";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import orderApiServices from "../../apiServices/orderApiServices";
import { Order, OrderInput } from "../../types/order";
import { useNavigate, useParams } from "react-router-dom";
import { serverApi } from "../../lib/config";
import { retrievePauseddOrders } from "../../screens/OrdersPage/selector";
import { setPausedOrders } from "../../screens/OrdersPage/slice";
import { Product } from "../../types/product";

// ** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
});

// ** REDUX SELECTOR */

const pausedOrderRetriever = createSelector(
  retrievePauseddOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);

const PausedOrders = (props: any) => {
  // ** INITIALIZATION */
  const { order_id } = useParams<{ order_id: string }>();
  const { setPausedOrders } = actionDispatch(useDispatch());
  const { pausedOrders } = useSelector(pausedOrderRetriever);
  const getStatusProgress = (order_status: string) => {
    switch (order_status) {
      case "PAUSED":
        return 30;
      case "PROCESS":
        return 65;
      case "FINISHED":
        return 100;
      default:
        return 0;
    }
  };
  return (
    <div className="mypage-orders-wrapper">
      {pausedOrders?.map((order: Order) => {
        return (
          <div key={order_id}>
            {order.order_items.map((item) => {
              const product: Product = order.product_data.filter(
                (ele) => ele._id === item.product_id
              )[0];

              if (!product) return null;
              const images_path = `${serverApi}/${product.product_images[0]}`;
              return (
                <div key={item._id} className="mypage-orders-content">
                  <div className={`mypage-order-item ${order.order_status}`}>
                    {/* Order Header */}
                    <div className="order-header">
                      <img src={images_path} className="order-image" />
                      <div className="order-details">
                        <div className="order-name">{product.product_name}</div>
                        <div className="order-meta">
                          ${item.item_price} × {item.item_quantity}{" "}
                        </div>
                      </div>
                      <div className="order-total">${item.item_price}</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="order-progress">
                      <div className="progress-label">
                        <span>{getStatusProgress(order.order_status)}%</span>
                      </div>
                      <div className="progress-bar-wrapper">
                        <div
                          className={`progress-bar`}
                          style={{
                            width: `${getStatusProgress(order.order_status)}%`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className={`order-status-badge ${order.order_status}`}>
                      <span className="status-dot">●</span>
                      <span className="status-text">{order.order_status}</span>
                    </div>
                    <div className="summary-actions">
                      <button className="btn btn-outline">CANCELL</button>
                      <button className="btn btn-primary">TO PROCESS</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {pausedOrders.length > 0 && (
        <div className="order-summary">
          <h3 className="summary-title">Order Summary</h3>

          <div className="summary-rows">
            <div className="summary-row">
              <span className="summary-label">Tax</span>
              <span className="summary-value">$222</span>
            </div>
          </div>

          {/* Total */}
          <div className="summary-total">
            <span className="total-label">Total</span>
            <span className="total-value">$2222</span>
          </div>

          {/* Action Buttons */}
          <div className="summary-actions">
            <button className="btn btn-outline">CONTINUE SHOPPING</button>
            <button className="btn btn-primary">CHECKOUT</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PausedOrders;
