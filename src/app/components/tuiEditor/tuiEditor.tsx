import React, { useCallback, useRef, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import "../../../css/my_page.scss";
import { Editor } from "@toast-ui/react-editor";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CommunityApiService from "../../apiServices/communityApiServicse";
import { BoArticleInput } from "../../types/boArticle";
import { serverApi } from "../../lib/config";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../lib/sweetAlert";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { useNavigate } from "react-router-dom";
const TuiEditor = (props: any) => {
  // ** INITIALIZATIONS ** //
  const navigate = useNavigate();

  const editorRef = useRef();
  const [communityArticleData, setCommunityArticleData] =
    useState<BoArticleInput>({
      art_subject: "",
      bo_id: "",
      art_content: "",
      art_image: "",
    });

  // ** HANDLERS **//
  const uploadImage = async (image: any) => {
    try {
      const communityService = new CommunityApiService();
      const image_name = await communityService.uploadImageToServer(image);
      communityArticleData.art_image = image_name;
      setCommunityArticleData({ ...communityArticleData });
      const source = `${serverApi}/${image_name}`;
      return source;
    } catch (err) {
      console.log("ERROR ::: uploadImage", err);
    }
  };

  const changeCategoryHandler = (e: any) => {
    communityArticleData.bo_id = e.target.value;
    setCommunityArticleData({ ...communityArticleData });
  };

  const changeTitleHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCommunityArticleData((prev) => ({
        ...prev,
        art_subject: e.target.value,
      }));
    },
    [],
  );

  const handleRegisterButoon = async () => {
    try {
      const editor: any = editorRef.current;
      const art_content = editor?.getInstance().getHTML();

      // Direct mutation emas, yangi state yarating
      const articleToSubmit = {
        ...communityArticleData,
        art_content,
      };

      assert.ok(
        articleToSubmit.art_content !== "" &&
          articleToSubmit.bo_id !== "" &&
          articleToSubmit.art_subject !== "",
        Definer.input_err1,
      );

      const communityService = new CommunityApiService();
      await communityService.createArticlle(articleToSubmit);
      await sweetTopSmallSuccessAlert("Article is created successfully!");
      props.setArticleRebuild(new Date());
      props.setValue("1");
    } catch (err) {
      console.log("ERROR ::: handleRegisterButton", err);
      sweetErrorHandling(err).then();
    }
  };
  return (
    <div>
      <Stack className="tuieditor_frame">
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          margin={"40px"}
        >
          <Box className="form_row">
            <Typography variant="h1" className="category_title">
              Category
            </Typography>
            <FormControl
              sx={{ width: "250px", height: "56px", marginTop: 2 }}
              color="secondary"
            >
              <Select
                value={communityArticleData.bo_id}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                onChange={changeCategoryHandler}
              >
                <MenuItem value="">
                  <p>Choose Catagory</p>
                </MenuItem>
                <MenuItem value={"all"}>All Blogs</MenuItem>
                <MenuItem value={"news"}>News</MenuItem>
                <MenuItem value={"humor"}>Humor</MenuItem>
                <MenuItem value={"recommendation"}>Recommendation</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box className="form_row">
            <Typography variant="h1" className="category_title">
              Title
            </Typography>
            <TextField
              id="filled-basic"
              label="Type title"
              color="secondary"
              className="textfield_title"
              variant="outlined"
              sx={{ marginTop: 2 }}
              onChange={changeTitleHandler}
            />
          </Box>
        </Stack>
        {/* @ts-ignore */}
        <Editor
          ref={editorRef}
          placeholder="Type here"
          initialValue="Type here"
          previewStyle="vertical"
          height="640px"
          initialEditType="WYSIWYG"
          toolbarItems={[
            ["heading", "bold", "italic", "strike"],
            ["image", "table", "link"],
            ["ul", "ol", "task"],
          ]}
          hooks={{
            addImageBlobHook: async (image: any, callback: any) => {
              const uploadImageURl = await uploadImage(image);
              console.log("uploadImageURl", uploadImageURl);
              callback(uploadImageURl);
              return false;
            },
          }}
          events={{
            load: function (param: any) {},
          }}
        />
        <Stack direction={"row"} justifyContent={"center"}>
          <Button
            variant="contained"
            className="register"
            onClick={handleRegisterButoon}
          >
            Register
          </Button>
        </Stack>
      </Stack>
    </div>
  );
};

export default TuiEditor;
