import { Badge, Box, Checkbox, Container, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const RecentProducts = () => {
  const order_list = Array.from(Array(6).keys());
  return (
    <div className="RecentProducts_frame">
      <Container>
        <Stack flexDirection={"column"}>
          <Box className="wrap">
            <p>OUR RECENT PRODUCTS</p>
            <h1>Our Best Seller Products</h1>
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
            {order_list.map((ele) => {
              return (
                <Box>
                  <Box className="ring">
                     <Box
                        className="box"
                      >
                        <Badge
                        className="favorite"
                        color="secondary"
                          badgeContent={8}
                        >
                          <Checkbox
                            icon={<FavoriteBorder style={{ color: "#000"  }}  />}
                            checkedIcon={<Favorite  style={{ color: "red"  }} />}
                          />
                        </Badge>
                      </Box>
                      <Button
                        className="add_btn"
                      >
                       Add to cart
                      </Button>
                  </Box>
                  <div>
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

export default RecentProducts;
