import React from "react";
import { Stack, Box, Button, IconButton, Badge } from "@mui/material";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/costum-swiper.css";
import { motion } from "framer-motion";
const NavbarHome = (props: any) => {
  return (
    <div className="home_navbar">
      <div className="navbar">
        <Link to="/">
          <img className="logo" src="/icons/Clip.svg" alt="" />
        </Link>
        <ul>
          <li>
            <NavLink
              className="nav-link-ltr"
              to="/"
              onClick={props.setPath}
              style={(isActive) => ({
                color: isActive ? "#f7ab42" : "black",
              })}
            >
              Home
            </NavLink>
          </li>
          <li onClick={props.setPath}>
            <Link className="hover_line nav-link-ltr" to="/shop">
              Shop{" "}
            </Link>
          </li>
          <li onClick={props.setPath}>
            <Link className="hover_line nav-link-ltr" to="/store">
              Store{" "}
            </Link>
          </li>
          <li onClick={props.setPath}>
            <Link className="hover_line nav-link-ltr" to="/community">
              Community{" "}
            </Link>
          </li>
          <li onClick={props.setPath}>
            <Link className="hover_line nav-link-ltr" to="/help">
              CS{" "}
            </Link>
          </li>
        </ul>
        <div className="icon_box">
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
              <img className="icon" src="/icons/icons.svg" alt="" />
            </IconButton>
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
              <Badge badgeContent={1}>
                <img className="icon_bag" src={"/icons/bag.svg"} alt="" />
              </Badge>
            </IconButton>
          </Box>
          <Button variant="contained" className="login_btn">
            Login
          </Button>
        </div>
      </div>
      <Stack>
        <Stack className="head_information_second">
          <Box>
            <motion.img
              src="/home/swr.png"
              alt="Swing Woman"
              className="big_img2"
              animate={{
                rotate: [4, -9, 4], // strong swing angle
              }}
              transition={{
                repeat: Infinity,
                ease: "easeInOut",
                duration: 4, // fast speed
              }}
            />
          </Box>
          <Stack
            justifyContent={"column"}
            sx={{ marginTop: "150px", marginLeft: "150px" }}
          >
            <img className="header_logo" src="/icons/Clip.svg" alt="" />
            <Box sx={{ mt: "20px" }}>
              <Button className="main_btn ">Shop now</Button>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Outlet />
    </div>
  );
};

export default NavbarHome;
