import React, { useState } from "react";
import "../../../css/other_page.scss";
import { Avatar, Box, Tab, Tabs, Typography, Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import TargetArticles from "../CommunityPage/targetArticles";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setChosenMember,
  setChosenMemberArticles,
  setChosenSingleArticles,
} from "./slice";
import { Member } from "../../types/user";
import {
  retrieveChosenMember,
  retrieveChosenMemberArticles,
  retrieveChosenSingleArticles,
} from "./selector";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member[]) => dispach(setChosenMember(data)),
  setChosenMemberArticles: (data: Member[]) =>
    dispach(setChosenMemberArticles(data)),
  setChosenSingleArticles: (data: Member[]) =>
    dispach(setChosenSingleArticles(data)),
});

// ** REDUX SELECTOR */
const ChosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  })
);
const ChosenMemberArticlesRetriever = createSelector(
  retrieveChosenMemberArticles,
  (chosenMemberArticles) => ({
    chosenMemberArticles,
  })
);
const ChosenSingleArticlesRetriever = createSelector(
  retrieveChosenSingleArticles,
  (chosenSingleArticles) => ({
    chosenSingleArticles,
  })
);
const VisitOtherPage = () => {
  // ** INITIALIZATIONS ** //
  const [articleREbuild, setArticletRebuild] = useState<Date>(new Date());
  const { setChosenMember, setChosenMemberArticles, setChosenSingleArticles } =
    actionDispatch(useDispatch());
  const { chosenMember } = useSelector(ChosenMemberRetriever);
  const { chosenMemberArticles } = useSelector(ChosenMemberArticlesRetriever);
  const { chosenSingleArticles } = useSelector(ChosenSingleArticlesRetriever);
  const [value, setValue] = useState("1");
  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="OtherPage_frame">
      <Box className="bg_mypage">
        <div className="bg_box">
          <h1 className="mypage">Other Page</h1>
          <p className="mypage_navi">Home/Other Page</p>
        </div>
      </Box>

      <div className="right_menu">
        <div className="my_container">
          <Box className="tab_my_cont">
            <TabContext value={value}>
              <Box className={"tab_main"}>
                <Tabs
                  orientation="vertical"
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  value={value}
                  variant="fullWidth"
                >
                  <Box display="flex">
                    <Avatar
                      alt={""}
                      sx={{
                        width: "80px",
                        height: "80px",
                        marginLeft: 5,
                        marginTop: 3,
                      }}
                    />
                    <Box className={"profile_info"}>
                      <p className="my_name">Leo</p>
                      <p className="my_phone">+8221312</p>
                      <p className="user">User</p>
                    </Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    sx={{ mt: "20px" }}
                  >
                    <TabList
                      onChange={handleChange}
                      aria-label="lab API tabs example"
                    >
                      {true ? (
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"4"}
                          component={() => (
                            <Button
                              variant="contained"
                              onClick={() => setValue("4")}
                              style={{
                                background: "rgb(20, 0, 0)",
                                color: "white",
                                borderRadius: 10,
                              }}
                            >
                              BEKOR QILISH
                            </Button>
                          )}
                        />
                      ) : (
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"4"}
                          component={() => (
                            <Button
                              variant="contained"
                              onClick={() => setValue("4")}
                              style={{
                                background: "#30945E",
                                borderRadius: 10,
                              }}
                            >
                              FOLLOW QILISH
                            </Button>
                          )}
                        />
                      )}
                    </TabList>
                  </Box>
                  <Typography variant="h4" className="tab_another">
                    Details
                  </Typography>

                  <Tab
                    iconPosition="start"
                    value="1"
                    icon={<PersonAddAlt1Icon />}
                    label="Followers"
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="2"
                    icon={<PersonAddAlt1Icon />}
                    label="Followings"
                    className="tab_label"
                  />
                  <p className="tab_title">Community</p>
                  <Tab
                    iconPosition="start"
                    value="3"
                    icon={<AddCommentIcon />}
                    label="Articles"
                    className="tab_label"
                  />
                </Tabs>
              </Box>
              <Box>
                <TabPanel value={"1"}>
                  <Box className="menu_name">Followers</Box>
                  <Box className={"box_frame"}>
                    <MemberFollow actions_enabled={false} />
                  </Box>
                </TabPanel>
              </Box>
              <TabPanel value={"2"}>
                <Box className="menu_name">Followings</Box>
                <Box className={"box_frame"}>
                  <MemberFollowings actions_enabled={false} />
                </Box>
              </TabPanel>
              <TabPanel value={"3"}>
                <Box className="menu_name">Articles</Box>
                <Box>
                  <TargetArticles />
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default VisitOtherPage;
