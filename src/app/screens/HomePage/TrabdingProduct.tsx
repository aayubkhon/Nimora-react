import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const TrabdingProduct = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="TrandingProduct_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="frame_name"> TOP 15 TRENDING PRODUCTS</Box>
        </Stack>
        {/* <Carousel responsive={responsive}>
          <div className="image-container">
            <img src="./home/crystal.jpeg" className="default-image" />
            <div className="overlay">
              <img src="./home/ring.jpeg" className="hover-image" />
            </div>
          </div>
        </Carousel> */}
      </Container>
    </div>
  );
};

export default TrabdingProduct;
