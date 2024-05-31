import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <>
      <Box
        bgcolor="#2d2e32"
        minHeight="20vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box>
            <Typography variant="h6" color="#fff" fontWeight="700">
              Copyright © 2024. All rights are reserved
            </Typography>
          </Box>
          <Box display="flex" gap="1rem">
            <a
              href="https://github.com/Prashanna69"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub
                sx={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  "&:hover": {
                    color: "#181717",
                    transform: "translateY(-7px)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/prashanna-lohani-439317284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn
                sx={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  "&:hover": {
                    color: "#0A66C2",
                    transform: "translateY(-7px)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/sauji_._/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram
                sx={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  "&:hover": {
                    color: "#D6249F",
                    transform: "translateY(-7px)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Twitter
                sx={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  "&:hover": {
                    color: "#1DA1F2",
                    transform: "translateY(-7px)",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </>
  );
}
