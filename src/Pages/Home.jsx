import React from "react";
import { Box } from "@mui/material";
import FirstPage from "./FirstPage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <Box minHeight="100vh">
      <Box id="home">
        <FirstPage />
      </Box>
      <Box id="about">
        <About />
      </Box>
      <Box id="projects">
        <Project />
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
    </Box>
  );
}
