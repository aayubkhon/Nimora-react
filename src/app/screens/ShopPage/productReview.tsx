import React,{useState} from 'react'
import "../../../css/products.scss";
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
} from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import moment from 'moment';
const reviews = [
  {
    id: 1,
    name: "Sophie Chen",
    avatar: "SC",
    rating: 5,
    date: "February 18, 2026",
    body: "This ring exceeded all my expectations. The rose gold finish is flawless and the diamonds catch the light beautifully. I've received so many compliments wearing it to events.",
    helpful: 24,
    verified: true,
  },
]

const ProductReview = () => {
 const [liked, setLiked] = useState<Record<number, boolean>>({});
  const [agree, setAgree] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "", rating: 0 });

  const toggleLike = (id: number) =>
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  return (
    <div>
     <Box className="review-section">

      {/* ── Review List ─────────────────────────────────── */}
      <Box className="review-list-wrap">
        <Typography className="section-heading">Customer Reviews</Typography>
        <Typography className="section-sub">
          {reviews.length} reviews for this product
        </Typography>

        <Box className="review-list">
          {reviews.map((r, i) => (
            <Box key={r.id}>
              <Box className="review-item">
                <Box className="review-left">
                  <Avatar className="review-avatar">{r.avatar}</Avatar>
                </Box>
                <Box className="review-right">
                  <Box className="review-meta">
                    <Box className="review-meta-top">
                      <Typography className="review-name">{r.name}</Typography>
                      {r.verified && (
                        <span className="verified-pill">
                          <VerifiedIcon sx={{ fontSize: 11 }} /> Verified
                        </span>
                      )}
                    </Box>
                    <Typography className="review-date">{moment(r.date).fromNow()}</Typography>
                    
                  </Box>
                  <Rating
                    value={r.rating}
                    readOnly
                    size="small"
                    className="review-stars"
                  />
                  <Typography className="review-body">{r.body}</Typography>
                  <Box className="helpful-row">
                    <Typography className="helpful-label">
                      {liked[r.id] ? r.helpful + 1 : r.helpful} people found this helpful
                    </Typography>
                    <button
                      className={`helpful-btn ${liked[r.id] ? "active" : ""}`}
                      onClick={() => toggleLike(r.id)}
                    >
                      {liked[r.id]
                        ? <ThumbUpIcon sx={{ fontSize: 13 }} />
                        : <ThumbUpOutlinedIcon sx={{ fontSize: 13 }} />}
                      Helpful
                    </button>
                  </Box>
                </Box>
              </Box>
              {i < reviews.length - 1 && <Divider className="review-divider" />}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Comment Form ─────────────────────────────────── */}
      <Box className="comment-form-wrap">
        <Typography className="section-heading">Leave A Review</Typography>

        <Box className="rating-row">
          <Typography className="rating-label">Your Rating *</Typography>
          <Rating
            value={form.rating}
            // onChange={(_, v) => setForm({ ...form, rating: v })}
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
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
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
          >
            Post Review
          </Button>
        </Box>
      </Box>

    </Box>
    </div>
  )
}

export default ProductReview