import React from "react";
import {
  Stack,
  Box,
  Button,
  IconButton,
  Badge,
  Container,
} from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.css";
const NavbarHome = (props: any) => {
  return (
    <div className="home_navbar">
      <Container className="container">
        <Stack flexDirection={"row"} className="navbar_container">
          <Stack className="navbar_links">
            <Box className="hover_line nav-link-ltr">
              <NavLink
                onClick={props.setPath}
                style={(isActive) => ({
                  color: isActive ? "#f7ab42" : "black",
                })}
                to="/"
              >
                <Box className={"active"}>
                  <img src="/icons/rectangle.svg" alt="" />
                  <h3>Home</h3>
                </Box>
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/shop">
                <h3>Shop</h3>
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/store">
                <h3>Store</h3>
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/service">
                <h3>Service</h3>
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/help">
                <h3>Help</h3>
              </NavLink>
            </Box>
            <Box>
              <img className="logo" src="/icons/Clip.svg" alt="" />
            </Box>
            <Box>
              <IconButton
                aria-label="cart"
                // id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                color="warning"
                className="shopin_cart"
              >
                <img className="icon" src="/icons/icons.svg" alt="" />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                aria-label="cart"
                // id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                color="warning"
                className="shopin_cart"
                // onClick={}
              >
                <Badge badgeContent={3}>
                  <img className="icon_bag" src={"/icons/bag.svg"} alt="" />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button  className="login_btn">
                Login
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Stack>
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Stack className="head_information_second">
              <Box>
                <div className="big_img2"></div>
              </Box>
              <Stack
                justifyContent={"column"}
                sx={{ marginTop: "176px", marginLeft: "800px" }}
              >
                <Box className="define_shop">Special Occasion Jewellery</Box>
                <Box className="define_text">AMAZING JEWELLERY COLLECTION</Box>
                <Box className="timeline_service">
                  Maecenas ut orci hendrerit. Praesent maximus est a ligula
                  ultricies, sit amet ornare dui mattis. Donec ac mi dui. Donec
                  commodo ultrices elit eu sodales.
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Button className="main_btn ">Shop now</Button>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack className="head_information">
              <Stack
                justifyContent={"column"}
                sx={{ marginTop: "176px", marginLeft: "69px" }}
              >
                <Box className="define_text">NEW DESIGN WEDDING RINGS</Box>
                <Box className="define_shop">Classy Design</Box>
                <Box className="timeline_service ">
                  Viverra ipsum nunc aliquet bibendum enim facilisis. Egestas
                  erat imperdiet sed euismod nisi porta lorem mollis.
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Button className="main_btn ">Shop now</Button>
                </Box>
              </Stack>
              <Box>
                <div className="big_img"></div>
              </Box>
            </Stack>
          </SwiperSlide>
          <SwiperSlide>
            <Stack className="head_information3">
              <Box>
                <div className="big_img3"></div>
              </Box>
              <Stack
                justifyContent={"column"}
                sx={{ marginTop: "176px", marginLeft: "650px" }}
              >
                <Box className="define_shop">Trendy Design</Box>
                <Box className="define_text">
                  FASHIONABLE DESIGNING JEWELLARY
                </Box>
                <Box className="timeline_service">
                  Saecenas ut orci hendrerit. Praesent maximus est a ligula
                  ultricies, sit amet ornare dui mattis. Donec ac mi dui. Donec
                  commodo ultrices elit eu sodales.
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Button className="main_btn">Shop now</Button>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
      <Outlet />
    </div>
  );
};

export default NavbarHome;
