import React, { useState } from "react";
import "../../../css/my_page.scss";
import { Avatar, Box, Container, Stack, Tab, Tabs } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ModeIcon from "@mui/icons-material/Mode";
import MyFavorites from "./myFavorites";
import MySettings from "./mySettings";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
import { TabContext, TabPanel } from "@mui/lab";
import TargetArticles from "../CommunityPage/targetArticles";
import TuiEditor from "../../components/tuiEditor/tuiEditor";
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

      <div className="right_menu">
        <div className="my_container">
          <Box className="tab_my_cont">
            <TabContext value={value}>
              <Box className={"tab_main"}>
                <Tabs
                selectionFollowsFocus={true}
                  orientation="vertical"
                  className="tttt"
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  value={value}
                  sx={{
                    "& button.Mui-selected": {
                      backgroundColor: "rgb(246, 245, 240)",
                      color: "black",
                    },
                  }}
                  
                >
                  <Box display="flex">
                  <Avatar
                alt={""}
                sx={{ width: "80px", height: "80px",marginLeft:5,marginTop:3 }}
              />
                    <Box className={"profile_info"}>
                      <p className="my_name">Leo</p>
                      <p className="my_phone">+8221312</p>
                      <p className="user">User</p>
                    </Box>
                  </Box>
                    <Tab
                    iconPosition="start"
                    value="1"
                    icon={<FavoriteBorderIcon />}
                    label="My Favorite"
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="2"
                    icon={<RedeemIcon />}
                    label="My Orders"
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="3"
                    icon={<ZoomOutIcon />}
                    label="Recently Visited"
                    className="tab_label"
                  />

                  <Tab
                    iconPosition="start"
                    value="4"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followers"
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="5"
                    icon={<PersonAddAlt1Icon />}
                    label="My Followings"
                    className="tab_label"
                  />
                  <p>Community</p>
                  <Tab
                    iconPosition="start"
                    value="6"
                    icon={<AddCommentIcon />}
                    label="Articles"
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="7"
                    icon={<ModeIcon />}
                    label="Write Article"
                    className="tab_label"
                  />
                  <p>Menage Account</p>
                  <Tab
                    iconPosition="start"
                    value="8"
                    icon={<AccountCircleIcon />}
                    label="My Profile"
                    className="tab_label"
                  />
                </Tabs>
              </Box>
              
                  <TabPanel value={"1"}>
                  <h1 className="exprss">My Favorite</h1>
                    <Box className={"box_frame"} >
                      <MyFavorites />
                    </Box>
                  </TabPanel>
                       <TabPanel value={"2"}>
                  <h1 className="menu_name">My orders</h1>
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
               <Box>
                 <TabPanel value={"4"}>
                  <Box className="menu_name">My Followersss</Box>
                  <Box className={"box_frame"} >
                    <MemberFollow actions_enabled={true} />
                  </Box>
                </TabPanel>
               </Box>
                <TabPanel value={"5"}>
                  <Box className="menu_name">My Followings</Box>
                  <Box className={"box_frame"}>
                    <MemberFollowings actions_enabled={true} />
                  </Box>
                </TabPanel>
                <TabPanel value={"6"}>
                  <Box className="menu_name">Articles</Box>
                  <Box>
                    <TargetArticles />
                  </Box>
                </TabPanel>
                <TabPanel value={"7"}>
                  <Box className="menu_name">Write Articles</Box>
                  <Box  className={"box_frame"}>
                    <TuiEditor />
                  </Box>
                </TabPanel>
                <TabPanel value={"8"}>
                  <Box className="menu_name">My Profile</Box>
                  <Box className={"box_frame"}>
                    <MySettings />
                  </Box>
                </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default VisitMyPage;
