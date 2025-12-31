import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Favorite, Visibility } from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.scss";
import {  Box, Button,  Typography } from "@mui/material";


//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import { serverApi } from "../../lib/config";
import { sweetTopSmallSuccessAlert } from "../../lib/sweetAlert";
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
  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getAllProducts({ order: "product_likes", limit: 8, page: 1 })
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
                          sx={{ display: "flex", gap: 3, alignItems: "center" }}
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
                            <Typography className="product_count">
                              {product.product_likes}
                            </Typography>
                          </Box>
                          <Box className={"action_btn_box"}>
                            <Visibility
                              style={{
                                fill: product.product_views ? "blue" : "black",
                                cursor: "pointer",
                              }}
                              className="action_btn"
                            />
                            <Typography className="product_count">
                              {product.product_views}
                            </Typography>
                          </Box>
                          
                        </Box>
                        <Box >
                            <Typography className="product_size">
                              size:  {product.product_size}
                            </Typography>
                          </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </SwiperSlide>
            );
          })}
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
