import Button from "@mui/material/Button";
import {
  Box,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";


const BestSellerProducts = () => {
  const order_list = Array.from(Array(6).keys());
  return (
    <div className="RecentProducts_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="wrap">
            <Box
              display={"flex"}
              alignItems={"center"}
              flexDirection={"column"}
            >
              {" "}
              <p className="recent_product">OUR RECENT PRODUCTS</p>
              <h1 className="recent_product_title">Our Best Seller Products</h1>
            </Box>
            <Box className="btn_box">
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                Bracelet 
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                Earing 
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                NECKLACES
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                
                ANITIQUE JEWELS
              </Button>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box className="wrap_box">
            {order_list.map((ele) => {
              return (
                <Box className="box">
                <Box className={"frame_img_box"}>
                  <img src="/home/new_r.jpeg" className="first_imges" alt="" />
                  <img src="/home/diamondd.jpeg" className="first_imges action_hover " alt="" />
                    <Button className="add_btn">Add to cart</Button>
                </Box>
                  <div className="product_title_frame">
                    <Typography className="product_name">
                      Elegant Gold Necklace
                    </Typography>
                    <Typography className="product_price">$2,900</Typography>
                    <Rating
                      sx={{ mt: 2 }}
                      name="half-rating"
                      defaultValue={2.5}
                      precision={0.5}
                    />
                  </div>
                </Box>
              );
            })}
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default BestSellerProducts;
