import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import "../../../css/navbar.scss";
import { CartItem } from "../../types/other";
import { Product } from "../../types/product";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { sweetErrorHandling } from "../../lib/sweetAlert";
import orderApiServices from "../../apiServices/orderApiServices";

const Basket = (props: any) => {
  // ** INITIALIZATIONS ** //
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState("");
  const [count, setCount] = useState(1);
  const cartJson: any = localStorage.getItem("cart_data");
  const current_cart: CartItem[] = JSON.parse(cartJson) ?? [];
  const [cartItems, setCartItems] = useState<CartItem[]>(current_cart);
  const itemsPrice = cartItems.reduce(
    (a: any, c: any) => a + c.price * c.quantity,
    0
  );
  const shippingPrice = itemsPrice > 100 ? 0 : 2;
  const totalPrice = itemsPrice + shippingPrice;
  // ** HANDLES ** //

  const onAdd = (product: Product) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === product._id
    );
    if (exist) {
      const cart_updated = cartItems.map((item: CartItem) =>
        item._id === product._id
          ? {
              ...exist,
              quantity: exist.quantity + 1,
            }
          : item
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const new_item: CartItem = {
        quantity: 1,
        product_id: product._id,
        name: product.product_name,
        price: product.product_price,
        image: product.product_images[0],
      };
      const cart_updated = [...cartItems, { ...new_item }];
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onDelete = (item: CartItem) => {
    const item_data: any = cartItems.find(
      (ele: CartItem) => ele._id === item._id
    );
    if (item_data.quantity === 1) {
      const cart_updated = cartItems.filter(
        (ele: CartItem) => ele._id !== item._id
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    } else {
      const cart_updated = cartItems.map((ele: CartItem) =>
        ele._id === item._id
          ? { ...item_data, quantity: item_data.quantity - 1 }
          : ele
      );
      setCartItems(cart_updated);
      localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    }
  };
  const onRemove = (item: CartItem) => {
    const cart_updated = cartItems.filter(
      (ele: CartItem) => ele._id !== item._id
    );
    setCartItems(cart_updated);
    localStorage.setItem("cart_data", JSON.stringify(cart_updated));
    window.location.reload()
  };

  const onDeleteAll = () => {
    setCartItems([]);
    localStorage.removeItem("cart_data");
  };

const processOrderHandler = async () =>{
  try {
    assert.ok(localStorage.getItem("member_data"),Definer.auth_err1)
    const orderModel = new orderApiServices()
    const order = await orderModel.createOrder(cartItems)
    onDeleteAll()
    navigate(`/checkout/${order.order_id}`)
  } catch (err:any) {
    console.log(err);
    sweetErrorHandling(err).then()
    
  }
}

  const applyCoupon = () => {
    console.log("Apply coupon:", couponCode);
  };

  return (
    <Box className="cart_page">
      {/* Page Header */}
      <Box className="cart_header">
        <Container maxWidth="xl">
          <Typography className="page_title">Shopping Cart</Typography>
          <Typography className="page_subtitle">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="xl" className="cart_container">
        <Box className="cart_content">
          {/* Left Side - Cart Items */}
          <Box className="cart_items_section">
            {/* Trust Badges */}
            <Box className="trust_badges">
              <Box className="trust_badge">
                <LocalShippingOutlinedIcon />
                <Typography>Free Shipping Over $5,000</Typography>
              </Box>
              <Box className="trust_badge">
                <SecurityOutlinedIcon />
                <Typography>Secure Payment</Typography>
              </Box>
              <Box className="trust_badge">
                <ReplayOutlinedIcon />
                <Typography>30-Day Returns</Typography>
              </Box>
            </Box>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <Box className="empty_cart">
                <img src="/home/empty_cart.png" alt="Empty Cart" />
                <Typography className="empty_title">
                  Your cart is empty
                </Typography>
                <Typography className="empty_subtitle">
                  Add some beautiful jewelry to get started
                </Typography>
                <Button
                  className="continue_shopping_btn"
                  onClick={() => navigate("/shop")}
                >
                  Continue Shopping
                </Button>
              </Box>
            ) : (
              <Box className="items_list">
                {cartItems.map((item: any) => {
                  const images_path = `${serverApi}/${item.image}`;

                  return (
                    <Box key={item._id} className="cart_item">
                      <Box className="item_image">
                        <img src={images_path} />
                      </Box>

                      <Box className="item_details">
                        <Typography className="item_name">
                          {item.name}
                        </Typography>

                        <Box className="item_options">
                          {item.size && (
                            <Typography className="item_option">
                              Size: {item.size}
                            </Typography>
                          )}
                        </Box>

                        <Box className="item_actions">
                          <IconButton
                            className="action_icon"
                            // onClick={() => moveToWishlist(item.id)}
                          >
                            <FavoriteBorderIcon />
                          </IconButton>
                          <Typography className="action_text">
                            Move to Wishlist
                          </Typography>

                          <IconButton
                            className="action_icon"
                            onClick={() => onRemove(item)}
                          >
                            <DeleteOutlineIcon />
                          </IconButton>
                          <Typography className="action_text">
                            Remove
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="item_quantity">
                        <IconButton
                          className="qty_btn"
                          onClick={() => onDelete(item)}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography className="qty_number">
                          {item.quantity}
                        </Typography>
                        <IconButton
                          className="qty_btn"
                          onClick={() => onAdd(item)}
                        >
                          <AddIcon />
                        </IconButton>
                      </Box>

                      <Typography className="item_price">
                        ${item.price * item.quantity}
                      </Typography>
                    </Box>
                  );
                })}
              </Box>
            )}

            {/* Continue Shopping */}
            {cartItems.length > 0 && (
              <Button
                className="continue_shopping_link"
                onClick={() => navigate("/shop")}
              >
                ← Continue Shopping
              </Button>
            )}
          </Box>

          {/* Right Side - Order Summary */}
          {cartItems.length > 0 && (
            <Box className="order_summary_section">
              <Box className="summary_card">
                <Typography className="summary_title">Order Summary</Typography>
                <Box className="summary_row">
                  <Typography className="summary_label">Shipping</Typography>
                  <Typography className="summary_value">
                    ${shippingPrice}
                  </Typography>
                </Box>
                {/* <Box className="summary_row">
                  <Typography className="summary_label">Tax (8%)</Typography>
                  <Typography className="summary_value">
                    ${itemsPrice}
                  </Typography>
                </Box> */}
                <Divider className="summary_divider" />
                <Box className="summary_row total_row">
                  <Typography className="total_label">Total</Typography>
                  <Typography className="total_value">${totalPrice}</Typography>
                </Box>

                {/* Coupon Code */}
                <Box className="coupon_section">
                  <TextField
                    fullWidth
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="coupon_input"
                    size="small"
                  />
                  <Button className="apply_coupon_btn" onClick={applyCoupon}>
                    Apply
                  </Button>
                </Box>

                {/* Checkout Button */}
                <Button
                  fullWidth
                  className="checkout_btn"
                  onClick={processOrderHandler}
                >
                  Proceed to Checkout
                </Button>

                {/* Payment Methods */}
                <Box className="payment_methods">
                  <Typography className="payment_label">We Accept</Typography>
                  <Box className="payment_icons">
                    <img src="/icons/Layer3.svg" alt="Paytm" />
                    <img src="/icons/bank.svg" alt="PhonePe" />
                    <img src="/icons/grow.svg" alt="Credit Card" />
                  </Box>
                </Box>
              </Box>

              {/* Promotional Banner */}
              <Box className="promo_banner">
                <Typography className="promo_title">
                  🎁 Free Gift Wrapping
                </Typography>
                <Typography className="promo_text">
                  Make your jewelry extra special with our complimentary luxury
                  gift wrapping
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Basket;
