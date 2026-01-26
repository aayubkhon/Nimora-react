import React, { useRef } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Box, Stack } from '@mui/material';
import { Editor } from '@toast-ui/react-editor';

const ArticleViewer = (props:any) => {
  const editorRef = useRef();

  return (
    <Stack>
   <Stack sx={{height:"600px"}}>
     <Stack sx={{ background: "white", mt: "30px", borderRadius: "10px" }}>
      <Box sx={{ m: "40px" }}>
        <Editor // @ts-ignore
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