import { useState } from "react";
import "../css/App.css";
import "../css/navbar.css";
import "../css/footer.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ShopPage from "./screens/ShopPage";
import LoginPage from "./screens/LoginPage";
import StorePage from "./screens/StorePage/store";
import NavbarHome from "./components/header";
import NavbarShop from "./components/header/shop";
import NavbarOthers from "./components/header/others";
import Footer from "./components/footer";
import OneJewellry from "./screens/ShopPage/oneJewellry";
import ChoosenCatagory from "./screens/ShopPage/choosenCatagory";
import Community from "./screens/CommunityPage/community";
import { HelpPage } from "./screens/HelpPage";
import VisitMyPage from "./screens/MemberPage/visitMyPage";
import VisitOtherPage from './screens/MemberPage/visitOtherPage';
import OrdersPage from "./screens/OrdersPage";
function App() {
  const main_path = window.location.pathname;
  const [path, setPath] = useState();
  return (
    <>
      {main_path === "/" ? (
        <NavbarHome setPath={setPath} />
      ) : main_path.includes("/shop") ? (
        <NavbarShop setPath={setPath} />
      ) : (
        <NavbarOthers setPath={setPath} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/:jewellry_id/*" element={<ChoosenCatagory />} />
        <Route path="/:jewellry_id/:category_id" element={<OneJewellry />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/community" element={<Community />} />
        <Route path="/member-page" element={<VisitMyPage />} />
        <Route path="/member-page/other" element={<VisitOtherPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;




//  <TabContext value={value}>
//                <Box>
//                  <Tabs
//                   orientation="vertical"
//                   onChange={handleChange}
//                   aria-label="Vertical tabs example"
//                   className="tab_main"
//                 >
//                   <Typography>MANAGE LISTINGS</Typography>

//                     <Tab
//                     iconPosition="start"
//                     value="1"
//                     icon={<FavoriteBorderIcon />}
//                     label="My Favorite"
//                     className="tab_title"
//                   />
//                   <Tab
//                     iconPosition="start"
//                     value="2"
//                     icon={<RedeemIcon />}
//                     label="My Orders"
//                     className="tab_title"

//                   />
//                   <Tab
//                     iconPosition="start"
//                     value="3"
//                     icon={<ZoomOutIcon/>}
//                     label="Recently Visited"
//                     className="tab_title"

//                   />

//                   <Tab
//                     iconPosition="start"
//                     value="4"
//                     icon={<PersonAddAlt1Icon />}
//                     label="My Followers"
//                     className="tab_title"

//                   />
//                   <Tab
//                     iconPosition="start"
//                     value="5"
//                     icon={<PersonAddAlt1Icon />}
//                     label="My Followings"
//                     className="tab_title"

//                   />
//                   <Typography>Community</Typography>
//                   <Tab
//                     iconPosition="start"
//                     value="6"
//                     icon={<AddCommentIcon />}
//                     label="Articles"
//                     className="tab_title"
//                   />
//                   <Tab
//                     iconPosition="start"
//                     value="7"
//                     icon={<ModeIcon />}
//                     label="Write Article"
//                     className="tab_title"
//                   />
//                   <Typography>Menage Account</Typography>
//                   <Tab
//                     iconPosition="start"
//                     value="8"
//                     icon={<AccountCircleIcon />}
//                     label="My Profile"
//                     className="tab_title"

//                   />
//                 </Tabs>
//                </Box>
               
//                 <TabPanel value={"1"}>
//                   <Box className="menu_name">My Favorite</Box>
//                   <Box>
//                     <MyFavorites />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"2"}>
//                   <Box className="menu_name">My orders</Box>
//                   <Box>
//                     <MySettings />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"3"}>
//                   <Box className="menu_name">Recently visited</Box>
//                   <Box>
//                     <MySettings />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"4"}>
//                   <Box className="menu_name">My Followers</Box>
//                   <Box>
//                     <MemberFollow />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"5"}>
//                   <Box className="menu_name">My Followings</Box>
//                   <Box>
//                     <MemberFollowings />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"6"}>
//                   <Box className="menu_name">Articles</Box>
//                   <Box>
//                     <MySettings />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"7"}>
//                   <Box className="menu_name">Write Articles</Box>
//                   <Box>
//                     <MySettings />
//                   </Box>
//                 </TabPanel>
//                 <TabPanel value={"8"}>
//                   <Box className="menu_name">My Profile</Box>
//                   <Box>
//                     <MySettings />
//                   </Box>
//                 </TabPanel>
//               </TabContext>


//    <Box display="flex">
//             <AccountCircleIcon sx={{ fontSize: 100,marginLeft:3 }} fontSize="large"   />
//             <Box className={"profile_info"}>
//               <p className="my_name">Leo</p>
//               <p className="my_phone">+8221312</p>
//               <p className="user">User</p>
//             </Box>
//           </Box>