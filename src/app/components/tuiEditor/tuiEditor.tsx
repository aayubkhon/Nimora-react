import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import "../../../css/my_page.scss";
import { Editor } from '@toast-ui/react-editor';
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
const TuiEditor = (props:any) => {
     const editorRef = useRef();
   
  return (
    <div>
      <Stack className="tuieditor_frame">
      <Stack direction={"row"} justifyContent={"space-evenly"} margin={"40px"}>
        <Box className="form_row">
          <Typography variant="h1" className='category_title'
          >
            Category
          </Typography>
          <FormControl
            sx={{ width: "250px", height: "56px",marginTop:2 }}
            color='secondary'

          >
            <Select

              value="celebrity"
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              
              <MenuItem value={"celebrity"}>All Blogs</MenuItem>
              <MenuItem value={"evalution"}>News</MenuItem>
              <MenuItem value={"story"}>Humor</MenuItem>
              <MenuItem value={"story"}>Recommendation</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="form_row">
          <Typography variant="h1"  className='category_title'
          >
            Title
          </Typography>
          <TextField
            id="filled-basic"
            label="Type title"
            color='secondary'
            className='textfield_title'
             variant="outlined" 
            sx={{ marginTop:2 }}

          />
        </Box>
      </Stack>
      {/* @ts-ignore */}
      <Editor
        ref={editorRef}
        placeholder="Type here"
        previewStyle="vertical"
        height="640px"
        initialValue=" "
        initialEditType="WYSIWYG"
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["image", "table", "link"],
          ["ul", "ol", "task"],
        ]}
        hooks={{
          addImageBlobHook: async (image: any, callback: any) => {
            return false;
          },
        }}
        events={{
          load: function (param: any) {},
        }}
      />
      <Stack  direction={"row"} justifyContent={"center"}>
        <Button
          variant="contained"
          className='register'
        >
          Register
        </Button>
      </Stack>
    </Stack>
    </div>
  )
}

export default TuiEditor