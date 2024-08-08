import { Box, Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const OurCollection = (props:any) => {
  return (
    <div className="home_collection">
      <div className="contaier">
        <Box className="cards">
        <div className="earring"></div>
       <Box className="navlink line">
       <NavLink className="nav" to="/">earring</NavLink>
       </Box>
        </Box>
        <Box className="cards">
        <div className="bracelets"></div>
       <Box className="navlink line">
       <NavLink className="nav" to="/">bracelets</NavLink>
       </Box>
        </Box>
        <Box className="cards">
        <div className="necklace"></div>
       <Box className="navlink line">
       <NavLink className="nav" to="/">necklaces</NavLink>
       </Box>
        </Box>
        <Box className="cards">
        <div className="rings"></div>
       <Box className="navlink line">
       <NavLink className="nav" to="/">rings</NavLink>
       </Box>
        </Box>
        <Box className="cards">
        <div className="chain"></div>
       <Box className="navlink line">
       <NavLink className="nav" to="/">chains</NavLink>
       </Box>
        </Box>
      </div>
    </div>
  );
};
export default OurCollection;
