import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./font.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Loader from "./Pages/Loading.jsx";

// Lazy load App
const App = lazy(() => import("./App.jsx"));

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);
