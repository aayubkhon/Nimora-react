import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { NavLink } from "react-router-dom";

const TrabdingProduct = () => {
  return (
    <div className="TrandingProduct_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="frame_name">TRENDING JEWELRY</Box>
        </Stack>
        <Swiper
          slidesPerView={4}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          ß
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
          <SwiperSlide>
        <div className="earring"></div>
            
          </SwiperSlide>
     
  

        </Swiper>
      </Container>
    </div>
  );
};

export default TrabdingProduct;
