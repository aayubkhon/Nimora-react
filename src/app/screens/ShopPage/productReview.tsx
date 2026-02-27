import React, { useEffect, useRef, useState } from "react";
import "../../../css/products.scss";
import {
  Box,
  Typography,
  Rating,
  IconContainerProps,
  Avatar,
  TextField,
  Button,
  Divider,
  Checkbox,
  FormControlLabel,
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
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import assert from "assert";
import { setProductReviews } from "./slice";
import { productReviewRetriever } from "./selector";
import { verifyMemberData } from "../../apiServices/verify";
import { Review } from "../../types/review";
import CommunityApiService from "../../apiServices/communityApiServicse";

// ** REDUX SLICE */
const actionDispatch = (dispatch: Dispatch) => ({
  setProductReviews: (data: Review[]) => dispatch(setProductReviews(data)),
});

// ** REDUX SELECTOR */

const createproductReviewRetriever = createSelector(
  productReviewRetriever,
  (targetReviews) => ({
    targetReviews,
  }),
);

const ProductReview = (props: any) => {
  // ** INITIALIZATION */
  const { setProductReviews } = actionDispatch(useDispatch());
  const { targetReviews } = useSelector(createproductReviewRetriever);
  const [reviews, setReviews] = useState<Review[]>(targetReviews);
  const [agree, setAgree] = useState(false);
  const { product_id,setProductRebuild } = props;
  const [context, setContext] = useState<string>("");
  const [value, setValue] = useState<number>(2);
  const [reviewRebuild, setReviewRebuild] = useState<Date>(new Date());
  const [characters, setCharacters] = useState<number>(1500);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const refs: any = useRef([]);
  useEffect(() => {
    const communityService = new CommunityApiService();
    communityService
      .getProductReviews(product_id)
      .then((data) => {
        setProductReviews(data);
      })
      .catch((err) => console.log(err));
  }, [reviewRebuild]);
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
      const data = { like_ref_id: reviewId, group_type: "review" };
      const like_result: any = await memberService.memberLikeTarget(data);
      console.log(like_result, "sadsa");

      assert.ok(like_result, Definer.general_err1);
      await sweetTopSmallSuccessAlert("success", 700, false);
      setReviewRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeHandlers`, err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <div>
      <Box className="review-section">
        {/* ── Review List ────*/}
        <Box className="review-list-wrap">
          <Typography className="section-heading">Customer Reviews</Typography>
          <Typography className="section-sub">
            {targetReviews.length} reviews for this product
          </Typography>

          <Box className="review-list">
            {targetReviews.map((review: Review) => {
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
                        <button
                          className={`helpful-btn ?§${liked[review._id] ? "liked" : ""}`}
                          onClick={(e) => targetLikeHandlers(e, review._id)}
                        >
                          {liked[review._id] ? (
                            <ThumbUpIcon sx={{ fontSize: 13 }} />
                          ) : (
                            <ThumbUpOutlinedIcon sx={{ fontSize: 13 }} />
                          )}
                          Helpful
                        </button>
                      </Box>
                    </Box>
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
              value={reviews.length > 0 ? reviews[0].review_stars : value}
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
