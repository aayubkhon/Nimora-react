import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Box, Stack } from "@mui/material";
import { Viewer } from "@toast-ui/react-editor";
import "../../../css/target.scss";
import { useParams } from "react-router-dom";
import CommunityApiService from "../../apiServices/communityApiServicse";

const ArticleViewer = (props: any) => {

  const editorRef = useRef();
  const article = props.chosenSingleArticles;
  return (
    <Stack>
      <Stack sx={{ height: "500px" }}>
        <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
          <Box sx={{ width: "300px", height: "300px" }}>
            {/* Meta info */}
            <div className="article-viewer-wrapper">
              <div className="article-viewer-meta">
                <span className="article-viewer-category">
                  {article?.bo_id?.toUpperCase() || "ARTICLE"}
                </span>
                <h1 className="article-viewer-title">
                 Title: {article?.art_subject || "Untitled"}
                </h1>
                <div className="article-viewer-stats">
                  <span>👁 {article?.art_views ?? 0} views</span>
                  <span className="dot">·</span>
                  <span>♡ {article?.art_likes ?? 0} likes</span>
                  <span className="dot">·</span>
                  <span>
                    {article?.createdAt
                      ? new Date(article.createdAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          },
                        )
                      : ""}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="article-viewer-divider">
                <span />
                <span className="divider-gem">◆</span>
                <span />
              </div>
              <div className="article-viewer-content">
                <Viewer // @ts-ignore
                  ref={editorRef}
                  initialValue={props.chosenSingleArticles?.art_content}
                />
              </div>
            </div>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ArticleViewer;
