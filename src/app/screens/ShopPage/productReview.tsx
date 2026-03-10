import React, { useEffect, useRef, useState } from "react";
import "../../../css/review.scss";
import {
  Box,
  Typography,
  Rating,
  Avatar,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
  Badge,
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from "moment";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetFailureProvider,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import assert from "assert";
import { setProductReviews, setTargetReviews } from "./slice";
import { productReviewRetriever } from "./selector";
import { verifyMemberData } from "../../apiServices/verify";
import { Reply, Review, ReviewCreateData } from "../../types/review";
import CommunityApiService from "../../apiServices/communityApiServicse";

// ** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setProductReviews: (data: Review[]) => dispatch(setProductReviews(data)),
  setTargetReviews: (data: ReviewCreateData[]) =>
    dispatch(setTargetReviews(data)),
});

// ** REDUX SELECTOR */

const createproductReviewRetriever = createSelector(
  productReviewRetriever,
  (productReviews) => ({
    productReviews,
  }),
);

const ProductReview = (props: any) => {
  // ** INITIALIZATION */
  const { setProductReviews } = actionDispatch(useDispatch());
  const { productReviews } = useSelector(createproductReviewRetriever);
  const [agree, setAgree] = useState(false);
  const { product_id, setProductRebuild } = props;
  const [context, setContext] = useState<string>("");
  const [value, setValue] = useState<number>(3);
  const [reviewRebuild, setReviewRebuild] = useState<Date>(new Date());
  const [replyRebuild, setReplyRebuild] = useState<Date>(new Date());
  const [characters, setCharacters] = useState<number>(1500);
  const [replyButtonBox, setreplyButtonBox] = useState<string | null>(null);
  const [replytext, setReplyText] = useState<string>("");
  const [replyreview, setReplyreview] = useState<string>("");
  const refs: any = useRef([]);
  useEffect(() => {
    if (!verifyMemberData) {
      sweetFailureProvider("Please login first!", true, true);
    }
    const communityService = new CommunityApiService();
    communityService
      .getProductReviews(product_id)
      .then((data) => {
        setProductReviews(data);
      })
      .catch((err) => console.log(err));
  }, [reviewRebuild, replyRebuild]);

  // ** HANDLERS */
  function handleCharacterLimit(e: any) {
    setContext(e.target.value);
    setCharacters(1500 - e.target.value.length);
  }
  async function handleSubmitReview() {
    try {
      if (!context) {
        throw new Error(Definer.input_err1);
      }
      assert.ok(verifyMemberData, Definer.auth_err1);
      const communityServiceApi = new CommunityApiService();
      await communityServiceApi.createReview({
        review_stars: value,
        review_text: context,
        review_target_id: product_id,
        review_group: "product",
      });
      await sweetTopSmallSuccessAlert("Successfully submitted!", 500, false);
      setContext("");
      setReviewRebuild(new Date());
      setProductRebuild(new Date());
    } catch (err: any) {
      console.log(err);
      await sweetErrorHandling(err);
    }
  }
  const targetLikeHandlers = async (e: any, reviewId: string) => {
    try {
      assert.ok(verifyMemberData, Definer.auth_err1);
      const memberService = new MemberApiServices();
      const data = {
        like_ref_id: reviewId,
        group_type: "review",
        review_group: "reply_messages",
      };
      const like_result: any = await memberService.memberLikeTarget(data);
      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setReviewRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeHandlers`, err);
      sweetErrorHandling(err).then();
    }
  };

  const targetClickReplyhandler = (reviewId: string) => {
    setreplyButtonBox((prev) => (prev === reviewId ? null : reviewId));
    setReplyText("");
  };
  async function targetSubmitReplyHandler(cooment_id: string) {
    try {
      if (!replytext) {
        throw new Error(Definer.input_err1);
      }
      assert.ok(verifyMemberData, Definer.auth_err1);
      const communityServiceApi = new CommunityApiService();
      await communityServiceApi.createReview({
        review_stars: value,
        review_text: replytext,
        review_target_id: cooment_id,
        review_group: "reply",
      });
      await sweetTopSmallSuccessAlert("Successfully posted!", 300, false);
      setReplyText("");
      setReplyreview("");
      setReplyRebuild(new Date());
      setreplyButtonBox(null);
    } catch (err: any) {
      console.log(err);
      await sweetErrorHandling(err);
    }
  }

  return (
    <div>
      <Box className="review-section">
        {/* ── Review List ────*/}
        <Box className="review-list-wrap">
          <Typography className="section-heading">Customer Reviews</Typography>
          <Typography className="section-sub">
            {productReviews.length} Reviews for this product
          </Typography>

          <Box className="review-list">
            {productReviews.map((review: Review) => {
              let image_url = review.member_data.mb_image
                ? `${serverApi}/${review.member_data.mb_image}`
                : "/pictures/auth/default_user.svg";
              return (
                <Box key={review._id}>
                  <Box className="review-item">
                    <Box className="review-left">
                      <Avatar src={image_url} className="review-avatar" />
                    </Box>
                    <Box className="review-right">
                      <Box className="review-meta">
                        <Box className="review-meta-top">
                          <Typography className="review-name">
                            {review.member_data.mb_nick}
                          </Typography>
                          {review.mb_id && (
                            <span className="verified-pill">
                              <VerifiedIcon sx={{ fontSize: 11 }} /> Verified
                            </span>
                          )}
                        </Box>
                        <Typography className="review-date">
                          {moment(review.createdAt).fromNow()}
                        </Typography>
                      </Box>
                      <Rating
                        value={review.review_stars}
                        readOnly
                        size="small"
                        className="review-stars"
                      />
                      <Typography className="review-body">
                        {review.review_text}
                      </Typography>
                      <Box className="helpful-row">
                        <Typography className="helpful-label">
                          people found this helpful
                        </Typography>
                        <Badge
                          badgeContent={review?.review_likes || 0}
                          color="error"
                          sx={{
                            "& .MuiBadge-badge": {
                              backgroundColor: "#FF3040",
                              color: "white",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          <Checkbox
                            id={review._id}
                            onClick={(e) => targetLikeHandlers(e, review._id)}
                            size="small"
                            icon={
                              <ThumbUpOutlinedIcon sx={{ color: "#424141" }} />
                            }
                            checkedIcon={
                              <ThumbUpIcon sx={{ color: "#FF3040" }} />
                            }
                            checked={
                              review?.me_liked &&
                              review?.me_liked[0]?.my_favorite
                                ? true
                                : false
                            }
                          />
                        </Badge>
                      </Box>
                    </Box>
                  </Box>
                  <Divider className="review-divider" />
                  <Box className="reply_box">
                    <Button
                      className="submit_reply_btn"
                      variant="contained"
                      onClick={() => targetClickReplyhandler(review._id)}
                    >
                      {replyButtonBox === review._id ? "Cancel" : "Reply"}
                    </Button>
                    {replyButtonBox === review._id && (
                      <form onSubmit={(e) => e.preventDefault()}>
                        <TextField
                          placeholder="Your Comment *"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={2}
                          className="form-field form-textarea"
                          ref={(ele) => (refs.current["context"] = ele)}
                          onChange={(e) => setReplyText(e.target.value)}
                          value={replytext}
                        />
                        <Button
                          onClick={() => targetSubmitReplyHandler(review._id)}
                          variant="contained"
                          className="submit_reply_btn"
                        >
                          Post
                        </Button>
                      </form>
                    )}

                    {/* ── Reply Reviews Display ──*/}
                    {review.reply_messages &&
                      review.reply_messages.length > 0 &&
                      review.reply_messages.map((reply: Reply) => {
                        let reply_image_url = reply.member_data?.mb_image
                          ? `${serverApi}/${reply.member_data.mb_image}`
                          : "/pictures/auth/default_user.svg";
                        return (
                          <Box key={reply._id} className="replies-wrapper">
                            <Divider className="review-divider" />
                            <Box className="reply-item">
                              <Box className="reply-left">
                                <Avatar
                                  src={reply_image_url}
                                  className="reply-avatar"
                                  sx={{ width: 32, height: 32 }}
                                />
                              </Box>
                              <Box className="reply-content">
                                <Box className="review-meta-top">
                                  <Typography className="review_name">
                                    {reply.member_data?.mb_nick ?? "Anonymous"}
                                  </Typography>

                                  {reply.mb_id &&
                                    reply.member_data && ( // ✅ check qo'shing
                                      <span className="verified-pill">
                                        <VerifiedIcon sx={{ fontSize: 11 }} />{" "}
                                        Verified
                                      </span>
                                    )}
                                  <Typography className="review-date">
                                    {moment(reply.createdAt).fromNow()}
                                  </Typography>
                                </Box>
                                <Typography className="reply_text">
                                  {reply.review_text}
                                </Typography>
                                <Box className="reply-actions">
                                  <Badge
                                    badgeContent={reply?.review_likes || 0}
                                    color="error"
                                    sx={{
                                      "& .MuiBadge-badge": {
                                        backgroundColor: "#FF3040",
                                        color: "white",
                                        fontWeight: "bold",
                                      },
                                    }}
                                  >
                                    <Checkbox
                                      id={reply._id}
                                      onClick={(e) =>
                                        targetLikeHandlers(e, reply._id)
                                      }
                                      size="small"
                                      icon={
                                        <ThumbUpOutlinedIcon
                                          sx={{ color: "#424141" }}
                                        />
                                      }
                                      checkedIcon={
                                        <ThumbUpIcon
                                          sx={{ color: "#FF3040" }}
                                        />
                                      }
                                      checked={
                                        reply?.me_liked &&
                                        reply?.me_liked[0]?.my_favorite
                                          ? true
                                          : false
                                      }
                                    />
                                  </Badge>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        );
                      })}
                  </Box>
                  <Divider className="review-divider" />
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ── Comment Form ───*/}
        <Box className="comment-form-wrap">
          <Typography className="section-heading">Leave A Review</Typography>

          <Box className="rating-row">
            <Typography className="rating-label">Your Rating *</Typography>
            <Rating
              defaultValue={value}
              value={value}
              onChange={(e: any, newValue: number | null) => {
                setValue(newValue ?? 0);
              }}
              size="medium"
              className="form-stars"
            />
          </Box>
          <TextField
            placeholder="Your Review *"
            variant="outlined"
            fullWidth
            multiline
            rows={5}
            className="form-field form-textarea"
            ref={(ele) => (refs.current["context"] = ele)}
            onChange={handleCharacterLimit}
            value={context}
          />
          <Typography className="form-note">
            Please note, reviews need to be approved before they are published.
          </Typography>

          <Box className="form-footer">
            <FormControlLabel
              className="privacy-check"
              control={
                <Checkbox
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                  size="small"
                  sx={{
                    color: "#bbb",
                    "&.Mui-checked": { color: "#1a1a1a" },
                    padding: "4px 8px 4px 0",
                  }}
                />
              }
              label="I Agree To The Privacy Statement"
            />
            <Button
              variant="contained"
              className="submit-btn"
              disableElevation
              disabled={!agree}
              onClick={handleSubmitReview}
            >
              Post Review
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ProductReview;
