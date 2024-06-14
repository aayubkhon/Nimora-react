import React from "react";
import { Container, Stack, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.css";
const NavbarHome = () => {
  return (
    <div className="home_navbar">
      <Container>
        <Stack flexDirection={"row"} className="navbar_container">
          <Stack flexDirection={"row"} className="navbar_config">
            <Box>
              <img className="logo" src="/icons/bossco.svg" alt="" />
            </Box>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover_line nav-link-ltr">
              <NavLink
                style={(isActive) => ({
                  color: isActive ? "#f7ab42" : "black",
                })}
                to="/"
              >
                Home
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr">
              <NavLink to="/shop">Shop</NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr">
              <NavLink to="/help">Help</NavLink>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <Stack>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay,Pagination, Navigation]}
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
                <Box className="define_text ">AMAZING JEWELLERY COLLECTION</Box>
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
                <Box className="define_text ">
                NEW DESIGN WEDDING RINGS
                </Box>
                <Box className="define_shop ">Classy Design</Box>
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
                <Box className="define_shop ">Trendy Design</Box>
                <Box className="define_text ">
                  FASHIONABLE DESIGNING JEWELLARY 
                </Box>
                <Box className="timeline_service ">
                  Saecenas ut orci hendrerit. Praesent maximus est a ligula
                  ultricies, sit amet ornare dui mattis. Donec ac mi dui. Donec
                  commodo ultrices elit eu sodales.
                </Box>
                <Box sx={{ mt: "20px" }}>
                  <Button className="main_btn ">Shop now</Button>
                </Box>
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </div>
  );
};

export default NavbarHome;
