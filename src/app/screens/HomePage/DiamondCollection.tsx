import React from "react";
import { Box, Button, Stack } from "@mui/material";

const DiamondCollection = () => {
  return (
    <div className="DiamondCollection_frame">
      <div className="container">
        <div className="first_img">
          <div className="img_box">
            <h2 className="img_text">Play with color</h2>
            <p className="img_about">
              New Dôme pieces are here to define your summer palette
            </p>
            <Button className="btn_dome" variant="outlined">
              Shop Dome
            </Button>
          </div>
        </div>
        <div className="second_img">
          <div className="img_box ">
            <h2 className="img_text">A STEVIE SUMMER</h2>
            <p className="img_about">
              Our most-loved Stevie Hoops, now in new colors.
            </p>
            <Button className="btn_dome" variant="outlined">
              Shop Stevie
            </Button>
          </div>
        </div>
      </div>
      <Stack className="logo_box">
        <Box>
          <img src="/icons/elegant.svg" alt="" />
        </Box>
        <Box>
          <img src="/icons/ozagi.svg" alt="" />
        </Box>
        <Box>
          <img src="/icons/soager.svg" alt="" />
        </Box>
        <Box>
          <img src="/icons/luxia.svg" alt="" />
        </Box>
        <Box>
          <img src="/icons/caterene.svg" alt="" />
        </Box>
        <Box>
          <img src="/icons/columbia.svg" alt="" />
        </Box>
      </Stack>
      <Box className="vector"></Box>
      
    </div>
  );
};

export default DiamondCollection;
