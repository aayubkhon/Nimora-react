import React from "react";
import "../../../css/target.scss";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  IconButton,
  TextField,
  Avatar,
  Badge,
  Checkbox,
} from "@mui/material";
import {
  Visibility,
  FavoriteBorder,
  Favorite,
  Face,
} from "@mui/icons-material";
import moment from "moment";
import { BoArticle } from "../../types/boArticle";
import { serverApi } from "../../lib/config";

import assert from "assert";
import MemberApiServices from "../../apiServices/memberApiServices";
import { Definer } from "../../lib/Definer";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";

const TargetArticles = (props: any) => {
  // ** HANDLERS **/
  const targetLikeHandlers = async (e: any) => {
    try {
      assert.ok(localStorage.getItem("member_data"), Definer.auth_err1);
      const memberService = new MemberApiServices();
      const like_result: any = await memberService.memberLikeTarget({
        like_ref_id: e.target.id,
        group_type: "community",
      });
      assert.ok(like_result, Definer.general_err1);

      await sweetTopSmallSuccessAlert("success", 700, false);
      props.setArticletRebuild(new Date());
    } catch (err: any) {
      console.log(`ERROR ::: targetLikeHandlers`, err);
      sweetErrorHandling(err).then();
    }
  };

  return (
    <div className="wrapper">
      <div className="target_articles_container">
        {props.tergetBoArticles && props.tergetBoArticles.length > 0 ? (
          props.tergetBoArticles.map((article: BoArticle) => {
            const art_image_url = article?.art_image
              ? `${serverApi}/${article?.art_image}`
              : "/home/new_r.jpeg";

            return (
              <Box
                key={article._id}
                sx={{
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 5px 15px rgba(255, 136, 0, 0.366)",
                  },
                }}
              >
                <Card
                  sx={{
                    minWidth: 300,
                    width: 294,
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {/* Header with Avatar and Name */}
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      pb: 1,
                    }}
                  >
                    <Avatar
                      src="/static/logo.png"
                      sx={{
                        width: 32,
                        height: 32,
                        border: "2px solid white",
                      }}
                    />
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {article?.member_data?.mb_nick || "Anonymous"}
                    </Typography>
                  </CardContent>

                  {/* Article Image */}
                  <CardMedia
                    component="img"
                    height="250"
                    image={art_image_url}
                    alt={article?.art_subject || "Article"}
                    sx={{ objectFit: "cover" }}
                  />

                  {/* Like and View Icons */}
                  <CardContent
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      py: 1,
                      px: 2,
                    }}
                  >
                    <Badge
                      badgeContent={article?.art_likes || 0}
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
                        id={article._id}
                        onClick={targetLikeHandlers}
                        size="small"
                        icon={<FavoriteBorder sx={{ color: "#424141" }} />}
                        checkedIcon={<Favorite sx={{ color: "#FF3040" }} />}
                        checked={
                          article?.me_liked && article?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                        sx={{ padding: "4px" }}
                      />
                    </Badge>

                    <Badge
                      badgeContent={article?.art_views || 0}
                      color="error"
                      sx={{
                        "& .MuiBadge-badge": {
                          backgroundColor: "#380df6",
                          color: "white",
                          fontWeight: "bold",
                          borderRadius: "40px",
                        },
                      }}
                    >
                      <IconButton
                        size="small"
                        sx={{
                          color: article?.art_views ? "blue" : "#424141",
                        }}
                      >
                        <Visibility />
                      </IconButton>
                    </Badge>
                  </CardContent>

                  {/* Article Content */}
                  <CardContent sx={{ py: 1, px: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        mb: 1,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      <strong>{article?.art_subject}</strong>{" "}
                      {article?.art_content}
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary", display: "block" }}
                    >
                      {moment(article?.createdAt).fromNow()}
                    </Typography>
                  </CardContent>

                  {/* Comment Section */}
                  <CardContent
                    sx={{
                      display: "flex",
                      gap: 1,
                      alignItems: "center",
                      py: 1,
                      px: 2,
                      borderTop: "1px solid #eee",
                    }}
                  >
                    <IconButton size="small">
                      <Face sx={{ fontSize: 20 }} />
                    </IconButton>
                    <TextField
                      variant="standard"
                      placeholder="Add a comment…"
                      size="small"
                      fullWidth
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "transparent",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottomColor: "transparent !important",
                        },
                      }}
                      InputProps={{
                        disableUnderline: true,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        color: "secondary",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      Post
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            );
          })
        ) : (
          <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
            No articles found
          </Typography>
        )}
      </div>
    </div>
  );
};

export default TargetArticles;
