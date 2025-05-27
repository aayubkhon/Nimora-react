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
         
            color="primary"
            variant="plain"
            sx={{
              width: "340px",
              height: "420px",
              borderRadius: 0,
              background: "rgb(247, 245, 239)",
              cursor: "pointer",
              
            }}
          >
            <CardContent  className="Card">
              <div className="wrap">
                <CardCover className="ring">
                  <img className="birst" src="/home/birstone.jpeg" alt="" />
                </CardCover>
                <CardOverflow
                  className="crs"
                  sx={{ marginTop: 45, marginLeft: 25, width: 100 }}
                >
                  <Button
                    color="neutral"
                    onClick={function () {}}
                    size="sm"
                    variant="plain"
                    className="Add_cart"
                  >
                    Add to bag
                  </Button>
                </CardOverflow>
              </div>
              <CardOverflow>
                {/* <IconButton
                  sx={{
                    position: "absolute",
                    zIndex: 2,
                    bottom: 30,
                    transform: "translateY(50%)",
                  }}
                >
                  <Favorite />
                </IconButton> */}
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
