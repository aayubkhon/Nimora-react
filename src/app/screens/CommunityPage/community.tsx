import React, { useState } from "react";
import "../../../css/community.scss";
import { Box,  Tab, Tabs } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";

const Community = () => {
  // ** INITIALIZATIONS ** //
  const [value, setValue] = useState("1");
  // ** HANDLERS **//
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
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
        <TabContext  value={value}>
          <Box  className={"tabs_box"}>
            <Tabs
              orientation="vertical"
              onChange={handleChange}
              aria-label="Vertical tabs example"
            >
              <img src="/icons/glamora.svg" alt="" />
              <Tab  className="tab_br active" value={"1"} label="All Blogs" />
              <Tab className="tab_br" value={"2"} label="News" />
              <Tab className="tab_br" value={"3"} label="Humor" />
              <Tab className="tab_br" value={"4"} label="Recommendation" />
            </Tabs>
          </Box>
          <TabPanel value={"1"}>Item Onesdsd</TabPanel>
          <TabPanel value={"2"}>Item Two</TabPanel>
          <TabPanel value={"3"}>Item Three</TabPanel>
          <TabPanel value={"4"}>Item Four</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Community;
