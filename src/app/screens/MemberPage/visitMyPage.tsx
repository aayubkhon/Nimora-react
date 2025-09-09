import React, { useState } from 'react'
import "../../../css/my_page.scss";
import { Box, Container, Stack } from '@mui/material';
import { TabContext } from '@mui/lab';

const VisitMyPage = () => {
   // ** INITIALIZATIONS ** //
    const [value, setValue] = useState("1");
     // ** HANDLERS **//
      const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
      };
  return (
    <div className='MyPage_frame'>
      <Box className="bg_mypage">
        <div className='bg_box'>
          <h1 className='mypage'>My Page</h1>
          <p className='mypage_navi'>Home/My Page</p>
        </div>
      </Box>
      <Container className='container'>
      <Box className={"menu"}>
        <Box>
          <TabContext value={value}>
            
          </TabContext>
        </Box>
      </Box>
      </Container>
    </div>
  )
}

export default VisitMyPage