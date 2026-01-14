import React from "react";
import "../../../css/target.scss";
import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Link from "@mui/joy/Link";
import IconButton from "@mui/joy/IconButton";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ModeCommentOutlined from "@mui/icons-material/ModeCommentOutlined";
import Face from "@mui/icons-material/Face";
import { CssVarsProvider } from "@mui/joy/styles";
import moment from "moment";
import { BoArticle } from "../../types/boArticle";
import { serverApi } from "../../lib/config";
import { Checkbox } from "@mui/material";
import { Favorite, Visibility } from "@mui/icons-material";

const TargetArticles = (props: any) => {
  return (
    <div className="wrapper">
      <div className="target_articles_container">
        {props.tergetBoArticles?.map((article: BoArticle) => {
          const art_image_url = article.art_image
            ? `${serverApi}/${article.art_image}`
            : "/home/bridal.jpeg";
          return (
            <CssVarsProvider>
              <Box
                sx={{
                  "&:hover": {
                    "& > div": {
                      transform: "translateY(-5px)",
                      boxShadow: "0 5px 15px rgba(255, 136, 0, 0.366)",
                      transition: "all 0.3s ease",
                    },
                  },
                }}
              >
                <Card
                  variant="outlined"
                  sx={{
                    minWidth: 300,
                    width: 294,
                    borderRadius: 20,
                  }}
                >
                  <CardContent
                    orientation="horizontal"
                    sx={{ alignItems: "center", gap: 1 }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          right: 0,
                          m: "-2px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                        },
                      }}
                    >
                      <Avatar
                        size="sm"
                        src="/static/logo.png"
                        sx={{
                          p: 0.5,
                          border: "2px solid",
                          borderColor: "background.body",
                        }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "lg" }}>
                      {article?.member_data.mb_nick}
                    </Typography>
                  </CardContent>
                  <CardOverflow>
                    <AspectRatio>
                      <img style={{objectFit:"fill"}} src={art_image_url} loading="lazy" />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent
                    orientation="horizontal"
                    sx={{ alignItems: "center", mx: -1 }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
                      {/* <Checkbox
                        id={article?._id}
                        // onClick={(e) =>
                        //   targetLikeProducts(e, product._id)
                        // }
                        icon={<FavoriteBorder style={{ color: "#424141" }} />}
                        checkedIcon={<Favorite style={{ color: "#FF3040" }} />}
                        checked={
                          article?.me_liked && article?.me_liked[0]?.my_favorite
                            ? true
                            : false
                        }
                      /> */}
                      <IconButton variant="plain" color="neutral" size="sm">
                        <Visibility
                          style={{
                            fill: article?.art_views
                              ? "blue"
                              : "black",
                            cursor: "pointer",
                          }}
                          className="action_btn"
                        />
                      </IconButton>
                    </Box>
                  </CardContent>
                  <CardContent>
                    <Link
                      component="button"
                      underline="none"
                      textColor="text.primary"
                      sx={{ fontSize: "sm", fontWeight: "lg" }}
                    >
                      {article?.art_likes}
                    </Link>
                    <Typography sx={{ fontSize: "sm" }}>
                      <Link
                        component="button"
                        color="neutral"
                        textColor="text.primary"
                        sx={{ fontWeight: "lg" }}
                      >
                        {article?.art_subject}
                      </Link>{" "}
                      {article?.art_content}
                    </Typography>
                    <Link
                      component="button"
                      underline="none"
                      sx={{ fontSize: "10px", color: "text.tertiary", my: 0.5 }}
                    >
                      {moment(article?.createdAt).fromNow()}
                    </Link>
                  </CardContent>
                  <CardContent orientation="horizontal" sx={{ gap: 1 }}>
                    <IconButton
                      size="sm"
                      variant="plain"
                      color="neutral"
                      sx={{ ml: -1 }}
                    >
                      <Face />
                    </IconButton>
                    <Input
                      variant="plain"
                      size="sm"
                      placeholder="Add a comment…"
                      sx={{ flex: 1, px: 0, "--Input-focusedThickness": "0px" }}
                    />
                    <Link disabled underline="none" role="button">
                      Post
                    </Link>
                  </CardContent>
                </Card>
              </Box>
            </CssVarsProvider>
          );
        })}
      </div>
    </div>
  );
};

export default TargetArticles;

//  <Box className={"card_box"}>
//                 <div className="typography_box">
//                   <p className={"article_name"}>Leo</p>
//                 </div>

//                 <Box flexDirection={"column"} className={"articles_box"}>
//                   <div className="all_article_icon_items">
//                     <Link
//                       href="#dribbble-shot"
//                       underline="none"
//                       startDecorator={<Favorite />}
//                       sx={{
//                         fontWeight: "md",
//                         ml: "auto",
//                         color: "black",
//                         "&:hover": { color: "danger.plainColor" },
//                       }}
//                     >
//                       117
//                     </Link>
//                     <Link
//                       href="#dribbble-shot"
//                       underline="none"
//                       startDecorator={<Visibility />}
//                       sx={{
//                         fontWeight: "md",
//                         color: "black",
//                         "&:hover": { color: "primary.plainColor" },
//                       }}
//                     >
//                       10.4k
//                     </Link>
//                   </div>
//                   <div className="moment_box">
//                     <span>{moment().format("YY-DD-MM HH:MM")}</span>
//                   </div>
//                 </Box>
//               <p className="target_coment">Best Jewellry</p>
//               </Box>
