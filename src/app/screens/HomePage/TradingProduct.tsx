import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate, useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import {
  CheckBox,
  Favorite,
  FavoriteBorder,
  Visibility,
} from "@mui/icons-material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.scss";
import { Badge, Box, Button, Checkbox, Typography } from "@mui/material";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTopTradings } from "../../screens/HomePage/slice";
import { retrieveTradingProducts } from "../../screens/HomePage/selector";
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import assert from "assert";

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

const TrabdingProducts = () => {
  // ** INITIALIZATION */
  const { setTopTradings } = actionDispatch(useDispatch());
  const { trendProducts } = useSelector(trendProductsRetriever);
  const refs: any = useRef([]);
  const navigate = useNavigate();
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getTargetProducts({ order: "product_likes", limit: 8, page: 1 })
      .then((data) => setTopTradings(data))
      .catch((err) => console.log(err));
  }, [productRebuild]);

  // ** HEANDLERS **/

  const targetLikeProducts = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiServices(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);
      // if (like_result.like_status > 0) {
      //   e.target.style.fill = "#FF3040";
      //   refs.current[like_result.like_ref_id].innerHTML++;
      // } else {
      //   e.target.style.fill = "#6e6e6e";
      //   refs.current[like_result.like_ref_id].innerHTML--;
      // }
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeTop", ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const choosenProductsHandler = (id: string) => {
    navigate(`/shop/${id}`);
  };

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
          const prodyct_size = product.product_size;
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

                    <Button
                      onClick={() => choosenProductsHandler(product._id)}
                      className="add"
                    >
                      add +
                    </Button>
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
                          <Badge>
                            <Checkbox
                              id={product._id}
                              onClick={(e) =>
                                targetLikeProducts(e, product._id)
                              }
                              icon={
                                <FavoriteBorder style={{ color: "#424141" }} />
                              }
                              checkedIcon={
                                <Favorite style={{ color: "#FF3040" }} />
                              }
                              checked={
                                product?.me_liked &&
                                product?.me_liked[0]?.my_favorite
                                  ? true
                                  : false
                              }
                            />
                          </Badge>
                          <Typography
                            ref={(element) =>
                              (refs.current[product._id] = element)
                            }
                            className="product_count"
                          >
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
                      <Box>
                        <Typography className="product_size">
                          size: {prodyct_size}
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

export default TrabdingProducts;



// ** REDUX */
// import { useDispatch, useSelector } from "react-redux";
// import { Dispatch } from "@reduxjs/toolkit";
// import { createSelector } from "reselect";
// import { setBestSellerProduct } from "../../screens/HomePage/slice";
// import { Product } from "../../types/product";
// import ProductApiServices from "../../apiServices/productApiServices";
// import { serverApi } from "../../lib/config";
// import MemberApiServices from "../../apiServices/memberApiServices";
// import { ProductSearchObj } from "../../types/other";
// import { setAllProducts } from "./slice";
// import { retrieveAllProducts } from "./selector";

// // ** REDUX SLICE */
// const actionDispatch = (dispach: Dispatch) => ({
//   setAllProducts: (data: Product[]) => dispach(setAllProducts(data)),
// });

// // ** REDUX SELECTOR */
// const allProductsRetriever = createSelector(
//   retrieveAllProducts,
//   (allProducts) => ({
//     allProducts,
//   })
// );
// const ProductCard = (props:any) => {
//     // ** INITIALIZATION */
//       const { setAllProducts } = actionDispatch(useDispatch());
//       const { allProducts } = useSelector(allProductsRetriever);
//       const [targetSearchObject, setTargetSearchObject] =
//         useState<ProductSearchObj>({
//           page: 1,
//           limit: 6,
//           order: "product_views",
//           product_collection:"Bracelet"
//         });
//       const refs: any = useRef([]);
//       const navigate = useNavigate();
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);
