import React, { useEffect, useState } from "react";
import "../../../css/community.scss";
import { Box, Pagination, PaginationItem, Tab, Tabs, Typography } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import TargetArticles from "./targetArticles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setTargetBoArticles } from "./slice";
import { BoArticle, SearchArticlesObj } from "../../types/boArticle";
import { retrieveTargetBoArticles } from "./selector";
import CommunityApiService from "../../apiServices/communityApiServicse";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setTargetBoArticles: (data: BoArticle[]) =>
    dispach(setTargetBoArticles(data)),
});
// ** REDUX SELECTOR */
const tergetBoArticlesRetriever = createSelector(
  retrieveTargetBoArticles,
  (tergetBoArticles) => ({
    tergetBoArticles,
  })
);
const CommunityPage = (props: any) => {
  // ** INITIALIZATIONS ** //

  const [articleREbuild, setArticletRebuild] = useState<Date>(new Date());
  const { setTargetBoArticles } = actionDispatch(useDispatch());
  const { tergetBoArticles } = useSelector(tergetBoArticlesRetriever);
  const [searchArticlesObj, setSearchArticlesObj] = useState<SearchArticlesObj>(
    {
      bo_id: "all",
      page: 1,
      limit: 6,
    }
  );
  const [value, setValue] = useState("1");

  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getTargetArticles(searchArticlesObj)
      .then((data) => {
        setTargetBoArticles(data);
      })
      .catch((err) => console.log(err));
  }, [searchArticlesObj, articleREbuild]);

  // ** HANDLERS **//
  const handleChange = (event: any, newValue: string) => {
    searchArticlesObj.page = 1;
    switch (newValue) {
      case "1":
        searchArticlesObj.bo_id = "all";
        break;
      case "2":
        searchArticlesObj.bo_id = "news";
        break;
      case "3":
        searchArticlesObj.bo_id = "humor";
        break;
      case "4":
        searchArticlesObj.bo_id = "recommendation";
        break;
    }
    setSearchArticlesObj({ ...searchArticlesObj });
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    searchArticlesObj.page = value;
    setSearchArticlesObj({ ...searchArticlesObj });
  };
  return (
    <div className="Community_frame">
    <Box className="store_hero">
        <Box className="store_hero_inner">
          <Typography className="store_hero_label">Our Community</Typography>
          <Typography className="store_hero_title">
            Discover Nimora<br />Jewellery Community
          </Typography>
          <Box className="store_hero_line" />
        </Box>
      </Box>
      <Box className="tab_container">
        <TabContext value={value}>
          <Box className={"tabs_box"}>
            <Tabs
              orientation="vertical"
              onChange={handleChange}
              aria-label="Vertical tabs example"
              value={value}
              sx={{
                "& button.Mui-selected": {
                  backgroundColor: "linear-gradient(90deg, #f7ab42, #ff8a00);",
                  color: "#ffff",
                },
              }}
            >
              <img src="/icons/nimora.svg" alt="" style={{width:300}} />
              <Tab className="tab_br" value={"1"} label="All Blogs" />
              <Tab className="tab_br" value={"2"} label="News" />
              <Tab className="tab_br" value={"3"} label="Humor" />
              <Tab className="tab_br" value={"4"} label="Recommendation" />
            </Tabs>
          </Box>
          <TabPanel value={"1"}>
            <div className="box_head">
              <h2 className="exprss">All Blogs</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles
              tergetBoArticles={tergetBoArticles}
              setArticletRebuild={setArticletRebuild}
            />
          </TabPanel>
          <TabPanel value={"2"}>
            <div className="box_head">
              <h2 className="exprss">News</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles
              tergetBoArticles={tergetBoArticles}
              setArticletRebuild={setArticletRebuild}
            />
          </TabPanel>
          <TabPanel value={"3"}>
            <div className="box_head">
              <h2 className="exprss">Humor</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles
              tergetBoArticles={tergetBoArticles}
              setArticletRebuild={setArticletRebuild}
            />
          </TabPanel>
          <TabPanel value={"4"}>
            <div className="box_head">
              <h2 className="exprss">Recommendation</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles
              tergetBoArticles={tergetBoArticles}
              setArticletRebuild={setArticletRebuild}
            />
          </TabPanel>
        </TabContext>
      </Box>
      <Box className="pagination_box">
        <Pagination
          count={searchArticlesObj.page >= 3 ? searchArticlesObj.page + 1 : 3}
          page={searchArticlesObj.page}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              color="secondary"
              className="pagination"
            />
          )}
          onChange={handlePaginationChange}
        />
      </Box>
    </div>
  );
};

export default CommunityPage;
