import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./font.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import CursorLayout from "./layout/Cursorlayout.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <CursorLayout> */}
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* </CursorLayout> */}
  </React.StrictMode>
);
