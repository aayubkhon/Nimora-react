import React, { useState } from "react";
import "../../../css/my_page.scss";
import { Box, Container, Stack, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ModeIcon from "@mui/icons-material/Mode";
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
      <div className="my_container">
              <Box className="my_profile">
              <AccountCircleIcon sx={{ fontSize: 100 }} fontSize="large" />
           <Box>
              <p>Leo</p>
              <p>+8221312</p>
              <p>User</p>
           </Box>
            </Box>
            <div className="tab_container">
               <TabContext value={value}>
               <Box>
                 <Tabs
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  className="tab_main"
                >
                  <Typography>MANAGE LISTINGS</Typography>

                    <Tab
                    iconPosition="start"
                    value="1"
                    icon={<FavoriteBorderIcon />}
                    label="My Favorite"
                    className="tab_title"
                  />
                  <Tab
                    iconPosition="start"
                    value="2"
                    icon={<RedeemIcon />}
                    label="My Orders"
                    className="tab_title"

                  />
                  <Tab
                    iconPosition="start"
                    value="3"
                    icon={<ZoomOutIcon/>}
                    label="Recently Visited"
                    className="tab_title"

                  />

                  <Tab
                    iconPosition="start"
                    value="4"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followers"
                    className="tab_title"

                  />
                  <Tab
                    iconPosition="start"
                    value="5"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followings"
                    className="tab_title"

                  />
                  <Typography>Community</Typography>
                  <Tab
                    iconPosition="start"
                    value="6"
                    icon={<AddCommentIcon />}
                    label="Articles"
                    className="tab_title"
                  />
                  <Tab
                    iconPosition="start"
                    value="7"
                    icon={<ModeIcon />}
                    label="Write Article"
                    className="tab_title"
                  />
                  <Typography>Menage Account</Typography>
                  <Tab
                    iconPosition="start"
                    value="8"
                    icon={<AccountCircleIcon />}
                    label="My Profile"
                    className="tab_title"

                  />
                </Tabs>
               </Box>
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
            </div>
      </div>
    </div>
  );
};

export default VisitMyPage;
