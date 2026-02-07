import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Box, Stack } from '@mui/material';
import { Editor, Viewer } from '@toast-ui/react-editor';

const ArticleViewer = (props:any) => {
  const editorRef = useRef();

  return (
    <Stack>
   <Stack sx={{height:"500px"}}>
     <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{width:"300px",height:"300px" }}>
        <Viewer // @ts-ignore
          ref={editorRef}
          initialValue={props.chosenSingleArticles?.art_content}
        />
      </Box>
    </Stack>
   </Stack>
    </Stack>
  )
}

export default ArticleViewer