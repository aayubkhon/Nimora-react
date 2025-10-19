import React from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Box, Button, Stack, Avatar } from "@mui/material";
import "../../../css/my_page.scss";

const MySettings = () => {
  return (
    <div>
      <Stack className="setting_container" flexDirection={"column"}>
        <Box className="setting_file_box">
          <Avatar
            alt={""}
            className="setting_avatar_img"
            sx={{ width: "80px", height: "80px" }}
          />
          <div className="media_change_box">
            <span className="file_info">Upload Profile Image </span>
            <p className="file_type">
              A photo must be in JPG, JPEG or PNG format!
            </p>
            <div>
              <Button className="label">
                <CloudDownloadIcon color="secondary" />
                <input type="file" hidden />
              </Button>
            </div>
          </div>
        </Box>
        <Box className="input_frame">
          <p className="input_text">User Name</p>
          <div className="info_input">
            <input
              className="spec_label_input mb_nick"
              type="text"
              placeholder="Name"
              name="mb_nick"
              id=""
            />
          </div>
        </Box>
        <Box className="short_input_frame">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="input_text">Phone Number</p>
            <div className="short_input">
              <input
                className="spec_short_input mb_phone"
                type="text"
                placeholder="Phone Number"
                name="mb_phone"
                id=""
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ marginLeft: "30px" }} className="input_text">
              Address
            </p>
            <div className="short_input_second">
              <input
                className="spec_short_input mb_address"
                type="text"
                placeholder="Your Address"
                name="mb_address"
                id=""
              />
            </div>
          </div>
        </Box>
        <Box className="input_frame">
          <p className="input_text">Info</p>
          <div className="big_info_input">
            <textarea
              className="spec_big_input mb_description"
              placeholder="About Me"
              name="mb_description"
            />
          </div>
        </Box>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button variant="contained"  className="update_btn_box">Update Profile</Button>
        </Box>
      </Stack>
    </div>
  );
};

export default MySettings;
