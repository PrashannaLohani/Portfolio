import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        height: "5rem",
        display: "flex",
        justifyContent: "center",
        bgcolor: "#fff",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          fontWeight="800"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Prashanna.dev
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Typography
            variant="h7"
            component="a"
            fontWeight="600"
            href="#home"
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "primary.light",
                transform: "translateY(-7px)",
              },

              transition: "transform 0.3s",
            }}
          >
            Home
          </Typography>
          <Typography
            variant="h7"
            component="a"
            fontWeight="600"
            href="#about"
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "primary.light",
                transform: "translateY(-7px)",
              },

              transition: "transform 0.3s",
            }}
          >
            About
          </Typography>
          <Typography
            variant="h7"
            component="a"
            fontWeight="600"
            href="#projects"
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "primary.light",
                transform: "translateY(-7px)",
              },

              transition: "transform 0.3s",
            }}
          >
            Projects
          </Typography>
          <Typography
            variant="h7"
            component="a"
            fontWeight="600"
            href="#contact"
            sx={{
              textDecoration: "none",
              color: "black",
              "&:hover": {
                color: "primary.light",
                transform: "translateY(-7px)",
              },

              transition: "transform 0.3s",
            }}
          >
            Contact
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
