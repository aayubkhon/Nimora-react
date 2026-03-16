import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./app/App";
import "./css/index.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from './app/MaterialTheme';
import { BrowserRouter } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
// import { socket, socketContext } from "./app/components/context/socket_io"
const container = document.getElementById("root")!;
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <CssBaseline />
    {/* <socketContext.Provider value={socket}> */}
      <App />
    {/* </socketContext.Provider> */}
    </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);


