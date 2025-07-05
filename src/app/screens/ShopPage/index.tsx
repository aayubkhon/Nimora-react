import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import OneJewellry from "./oneJewellry";
import ChoosenCatagory from "./choosenCatagory";
import "../../../css/shop.css";
import { Box, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Slider from "react-slider"
const ShopPage = () => {
  return (
    <div className="Shop_frame">
      <div className="background_box">
        <div className="background_img">
          <h1 className="background_title">Shop</h1>
        </div>
      </div>
      <div className="container">
        <div className="shop_center">
          <h6 className="shop_subtitle">Attractve jewellery</h6>
          <h1 className="shop_title">Gorgeous Collections</h1>
        </div>
        <div className="shop_img_wrapper">
          <div className="shop_box">
            <img className="shop_svg" src="/icons/earring.svg" alt="" />
            <p className="shop_img_title">Earrings</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/necklace.svg" alt="" />
            <p className="shop_img_title">Necklace</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/diamond.svg" alt="" />
            <p className="shop_img_title">Diamond</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/pendant.svg" alt="" />
            <p className="shop_img_title">Pendant</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/gems.svg" alt="" />
            <p className="shop_img_title">Gems</p>
          </div>
        </div>
      </div>
      <Outlet />

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
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default ShopPage;
