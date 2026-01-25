import React, { useEffect, useState } from "react";
import "../../../css/orders.scss";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Product } from "../../types/product";

import orderApiServices from "../../apiServices/orderApiServices";
import { Order, OrderInput } from "../../types/order";
import {
  retrieveFinishedOrders,
  retrievePauseddOrders,
  retrieveProcessOrders,
} from "../OrdersPage/selector";
import { useNavigate, useParams } from "react-router-dom";
import {
  setFinishedOrders,
  setPausedOrders,
  setProcessOrders,
} from "../OrdersPage/slice";
import { serverApi } from "../../lib/config";

// ** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

// ** REDUX SELECTOR */

const pausedOrderRetriever = createSelector(
  retrievePauseddOrders,
  (pausedOrders) => ({
    pausedOrders,
  })
);
const processOrderRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({
    processOrders,
  })
);
const finishedOrderRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({
    finishedOrders,
  })
);
const MyPageOrders = () => {
  // ** INITIALIZATION */
  const { order_id } = useParams<{ order_id: string }>();
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const { pausedOrders } = useSelector(pausedOrderRetriever);
  const { processOrders } = useSelector(processOrderRetriever);
  const { finishedOrders } = useSelector(finishedOrderRetriever);

  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const orderService = new orderApiServices();
    orderService
      .getMyOrders({ order_status: "PAUSED" })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders({ order_status: "PROCESS" })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));
    orderService
      .getMyOrders({ order_status: "FINISHED" })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, []);

  const tabs = [
    {
      id: 0,
      order_status: "PAUSED",
      label: "PAUSED",
      icon: "⏸️",
      count: pausedOrders?.length || 0,
      orders: pausedOrders || [],
    },
    {
      id: 1,
      order_status: "PROCESS",
      label: "PROCESS",
      icon: "⏳",
      count: processOrders?.length || 0,
      orders: processOrders || [],
    },
    {
      id: 2,
      order_status: "FINISHED",
      label: "FINISHED",
      icon: "✓",
      count: finishedOrders?.length || 0,
      orders: finishedOrders || [],
    },
  ];

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

  const currentTabData = tabs[activeTab];

  return (
    <div className="mypage-orders-wrapper">
      {/* Header */}
      <div className="mypage-orders-header">
        <span className="header-icon">🛍️</span>
        <span className="header-title">My Orders</span>
      </div>

      {/* Tabs */}
      <div className="mypage-orders-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`mypage-tab ${
              activeTab === tab.id ? "active" : ""
            } tab-${tab.order_status.toLowerCase()}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
            <span className="tab-badge">{tab.count}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {currentTabData?.orders.map((order: Order) => {
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
                      <button className="btn btn-outline">
                        CONTINUE SHOPPING
                      </button>
                      <button className="btn btn-primary">CHECKOUT</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}

      {currentTabData.order_status.length > 0 && (
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

export default MyPageOrders;
