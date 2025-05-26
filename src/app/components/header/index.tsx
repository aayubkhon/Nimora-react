import React from "react";
import {
  Stack,
  Box,
  Button,
  IconButton,
  Badge,
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
      <div className="navbar">
        <NavLink to="/">
          <img className="logo" src="/icons/Clip.svg" alt="" />
        </NavLink>
        <ul>
          <li>
            <NavLink  className="nav-link-ltr"
              to="/"
              onClick={props.setPath}
              style={(isActive) => ({
                color: isActive ? "#f7ab42" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
          <li onClick={props.setPath}>
            <NavLink   className="hover_line nav-link-ltr"to="/shop">Shop </NavLink>
          </li>
          <li onClick={props.setPath}>
          <NavLink className="hover_line nav-link-ltr" to="/store">Store </NavLink>
          </li>
          <li onClick={props.setPath}> 
          <NavLink className="hover_line nav-link-ltr" to="/service">Service </NavLink>
          </li>
          <li onClick={props.setPath}>
          <NavLink className="hover_line nav-link-ltr" to="/help">Help </NavLink>
          </li>
        </ul>
        <div className="icon_box">
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
                <Badge badgeContent={1}>
                  <img className="icon_bag" src={"/icons/bag.svg"} alt="" />
                </Badge>
              </IconButton>
            </Box>
          <Button variant="contained" className="login_btn">Login</Button>
        </div>
      </div>
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
          <SwiperSlide >
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
