import React from "react";
import { Container, Stack } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import products from "../../lib/swiper";

const TrabdingProduct = () => {
  return (
    <div className="TrandingProduct_frame">
      <div className="back"></div>

      <Container>
        <Stack flexDirection={"column"}>
          <Box className="frame_name"> TOP 5 TRENDING PRODUCTS</Box>
        </Stack>
        <CssVarsProvider>
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            grabCursor
            slidesPerView={3}
            slideToClickedSlide
            navigation={false}
            pagination={{ clickable: true }}
          >
            {products.map((product) => (
        <SwiperSlide key={product.id}>
          <Card
            variant="plain"
            sx={{ width: 400, bgcolor: "initial", p: 0 }}
          >
            <Box sx={{ position: "relative" }}>
              <AspectRatio ratio="4/5">
                <figure>
                  <img src={product.image} alt={product.name} />
                </figure>
              </AspectRatio>

              <CardCover
                className="gradient-cover"
                sx={{
                  "&:hover, &:focus-within": { opacity: 1 },
                  opacity: 0,
                  transition: "0.1s ease-in",
                  cursor: "pointer",
                }}
              >
                <div>
                  <Box
                    className="add_box"
                    sx={{
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      flexGrow: 1,
                      alignSelf: "flex-end",
                    }}
                  >
                    <IconButton size="sm" variant="solid" color="danger">
                      <Favorite />
                    </IconButton>
                    <Button  className="add_bag">Add to bag</Button>
                  </Box>
                </div>
              </CardCover>
            </Box>

            <Box flexDirection={"column"}>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <Typography className="product_name">
                  {product.name}
                </Typography>

                <Link
                  href="#likes"
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
                  {product.likes}
                </Link>

                <Link
                  href="#views"
                  level="body-xs"
                  underline="none"
                  startDecorator={<Visibility />}
                  sx={{
                    fontWeight: "md",
                    color: "text.secondary",
                    "&:hover": { color: "primary.plainColor" },
                  }}
                >
                  {product.views}
                </Link>
              </Box>
              <Typography className="product_price">
                From: {product.price}
              </Typography>
            </Box>
          </Card>
        </SwiperSlide>
      ))}
          </Swiper>
        </CssVarsProvider>
      </Container>
    </div>
  );
};

export default TrabdingProduct;
