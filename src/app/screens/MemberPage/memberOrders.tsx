import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Card,
  CardContent,
  Typography,
  LinearProgress,
  Chip,
} from "@mui/material";
// import { ShoppingBag, Clock, CheckCircle, PauseCircle } from 'lucide-react';
import "../../../css/orders.scss";

interface Order {
  id: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
  status: "paused" | "processing" | "finished";
  createdAt: string;
}

interface MyPageOrdersProps {
  orders?: Order[];
}

const MyPageOrders: React.FC<MyPageOrdersProps> = ({
  orders = [
    {
      id: "1",
      name: "Diamond Ring",
      price: 1200,
      quantity: 1,
      total: 1200,
      image: "💎",
      status: "processing",
      createdAt: "2024-01-15",
    },
    {
      id: "2",
      name: "Gold Bracelet",
      price: 450,
      quantity: 2,
      total: 900,
      image: "✨",
      status: "processing",
      createdAt: "2024-01-10",
    },
    {
      id: "3",
      name: "Pearl Necklace",
      price: 650,
      quantity: 1,
      total: 650,
      image: "🌟",
      status: "paused",
      createdAt: "2024-01-12",
    },
    {
      id: "4",
      name: "Ruby Ring",
      price: 2100,
      quantity: 1,
      total: 2100,
      image: "❤️",
      status: "finished",
      createdAt: "2024-01-05",
    },
  ],
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const tabConfig = [
     { value: 0, label: "Paused", status: "paused", icon: "⏸️" },
    { value: 1, label: "Processing", status: "processing", icon: "⏳" },
    { value: 2, label: "Finished", status: "finished", icon: "✓" },
  ];

  const currentStatus = tabConfig[activeTab].status as
    | "paused"
    | "processing"
    | "finished";
  const displayOrders = orders.filter(
    (order) => order.status === currentStatus
  );

  const getStatusProgress = (status: string) => {
    switch (status) {
      case "paused":
        return 30;
      case "processing":
        return 65;
      case "finished":
        return 100;
      default:
        return 0;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "paused":
        return "⏸️";
      case "processing":
        return "⏳";
      case "finished":
        return "✓";
      default:
        return "○";
    }
  };

  return (
    <div className="mypage-orders-wrapper">
      <div className="mypage-orders-container">
        <h3 className="mypage-orders-title">My Orders</h3>

        {/* Tabs */}
        <div className="mypage-orders-tabs">
          {tabConfig.map((tab) => {
            const count = orders.filter((o) => o.status === tab.status).length;
            return (
              <button
                key={tab.value}
                className={`mypage-tab ${
                  activeTab === tab.value ? "active" : ""
                } tab-${tab.status}`}
                onClick={() => setActiveTab(tab.value)}
              >
                <span className="tab-icon">{tab.icon}</span>
                <span className="tab-text">{tab.label}</span>
                <span className="tab-count">{count}</span>
              </button>
            );
          })}
        </div>

        {/* Orders List */}
        <div className="mypage-orders-list">
          {displayOrders.length > 0 ? (
            displayOrders.map((order) => (
              <div
                key={order.id}
                className={`mypage-order-item ${order.status}`}
              >
                {/* Order Item Header */}
                <div className="mypage-order-header">
                  <div className="mypage-order-image">{order.image}</div>
                  <div className="mypage-order-details">
                    <h4 className="mypage-order-name">{order.name}</h4>
                    <p className="mypage-order-meta">
                      ${order.price} × {order.quantity}
                    </p>
                  </div>
                  <div className="mypage-order-price">${order.total}</div>
                </div>

                {/* Progress Bar */}
                <div className="mypage-order-progress">
                  <div className="progress-wrapper">
                    <div
                      className={`progress-bar ${order.status}`}
                      style={{ width: `${getStatusProgress(order.status)}%` }}
                    />
                  </div>
                  <span className="progress-text">
                    {getStatusProgress(order.status)}%
                  </span>
                </div>

                {/* Status Badge */}
                <div className={`mypage-order-status ${order.status}`}>
                  <span className="status-icon">
                    {getStatusIcon(order.status)}
                  </span>
                  <span className="status-text">{order.status}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="mypage-orders-empty">
              <p>No {currentStatus} orders</p>
            </div>
          )}
        </div>

        {/* View All Button */}
        {displayOrders.length > 0 && (
          <button className="mypage-view-all-btn">View All Orders →</button>
        )}
      </div>
    </div>
  );
};

export default MyPageOrders;
