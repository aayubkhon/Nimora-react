import React from "react";
import "../../../css/followers.scss";
import { Avatar, Box, Button, Stack } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
const follower = [
  { mb_nick: "leo", following: true },
  { mb_nick: "jonibek", following: false },
  { mb_nick: "sofia", following: true },
];

const MemberFollow = (props: any) => {
  return (
    <div>
      <Stack>
        {follower.map((follower) => {
          const image_url = "/auth/default_user.svg";
          return (
            <div className="follow_frame">
              <Box className="followers_box">
                <Box className="followers_img">
                  <Avatar
                    alt={""}
                    src={image_url}
                    sx={{ width: "80px", height: "80px" }}
                  />
                </Box>
                <div className="followers_container">
                  <h2 className="followers_auth_user">USER</h2>
                  <p className="followers_title">{follower.mb_nick}</p>
                </div>
                <Box className="follow_btn_box">
                  {props.actions_enabled &&
                    (follower.following ? (
                      <Button
                        variant={"contained"}
                        className="following_already"
                      >
                        FOLLOWING
                      </Button>
                    ) : (
                      <Button
                        className="follow_btn"
                        variant={"contained"}
                        startIcon={<PersonAddAltOutlinedIcon />}
                      >
                        Follow Back
                      </Button>
                    ))}
                </Box>
              </Box>
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default MemberFollow;
