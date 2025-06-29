import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";

import { CssVarsProvider } from "@mui/joy/styles";

const RecentProducts = () => {
  return (
    <div className="RecentProducts_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="wrap">
            <p>OUR RECENT PRODUCTS</p>
            <h1>Trendy Design Collections</h1>
            <Box className="btn_box">
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                TRADITIONAL JEWELS
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                BRIDAL JEWELS
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                ANITIQUE JEWELS
              </Button>
              <Button
                className="product_btn"
                color="secondary"
                variant="outlined"
              >
                NECKLACES
              </Button>
            </Box>
          </Box>
        </Stack>
        <Stack>
          <Box className="wrap_box">
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
            <Box>
              <Box className="ring">
                <Button className="btnn" color="secondary">
                  ADD TO CART
                </Button>
              </Box>
              <div>
                <Typography className="product_name">
                  Elegant Gold Necklace
                </Typography>
                <Typography className="product_price">$2,900</Typography>
              </div>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default RecentProducts;
