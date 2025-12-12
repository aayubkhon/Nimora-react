import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "../../../css/shop.scss";
import {
  Badge,
  Box,
  Button,
  Checkbox,
  Container,
  Pagination,
  PaginationItem,
  Rating,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const ShopPage = () => {
  const order_list = Array.from(Array(6).keys());
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  // ** HANDLES ** //
  const handleChange = (event: any, newValue: string) => {
    console.log(value);
  };
  return (
    <div className="Shop_frame">
      <div className="background_box">
        <div className="background_img">
          <h1 className="background_title">Shop</h1>
          <p className="background_subtitle">Home/Shop</p>
        </div>
      </div>
      <div className="container">
        <div className="shop_center">
          <h6 className="shop_subtitle">Attractve jewellery</h6>
          <h1 className="shop_title">Gorgeous Collections</h1>
        </div>
        <Stack flexDirection={"row"} className="shop_img_wrapper">
          <Box className="shop_box">
            <img className="shop_svg" src="/icons/earring.svg" alt="" />
            <p className="shop_img_title">Earrings</p>
          </Box>
          <Box className="shop_box">
            <img className="shop_svg" src="/icons/necklace.svg" alt="" />
            <p className="shop_img_title">Necklace</p>
          </Box>
          <Box className="shop_box">
            <img className="shop_svg" src="/icons/diamond.svg" alt="" />
            <p className="shop_img_title">Diamond</p>
          </Box>
          <Box className="shop_box">
            <img className="shop_svg" src="/icons/pendant.svg" alt="" />
            <p className="shop_img_title">Pendant</p>
          </Box>
          <Box className="shop_box">
            <img className="shop_svg" src="/icons/gems.svg" alt="" />
            <p className="shop_img_title">Gems</p>
          </Box>
        </Stack>
      </div>
      <div className="main_product">
        <div className="product_box">
          <Box className="search_box">
            <form className="search_form">
              <input
                className="search_input"
                type="search"
                placeholder="Search Products"
              />
              <Button
                className="btn_search"
                variant="contained"
                endIcon={<SearchIcon />}
              ></Button>
            </form>
          </Box>
          {/* Product Catagories */}
          <div className="product_catagories">
            <div className="product_box">
              <h1 className="product_title">Product Categories</h1>
              <Divider sx={{ mt: 3 }} />
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <h1 className="product_title">Fliter by Price</h1>
              <Divider sx={{ mt: 3 }} />
              <div className="filter">
                <div className="filter_box">
                  <div className="filter_price">
                    <p className="min_price">Min Price</p>
                    <input placeholder="$20.00" className="price" type="text" />
                  </div>
                  <div className="filter_price">
                    <p className="max_price">Max Price</p>
                    <input placeholder="$99.00" className="price" type="text" />
                  </div>
                </div>
              </div>
              <Slider
                className="slider"
                getAriaLabel={() => "Minimum distance"}
                valueLabelDisplay="auto"
                disableSwap
                min={10}
                max={500}
              />
            </div>
          </div>
        </div>
          {/* Card section */}
        <Stack>
          <Box className="wrap_box">
            {order_list.map((ele, index) => {
              return (
                <Box className="favorite_box">
                  <Box className="ring">
                    <Box className="box">
                      <Badge
                        className="favorite"
                        color="secondary"
                        badgeContent={8}
                      >
                        <Checkbox
                          icon={<FavoriteBorder style={{ color: "#000" }} />}
                          id={`${index}`}
                          checkedIcon={<Favorite style={{ color: "red" }} />}
                        />
                      </Badge>
                    </Box>
                    <Button className="add_btn">Add to cart</Button>
                    <Button className="box">
                      <Badge
                        className="eyeIcon_box"
                        badgeContent={8}
                        color="secondary"
                      >
                        <Checkbox
                          icon={<RemoveRedEyeIcon className="eyeIcon" />}
                          checkedIcon={
                            <RemoveRedEyeIcon style={{ color: "blue" }} />
                          }
                        />
                      </Badge>
                    </Button>
                  </Box>
                  <div>
                    <Typography className="img_name">
                      Elegant Gold Necklace
                    </Typography>
                    <Typography className="product_price">$2,900</Typography>
                    <Rating
                      sx={{ mt: 2 }}
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>
      </div>
      <Outlet />
      <Box className="pagination_box">
        <Pagination
          count={5}
          page={1}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              color="secondary"
              className="pagination"
            />
          )}
        />
      </Box>
    </div>
  );
};

export default ShopPage;
