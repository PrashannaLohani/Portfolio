import { useTheme } from "@mui/material/styles";
import { GitHub, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Typography, useMediaQuery } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <Box
        bgcolor='#2d2e32'
        minHeight='20vh'
        display='flex'
        flexDirection={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "center" : "space-around"}
        alignItems='center'
        p={isMobile ? "2rem" : "5rem"}
      >
        <Typography
          variant='h6'
          color='#fff'
          fontWeight='700'
          mb='1rem'
          textAlign='center'
        >
          Copyright © {year}. All rights are reserved
        </Typography>
        <Box
          display='flex'
          gap='1rem'
        >
          <a
            href='https://github.com/PrashannaLohani'
            target='_blank'
            rel='noopener noreferrer'
          >
            <GitHub
              sx={{
                color: "white",
                height: "30px",
                width: "30px",
                "&:hover": {
                  color: "#181717",
                  transform: "translateY(-7px)",
                  filter: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "0.5s",
                },
                transition: "transform 0.3s",
              }}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/prashanna-lohani-439317284/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <LinkedIn
              sx={{
                color: "white",
                height: "30px",
                width: "30px",
                "&:hover": {
                  color: "#0A66C2",
                  transform: "translateY(-7px)",
                  filter: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "0.5s",
                },
                transition: "transform 0.3s",
              }}
            />
          </a>
        </Box>
      </Box>
    </>
  );
}
