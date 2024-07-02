import { Download } from "@mui/icons-material";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";

export default function About() {
  const isMobileOrTablet = useMediaQuery("(max-width:1024px)"); // Adjust breakpoint as needed
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Portfolio/PrashannaLohani_resume.pdf"; // Update this with the actual file path
    link.download = "PrashannaLohani_resume.pdf"; // Update this with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const canvas = document.getElementById("canvas3d");
    const app = new Application(canvas);
    app.load("https://prod.spline.design/5HkyfB7LyQRscdU5/scene.splinecode");
  }, []);

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
          Front-end Developer
          <br />
          Based in Kathmandu, Nepal
        </Typography>
        <Typography
          variant="h6"
          color="#767676"
          mt="2rem"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Hey, I'm Prashanna Lohani, a Frontend Developer with a passion for
          creating user-friendly and minimalist UI/UX designs.
          <br /> My expertise lies in developing seamless digital experiences
          using React and Next.js, complemented by Tailwind, Material UI, and
          JavaScript.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: "1rem", p: "10px", borderRadius: "1rem", cursor: "none" }}
          onClick={handleDownload}
          startIcon={<Download />}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
