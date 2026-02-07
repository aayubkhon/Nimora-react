import React, { useEffect, useState } from "react";
import "../../../css/other_page.scss";
import { Avatar, Box, Tab, Tabs, Typography, Button } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
import { TabContext, TabPanel, TabList } from "@mui/lab";
import TargetArticles from "../CommunityPage/targetArticles";
import { useNavigate, useParams } from "react-router-dom";
import { BoArticle, SearchMemberArticlesObj } from "../../types/boArticle";
import { verifyMemberData } from "../../apiServices/verify";
import CommunityApiService from "../../apiServices/communityApiServicse";
import MemberApiServices from "../../apiServices/memberApiServices";
import ArticleViewer from "../../components/tuiEditor/articleViewer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberPost from "./memberPost";
import { serverApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import FollowApiService from "../../apiServices/followApiServices";
import { Member } from "../../types/user";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setChosenMember,
  setChosenMemberArticles,
  setChosenSingleArticles,
} from "./slice";
import {
  retrieveChosenMember,
  retrieveChosenMemberArticles,
  retrieveChosenSingleArticles,
} from "./selector";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setChosenMember: (data: Member) => dispach(setChosenMember(data)),
  setChosenMemberArticles: (data: BoArticle[]) =>
    dispach(setChosenMemberArticles(data)),
  setChosenSingleArticles: (data: BoArticle) =>
    dispach(setChosenSingleArticles(data)),
});

// ** REDUX SELECTOR */
const ChosenMemberRetriever = createSelector(
  retrieveChosenMember,
  (chosenMember) => ({
    chosenMember,
  }),
);
const ChosenMemberArticlesRetriever = createSelector(
  retrieveChosenMemberArticles,
  (chosenMemberArticles) => ({
    chosenMemberArticles,
  }),
);
const ChosenSingleArticlesRetriever = createSelector(
  retrieveChosenSingleArticles,
  (chosenSingleArticles) => ({
    chosenSingleArticles,
  }),
);
const VisitOtherPage = (props: any) => {
  // ** INITIALIZATIONS ** //
  const {
    setChosenMember,
    setChosenMemberArticles,
    setChosenSingleArticles: setChosenSingleArticle,
  } = actionDispatch(useDispatch());
  const { chosenMember } = useSelector(ChosenMemberRetriever);
  const { chosenMemberArticles } = useSelector(ChosenMemberArticlesRetriever);
  const { chosenSingleArticles } = useSelector(ChosenSingleArticlesRetriever);
  const [value, setValue] = useState("1");
  const navigate = useNavigate();
  const { chosen_mb_id, chosen_art_id } = props;
  const [articleRebuild, setArticleRebuild] = useState<Date>(new Date());
  const [followRebuild, setfollowRebuild] = useState<boolean>(false);
  const { other_id } = useParams<{ other_id: string }>();
  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({
      mb_id: other_id as string,
      page: 1,
      limit: 3,
    });

  useEffect(() => {
    if (other_id === verifyMemberData?._id) {
      navigate("/member-page");
    }
    const communityService = new CommunityApiService();
    if (chosen_art_id) {
      communityService
        .getChosenArticle(chosen_art_id)
        .then((data) => {
          setChosenSingleArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    }
    communityService
      .getMemberCommunityArticle(memberArticleSearchObj)
      .then((data) => {
        setChosenMemberArticles(data);
      })
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, other_id, articleRebuild]);

  useEffect(() => {
    if (other_id === verifyMemberData?._id) {
      navigate("/member-page");
    }
    const memberService = new MemberApiServices();
    memberService
      .getChosenMember(memberArticleSearchObj.mb_id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [verifyMemberData, other_id, followRebuild]);

  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderChosenArticleHandler = async (art_id: string) => {
    try {
      const communityService = new CommunityApiService();
      communityService
        .getChosenArticle(art_id)
        .then((data) => {
          setChosenSingleArticle(data);
          setValue("4");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const subscribeHandler = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const followService = new FollowApiService();
      await followService.subscribe(e.target.value);
      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setfollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  const unsubscribeHandler = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const followService = new FollowApiService();
      await followService.unsubscribe(e.target.value);
      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setfollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
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
                      src={
                        chosenMember?.mb_image
                          ? `${serverApi}/${chosenMember.mb_image}`
                          : "/public/auth/default_user.svg"
                      }
                    />
                    <Box className={"profile_info"}>
                      <p className="my_name">{chosenMember?.mb_nick}</p>
                      <p className="my_phone">{chosenMember?.mb_phone}</p>
                      <p className="user">{chosenMember?.mb_type}</p>
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
                      {chosenMember?.me_followed &&
                      chosenMember?.me_followed[0]?.my_following ? (
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"1"}
                          component={() => (
                            <Button
                              value={chosenMember?._id}
                              variant="contained"
                              onClick={unsubscribeHandler}
                              style={{
                                background: "rgb(20, 0, 0)",
                                color: "white",
                                borderRadius: 10,
                              }}
                            >
                              UN FOLLOw
                            </Button>
                          )}
                        />
                      ) : (
                        <Tab
                          style={{ flexDirection: "column" }}
                          value={"2"}
                          component={() => (
                            <Button
                              value={chosenMember?._id}
                              variant="contained"
                              onClick={subscribeHandler}
                              style={{
                                background: "#30945E",
                                borderRadius: 10,
                              }}
                            >
                              FOLLOW
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
                    label={`Followers ${chosenMember?.mb_subscriber_cnt || 0}`}
                    className="tab_label"
                  />
                  <Tab
                    iconPosition="start"
                    value="2"
                    icon={<PersonAddAlt1Icon />}
                    label={`Followings ${chosenMember?.mb_follow_cnt || 0}`}
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
                    <MemberFollow
                      mb_id={other_id}
                      followRebuild={followRebuild}
                      setfollowRebuild={setfollowRebuild}
                    />
                  </Box>
                </TabPanel>
              </Box>
              <TabPanel value={"2"}>
                <Box className="menu_name">Followings</Box>
                <Box className={"box_frame"}>
                  <MemberFollowings
                    mb_id={other_id}
                    followRebuild={followRebuild}
                    setfollowRebuild={setfollowRebuild}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={"3"}>
                <Box className="menu_name">Articles</Box>
                <Box>
                  <MemberPost
                    chosenMemberArticles={chosenMemberArticles}
                    renderChosenArticleHandler={renderChosenArticleHandler}
                    setArticleRebuild={setArticleRebuild}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={"4"}>
                <Box>
                  <ArticleViewer chosenSingleArticles={chosenSingleArticles} />
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
