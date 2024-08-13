import React, { Suspense, lazy } from "react";
import { Box, Skeleton, useTheme, useMediaQuery } from "@mui/material";

const FirstPage = lazy(() => import("./FirstPage"));
const About = lazy(() => import("./About"));
const Project = lazy(() => import("./Project"));
const Contact = lazy(() => import("./Contact"));

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Change the breakpoint as needed

  return (
    <Box minHeight="100vh" p={isMobile ? "1rem" : ""}>
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 200 : 400}
            animation="wave"
          />
        }
      >
        <Box
          id="home"
          minWidth={isMobile ? "100%" : "20rem"}
          maxWidth="100%"
          mt={isMobile ? "2rem" : ""}
        >
          <FirstPage />
        </Box>
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 200 : 400}
            animation="wave"
          />
        }
      >
        <Box id="about" mt={isMobile ? "2rem" : "4rem"}>
          <About />
        </Box>
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 200 : 400}
            animation="wave"
          />
        }
      >
        <Box id="projects" mt={isMobile ? "2rem" : "4rem"}>
          <Project />
        </Box>
      </Suspense>
      <Suspense
        fallback={
          <Skeleton
            variant="rectangular"
            width="100%"
            height={isMobile ? 200 : 400}
            animation="wave"
          />
        }
      >
        <Box id="contact" mt={isMobile ? "2rem" : "4rem"}>
          <Contact />
        </Box>
      </Suspense>
    </Box>
  );
}
