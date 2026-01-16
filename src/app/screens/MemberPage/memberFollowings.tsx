import { Avatar, Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import "../../../css/followers.scss";
import PersonAddDisabledOutlinedIcon from "@mui/icons-material/PersonAddDisabledOutlined";
const following = [
  { mb_nick: "ravshan" },
  { mb_nick: "ulugbek" },
  { mb_nick: "larisa" },
];
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setMemberFollowings } from "./slice";
import { retrieveMemberFollowings } from "./selector";
import { Member } from "../../types/user";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowings: (data: Member[]) => dispach(setMemberFollowings(data)),
});
// ** REDUX SELECTOR */
const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  })
);
const MemberFollowings = (props: any) => {
  // ** INITIALIZATIONS ** //

  const [articleREbuild, setArticletRebuild] = useState<Date>(new Date());
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
  return (
    <div className="follow_frame">
      <Stack>
        {following.map((follower) => {
          const image_url = "/auth/default_user.svg";
          return (
            <Box className="followers_box">
              <Box className="followers_img">
                <Avatar
                  alt={""}
                  src={image_url}
                  sx={{ width: "80px", height: "80px" }}
                />
              </Box>
              <div className="followers_container">
                <span className="followers_auth_user">USER</span>
                <span className="followers_title">{follower.mb_nick}</span>
              </div>
              <Box className="follow_btn_box">
                {props.actions_enabled && (
                  <Button
                    variant="contained"
                    startIcon={<PersonAddDisabledOutlinedIcon />}
                    className="follow_cancel_btn"
                  >
                    Un follow
                  </Button>
                )}
              </Box>
            </Box>
          );
        })}
      </Stack>
    </div>
  );
};

export default MemberFollowings;
