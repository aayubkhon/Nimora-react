import React, { useState } from "react";
import "../../../css/my_page.scss";
import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ModeIcon from "@mui/icons-material/Mode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import MyFavorites from "./myFavorites";
import MySettings from "./mySettings";
import { Typography } from "@mui/material";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
const VisitMyPage = () => {
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="MyPage_frame">
      <Box className="bg_mypage">
        <div className="bg_box">
          <h1 className="mypage">My Page</h1>
          <p className="mypage_navi">Home/My Page</p>
        </div>
      </Box>
      <Container className="container">
        <Box className={"menu"}>
            <Box className="my_box">
              <PersonIcon sx={{ fontSize: 100 }} fontSize="large" />
              <p>Leo</p>
              <p>User</p>
              <p>MANAGE LISTINGS</p>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
              }}
            >
              <TabContext value={value}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                >
                  <Tab
                    iconPosition="start"
                    value="1"
                    icon={<FavoriteBorderIcon />}
                    label="My Favorite"
                  />
                  <Tab
                    iconPosition="start"
                    value="2"
                    icon={<RedeemIcon />}
                    label="My Orders"
                  />
                  <Tab
                    iconPosition="start"
                    value="3"
                    icon={<ZoomOutIcon />}
                    label="Recently Visited"
                  />

                  <Tab
                    iconPosition="start"
                    value="4"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followers"
                  />
                  <Tab
                    iconPosition="start"
                    value="5"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followings"
                  />
                  <Typography>Community</Typography>
                  <Tab
                    iconPosition="start"
                    value="6"
                    icon={<AddCommentIcon />}
                    label="Articles"
                  />
                  <Tab
                    iconPosition="start"
                    value="7"
                    icon={<ModeIcon />}
                    label="Write Article"
                  />
                  <Typography>Menage Account</Typography>
                  <Tab
                    iconPosition="start"
                    value="8"
                    icon={<AccountCircleIcon />}
                    label="My Profile"
                  />
                </Tabs>
                <TabPanel value={"1"}>
                  <Box className="menu_name">My Favorite</Box>
                  <Box>
                    <MyFavorites />
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className="menu_name">My orders</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
                <TabPanel value={"3"}>
                  <Box className="menu_name">Recently visited</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
                <TabPanel value={"4"}>
                  <Box className="menu_name">My Followers</Box>
                  <Box>
                    <MemberFollow />
                  </Box>
                </TabPanel>
                <TabPanel value={"5"}>
                  <Box className="menu_name">My Followings</Box>
                  <Box>
                    <MemberFollowings />
                  </Box>
                </TabPanel>
                <TabPanel value={"6"}>
                  <Box className="menu_name">Articles</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
                <TabPanel value={"7"}>
                  <Box className="menu_name">Write Articles</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
                <TabPanel value={"8"}>
                  <Box className="menu_name">My Profile</Box>
                  <Box>
                    <MySettings />
                  </Box>
                </TabPanel>
              </TabContext>
            </Box>
        </Box>
      </Container>
    </div>
  );
};

export default VisitMyPage;
