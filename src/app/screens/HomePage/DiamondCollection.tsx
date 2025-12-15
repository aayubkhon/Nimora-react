import React from "react";
import { Box, Button, Stack } from "@mui/material";

const DiamondCollection = () => {
  const brands = [
    { name: "Elegant", logo: "/icons/elegant.svg" },
    { name: "Ozagi", logo: "/icons/ozagi.svg" },
    { name: "Soager", logo: "/icons/soager.svg" },
    { name: "Luxiva", logo: "/icons/luxia.svg" },
    { name: "Catalena", logo: "/icons/caterene.svg" },
    { name: "Columbia", logo: "/icons/columbia.svg" }
  ];
  const duplicatedBrands = [...brands, ...brands];
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
      <Box className="animation_frame">
      <Box className="scroller">
        <Box className="scroller-inner">
          {duplicatedBrands.map((brand, index) => (
            <Box key={index} className="scroller_item">
              <img src={brand.logo} alt={brand.name} />
            </Box>
          ))}
        </Box>
      </Box>
      <Box className="vector" />
    </Box>
    </div>
  );
};

export default DiamondCollection;
