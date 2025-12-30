import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import products from "../../lib/swiper";
import { Navigation } from "swiper/modules";
import { Favorite, Visibility } from "@mui/icons-material";
import { CssVarsProvider } from "@mui/joy/styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.scss";
import { Badge, Box, Button, IconButton, Typography } from "@mui/material";
import Link from "@mui/joy/Link";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import Header from "./Header";
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import { serverApi } from "../../lib/config";
// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTopTradings: (data: Product[]) => dispach(setTopTradings(data)),
});
// ** REDUX SELECTOR */
const trendProductsRetriever = createSelector(
  retrieveTradingProducts,
  (trendProducts) => ({
    trendProducts,
  })
);

const TrabdingProduct = () => {
  // ** INITIALIZATION */
  const { setTopTradings } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);
  console.log("topTradings", trendProducts);
  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getAllProducts({ order: "product_likes", limit: 9, page: 1 })
      .then((data) => setTopTradings(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="TrandingProduct_frame">
      <Box flexDirection={"column"}>
        <Typography className="frame_title">TOP 5 TRENDING PRODUCTS</Typography>
      </Box>
      <Swiper
        slidesPerView={4}
        spaceBetween={0}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        modules={[Navigation]}
        className="trending-swiper"
      >
        <CssVarsProvider>
          {trendProducts.map((product: Product) => {
            const images_path = `${serverApi}/${product.product_images[0]}`;
            const second_img_path = `${serverApi}/${product.product_images[1]}`;
            return (
              <SwiperSlide key={product._id}>
                <Box className="card_frame">
                  <Box className={"img_card_box"}>
                    <Box className="img_frame">
                      <img className="m_image" src={images_path} alt="" />
                      {second_img_path && (
                        <img
                          className="m_image img_hover"
                          src={second_img_path}
                          alt=""
                        />
                      )}
                      <Button className="add">add +</Button>
                      <div className="icon_box"></div>
                    </Box>
                    <Box>
                      <Box>
                        <Typography className="product_name">
                          {product.product_name}
                        </Typography>
                        <Box
                          sx={{ display: "flex", gap: 1, alignItems: "center" }}
                        >
                          <Typography className="product_price">
                            {product.product_price}$
                          </Typography>
                          <Box className={"action_btn_box"}>
                            <Favorite
                              style={{
                                fill: product.product_likes ? "red" : "black",
                              }}
                              className="action_btn"
                            />
                            <span>{product.product_likes}</span>
                          </Box>
                          <Box className={"action_btn_box"}>
                            <Visibility
                              style={{
                                fill: product.product_views ? "blue" : "black",
                                cursor: "pointer",
                              }}
                              className="action_btn"
                            />
                            <span>{product.product_views}</span>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
        </CssVarsProvider>
      </Swiper>
      {/* Custom Pagination Buttons */}
      <div className="pagination-buttons">
        <button className="btn-prev pagination-btn">
          <KeyboardArrowLeftIcon sx={{ fontSize: 30, color: "white" }} />
        </button>
        <button className="btn-next pagination-btn">
          <KeyboardArrowRightIcon sx={{ fontSize: 30, color: "white" }} />
        </button>
      </div>
    </div>
  );
};

export default TrabdingProduct;
