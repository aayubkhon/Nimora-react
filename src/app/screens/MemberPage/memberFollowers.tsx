import React, { useEffect, useState } from "react";
import "../../../css/followers.scss";
import { Avatar, Box, Button, Pagination, PaginationItem, Stack } from "@mui/material";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setMemberFollowers } from "./slice";
import { retrieveMemberFollowers } from "./selector";
import { Follower, FollowSearchObj } from "../../types/follow";
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
  setMemberFollowers: (data: Follower[]) => dispach(setMemberFollowers(data)),
});
// ** REDUX SELECTOR */
const memberFollowersRetriever = createSelector(
  retrieveMemberFollowers,
  (memberFollowers) => ({
    memberFollowers,
  }),
);

const MemberFollow = (props: any) => {
  // ** INITIALIZATIONS ** //
  const { mb_id, followRebuild, setfollowRebuild } = props;
  const { setMemberFollowers } = actionDispatch(useDispatch());
  const { memberFollowers } = useSelector(memberFollowersRetriever);
  const [followersSearchObj, setFollowersSearchObj] = useState<FollowSearchObj>(
    {
      page: 1,
      limit: 5,
      mb_id: mb_id,
    },
  );

  useEffect(() => {
    const followService = new FollowApiService();
    followService
      .getMemberFollowers(followersSearchObj)
      .then((data) => setMemberFollowers(data))
      .catch((err) => console.log(err));
  }, [followersSearchObj, followRebuild]);

  // ** HANDLERS **//

  const subscribeHandler = async (e: any, id: string) => {
    try {
      e.stopPropagation();
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const followService = new FollowApiService();
      await followService.subscribe(id);
      await sweetTopSmallSuccessAlert("subscribed successfully", 700, false);
      setfollowRebuild(!followRebuild);
    } catch (err: any) {
      console.log(err);
      sweetErrorHandling(err).then();
    }
  };
 const handlePaginatonsChange = (event: any, value: number) => {
    followersSearchObj.page = value;
    setFollowersSearchObj({ ...followersSearchObj });
  };
  return (
    <div>
      <Stack>
        {memberFollowers.map((follower: Follower) => {
          const image_url = follower.subscriber_member_data?.mb_image
            ? `${serverApi}/${follower.subscriber_member_data?.mb_image}`
            : "/auth/default_user.svg";
          return (
            <div key={follower._id} className="follow_frame">
              <Box className="followers_box">
                <Box className="followers_img">
                  <Avatar
                    alt={""}
                    src={image_url}
                    sx={{ width: "80px", height: "80px" }}
                  />
                </Box>
                <div className="followers_container">
                  <h2 className="followers_auth_user">
                    {follower?.subscriber_member_data?.mb_type}
                  </h2>
                  <p className="followers_title">
                    {follower?.subscriber_member_data?.mb_nick}
                  </p>
                </div>
                <Box className="follow_btn_box">
                  {props.actions_enabled &&
                    (follower?.me_followed &&
                    follower.me_followed[0]?.my_following ? (
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
                        onClick={(e) =>
                          subscribeHandler(e, follower?.subscriber_id)
                        }
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
       <Box className="pagination_box">
        <Pagination
          count={followersSearchObj.page >= 3 ? followersSearchObj.page + 1 : 3}
          page={followersSearchObj.page}
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

export default MemberFollow;
