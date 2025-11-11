import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <div className="Services_frame">
      <Container>
        <Box marginLeft={3}>
          <h2 className="services-title">Stores & services</h2>
          <p className="services-subtitle">
            Discover our thoughtfully designed stores and Piercing Studios
            across North America, Australia and the UK.
          </p>
        </Box>
        <div className="store_wrapper">
          <div className="store_frame">
            <img className="store_img" src="/home/store1.jpeg" alt="" />
            <h3 className="store_title">Our Stores</h3>
            <p className="store_subtitle">
              Your new favorite space to shop, stack, and stay a while.
            </p>
            <Button className="store_click">Visit Our Stores</Button>
          </div>
          <div className="store_frame">
            <img className="store_img" src="/home/store3.jpeg" alt="" />
            <h3 className="store_title">Our Stores</h3>
            <p className="store_subtitle">
              Your new favorite space to shop, stack, and stay a while.
            </p>
            <Button className="store_click">Visit Our Stores</Button>
          </div>
          <div className="store_frame">
            <img className="store_img" src="/home/store2.jpeg" alt="" />
            <h3 className="store_title">Our Stores</h3>
            <p className="store_subtitle">
              Your new favorite space to shop, stack, and stay a while.
            </p>
                        <Button className="store_click">Visit Our Stores</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
