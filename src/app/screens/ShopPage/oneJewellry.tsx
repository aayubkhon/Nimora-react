import React from "react";
import {
  Badge,
  Button,
  Checkbox,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import "../../../css/products.scss";
import { Stack } from "@mui/material";
import { Box } from "@mui/material";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
function OneJewellry() {
  const [count, setCount] = useState(0);
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
        <Stack className="main">
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
          <Divider sx={{ mt: 4 }} orientation="horizontal" />
          <Box className={"button_container"}>
            <Box display={"flex"}>
              <div className="bt_style">
                <Button
                  className="count_btn"
                  color="secondary"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </Button>
                <h4>{count}</h4>
                <Button
                  className="count_btn"
                  color="secondary"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </Button>
              </div>
              <Box className={"btn_box"}>
                <Button color="secondary" className="btn_add">
                  Add to cart
                </Button>
                <Badge
                  className="like_favorite"
                  color="secondary"
                  badgeContent={8}
                >
                  <Checkbox
                    icon={<FavoriteBorder style={{ color: "#000" }} />}
                    checkedIcon={<Favorite style={{ color: "red" }} />}
                  />
                </Badge>
              </Box>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <img className="return" src="/icons/return.svg" alt="" />
              <p className="return_title">
                Estimate delivery times: 12-26 days (International)
              </p>
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <img className="return" src="/icons/pr_return.svg" alt="" />
              <p className="return_title">
                Free return within 30 days of purchase.
              </p>
            </Box>
          </Box>
        </Stack>
      </div>
      <div className="map_cont">
        <iframe
        title="Jewellry"
          style={{ marginTop: "35px", marginLeft: "15px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50627.69730558068!2d126.85207834863277!3d37.526049699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45c3d89d7801%3A0x7883571cabf15b8b!2sTiffany%20%26%20Co.!5e0!3m2!1sen!2skr!4v1756989543830!5m2!1sen!2skr"
          width={"1320"}
          height={"500"}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default OneJewellry;
