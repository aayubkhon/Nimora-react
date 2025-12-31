import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Stack,
  Box,
  Button,
  IconButton,
  Badge,
  Container,
  Drawer,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { navbar } from "../../lib/navbar";
import "../../../css/navbar.scss";
import Footer from "../footer";

const NavbarHome = (props: any) => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className="navbar_container">
        <Box className="logo_section" onClick={() => navigate("/")}>
          <img className="logo" src="/icons/glamora.svg" alt="Glamora" />
        </Box>

        <Box className="navbar_section desktop_nav">
          {navbar.map(({ title, path, hidden }, id) => {
            return (
              !hidden && (
                <NavLink
                  className={({ isActive }) =>
                    `navlink ${isActive ? "active" : ""}`
                  }
                  key={id}
                  to={path}
                >
                  {title}
                </NavLink>
              )
            );
          })}
        </Box>
        <Box className="action_section">
          <IconButton className="icon_btn" onClick={() => navigate("/cart")}>
            <Badge badgeContent={3} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <IconButton
            className="icon_btn"
            onClick={() => navigate("/my-account")}
          >
            <PersonIcon />
          </IconButton>
          <Box>
            <Button className="login_btn" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Box>
          {/* Mobile Menu Button */}
          <IconButton
            className="mobile_menu_btn"
            onClick={handleDrawer}
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Box>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawer}
        className="mobile_drawer"
      >
        <Box className="drawer_content">
          <Box className="drawer_header">
            <IconButton onClick={handleDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box className="mobile_nav">
            {navbar.map(({ title, path, hidden }, id) => {
              return (
                !hidden && (
                  <NavLink
                    className={({ isActive }) =>
                      `mobile_navlink ${isActive ? "active" : ""}`
                    }
                    key={id}
                    to={path}
                    onClick={handleDrawer}
                  >
                    {title}
                  </NavLink>
                )
              );
            })}
          </Box>

          <Box className="mobile_actions">
            <Button
              fullWidth
              variant="contained"
              className="mobile_login_btn"
              onClick={() => {
                navigate("/login");
                handleDrawer();
              }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="outlined"
              className="mobile_signup_btn"
              onClick={() => {
                navigate("/sign-up");
                handleDrawer();
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Drawer>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavbarHome;
