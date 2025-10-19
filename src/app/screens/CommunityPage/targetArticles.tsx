import React from "react";
import "../../../css/target.scss";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Visibility from "@mui/icons-material/Visibility";
import { CssVarsProvider } from "@mui/joy/styles";
import moment from "moment";


const TargetArticles = (props: any) => {
  return (
    <div className="target_articles_container">
      {props.targetBoArticles?.map((articles: any, index: string) => {
        const art_image_url = "/home/bridal.jpeg";
        return (
          <CssVarsProvider>
            <Card
              variant="plain"
              sx={{
                width: 400,
                height: 440,
                bgcolor: "rgb(20, 0, 0)",
                p: 0,
                borderRadius: 12,
                color: "white",
              }}
              key={index}
            >
              <Box sx={{ position: "relative" }}>
                <img
                  className="target_img"
                  src={art_image_url}
                  loading="lazy"
                  alt=""
                />
              </Box>
              <Box className={"card_box"}>
                <Avatar
                  src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                  size="sm"
                  sx={{ "--Avatar-size": "3rem", marginLeft: "8px" }}
                />
                <div className="typography_box">
                  <p className={"article_name"}>Leo</p>
                </div>

                <Box flexDirection={"column"} className={"articles_box"}>
                  <div className="all_article_icon_items">
                    <Link
                      href="#dribbble-shot"
                      underline="none"
                      startDecorator={<Favorite />}
                      sx={{
                        fontWeight: "md",
                        ml: "auto",
                        color: "white",
                        "&:hover": { color: "danger.plainColor" },
                      }}
                    >
                      117
                    </Link>
                    <Link
                      href="#dribbble-shot"
                      underline="none"
                      startDecorator={<Visibility />}
                      sx={{
                        fontWeight: "md",
                        color: "white",
                        "&:hover": { color: "primary.plainColor" },
                      }}
                    >
                      10.4k
                    </Link>
                  </div>
                  <div className="moment_box">
                    <span>{moment().format("YY-DD-MM HH:MM")}</span>
                  </div>
                </Box>
              </Box>
              <p className="target_coment">Best Jewellry</p>
            </Card>
          </CssVarsProvider>
        );
      })}
    </div>
  );
};

export default TargetArticles;
