import React, { useState, useRef, useEffect } from "react";
import "../../../css/shop.css";
import "../../../css/products.scss";
import { Box, Pagination, PaginationItem, Stack } from "@mui/material";

import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ProductCard from "../ShopPage/productCard";
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
import { Product } from "../../types/product";
import ProductApiServices from "../../apiServices/productApiServices";
import MemberApiServices from "../../apiServices/memberApiServices";
import { ProductSearchObj } from "../../types/other";
import { setAllProducts } from "./slice";
import { retrieveAllProducts } from "./selector";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setAllProducts: (data: Product[]) => dispach(setAllProducts(data)),
});

// ** REDUX SELECTOR */
const allProductsRetriever = createSelector(
  retrieveAllProducts,
  (allProducts) => ({
    allProducts,
  })
);
const ShopPage = (props: any) => {
  // ** INITIALIZATIONS ** //
  const { setAllProducts } = actionDispatch(useDispatch());
  const { allProducts } = useSelector(allProductsRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());

  const [targetSearchObject, setTargetSearchObject] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 12,
      order: "random",
    });
  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getTargetProducts(targetSearchObject)
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, [targetSearchObject, productRebuild]);

  const refs: any = useRef([]);
  const navigate = useNavigate();
  const [value, setValue] = useState("1");
  // ** HANDLES ** //

  const searchCollectionHandler = (collection: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.product_collection = collection;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const handlePaginatonsChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const targetLikeShop = async (e: any, id: string) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiServices(),
        like_result: any = await memberService.memberLikeTarget({
          like_ref_id: id,
          group_type: "product",
        });
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeTop", ${err}`);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <div className="Shop_frame">
      <div className="background_box">
        <div className="background_img">
          <h1 className="background_title">Shop</h1>
          <p className="background_subtitle">Home/Shop</p>
        </div>
      </div>
      <div className="cards_container">
        <div className="shop_center">
          <h6 className="shop_subtitle">Attractve jewellery</h6>
          <h1 className="shop_title">Gorgeous Collections</h1>
        </div>
        <Stack flexDirection={"row"} className="shop_img_wrapper">
          <Box
            className="shop_box"
            onClick={() => searchCollectionHandler("Earing")}
          >
            <img className="shop_svg" src="/icons/earring.svg" alt="" />
            <p className="shop_img_title">Earrings</p>
          </Box>
          <Box
            className="shop_box"
            onClick={() => searchCollectionHandler("Necklace")}
          >
            <img className="shop_svg" src="/icons/necklace.svg" alt="" />
            <p className="shop_img_title">Necklace</p>
          </Box>
          <Box
            onClick={() => searchCollectionHandler("Ring")}
            className="shop_box"
          >
            <img className="shop_svg" src="/icons/diamond.svg" alt="" />
            <p className="shop_img_title">Diamond</p>
          </Box>
          <Box
            onClick={() => searchCollectionHandler("Bracelet")}
            className="shop_box"
          >
            <img className="shop_svg" src="/icons/pendant.svg" alt="" />
            <p className="shop_img_title">Pendant</p>
          </Box>
          <Box
            onClick={() => searchCollectionHandler("Etc")}
            className="shop_box"
          >
            <img className="shop_svg" src="/icons/gems.svg" alt="" />
            <p className="shop_img_title">Gems</p>
          </Box>
        </Stack>
      </div>
      <ProductCard allProducts={allProducts} targetLikeShop={targetLikeShop} />
      <Box className="pagination_box">
        <Pagination
          count={targetSearchObject.page >= 3 ? targetSearchObject.page + 1 : 3}
          page={targetSearchObject.page}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              color="secondary"
              className="pagination"
            />
          )}
          onChange={handlePaginatonsChange}
        />
      </Box>
    </div>
  );
};

export default ShopPage;
