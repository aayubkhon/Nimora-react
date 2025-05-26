import React from "react";
import { CardContent, Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import Chip from "@mui/joy/Chip";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import CreateNewFolder from "@mui/icons-material/CreateNewFolder";
import CardOverflow from "@mui/joy/CardOverflow";
import { CssVarsProvider } from "@mui/joy/styles";

const TrabdingProduct = () => {
  return (
    <div className="TrandingProduct_frame">
      <div className="back"></div>
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="frame_name"> TOP 15 TRENDING PRODUCTS</Box>
        </Stack>
        <CssVarsProvider>
          <Card
            color="neutral"
            orientation="vertical"
            variant="plain"
            sx={{ width: "320px", height: "370px",borderRadius:0 }}
          >
            <CardContent>
              <CardCover className="ring" >
                <img src="/home/birstone.jpeg" alt="" />
              </CardCover>
              <CardOverflow sx={{ marginTop: 44, marginLeft: 8, width: 130 }}>
                <Button
                  onClick={function () {}}
                  size="md"
                  variant="outlined"
                  className="Add_cart"
                >
                  Add to card
                </Button>
              </CardOverflow>
              <CardOverflow>
                <IconButton
                  aria-label="Like minimal photography"
                  size="md"
                  variant="solid"
                  color="danger"
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    borderRadius: "50%",
                    right: "1rem",
                    bottom: 80,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton>
              </CardOverflow>
            </CardContent>
          </Card>
        </CssVarsProvider>
      </Container>
    </div>
  );
};

export default TrabdingProduct;

{
  /* <Swiper
effect={'coverflow'}
grabCursor={true}
centeredSlides={true}
slidesPerView={'auto'}
coverflowEffect={{
  rotate: 10,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
}}
pagination={true}
modules={[EffectCoverflow, Pagination]}
className="mySwiper">
<SwiperSlide>
<img className="swiper_img" src="/home/ring.jpeg" alt="" />
</SwiperSlide>
<SwiperSlide>
<img className="swiper_img" src="/home/ring.jpeg" alt="" />
</SwiperSlide>
<SwiperSlide>
<img className="swiper_img" src="/home/ring.jpeg" alt="" />
</SwiperSlide>
<SwiperSlide>
<img className="swiper_img" src="/home/ring.jpeg" alt="" />
</SwiperSlide>
<SwiperSlide>
<img className="swiper_img" src="/home/ring.jpeg" alt="" />
</SwiperSlide>
</Swiper> */
}
