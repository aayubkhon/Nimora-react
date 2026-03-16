import React, { useState, useRef, useEffect } from "react";
import "../../../css/shop.css";
import "../../../css/products.scss";
import {
  Box,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
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
import { verifyMemberData } from "../../apiServices/verify";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setAllProducts: (data: Product[]) => dispach(setAllProducts(data)),
});

// ** REDUX SELECTOR */
const allProductsRetriever = createSelector(
  retrieveAllProducts,
  (allProducts) => ({
    allProducts,
  }),
);
const ShopPage = (props: any) => {
  // ** INITIALIZATIONS ** //
  const { setAllProducts } = actionDispatch(useDispatch());
  const { allProducts } = useSelector(allProductsRetriever);
  const [productRebuild, setProductRebuild] = useState<Date>(new Date());
  const [activeCollection, setActiveCollection] = useState<string>("");
  const [targetSearchObject, setTargetSearchObject] =
    useState<ProductSearchObj>({
      page: 1,
      limit: 12,
      order: "random",
    });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const productService = new ProductApiServices();
    productService
      .getTargetProducts(targetSearchObject)
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
  }, [targetSearchObject, productRebuild]);

  const refs: any = useRef([]);
  const [value, setValue] = useState("");
  // ** HANDLES ** //

  const searchCollectionHandler = (collection: string) => {
    targetSearchObject.page = 1;
    targetSearchObject.product_collection = collection;
    setTargetSearchObject({ ...targetSearchObject });
    setActiveCollection(collection);
  };

  const handlePaginatonsChange = (event: any, value: number) => {
    targetSearchObject.page = value;
    setTargetSearchObject({ ...targetSearchObject });
  };

  const targetLikeShop = async (e: any, id: string) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setValue(text);
    setTargetSearchObject((prev) => ({
      ...prev,
      page: 1,
      search: text,
    }));
  };

  const handleSearchSubmit = () => {
    setTargetSearchObject((prev) => ({
      ...prev,
      page: 1,
      search: value,
    }));
  };

  return (
    <div className="Shop_frame">
      <div className="background_box">
        <div className="background_img"></div>
      </div>
      <div className="cards_container">
        <div className="shop_center">
          <h6 className="shop_subtitle">Attractve jewellery</h6>
          <h1 className="shop_title">Gorgeous Collections</h1>
        </div>
        <Stack flexDirection={"row"} className="shop_img_wrapper">
          <Box
            className={`shop_box ${activeCollection === "Earing" ? "actives" : ""}`}
            onClick={() => searchCollectionHandler("Earing")}
          >
            <img className="shop_svg" src="/icons/earring.svg" alt="" />
            <p className="shop_img_title">Earrings</p>
          </Box>
          <Box
            className={`shop_box ${activeCollection === "Necklace" ? "actives" : ""}`}
            onClick={() => searchCollectionHandler("Necklace")}
          >
            <img className="shop_svg" src="/icons/necklace.svg" alt="" />
            <p className="shop_img_title">Necklace</p>
          </Box>
          <Box
            className={`shop_box ${activeCollection === "Ring" ? "actives" : ""}`}
            onClick={() => searchCollectionHandler("Ring")}
          >
            <img className="shop_svg" src="/icons/diamond.svg" alt="" />
            <p className="shop_img_title">Diamond</p>
          </Box>
          <Box
            className={`shop_box ${activeCollection === "Bracelet" ? "actives" : ""}`}
            onClick={() => searchCollectionHandler("Bracelet")}
          >
            <img className="shop_svg" src="/icons/pendant.svg" alt="" />
            <p className="shop_img_title">Pendant</p>
          </Box>
          <Box
            className={`shop_box ${activeCollection === "Etc" ? "actives" : ""}`}
            onClick={() => searchCollectionHandler("Etc")}
          >
            <img className="shop_svg" src="/icons/gems.svg" alt="" />
            <p className="shop_img_title">Gems</p>
          </Box>
        </Stack>
      </div>
      <Stack className="search_container">
        <Box className="search_box">
          <input
            className="search_input"
            placeholder="Search..."
            type="text"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearchSubmit()}
          />
          <IconButton
            onClick={handleSearchSubmit}
            type="submit"
            className="search_btn"
            aria-label="delete"
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Stack>
      <ProductCard
        allProducts={allProducts}
        targetLikeShop={targetLikeShop}
        value={value}
      />
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
