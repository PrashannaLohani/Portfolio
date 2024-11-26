import { Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  Tooltip,
  Typography,
  useMediaQuery,
  Zoom,
} from "@mui/material";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function About() {
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)"); // Adjust breakpoint as needed
  const isMobile = useMediaQuery("(max-width:600px)");
  const [ref, inView] = useInView({
    triggerOnce: true, // Load only once when in view
    threshold: 0.1, // Load when 10% of the component is visible
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/PrashannaLohani_Resume.pdf"; // Update this with the actual file path
    link.download = "PrashannaLohani_resume.pdf"; // Update this with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    if (inView) {
      const canvas = document.getElementById("canvas3d");
      const app = new Application(canvas);
      app.load("https://prod.spline.design/5HkyfB7LyQRscdU5/scene.splinecode");
    }
  }, [inView]);

  return (
    <Box
      minHeight="80vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={isMobile ? "1rem" : "5rem"}
      flexDirection={isMobileOrTablet ? "column" : "row"}
      flexWrap="wrap"
    >
      <Box
        order={isMobileOrTablet ? 3 : 3}
        ref={ref}
        maxHeight={isMobile ? "50vh" : "70vh"}
        maxWidth={isMobile ? "80vw" : "70vh"}
        minWidth={isMobile ? "80vw" : "50vh"}
        minHeight={isMobile ? "40vh" : "50vh"}
        sx={{
          borderRadius: "2rem",
          overflow: "hidden",
          cursor: "grab",
        }}
      >
        <canvas
          id="canvas3d"
          style={{
            width: "100%",
            height: "100%",
            cursor: "grab",
          }}
        ></canvas>
      </Box>
      <Box
        order={isMobileOrTablet ? 1 : 2}
        minHeight="20vh"
        p={isMobile ? "1rem" : "2rem"}
        maxWidth={isMobile ? "80vw" : "40rem"}
      >
        <Typography
          variant="h5"
          color="#147efb"
          fontWeight="700"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          ABOUT ME
        </Typography>
        <Typography
          variant="h4"
          color="#2d2e32"
          fontWeight="600"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Software Web Developer
          <br />
          Based in Kathmandu, Nepal
        </Typography>
        <Typography
          variant="h6"
          color="#767676"
          mt="2rem"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Hey, I'm Prashanna Lohani, a Web Developer with a strong focus on
          creating minimalist and user-centric web applications.
          <br /> My web development journey has equipped me with expertise in
          React, Next.js, Tailwind, and Material UI, enabling me to create
          seamless full-stack experiences. I'm also skilled in Python, Django,
          and Django Rest Framework, crafting RESTful APIs for both mobile and
          web applications. Beyond coding, I'm passionate about blending
          technology and design, always pushing the limits of what's possible.
        </Typography>
        <Box
          mt="2rem"
          alignItems="center"
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Typography
            variant="h6"
            fontWeight="400"
            color="#2d2e32"
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}
          >
            Currently I am learning :
          </Typography>
          <Divider sx={{ mt: "1rem" }} />
          <Box
            display="flex"
            gap="10px"
            flexWrap="wrap"
            mt="1rem"
            justifyContent={isMobile ? "center" : "flex-start"}
          >
            <Box
              sx={{
                "&:hover": {
                  transform: "translateY(-7px)",
                },
                transition: "transform 0.3s",
              }}
            >
              <Tooltip
                title="Docker"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=docker"
                  alt="skill icon"
                  loading="lazy"
                />
              </Tooltip>
            </Box>
            <Box
              sx={{
                "&:hover": {
                  transform: "translateY(-7px)",
                },
                transition: "transform 0.3s",
              }}
            >
              <Tooltip
                title="AWS"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                sx={{
                  "&:hover": {
                    transform: "translateY(-7px)",
                  },
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src="https://skillicons.dev/icons?i=aws"
                  alt="skill icon"
                  loading="lazy"
                />
              </Tooltip>
            </Box>
            <Box
              sx={{
                "&:hover": {
                  transform: "translateY(-7px)",
                },
                transition: "transform 0.3s",
              }}
            >
              <Tooltip
                title="Linux"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
                sx={{
                  "&:hover": {
                    transform: "translateY(-7px)",
                  },
                  transition: "transform 0.3s",
                }}
              >
                <img
                  src="https://skillicons.dev/icons?i=linux"
                  alt="skill icon"
                  loading="lazy"
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{ mt: "2rem", p: "15px", borderRadius: "1rem", cursor: "none" }}
          onClick={handleDownload}
          startIcon={<Download />}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
