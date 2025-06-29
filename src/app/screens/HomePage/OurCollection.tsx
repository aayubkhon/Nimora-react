import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { CssVarsProvider } from "@mui/joy/styles";

const OurCollection = (props: any) => {
  return (
    <div className="home_collection">
      <div className="container">
        <CssVarsProvider>
          <Card
            variant="plain"
            sx={{
              width: 320,
              borderRadius: "none",
              border: "0.1px solid black",
              background: "#504a48",
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/5">
                <div className="earring"></div>
              </AspectRatio>
            </CardOverflow>

            <Typography level="body-xs" sx={{ fontWeight: "md" }}>
              <Box className="navlink line">
                <NavLink className="nav" to="/">
                  earring
                </NavLink>
              </Box>
            </Typography>
          </Card>
          <Card
            variant="plain"
            sx={{
              width: 320,
              borderRadius: "none",
              border: "none",
              background: "#504a48",
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/5">
                <div className="bracelets"></div>
              </AspectRatio>
            </CardOverflow>

            <Typography level="body-xs" sx={{ fontWeight: "md" }}>
              <Box className="navlink line">
                <NavLink className="nav" to="/">
                  bracelets
                </NavLink>
              </Box>
            </Typography>
          </Card>
          <Card
            variant="plain"
            sx={{
              width: 320,
              borderRadius: "none",
              border: "0.1px solid black",
              background: "#504a48",
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/5">
                <div className="necklace"></div>
              </AspectRatio>
            </CardOverflow>

            <Typography level="body-xs" sx={{ fontWeight: "md" }}>
              <Box className="navlink line">
                <NavLink className="nav" to="/">
                  necklace
                </NavLink>
              </Box>
            </Typography>
          </Card>
          <Card
            variant="plain"
            sx={{
              width: 320,
              borderRadius: "none",
              border: "0.1px solid black",
              background: "#504a48",
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/5">
                <div className="rings"></div>
              </AspectRatio>
            </CardOverflow>
            <Typography level="body-xs" sx={{ fontWeight: "md" }}>
              <Box className="navlink line">
                <NavLink className="nav" to="/">
                  rings
                </NavLink>
              </Box>
            </Typography>
          </Card>
          <Card
            variant="plain"
            sx={{
              width: 320,
              borderRadius: "none",
              border: "0.1px solid black",
              background: "#504a48",
            }}
          >
            <CardOverflow>
              <AspectRatio ratio="4/5">
                <div className="chain"></div>
              </AspectRatio>
            </CardOverflow>

            <Typography level="body-xs" sx={{ fontWeight: "md" }}>
              <Box className="navlink line">
                <NavLink className="nav" to="/">
                  chain
                </NavLink>
              </Box>
            </Typography>
          </Card>
        </CssVarsProvider>
      </div>
    </div>
  );
};
export default OurCollection;

{
  /* <Box className="cards">
          <div className="bracelets"></div>
          <Box className="navlink line">
            <NavLink className="nav" to="/">
              bracelets
            </NavLink>
          </Box>
        </Box>
        <Box className="cards">
          <div className="necklace"></div>
          <Box className="navlink line">
            <NavLink className="nav" to="/">
              necklaces
            </NavLink>
          </Box>
        </Box>
        <Box className="cards">
          <div className="rings"></div>
          <Box className="navlink line">
            <NavLink className="nav" to="/">
              rings
            </NavLink>
          </Box>
        </Box>
        <Box className="cards">
          <div className="chain"></div>
          <Box className="navlink line">
            <NavLink className="nav" to="/">
              chains
            </NavLink>
          </Box>
        </Box> */
}
