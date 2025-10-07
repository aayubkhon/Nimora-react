import React, { useState } from "react";
import { Box, Container, Stack,Tab, Tabs } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import "../../../css/orders.css";
import ProcessOrders from "../../components/orders/processOrder";
import PausedOrders from "../../components/orders/pausedOrder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FinishedOrders from "../../components/orders/finishedOrder";
import { TabPanel } from "@mui/lab";

const OrdersPage = () => {
  // ** INITIALIZATION **//
  const [value, setValue] = useState("1");
  // ** HANDLERS **//
  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="order_page">
      <Container
        sx={{ display: "flex", flexDirection: "row", mt: "50px", mb: "50px" }}
      >
        <Stack className="order_left">
          <TabContext value={value}>
            <Box className="order_nav_frame">
              <Box
                className="tab_box"
                sx={{ borderBottom: 1, borderColor: "devider" }}
              >
                <Tabs
                  onChange={handleChange}
                  value={value}
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Tab  className="tab_br" label="My Orders" value={"1"} />
                  <Tab className="tab_br" label="Processing" value={"2"} />
                  <Tab className="tab_br" label="Finished" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack>
              <TabPanel value="1">
                <ProcessOrders />
              </TabPanel>
              <TabPanel value="2">
                <PausedOrders />
              </TabPanel>
              <TabPanel value="3">
                <FinishedOrders />
              </TabPanel>
            </Stack>
          </TabContext>
        </Stack>
        <Stack className="order_right">
          <Box className="user_box">
            <Box className="user_img_wrapper">
              <img src="/icons/user.svg" />
            </Box>
            <p className="user_name">Oliver Queen</p>
            <p className="user_status">Foydalanuvchi</p>
            <Box className="line" />
            <Box className="user_address">
              <LocationOnIcon />
              <span style={{ marginLeft: "10px" }}>Seoul</span>
            </Box>
          </Box>
          <Box className="payment_box">
            <form className="payment_form">
              <input
                type="text"
                placeholder="Card number : 5243 4090 2002 7495"
              />
              <div className="form_divider">
                <input type="text" placeholder="07 / 24" />
                <input type="text" placeholder="CVV : 010" />
              </div>
              <input type="text" placeholder="Oliver Queen" />
            </form>
            <Box className="image_wrapper">
              <img src="/others/Western-union.svg" />
              <img src="/others/master.svg" />
              <img src="/others/Paypal.svg" />
              <img src="/others/visa.svg" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default OrdersPage;
