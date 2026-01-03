import React, { useEffect, useRef } from "react";
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
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import assert from "assert";
// ** REDUX */
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrievebestSellerProduct } from "../../screens/HomePage/selector";
import { serverApi } from "../../lib/config";
import { useNavigate } from "react-router-dom";

// ** REDUX SELECTOR */
const bestSellerProductsRetriever = createSelector(
  retrievebestSellerProduct,
  (bestSellerProduct) => ({
    bestSellerProduct,
  })
);

const BestSellerProducts = () => {
  // ** INITIALIZATION */
  const refs: any = useRef([]);
  const navigate = useNavigate();

  // ** HEANDLERS **/

  const targetLikeTop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiServices(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);
      if (like_result.like_status > 0) {
        e.target.style.fill = "red";
        refs.current[like_result.like_ref_id].innerHTML++;
      } else {
        e.target.style.fill = "black";
        refs.current[like_result.like_ref_id].innerHTML--;
      }
      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeTop", ${err}`);
      sweetErrorHandling(err).then();
    }
  };

  const choosenProductsHandler = (id: string) => {
    navigate(`/shop/${id}`);
  };
  const order_list = Array.from(Array(6).keys());
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
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                Bracelet
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                Earing
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                NECKLACES
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                ANITIQUE JEWELS
              </Button>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box className="wrap_box">
            {order_list.map((ele) => {
              return (
                <Box className="box">
                  <Box className={"frame_img_box"}>
                    <img
                      src="/home/new_r.jpeg"
                      className="first_imges"
                      alt=""
                    />
                    <img
                      src="/home/diamondd.jpeg"
                      className="first_imges action_hover "
                      alt=""
                    />
                    <Button className="add_btn">Add to cart</Button>
                  </Box>
                  <div className="product_title_frame">
                    <Typography className="product_name">
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
      </Container>
    </div>
  );
};

export default BestSellerProducts;
