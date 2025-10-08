import React, { useState } from "react";
import "../../../css/community.scss";
import { Box, Pagination, PaginationItem, Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import TargetArticles from "./targetArticles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const targetBoArticles = [1, 2, 3, 4, 5];
const Community = (props: any) => {
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handlePaginationChange = (event: any, value: number) => {
    console.log(value);
  };
  return (
    <div className="Community_frame">
      <Box className="bg_community">
        <div className="bg_box">
          <h1 className="community">Community</h1>
          <p className="community_title">Home/Community</p>
        </div>
      </Box>
      <Box className="tab_container">
        <TabContext value={value}>
          <Box className={"tabs_box"}>
            <Tabs
              orientation="vertical"
              onChange={handleChange}
              aria-label="Vertical tabs example"
              value={value}
            >
              <img src="/icons/glamora.svg" alt="" />
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
            <TargetArticles targetBoArticles={[1,2]} />
          </TabPanel>
          <TabPanel value={"2"}>
            <div className="box_head">
              <h2 className="exprss">News</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles targetBoArticles={[1,]} />
          </TabPanel>
          <TabPanel value={"3"}>
            <div className="box_head">
              <h2 className="exprss">Humor</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles targetBoArticles={[1,]} />
          </TabPanel>
          <TabPanel value={"4"}>
            <div className="box_head">
              <h2 className="exprss">Recommendation</h2>
              <p className="paragraph">
                Express your opinions freely here without content restrictions
              </p>
            </div>
            <TargetArticles targetBoArticles={[1,]} />
          </TabPanel>
        </TabContext>
      </Box>
      <Box className="pagination_box">
        <Pagination
          count={1}
          page={1}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              style={{ color: "black" }}
              className="pagination"
            />
          )}
          onChange={handlePaginationChange}
        />
      </Box>
    </div>
  );
};

export default Community;
