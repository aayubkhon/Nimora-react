import React from "react";
import { Container, Divider, Rating, Typography } from "@mui/material";
import "../../../css/products.scss";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";

function OneJewellry() {
  return (
    <div className="OneJewellry_frame">
      <div className="container">
        <div className="grid_container">
          <div className="item-1">
            <img className="first_img" src="/home/best.jpeg" alt="" />
          </div>
          <div className="item-2">
            <img className="second_img" src="/home/liu.jpeg" alt="" />
          </div>
          <div className="item-3">
            <img className="three_img" src="/home/best.jpeg" alt="" />
          </div>
          <div className="item-4">
            <img className="four_img" src="/home/best.jpeg" alt="" />
          </div>
        </div>
        <Stack className="main_title" flexDirection={"column"}>
          <h1 className="product_name">Elegant Gold Necklace</h1>
          <Box display={"flex"}>
            <Rating
              sx={{ mt: 2 }}
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
            />
            <Typography margin={2}>2 rewiews</Typography>
          </Box>
          <Box flexDirection={"column"}>
            <p className="product_price">KRW210,000</p>
            <p className="product_title">
              The Gift He’ll Keep Forever - Covered by a Lifetime Warranty,
              Guaranteed to Never Fade or Tarnish.
            </p>
            <p className="pr_size">Size:</p>
            <div className="product_size">
              <p className="bg_radius">XS</p>
              <p className="bg_radius">S</p>
              <p className="bg_radius">L</p>
              <p className="bg_radius">M</p>
            </div>
            <p className="hurry_up">
              Hurry up! Only
              <strong> 24 items </strong>
              left in stock.
            </p>
          </Box>
            <Divider sx={{mt:4}} orientation="horizontal" />
        </Stack>
      </div>
    </div>
  );
}

export default OneJewellry;
