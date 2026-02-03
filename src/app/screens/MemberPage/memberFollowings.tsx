import {
  Avatar,
  Box,
  Button,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../../css/followers.scss";
import PersonAddDisabledOutlinedIcon from "@mui/icons-material/PersonAddDisabledOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setMemberFollowings } from "./slice";
import { retrieveMemberFollowings } from "./selector";
import { Following, FollowSearchObj } from "../../types/follow";
import FollowApiService from "../../apiServices/followApiServices";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";

// ** REDUX SLICE */
const actionDispatch = (dispach: Dispatch) => ({
  setMemberFollowings: (data: Following[]) =>
    dispach(setMemberFollowings(data)),
});
// ** REDUX SELECTOR */
const memberFollowingsRetriever = createSelector(
  retrieveMemberFollowings,
  (memberFollowings) => ({
    memberFollowings,
  }),
);

const MemberFollowings = (props: any) => {
  // ** INITIALIZATIONS ** //

  const [articleREbuild, setArticletRebuild] = useState<Date>(new Date());
  const { setMemberFollowings } = actionDispatch(useDispatch());
  const { memberFollowings } = useSelector(memberFollowingsRetriever);
  const { mb_id, followRebuild, setfollowRebuild } = props;
  const [followingsSearchObj, setFollowingsSearchObj] =
    useState<FollowSearchObj>({
      page: 1,
      limit: 5,
      mb_id: mb_id,
    });

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowings(followingsSearchObj)
      .then((data) => setMemberFollowings(data))
      .catch((err) => console.log(err));
  }, [followingsSearchObj, followRebuild]);

  // ** HANDLERS **//

  const unsubscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const followService = new FollowApiService();
      await followService.unsubscribe(id);
      await sweetTopSmallSuccessAlert("unsubscribed successfully", 700, false);
      setfollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
  const handlePaginatonsChange = (event: any, value: number) => {
    followingsSearchObj.page = value;
    setFollowingsSearchObj({ ...followingsSearchObj });
  };
  return (
    <div>
      <div className="follow_frame">
        <Stack>
          {memberFollowings.map((following: Following) => {
            const image_url = following.follow_member_data?.mb_image
              ? `${serverApi}/${following.follow_member_data?.mb_image}`
              : "/auth/default_user.svg";
            return (
              <Box key={following._id} className="followers_box">
                <Box className="followers_img">
                  <Avatar
                    alt={""}
                    src={image_url}
                    sx={{ width: "80px", height: "80px" }}
                  />
                </Box>
                <div className="followers_container">
                  <span className="followers_auth_user">
                    {following?.follow_member_data?.mb_type}
                  </span>
                  <span className="followers_title">
                    {following?.follow_member_data?.mb_nick}
                  </span>
                </div>
                <Box className="follow_btn_box">
                  {props.actions_enabled && (
                    <Button
                      variant="contained"
                      startIcon={<PersonAddDisabledOutlinedIcon />}
                      className="follow_cancel_btn"
                      onClick={(e) =>
                        unsubscribeHandler(e, following?.follow_id)
                      }
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
      <Box className="pagination_box">
        <Pagination
          count={
            followingsSearchObj.page >= 3 ? followingsSearchObj.page + 1 : 3
          }
          page={followingsSearchObj.page}
          renderItem={(item) => (
            <PaginationItem
              components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
              color="secondary"
              className="pagination"
            />
          )}
          onChange={handlePaginatonsChange}
        />
      </Box>
    </div>
  );
};

export default MemberFollowings;
