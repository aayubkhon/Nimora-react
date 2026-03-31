import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../../../css/store.scss";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { Shop } from "../../types/user";
import { setStoreShops } from "./slice";
import { retrieveStoreShop } from "./selector";
import ShopApiServices from "../../apiServices/shopApiService";
import { serverApi } from "../../lib/config";

const actionDispatch = (dispatch: Dispatch) => ({
  setStoreShops: (data: Shop[]) => dispatch(setStoreShops(data)),
});

const storeShopRetriever = createSelector(retrieveStoreShop, (storeShops) => ({
  storeShops,
}));

const Store = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;
  const { setStoreShops } = actionDispatch(useDispatch());
  const { storeShops } = useSelector(storeShopRetriever);

  useEffect(() => {
    const shopService = new ShopApiServices();
    shopService
      .getTopStoreShops()
      .then((data) => setStoreShops(data))
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box className="store_page">
      {/* ── Hero Banner ── */}
      <Box className="store_hero">
        <Box className="store_hero_inner">
          <Typography className="store_hero_label">Our Boutiques</Typography>
          <Typography className="store_hero_title">
            Discover Nimora
            <br />
            Jewellery Stores
          </Typography>
          <Box className="store_hero_line" />
        </Box>
      </Box>

      <Container maxWidth="xl">
        {/* ── Section Header ── */}
        <Box className="store_header">
          <Box className="store_header_left">
            <Typography className="store_section_label">
              FEATURED STORIES
            </Typography>
            <Typography className="store_section_title">
              Stories About
              <br />
              Fine Jewellery
            </Typography>
          </Box>
          <Box className="store_header_right">
            <Typography className="store_section_desc">
              Explore our curated collection of jewellery boutiques, each
              offering a unique experience crafted with passion and precision.
            </Typography>
            <Button
              className="store_view_all_btn"
              onClick={() => navigate("/stories")}
            >
              View All Stores
              <span className="btn_arrow">→</span>
            </Button>
          </Box>
        </Box>

        {/* ── Store Cards Grid ── */}
        <Grid container spacing={4} className="store_grid">
          {storeShops.map((shop: Shop, index: number) => {
            const image_path = shop.mb_image
              ? `${serverApi}/${shop.mb_image}`
              : "/pictures/auth/default_user.svg";

            return (
              <Grid item xs={12} md={4} key={shop._id}>
                <Box
                  className="store_card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <Box className="store_card_img_wrap">
                    <Box
                      className="store_card_img"
                      style={{ backgroundImage: `url(${image_path})` }}
                    />
                    <Box className="store_card_overlay">
                      <Button
                        className="store_overlay_btn"
                        onClick={() => navigate(`/shop`)}
                      >
                        Visit Store
                      </Button>
                    </Box>
                    {/* Index badge */}
                    <Box className="store_card_index">
                      {String(index + 1).padStart(2, "0")}
                    </Box>
                  </Box>

                  {/* Content */}
                  <Box className="store_card_content">
                    <Box className="store_card_top">
                      <Typography className="store_card_nick">
                        {shop.mb_nick}
                      </Typography>
                      <Box className="store_card_divider" />
                    </Box>
                    <Typography className="store_card_address">
                      📍 {shop.mb_adress || "Address not specified"}
                    </Typography>
                    <Typography className="store_card_phone">
                      📞 {shop.mb_phone || "—"}
                    </Typography>
                    {shop.mb_description && (
                      <Typography className="store_card_desc">
                        {shop.mb_description}
                      </Typography>
                    )}
                    <Button
                      className="store_card_btn"
                      onClick={() => navigate(`/shop`)}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            );
          })}

          {/* Bo'sh holat */}
          {storeShops.length === 0 && (
            <Grid item xs={12}>
              <Box className="store_empty">
                <Typography>No stores available yet.</Typography>
              </Box>
            </Grid>
          )}
        </Grid>

        {/* ── Pagination ── */}
        <Box className="store_pagination">
          {[...Array(totalPages)].map((_, index) => (
            <Button
              key={index + 1}
              className={`store_page_btn ${currentPage === index + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
          <Button
            className="store_next_btn"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            →
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Store;
