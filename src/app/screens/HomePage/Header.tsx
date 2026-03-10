import React from "react";
import { Stack, Box, Button} from "@mui/material";


import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className="header">
      <Stack>
             <Stack className="head_information_second">
               <Box>
                 <motion.img
                   src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTV0cTVvdmtjd3pqdDJ1c3VrZjcxOHJldmRvbG9oMWE0cTRiMHUzeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WKCAUc5RqkL0tzvsCM/giphy.gif"
                   alt="Swing Woman"
                   className="anim_ring"
                 />
               </Box>
               <Stack
                 justifyContent={"column"}
                 sx={{ marginTop: "150px", marginLeft: "100px" }}
               >
                 <p className="header_logo">NIMORA</p>
                 <p className="header_title">Discover the best products for your lifestyle!</p>
                 <Box sx={{ mt: "20px" }}>
                   <Button onClick={()=>navigate("/shop")}  className="main_btn">Shop now</Button>
                 </Box>
               </Stack>
             </Stack>
           </Stack>
    </div>
  );
};
export default Header;

