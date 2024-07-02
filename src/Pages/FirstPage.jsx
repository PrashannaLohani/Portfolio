import React, { useEffect, useState } from "react";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Divider, Tooltip, Typography, Zoom } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnimatedBorder = styled("div")(() => ({
  animation: "morph 8s ease-in-out infinite",
  backgroundImage: "url(/Portfolio/Mypic2.png)",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #2d2e32",
  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  height: "20rem", // Reduced height
  width: "20rem", // Reduced width
  position: "relative",
  transition: "all 1s ease-in-out",
  "@keyframes morph": {
    "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
    "50%": { borderRadius: "30% 60% 70% 40% / 30% 70% 40% 60%" },
    "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
  },
}));
export default function FirstPage() {
  const [backgroundColor, setBackgroundColor] = useState("pink");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg")); // Adjust the breakpoint as needed

  useEffect(() => {
    const calmColors = [
      "#ADD8E6", // Light Blue
      "#E0FFFF", // Light Cyan
      "#F5FFFA", // Mint Cream
      "#F0FFF0", // Honeydew
      "#FFFACD", // Lemon Chiffon
      "#E6E6FA", // Lavender
      "#FFE4E1", // Misty Rose
      "#D8BFD8", // Thistle
    ];

    const changeBackgroundColor = () => {
      const newColor =
        calmColors[Math.floor(Math.random() * calmColors.length)];
      setBackgroundColor(newColor);
    };

    const intervalId = setInterval(changeBackgroundColor, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      bgcolor="#DDDDDD"
      minHeight="90vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        gap: "5rem",
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "1rem" : "0",
      }}
    >
      {isMobile && (
        <Box
          minHeight="20vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
        >
          <AnimatedBorder style={{ backgroundColor }}></AnimatedBorder>
        </Box>
      )}

      <Box
        minHeight="20vh"
        p="2rem"
        maxWidth="40rem"
        textAlign={isMobile ? "center" : "left"}
      >
        <Typography
          variant="h3"
          fontWeight="700" // Setting fontWeight to 900 for very bold
          color="#2d2e32"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Front-End React Developer
          <span>
            <img
              src="https://www.stefantopalovic.com/static/media/waving.1bae5fcfb51082b5c2b4.png"
              alt="wave-icon"
              width="50" // Set the width to decrease the size
              height="50" // Set the height to decrease the size
            />
          </span>
        </Typography>
        <Typography
          variant="h6"
          fontWeight="400"
          color="#2d2e32"
          mt="1rem"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Hi, I'm Prashanna Lohani. A passionate Front-end React Developer based
          in Kathmandu, Nepal.
        </Typography>
        <Box
          display="flex"
          gap="5px"
          mt="2rem"
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <a
            href="https://www.linkedin.com/in/prashanna-lohani-439317284/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn
              sx={{
                color: "#2d2e32",
                height: "40px",
                width: "40px",
                "&:hover": {
                  color: "#0A66C2",
                  transform: "translateY(-7px)",
                  transition: "0.5s",
                },
                transition: "transform 0.3s",
              }}
            />
          </a>
          <a
            href="https://github.com/Prashanna69"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub
              sx={{
                color: "#2d2e32",
                height: "40px",
                width: "40px",
                "&:hover": {
                  color: "#181717",
                  transform: "translateY(-7px)",
                  transition: "0.5s",
                },
                transition: "transform 0.3s",
              }}
            />
          </a>
        </Box>

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
            Tech Stack
          </Typography>
          <Divider sx={{ mt: "1rem" }} />
          <Box
            display="flex"
            gap="20px"
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
                title="HTML and CSS"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=html,css"
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
                title="JavaScript and TypeScript"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=js,ts"
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
                title="React and Vite"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=react,vite"
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
                title="Tailwind and Material UI"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=tailwind,materialui"
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
                title="Python and Django"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=python,django"
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
                title="Postgresql and MongoDB"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=postgresql,mongodb"
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
                title="VS Code and Github"
                arrow
                TransitionComponent={Zoom}
                TransitionProps={{ timeout: 600 }}
              >
                <img
                  src="https://skillicons.dev/icons?i=vscode,github"
                  alt="skill icon"
                  loading="lazy"
                />
              </Tooltip>
            </Box>
          </Box>
        </Box>
      </Box>

      {!isMobile && (
        <Box
          minHeight="20vh"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="2rem"
        >
          <AnimatedBorder style={{ backgroundColor }}></AnimatedBorder>
        </Box>
      )}
    </Box>
  );
}
