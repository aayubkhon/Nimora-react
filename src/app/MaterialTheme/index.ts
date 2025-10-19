import { createTheme } from "@mui/material/styles";
import { common } from "@mui/material/colors";
import shadow from "./shadow";
import typography from "./typography";

/**
 * LIGHT THEME (DEFAULT)
 */

const light = {
  palette: {
    type: "light",
    background: {
      default: "#ffffff",
      paper: common.white,
    },
    primary: {
      contrastText: "#000000",
      main: "#ffffff",
    },
    secondary: {
      main: "#000",
      // main: "#ffff",
    },
  
    text: {
      primary: "#172b4d",
      secondary: "#6b778c",
      dark: common.black,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100%",
          // background: "#c40909",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: { height: "100%" },
        body: { background: " rgb(255, 255, 255)", height: "100%", minHeight: "100%" },
      },
    },
  },
  shadow,
  typography,
};



// A custom theme for this app
let theme = createTheme(light);
theme = createTheme(theme, {
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1320px",
          },
        },
      },
    },
  },
});
export default theme;
