import { Box, Button, Typography } from "@mui/material";
import { Application } from "@splinetool/runtime";
import { useEffect } from "react";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Update this with the actual file path
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
      gap="5rem"
      flexWrap="wrap"
    >
      <Box
        maxHeight="70vh"
        maxWidth="70vh"
        minWidth="50vh"
        minHeight="50vh"
        sx={{
          borderRadius: "2rem",
          overflow: "hidden", // Ensure the canvas is contained within the box
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
      <Box minHeight="20vh" p="2rem" maxWidth="40rem">
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
          Hey, My name is Prashanna lohani, and I'm a Frontend Developer. I like
          developing User Friendly and minimilistic UI/UX <br />
          My current main stack is React/Nextjs. in combination with the
          Tailwind, Material UI and JavaScript
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: "1rem" }}
          onClick={handleDownload}
        >
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}
