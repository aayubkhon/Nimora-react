import { Box, Container, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export function Footer() {
  return (
    <div className="footer_config">
      <Container>
        <Stack className="main_footer_container">
          <Stack flexDirection={"row"} sx={{ height: "242px," }}>
            <Stack className="info" flexDirection={"column"}>
              <Box>
                <img className="home" src="/icons/bossco.svg" alt="logo" />
              </Box>
              <Box className="main_text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor Sed ut perspiciatis unde omnis iste !
              </Box>
              <Stack className="contact_links">
                <Box>
                  <img src="/icons/facebook.svg" alt="" />
                </Box>
                <Box>
                  <img src="/icons/twiter.svg" alt="" />
                </Box>
                <Box>
                  <img src="/icons/instagram.svg" alt="" />
                </Box>
                <Box>
                  <img src="/icons/youtube.svg" alt="" />
                </Box>
              </Stack>
            </Stack>
            <Stack className="parts">
              <Box className="part_subject">Sections</Box>
              <Box className="targets">
                <NavLink to="/" >Main Page</NavLink>
              </Box>
              <Box className="targets">
              <NavLink to="/shop" >Shop</NavLink>
              </Box>
              <Box className="targets">
              <NavLink to="/store" >Store</NavLink>
              </Box>
              <Box className="targets">
              <NavLink to="/help">Help</NavLink>
              </Box>
            </Stack>
            <Stack className="find_us">
              <Box className="find">Find us</Box>
              <Stack className="details" sx={{ mt: "19px" }}>
                <Box className="detail_one">L.</Box>
                <Box className="detail_second">Korea</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "42px" }}>
                <Box className="detail_one">P.</Box>
                <Box className="detail_second">+821083054111</Box>
              </Stack>
              <Stack className="details" sx={{ mt: "9px" }}>
                <Box className="detail_one">E.</Box>
                <Box className="detail_second">Bassco@Jewelry.com</Box>
              </Stack>
            </Stack>
          </Stack>
          <Box className="liner"></Box>
          <Box className="copyrights">
            Copyright Bassco 2024, All right reserved.
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
export default Footer;