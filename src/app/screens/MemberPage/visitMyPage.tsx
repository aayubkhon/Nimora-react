import React, { useState } from 'react'
import "../../../css/my_page.scss";
import { Box, Container, Stack, Tab, Tabs } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import RedeemIcon from '@mui/icons-material/Redeem';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ModeIcon from '@mui/icons-material/Mode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import MyFavorites from './myFavorites';
import MySettings from './mySettings';
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
        <Box display={'flex'}>
            <Stack className="my_container" flexDirection={'column'}>
              <Box className="my_box">
                <PersonIcon  sx={{ fontSize: 100 }} fontSize="large"/>
                <p>Leo</p>
                <p>User</p>
              <p>MANAGE LISTINGS</p>
              </Box>
              <TabContext value={value}>
                <Box>
                  <Tabs onChange={handleChange} >
                    <Tab value="1" icon={<FavoriteBorderIcon />} label="Favorite"/>
                  </Tabs>
                  <Tabs onChange={handleChange} >
                    <Tab value="2" icon={<RedeemIcon />} label="My Orders"/>
                  </Tabs>
                </Box>
              </TabContext>
            </Stack>
              <TabContext value={value}>
                <TabPanel value={"1"}>
                  <Box className="menu_name">Followers</Box>
                  <Box>
                    <MyFavorites  />
                  </Box>
                </TabPanel>
                <TabPanel value={"2"}>
                  <Box className="menu_name">My Settings</Box>
                  <Box>
                    <MySettings  />
                  </Box>
                </TabPanel>
              </TabContext>
        </Box>
      </Box>
      </Container>
    </div>
  )
}

export default VisitMyPage