import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
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
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
};

export default TrabdingProduct;
