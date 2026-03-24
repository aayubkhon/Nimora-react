import React, { useEffect, useState } from "react";
import "../../../css/my_page.scss";
import { Avatar, Box, Tab, Tabs, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ModeIcon from "@mui/icons-material/Mode";
import MyFavorites from "./myFavorites";
import MySettings from "./mySettings";
import MemberFollow from "./memberFollowers";
import MemberFollowings from "./memberFollowings";
import { TabContext, TabPanel } from "@mui/lab";
import TuiEditor from "../../components/tuiEditor/tuiEditor";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {
  setChosenMember,
  setChosenMemberArticles,
  setChosenSingleArticles,
} from "./slice";
import { BoArticle, SearchMemberArticlesObj } from "../../types/boArticle";
import CommunityApiService from "../../apiServices/communityApiServicse";
import { Member } from "../../types/user";
import {
  retrieveChosenMember,
  retrieveChosenMemberArticles,
  retrieveChosenSingleArticles,
} from "./selector";
import {
  sweetErrorHandling,
  sweetFailureProvider,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";
import MemberOrderCards from "./memberOrders";
import MemberPost from "./memberPost";
import ArticleViewer from "../../components/tuiEditor/articleViewer";
import { serverApi } from "../../lib/config";
import { verifyMemberData } from "../../apiServices/verify";

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
const VisitMyPage = (props:any) => {
  // ** INITIALIZATIONS ** //
  const { setChosenMember, setChosenMemberArticles, setChosenSingleArticles } =
    actionDispatch(useDispatch());
  const { chosenMember } = useSelector(ChosenMemberRetriever);
  const { chosenMemberArticles } = useSelector(ChosenMemberArticlesRetriever);
  const { chosenSingleArticles } = useSelector(ChosenSingleArticlesRetriever);
  const [value, setValue] = useState("1");
  const [articleRebuild, setArticleRebuild] = useState<Date>(new Date());
  const [followRebuild, setfollowRebuild] = useState<boolean>(false);

  const [memberArticleSearchObj, setMemberArticleSearchObj] =
    useState<SearchMemberArticlesObj>({
      mb_id: "none",
      page: 1,
      limit: 3,
    });

       useEffect(() => {
          window.scrollTo(0, 0);
        }, []);

  useEffect(() => {
    if (!verifyMemberData) {
      sweetFailureProvider("Please login first!", true, true);
    }
    const communityService = new CommunityApiService();
    const memberService = new MemberApiServices();

    communityService
      .getMemberCommunityArticle(memberArticleSearchObj)
      .then((data) => {
        setChosenMemberArticles(data);
      })
      .catch((err) => console.log(err));

    memberService
      .getChosenMember(verifyMemberData?._id)
      .then((data) => setChosenMember(data))
      .catch((err) => console.log(err));
  }, [memberArticleSearchObj, articleRebuild, followRebuild]);

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
          setChosenSingleArticles(data);
          setValue("8");
        })
        .catch((err) => console.log(err));
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="MyPage_frame">
      <Box className="store_hero">
              <Box className="store_hero_inner">
                <Typography className="store_hero_label">My Page</Typography>
                <Typography className="store_hero_title">
                  Discover Nimora<br />Jewellery My Page
                </Typography>
                <Box className="store_hero_line" />
              </Box>
            </Box>
      <div className="right_menu">
        <div className="my_container">
          <Box className="tab_cont_frame">
            <TabContext value={value}>
              <Box className={"tab_main"}>
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Box display="flex">
                    <Avatar
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
                      <p className="my_name">name:{chosenMember?.mb_nick}</p>
                      <p className="my_phone">phone:{chosenMember?.mb_phone}</p>
                      <p className="user">{chosenMember?.mb_type ?? "User"}</p>
                      <p className="user">Info:{chosenMember?.mb_description ?? ""}</p>
                    </Box>
                  </Box>
                  <Typography variant="h4" className="tab_another">
                    My Activity
                  </Typography>
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
                    icon={<PersonAddAlt1Icon />}
                    label={`My Followers ${chosenMember?.mb_subscriber_cnt || 0}`}
                  />
                  <Tab
                    iconPosition="start"
                    value="4"
                    icon={<PersonAddAlt1Icon />}
                    label={`My Followings ${chosenMember?.mb_follow_cnt || 0}`}
                  />
                  <p className="tab_title">Community</p>
                  <Tab
                    iconPosition="start"
                    value="5"
                    icon={<AddCommentIcon />}
                    label="Articles"
                  />
                  <Tab
                    iconPosition="start"
                    value="6"
                    icon={<ModeIcon />}
                    label="Write Article"
                  />
                  <p className="tab_title">Menage Account</p>
                  <Tab
                    iconPosition="start"
                    value="7"
                    icon={<AccountCircleIcon />}
                    label="My Profile"
                  />
                </Tabs>
              </Box>

              <TabPanel value={"1"}>
                <Box className={"box_frame_favorite"}>
                  <MyFavorites />
                </Box>
              </TabPanel>
              <TabPanel value={"2"}>
                <Box>
                  <MemberOrderCards />
                </Box>
              </TabPanel>
              <Box>
                <TabPanel value={"3"}>
                  <Box className={"box_frame"}>
                    <MemberFollow
                      mb_id={verifyMemberData?._id}
                      followRebuild={followRebuild}
                      setfollowRebuild={setfollowRebuild}
                    />
                  </Box>
                </TabPanel>
              </Box>
              <TabPanel value={"4"}>
                <Box className={"box_frame"}>
                  <MemberFollowings
                    mb_id={verifyMemberData?._id}
                    followRebuild={followRebuild}
                    setfollowRebuild={setfollowRebuild}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={"5"}>
                <Box>
                  <MemberPost
                    chosenMemberArticles={chosenMemberArticles}
                    renderChosenArticleHandler={renderChosenArticleHandler}
                    setArticleRebuild={setArticleRebuild}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={"6"}>
                <Box className={"box_frame"}>
                  <TuiEditor setValue={setValue} 
                  setArticleRebuild={setArticleRebuild}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={"7"}>
                <Box className={"box_frame"}>
                  <MySettings />
                </Box>
              </TabPanel>
              <TabPanel value={"8"}>
                <Box className={"box_frame"}>
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

export default VisitMyPage;
