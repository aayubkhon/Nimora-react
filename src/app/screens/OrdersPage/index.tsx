import React, { useState } from "react";
import { Box, Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, Checkbox, Stepper, Step, StepLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import "../../../css/checkout.css";


const OrdersPage = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const steps = ["Shipping", "Payment", "Review"];

  const orderItems = [
    { name: "Elegant Diamond Ring", price: 2900, quantity: 1, image: "/home/new_r.jpeg" },
    { name: "Pearl Necklace Set", price: 1850, quantity: 2, image: "/home/new_r.jpeg" }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = shippingMethod === "express" ? 250 : 150;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // Place order
      console.log("Order placed!");
      navigate("/order-confirmation");
    } else {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep === 0) {
      navigate("/cart");
    } else {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <Box className="checkout_page">
      {/* Page Header */}
      <Box className="checkout_header">
        <Container maxWidth="xl">
          <Typography className="checkout_title">Secure Checkout</Typography>
          <Box className="secure_badge">
            <LockOutlinedIcon />
            <Typography>SSL Encrypted Payment</Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" className="checkout_container">
        {/* Progress Stepper */}
        <Stepper activeStep={activeStep} className="checkout_stepper">
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box className="checkout_content">
          {/* Left Side - Forms */}
          <Box className="checkout_forms">
            {/* Step 1: Shipping Information */}
            {activeStep === 0 && (
              <Box className="form_step">
                <Box className="step_header">
                  <LocalShippingOutlinedIcon className="step_icon" />
                  <Typography className="step_title">Shipping Information</Typography>
                </Box>

                <Box className="form_grid">
                  <TextField
                    fullWidth
                    label="First Name"
                    required
                    className="form_field"
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    required
                    className="form_field"
                  />
                </Box>

                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  required
                  className="form_field"
                />

                <TextField
                  fullWidth
                  label="Phone Number"
                  required
                  className="form_field"
                />

                <TextField
                  fullWidth
                  label="Street Address"
                  required
                  className="form_field"
                />

                <Box className="form_grid">
                  <TextField
                    fullWidth
                    label="City"
                    required
                    className="form_field"
                  />
                  <TextField
                    fullWidth
                    label="State / Province"
                    required
                    className="form_field"
                  />
                </Box>

                <Box className="form_grid">
                  <TextField
                    fullWidth
                    label="ZIP / Postal Code"
                    required
                    className="form_field"
                  />
                  <TextField
                    fullWidth
                    label="Country"
                    required
                    className="form_field"
                  />
                </Box>

                {/* Shipping Method */}
                <Box className="shipping_methods">
                  <Typography className="section_subtitle">Shipping Method</Typography>
                  <RadioGroup
                    value={shippingMethod}
                    onChange={(e) => setShippingMethod(e.target.value)}
                  >
                    <Box className="shipping_option">
                      <FormControlLabel
                        value="standard"
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography className="option_title">Standard Shipping</Typography>
                            <Typography className="option_subtitle">5-7 business days</Typography>
                          </Box>
                        }
                      />
                      <Typography className="option_price">$150</Typography>
                    </Box>

                    <Box className="shipping_option">
                      <FormControlLabel
                        value="express"
                        control={<Radio />}
                        label={
                          <Box>
                            <Typography className="option_title">Express Shipping</Typography>
                            <Typography className="option_subtitle">2-3 business days</Typography>
                          </Box>
                        }
                      />
                      <Typography className="option_price">$250</Typography>
                    </Box>
                  </RadioGroup>
                </Box>
              </Box>
            )}

            {/* Step 2: Payment Information */}
            {activeStep === 1 && (
              <Box className="form_step">
                <Box className="step_header">
                  <PaymentOutlinedIcon className="step_icon" />
                  <Typography className="step_title">Payment Information</Typography>
                </Box>

                {/* Payment Method */}
                <RadioGroup
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="payment_methods"
                >
                  <Box className="payment_option">
                    <FormControlLabel
                      value="card"
                      control={<Radio />}
                      label="Credit / Debit Card"
                    />
                    <Box className="card_icons">
                     <img src="/icons/Layer3.svg" alt="Paytm" />
                    <img src="/icons/bank.svg" alt="PhonePe" />
                    <img src="/icons/grow.svg" alt="Credit Card" />
                    </Box>
                  </Box>

                  {paymentMethod === "card" && (
                    <Box className="card_form">
                      <TextField
                        fullWidth
                        label="Card Number"
                        placeholder="1234 5678 9012 3456"
                        required
                        className="form_field"
                      />
                      <TextField
                        fullWidth
                        label="Cardholder Name"
                        required
                        className="form_field"
                      />
                      <Box className="form_grid">
                        <TextField
                          fullWidth
                          label="Expiry Date"
                          placeholder="MM/YY"
                          required
                          className="form_field"
                        />
                        <TextField
                          fullWidth
                          label="CVV"
                          placeholder="123"
                          required
                          className="form_field"
                        />
                      </Box>
                    </Box>
                  )}

                  <Box className="payment_option">
                    <FormControlLabel
                      value="paypal"
                      control={<Radio />}
                      label="PayPal"
                    />
                    <img src="/icons/paypal.svg" alt="PayPal" className="paypal_icon" />
                  </Box>

                  <Box className="payment_option">
                    <FormControlLabel
                      value="cod"
                      control={<Radio />}
                      label="Cash on Delivery"
                    />
                  </Box>
                </RadioGroup>

                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Save this information for next time"
                  className="save_info_checkbox"
                />
              </Box>
            )}

            {/* Step 3: Review Order */}
            {activeStep === 2 && (
              <Box className="form_step">
                <Typography className="step_title">Review Your Order</Typography>

                <Box className="review_section">
                  <Typography className="review_title">Shipping Address</Typography>
                  <Typography className="review_text">
                    John Doe<br />
                    123 Jewelry Lane<br />
                    New York, NY 10001<br />
                    United States
                  </Typography>
                </Box>

                <Box className="review_section">
                  <Typography className="review_title">Shipping Method</Typography>
                  <Typography className="review_text">
                    {shippingMethod === "express" ? "Express Shipping (2-3 days)" : "Standard Shipping (5-7 days)"}
                  </Typography>
                </Box>

                <Box className="review_section">
                  <Typography className="review_title">Payment Method</Typography>
                  <Typography className="review_text">
                    {paymentMethod === "card" ? "Credit Card ending in ••••1234" : 
                     paymentMethod === "paypal" ? "PayPal" : "Cash on Delivery"}
                  </Typography>
                </Box>

                <FormControlLabel
                  control={<Checkbox required />}
                  label={
                    <Typography className="terms_text">
                      I agree to the <span className="terms_link">Terms & Conditions</span> and <span className="terms_link">Privacy Policy</span>
                    </Typography>
                  }
                  className="terms_checkbox"
                />
              </Box>
            )}

            {/* Navigation Buttons */}
            <Box className="checkout_actions">
              <Button
                className="back_btn"
                onClick={handleBack}
              >
                {activeStep === 0 ? "Back to Cart" : "Back"}
              </Button>
              <Button
                className="next_btn"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Place Order" : "Continue"}
              </Button>
            </Box>
          </Box>

          {/* Right Side - Order Summary */}
          <Box className="checkout_summary">
            <Box className="summary_card">
              <Typography className="summary_title">Order Summary</Typography>

              {/* Order Items */}
              <Box className="summary_items">
                {orderItems.map((item, index) => (
                  <Box key={index} className="summary_item">
                    <img src={item.image} alt={item.name} className="summary_item_image" />
                    <Box className="summary_item_details">
                      <Typography className="summary_item_name">{item.name}</Typography>
                      <Typography className="summary_item_qty">Qty: {item.quantity}</Typography>
                    </Box>
                    <Typography className="summary_item_price">
                      ${(item.price * item.quantity).toLocaleString()}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Pricing */}
              <Box className="summary_pricing">
                <Box className="pricing_row">
                  <Typography>Subtotal</Typography>
                  <Typography>${subtotal.toLocaleString()}</Typography>
                </Box>
                <Box className="pricing_row">
                  <Typography>Shipping</Typography>
                  <Typography>${shipping}</Typography>
                </Box>
                <Box className="pricing_row">
                  <Typography>Tax</Typography>
                  <Typography>${tax.toFixed(2)}</Typography>
                </Box>
                <Box className="pricing_row total_row">
                  <Typography>Total</Typography>
                  <Typography>${total.toLocaleString()}</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OrdersPage;