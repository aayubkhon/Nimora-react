import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import OneJewellry from "./oneJewellry";
import ChoosenCatagory from "./choosenCatagory";
import "../../../css/shop.css";
import { Box, Button, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Slider from "@mui/material/Slider";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import { CssVarsProvider } from "@mui/joy/styles";

const ShopPage = () => {
  return (
    <div className="Shop_frame">
      <div className="background_box">
        <div className="background_img">
          <h1 className="background_title">Shop</h1>
          <p className="background_subtitle">/Shop</p>
        </div>
      </div>
      <div className="container">
        <div className="shop_center">
          <h6 className="shop_subtitle">Attractve jewellery</h6>
          <h1 className="shop_title">Gorgeous Collections</h1>
        </div>
        <div className="shop_img_wrapper">
          <div className="shop_box">
            <img className="shop_svg" src="/icons/earring.svg" alt="" />
            <p className="shop_img_title">Earrings</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/necklace.svg" alt="" />
            <p className="shop_img_title">Necklace</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/diamond.svg" alt="" />
            <p className="shop_img_title">Diamond</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/pendant.svg" alt="" />
            <p className="shop_img_title">Pendant</p>
          </div>
          <div className="shop_box">
            <img className="shop_svg" src="/icons/gems.svg" alt="" />
            <p className="shop_img_title">Gems</p>
          </div>
        </div>
      </div>
      <div className="main_product">
        <div className="product_box">
          <Box className="search_box">
            <form className="search_form">
              <input
                className="search_input"
                type="search"
                placeholder="Search Products"
              />
              <Button
                className="btn_search"
                variant="contained"
                endIcon={<SearchIcon />}
              ></Button>
            </form>
          </Box>
          <div className="product_catagories">
            <div className="product_box">
              <h1 className="product_title">Product Categories</h1>
              <Divider sx={{ mt: 3 }} />
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <div className="product_names_box">
                <p className="product_names">Anklets</p>
                <p className="product_count">10</p>
              </div>
              <h1 className="product_title">Fliter by Price</h1>
              <Divider sx={{ mt: 3 }} />
              <div className="filter">
                <div className="filter_box">
                  <div className="filter_price">
                    <p className="min_price">Min Price</p>
                    <input placeholder="$20.00" className="price" type="text" />
                  </div>
                  <div>
                    <p className="max_price">Max Price</p>
                    <input placeholder="$99.00" className="price" type="text" />
                  </div>
                </div>
              </div>
              <Slider
                className="slider"
                getAriaLabel={() => "Minimum distance"}
                valueLabelDisplay="auto"
                disableSwap
                min={10}
                max={500}
              />
            </div>
          </div>
        </div>
        <div className="product">
          <CssVarsProvider>
            <Card variant="plain" sx={{ width: 300, bgcolor: "initial", p: 0 }}>
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/4">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography
                        level="h2"
                        noWrap
                        sx={{ fontSize: "lg" }}
                      ></Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <CreateNewFolder />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Favorite />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                  National Park
                </Typography>

                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Favorite />}
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Visibility />}
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
             <Card variant="plain" sx={{ width: 300, bgcolor: "initial", p: 0 }}>
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/4">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography
                        level="h2"
                        noWrap
                        sx={{ fontSize: "lg" }}
                      ></Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <CreateNewFolder />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Favorite />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                  National Park
                </Typography>

                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Favorite />}
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Visibility />}
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
               <Card variant="plain" sx={{ width: 300, bgcolor: "initial", p: 0 }}>
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/4">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography
                        level="h2"
                        noWrap
                        sx={{ fontSize: "lg" }}
                      ></Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <CreateNewFolder />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Favorite />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                  National Park
                </Typography>

                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Favorite />}
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Visibility />}
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
                 <Card variant="plain" sx={{ width: 300, bgcolor: "initial", p: 0 }}>
              <Box sx={{ position: "relative" }}>
                <AspectRatio ratio="4/4">
                  <figure>
                    <img
                      src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                      srcSet="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300&dpr=2 2x"
                      loading="lazy"
                      alt="Yosemite by Casey Horner"
                    />
                  </figure>
                </AspectRatio>
                <CardCover
                  className="gradient-cover"
                  sx={{
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  {/* The first box acts as a container that inherits style from the CardCover */}
                  <div>
                    <Box
                      sx={{
                        p: 2,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        flexGrow: 1,
                        alignSelf: "flex-end",
                      }}
                    >
                      <Typography
                        level="h2"
                        noWrap
                        sx={{ fontSize: "lg" }}
                      ></Typography>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ ml: "auto", bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <CreateNewFolder />
                      </IconButton>
                      <IconButton
                        size="sm"
                        variant="solid"
                        color="neutral"
                        sx={{ bgcolor: "rgba(0 0 0 / 0.2)" }}
                      >
                        <Favorite />
                      </IconButton>
                    </Box>
                  </div>
                </CardCover>
              </Box>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography sx={{ fontSize: "sm", fontWeight: "md" }}>
                  National Park
                </Typography>

                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Favorite />}
                  sx={{
                    fontWeight: "md",
                    ml: "auto",
                    color: "text.secondary",
                    "&:hover": { color: "danger.plainColor" },
                  }}
                >
                  117
                </Link>
                <Link
                  href="#dribbble-shot"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Visibility />}
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  10.4k
                </Link>
              </Box>
            </Card>
          </CssVarsProvider>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default ShopPage;
