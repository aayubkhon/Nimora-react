import React from 'react'
import {
  Container,
  Stack,
  Box,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const NavbarShop = (props:any) => {
  return (
    <div className="home_navbar">
      <Container>
        <Stack flexDirection={"row"} className="navbar_container">
          <Stack flexDirection={"row"} className="navbar_config">
            <Box>
              <img className="logo" src="/icons/bossco.svg" alt="" />
            </Box>
          </Stack>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            className="navbar_links"
          >
            <Box className="hover_line nav-link-ltr">
              <NavLink
                style={(isActive) => ({
                  color: isActive ? "#f7ab42" : "black",
                })}
                to="/"
              onClick={props.setPath}

              >
                Home
              </NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/shop">Shop</NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/service">Service</NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/help">Help</NavLink>
            </Box>
            <Box className="hover_line nav-link-ltr" onClick={props.setPath}>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </Box>
            <Box>
              <IconButton
                aria-label="cart"
                // id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                color="warning"
                className="shopin_cart"
                // onClick={}
              >
                <Badge badgeContent={3}>
                  <img src={"/icons/bag.svg"} alt="" />
                </Badge>
              </IconButton>
            </Box>
            <Box>
              <Button variant="text" className="reg_btn">
                Login
              </Button>
            </Box>
            <span>/</span>
            <Box>
              <Button variant="text" className="reg_btn">
                Register
              </Button>
            </Box>
            <Box>
              <IconButton
                aria-label="cart"
                // id="basic-button"
                aria-controls={undefined}
                aria-haspopup="true"
                aria-expanded={undefined}
                color="warning"
                className="shopin_cart"
              >
                <img className="icon" src="/icons/icon.svg" alt="" />
              </IconButton>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}

export default NavbarShop