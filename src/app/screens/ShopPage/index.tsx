import React, { useState } from "react";
import "../../../css/shop.css";
import "../../../css/products.scss";
import {
  Box,
  Pagination,
  PaginationItem,
  Stack, Grid,
} from "@mui/material";
import {Typography, IconButton, Button, Rating } from "@mui/material";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from '../ShopPage/productCard';


const ShopPage = () => {
  const order_list = Array.from(Array(8).keys());
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
      <Grid container spacing={0} className="stsss">
      {order_list.map((ele)=>{
        return(
           <Grid item xs={12} md={3}  >
      <ProductCard/>
           </Grid>
        );
      })}
      </Grid>
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
