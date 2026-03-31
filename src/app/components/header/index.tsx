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
  Drawer,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
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
  const basket_countJSON = localStorage.getItem("cart_data")
    ? localStorage.getItem("cart_data")
    : "[]";
  const badge_count = JSON.parse(basket_countJSON as string);
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
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawer}
        PaperProps={{
          sx: {
            width: 260,
            background: "#2c1810",
            padding: "20px 0",
          },
        }}
      >
        {/* Close button */}
        <Box sx={{ display: "flex", justifyContent: "flex-end", px: 2, mb: 2 }}>
          <IconButton onClick={handleDrawer} sx={{ color: "#d4a853" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Logo */}
        <Box sx={{ px: 3, mb: 3 }}>
          <img src="/icons/nimora.svg" style={{ width: "140px" }} />
        </Box>

        {/* Nav links */}
        <List>
          {navbar.map(({ title, path, hidden }, id) =>
            !hidden ? (
              <ListItemButton
                key={id}
                component={NavLink}
                to={"*"}
                onClick={handleDrawer}
                sx={{
                  color: "#fff",
                  fontFamily: "Judson",
                  "&.active": { color: "#d4a853" },
                  "&:hover": { color: "#d4a853", background: "transparent" },
                }}
              >
                <ListItemText
                  primary={title}
                  primaryTypographyProps={{
                    fontFamily: "Judson",
                    fontSize: "16px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                />
              </ListItemButton>
            ) : null,
          )}

          {verifyMemberData && (
            <ListItemButton
              component={NavLink}
              to="/member-page"
              onClick={handleDrawer}
              sx={{
                color: "#fff",
                "&.active": { color: "#d4a853" },
                "&:hover": { color: "#d4a853", background: "transparent" },
              }}
            >
              <ListItemText
                primary="My Page"
                primaryTypographyProps={{
                  fontFamily: "Judson",
                  fontSize: "16px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              />
            </ListItemButton>
          )}
        </List>

        {/* Login / Logout */}
        <Box sx={{ px: 3, mt: "auto", pt: 3 }}>
          {!verifyMemberData ? (
            <Button
              fullWidth
              onClick={() => {
                navigate("/login");
                handleDrawer();
              }}
              sx={{
                border: "1px solid #d4a853",
                color: "#d4a853",
                fontFamily: "Judson",
                letterSpacing: "2px",
              }}
            >
              Login
            </Button>
          ) : (
            <Button
              fullWidth
              onClick={handleLogOutRequest}
              startIcon={<Logout />}
              sx={{
                border: "1px solid #ff6b6b",
                color: "#ff6b6b",
                fontFamily: "Judson",
                letterSpacing: "2px",
              }}
            >
              Logout
            </Button>
          )}
        </Box>
      </Drawer>
      <div className="navbar_container">
        <Box className="logo_section" onClick={() => navigate("/")}>
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
            <MenuItem onClick={handleLogOutRequest}>
              <ListItem>
                <Logout fontSize="small" style={{ color: "blue" }} />
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
