import React, { useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
  sweetTopSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import assert from "assert";
import { setChosenProduct } from "./slice";
import { retrieveChosenProduct } from "./selector";
import { verifyMemberData } from "../../apiServices/verify";

// ** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
});

// ** REDUX SELECTOR */

const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

const ChoosenProduct = (props: any) => {
  // ** INITIALIZATION */
  const { setChosenProduct } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  let { product_id } = useParams<{ product_id: any }>();
  const [count, setCount] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [mainImage, setMainImage] = useState(0);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const { cartItems } = props;
  const navigate = useNavigate();

  const productRelatedProcess = async () => {
    try {
      const productService = new ProductApiServices();
      const product: Product = await productService.getChosenProduct(
        product_id
      );
      setChosenProduct(product);
    } catch (err) {
      console.log("ProductRelatedProcess:", err);
    }
  };

  useEffect(() => {
    productRelatedProcess().then();
    window.scrollTo(0, 0);
  }, [productRebuild]);
  // ** HEANDLERS **/

  const addItemBasket = async (product: any) => {
    try {
      let itemList: any[] = [];
      const itemListJSON = localStorage.getItem("cart_data")
        ? localStorage.getItem("cart_data")
        : null;
      if (itemListJSON) {
        itemList = JSON.parse(itemListJSON);
      }
      const is_exist = itemList.some(
        (check_item) => check_item.order_id === product_id
      );

      if (!is_exist) {
        const orderItemProduct = {
          product_id: product._id,
          name: product.product_name,
          quantity: count,
          price: product.product_price,
          image: product.product_images[0],
          size: product.product_size,
        };
        itemList.push(orderItemProduct);
        const new_itemList = JSON.stringify(itemList);
        localStorage.setItem("cart_data", new_itemList);
        sweetTopSuccessAlert("Add Success", 1000);
        navigate("/cart");
      } else {
        throw new Error("Selected item!");
      }
    } catch (err: any) {
      await sweetErrorHandling(err);
    }
  };
  const productImages = chosenProduct?.product_images || [];
  const sizes = ["XS", "S", "M", "L", "XL"];
  const ratingValue = chosenProduct?.product_rating
    ? chosenProduct?.product_rating
    : 0;

  const targetLikeHandler = async (e: any) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);
      const memberService = new MemberApiServices();
      const data = { like_ref_id: chosenProduct?._id, group_type: "product" };
      const like_result: any = await memberService.memberLikeTarget(data);
      assert.ok(like_result, Definer.general_err1);

      if (like_result.like_status > 0) {
        e.target.style.fill = "#FF3040";
      } else {
        e.target.style.fill = "white";
      }
      setProductRebuild(new Date());
      await sweetTopSmallSuccessAlert("success", 700, false);
    } catch (err: any) {
      console.log("targetLikeBest, ERROR:::", err);
      sweetErrorHandling(err).then();
    }
  };
  const displayImages = [...productImages];
  if (displayImages.length > 1) {
    [displayImages[0], displayImages[1]] = [
      displayImages[1],
      displayImages[0],
      displayImages[2],
    ];
  }
  return (
    <div className="OneJewellry_frame">
      <div className="jews_container">
        <div className="grid_container">
          {displayImages.slice(0, 4).map((image: string, index: number) => (
            <div key={index} className={`item-${index + 1}`}>
              <Zoom>
                <img
                  className={`${
                    index === 0
                      ? "first"
                      : index === 1
                      ? "second"
                      : index === 2
                      ? "three"
                      : index === 3
                  }_img`}
                  src={`${serverApi}/${image}`}
                  alt={`${chosenProduct?.product_name} ${index + 1}`}
                  onClick={() =>
                    setMainImage(index === 0 ? 1 : index === 1 ? 0 : index)
                  }
                  style={{ cursor: "pointer" }}
                />
              </Zoom>
            </div>
          ))}
        </div>
        <Stack className="main">
          <h1 className="product_name">{chosenProduct?.product_name}</h1>
          <Box display={"flex"}>
            <Rating
              sx={{ mt: 2 }}
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              value={ratingValue} //to do review avarage
            />
            <Typography margin={2}>2 rewiews</Typography>
          </Box>
          <Box flexDirection={"column"}>
            <p className="product_price">${chosenProduct?.product_price}</p>
            <p className="product_title">
              {chosenProduct?.product_description ||
                "The Gift You'll Keep Forever - Covered by a Lifetime Warranty, Guaranteed to Never Fade or Tarnish."}
            </p>
            {chosenProduct?.product_size && (
              <>
                <div className="product_size">
                  {sizes.map((size) => (
                    <p
                      key={size}
                      className={`bg_radius ${
                        selectedSize === size ? "active" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </p>
                  ))}
                </div>
              </>
            )}

            <p className="hurry_up">
              Hurry up! Only
              <strong> {chosenProduct?.product_left_cnt}</strong>
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
                  onClick={() => {
                    count > 1 ? setCount(count - 1) : setCount(1);
                  }}
                >
                  -
                </Button>
              </div>
              <Box className={"btn_box"}>
                <Button
                  onClick={(e) => {
                    addItemBasket(chosenProduct);
                  }}
                  color="secondary"
                  className="btn_add"
                >
                  Add to basket
                </Button>
                <Badge
                  className="like_favorite"
                  color="secondary"
                  badgeContent={chosenProduct?.product_likes || 0}
                >
                  <Checkbox
                    onClick={targetLikeHandler}
                    icon={<FavoriteBorder style={{ color: "#000" }} />}
                    checkedIcon={<Favorite style={{ color: "#FF3040" }} />}
                    checked={
                      chosenProduct?.me_liked &&
                      chosenProduct?.me_liked[0]?.my_favorite
                        ? true
                        : false
                    }
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
          style={{ marginTop: "35px", marginLeft: 15 }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50627.69730558068!2d126.85207834863277!3d37.526049699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b45c3d89d7801%3A0x7883571cabf15b8b!2sTiffany%20%26%20Co.!5e0!3m2!1sen!2skr!4v1756989543830!5m2!1sen!2skr"
          width={"98%"}
          height={"500"}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ChoosenProduct;
