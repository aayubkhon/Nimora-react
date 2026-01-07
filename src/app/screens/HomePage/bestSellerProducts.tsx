import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Box, Container, Rating, Stack, Typography } from "@mui/material";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.scss";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { Definer } from "../../lib/Definer";
import assert from "assert";
// ** REDUX */
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setBestSellerProduct } from "../../screens/HomePage/slice";
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import { serverApi } from "../../lib/config";
import MemberApiServices from "../../apiServices/memberApiServices";
import { retrievebestSellerProduct } from "./selector";
import { useNavigate } from "react-router-dom";
import { ProductSearchObj } from "../../types/other";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setBestSellerProduct: (data: Product[]) =>
    dispach(setBestSellerProduct(data)),
});

// ** REDUX SELECTOR */
const bestSellerProductsRetriever = createSelector(
  retrievebestSellerProduct,
  (bestSellerProduct) => ({
    bestSellerProduct,
  })
);

const BestSellerProducts = () => {
  // ** INITIALIZATION */
  const { setBestSellerProduct } = actionDispatch(useDispatch());
  const { bestSellerProduct } = useSelector(bestSellerProductsRetriever);
  const [targetSearchObject, setTargetSearchObject] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 6,
      order: "product_views",
      product_collection:"Bracelet"
    });
  const refs: any = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getTargetProducts(targetSearchObject)
      .then((data) => setBestSellerProduct(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject]);

  // ** HEANDLERS **/

  const choosenProductsHandler = (id: string) => {
    navigate(`/shop/${id}`);
  };

  
  const searchCollectionHandler = (collection:string) =>{
    targetSearchObject.page = 1
    targetSearchObject.product_collection = collection
    setTargetSearchObject({...targetSearchObject})
  }
  return (
    <div className="RecentProducts_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="wrap">
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              {" "}
              <p className="recent_product">OUR RECENT PRODUCTS</p>
              <h1 className="recent_product_title">Our Best Seller Products</h1>
            </Box>
            <Box className="btn_box">
              <Button
                className="product_btn active"
                color="secondary"
                variant="outlined"
                onClick={()=>searchCollectionHandler}
              >
                Bracelet
              </Button>
              <Button
                className="product_btn active"
                color="secondary"
                variant="outlined"
                 onClick={()=>searchCollectionHandler("Ring")}
              >
                Ring
              </Button>
              <Button
                className="product_btn active"
                color="secondary"
                variant="outlined"
                 onClick={()=>searchCollectionHandler("Necklace")}

              >
                NECKLACES
              </Button>
              <Button
                className="product_btn active"
                color="secondary"
                variant="outlined"
                 onClick={()=>searchCollectionHandler("Etc")}

              >
                ANITIQUE JEWELS
              </Button>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box className="wrap_box">
            {bestSellerProduct.map((product: Product) => {
              const images_path = `${serverApi}/${product.product_images[0]}`;
              const second_img_path = `${serverApi}/${product.product_images[1]}`;
              const prodyct_size = product.product_size;
              return (
                <Box key={product._id} className="main_img_boxes">
                  <Box className={"frame_img_box"}>
                    <img className="first_imges" src={images_path} alt="" />
                    {second_img_path && (
                      <img
                        className="first_imges action_hover"
                        src={second_img_path}
                        alt=""
                      />
                    )}
                    <Button
                      onClick={() => choosenProductsHandler(product._id)}
                      className="add_btn"
                    >
                      Add to cart
                    </Button>
                  </Box>
                  <div className="product_title_frame">
                    <Typography className="product_name">
                      {product.product_name}
                    </Typography>
                    <Typography className="product_price">
                      ${product.product_price}
                    </Typography>
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
      </Container>
    </div>
  );
};

export default BestSellerProducts;
