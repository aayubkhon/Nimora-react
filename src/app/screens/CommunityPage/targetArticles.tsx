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

const TargetArticles = (props: any) => {
  return (
    <div className="wrapper">
      <div className="target_articles_container">
        {props.targetBoArticles?.map((articles: any, index: string) => {
          const art_image_url = "/home/bridal.jpeg";
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
                    <Typography sx={{ fontWeight: "lg" }}>MUI</Typography>
                  </CardContent>
                  <CardOverflow>
                    <AspectRatio>
                      <img src="/home/new_r.jpeg" alt="" loading="lazy" />
                    </AspectRatio>
                  </CardOverflow>
                  <CardContent
                    orientation="horizontal"
                    sx={{ alignItems: "center", mx: -1 }}
                  >
                    <Box sx={{ width: 0, display: "flex", gap: 0.5 }}>
                      <IconButton variant="plain" color="neutral" size="sm">
                        <FavoriteBorder />
                      </IconButton>
                      <IconButton variant="plain" color="neutral" size="sm">
                        <ModeCommentOutlined />
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
                      8.1M Likes
                    </Link>
                    <Typography sx={{ fontSize: "sm" }}>
                      <Link
                        component="button"
                        color="neutral"
                        textColor="text.primary"
                        sx={{ fontWeight: "lg" }}
                      >
                        MUI
                      </Link>{" "}
                      The React component library you always wanted
                    </Typography>
                    <Link
                      component="button"
                      underline="none"
                      startDecorator="…"
                      sx={{ fontSize: "sm", color: "text.tertiary" }}
                    >
                      more
                    </Link>
                    <Link
                      component="button"
                      underline="none"
                      sx={{ fontSize: "10px", color: "text.tertiary", my: 0.5 }}
                    >
                      2 DAYS AGO
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
