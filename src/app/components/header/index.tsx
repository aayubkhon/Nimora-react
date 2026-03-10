import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { navbar } from "../../lib/navbar";
import "../../../css/navbar.scss";
import Footer from "../footer";
import { Logout } from "@mui/icons-material";
import MemberApiServices from "../../apiServices/memberApiServices";
import {
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import { Definer } from "../../lib/Definer";
import { verifyMemberData } from "../../apiServices/verify";
const NavbarHome = (props: any) => {
  const basket_countJSON = localStorage.getItem("cart_data") ? localStorage.getItem("cart_data") : "[]"
  const badge_count = JSON.parse(basket_countJSON as string)
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleLogOutClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLogOut = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(null);
  };
  const handleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogOutRequest = async () => {
    try {
      const memberApiService = new MemberApiServices();
      await memberApiService.logOutRequest();
      await sweetTopSmallSuccessAlert("success", 700, true);
    } catch (err) {
      console.log(err);
      sweetFailureProvider(Definer.general_err1);
    }
  };

  return (
    <>
      <div className="navbar_container">
        <Box className="logo_section" onClick={() => navigate("/")}>
          {/* <img className="logo" src="/icons/nimora.svg" alt="Glamora" /> */}
          <img src="/icons/nimora.svg" style={{ width: "180px" }} />
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
          {verifyMemberData ? (
            <Box>
              <NavLink
                to={"/member-page"}
                className={({ isActive }: { isActive: boolean }) =>
                  `navlink ${isActive ? "active" : ""}`
                }
              >
                My Page
              </NavLink>
            </Box>
          ) : null}
        </Box>
        <Box className="action_section">
          <IconButton className="icon_btn" onClick={() => navigate("/cart")}>
            <Badge badgeContent={badge_count.length} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          {!verifyMemberData ? (
            <Box>
              <Button className="login_btn" onClick={() => navigate("/login")}>
                Login
              </Button>
            </Box>
          ) : (
            <Avatar
              src={verifyMemberData.mb_image}
              onClick={handleLogOutClick}
              sx={{ width: "30px", height: "30px", cursor: "pointer" }}
            />
          )}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseLogOut}
            onClick={handleCloseLogOut}
            
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleLogOutRequest} >
              <ListItem>
                <Logout  fontSize="small" style={{ color: "blue" }} />
                Logout
              </ListItem>
            </MenuItem>
          </Menu>
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
      <Outlet />
      <Footer />
    </>
  );
};

export default NavbarHome;
