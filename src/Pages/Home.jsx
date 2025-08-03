import { lazy } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

const FirstPage = lazy(() => import("./FirstPage"));
const About = lazy(() => import("./About"));
const Project = lazy(() => import("./Project"));
const Contact = lazy(() => import("./Contact"));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Change the breakpoint as needed

  return (
    <Box
      minHeight='100vh'
      p={isMobile ? "1rem" : ""}
    >
      <Box
        id='home'
        minWidth={isMobile ? "100%" : "20rem"}
        maxWidth='100%'
        mt={isMobile ? "2rem" : ""}
      >
        <FirstPage />
      </Box>

      <Box
        id='about'
        mt={isMobile ? "2rem" : "4rem"}
      >
        <About />
      </Box>

      <Box
        id='projects'
        mt={isMobile ? "2rem" : "4rem"}
      >
        <Project />
      </Box>

      <Box
        id='contact'
        mt={isMobile ? "2rem" : "4rem"}
      >
        <Contact />
      </Box>
    </Box>
  );
}
