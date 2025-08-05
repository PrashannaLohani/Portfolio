import { useEffect, useState } from "react";
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";
import { Box, Divider, Tooltip, Typography, Zoom } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnimatedBorder = styled("div")(() => ({
  animation: "morph 25s ease-in-out infinite",
  backgroundImage: "url(/Portfolio/Mypic2.png)",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #2d2e32",
  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  height: "23rem",
  width: "23rem",
  position: "relative",
  transition: "all 1s ease-in-out",
  "@keyframes morph": {
    "0%": {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
    "10%": {
      borderRadius: "58% 42% 33% 67% / 63% 35% 68% 38%",
    },
    "20%": {
      borderRadius: "50% 60% 35% 65% / 55% 45% 60% 40%",
    },
    "30%": {
      borderRadius: "45% 55% 60% 50% / 50% 60% 50% 40%",
    },
    "40%": {
      borderRadius: "40% 50% 60% 50% / 60% 50% 40% 60%",
    },
    "50%": {
      borderRadius: "55% 45% 55% 45% / 45% 55% 45% 55%",
    },
    "60%": {
      borderRadius: "70% 35% 45% 55% / 50% 60% 40% 50%",
    },
    "70%": {
      borderRadius: "62% 38% 48% 52% / 52% 58% 42% 48%",
    },
    "80%": {
      borderRadius: "55% 45% 65% 35% / 45% 55% 60% 40%",
    },
    "90%": {
      borderRadius: "63% 37% 32% 68% / 62% 38% 68% 32%",
    },
    "100%": {
      borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
    },
  },
}));

const socialLinks = [
  {
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/prashanna-lohani-439317284/",
    hoverColor: "#0A66C2",
    label: "LinkedIn",
  },
  {
    icon: GitHub,
    url: "https://github.com/PrashannaLohani",
    hoverColor: "#181717",
    label: "GitHub",
  },
  {
    icon: MailOutline,
    url: "mailto:plohani2003@gmail.com",
    hoverColor: "#EA4335",
    label: "Gmail",
  },
];

const techStack = [
  { title: "HTML and CSS", icons: ["html", "css"] },
  { title: "JavaScript and TypeScript", icons: ["js", "ts"] },
  { title: "React and Vite", icons: ["react", "vite"] },
  { title: "Tailwind and Material UI", icons: ["tailwind", "materialui"] },
  { title: "Python and Django", icons: ["python", "django"] },
  { title: "Postgresql and MongoDB", icons: ["postgresql", "mongodb"] },
  { title: "VS Code and Github", icons: ["vscode", "github"] },
  { title: "GraphQL and Linux", icons: ["graphql", "linux"] },
];

export default function FirstPage() {
  const [backgroundColor, setBackgroundColor] = useState("pink");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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

      // New calm colors
      "#B0E0E6", // Powder Blue
      "#FAFAD2", // Light Goldenrod Yellow
      "#F0F8FF", // Alice Blue
      "#F5F5DC", // Beige
      "#FDF5E6", // Old Lace
      "#F8F8FF", // Ghost White
      "#FFF0F5", // Lavender Blush
      "#E0EEE0", // Light Greenish Gray
      "#E0E0F8", // Pale Lavender Blue
      "#E3F2FD", // Soft Blue
      "#F1F8E9", // Soft Green (like lime mist)
      "#FFF8DC", // Cornsilk
    ];

    const changeBackgroundColor = () => {
      const newColor =
        calmColors[Math.floor(Math.random() * calmColors.length)];
      setBackgroundColor(newColor);
    };

    const intervalId = setInterval(changeBackgroundColor, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box
      bgcolor='#DDDDDD'
      minHeight='90vh'
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
          minHeight='20vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          mt='2rem'
        >
          <AnimatedBorder style={{ backgroundColor }} />
        </Box>
      )}

      <Box
        minHeight='20vh'
        p='2rem'
        maxWidth='60rem'
        textAlign={isMobile ? "center" : "left"}
      >
        <Typography
          variant='h3'
          fontWeight='700'
          color='#2d2e32'
          sx={{
            flexGrow: 1,
            fontFamily: "Poppins",
            marginTop: isMobile ? "0" : "5rem",
          }}
        >
          Prashanna Lohani
        </Typography>
        <Typography
          variant='h6'
          fontWeight='400'
          color='#2d2e32'
          mt='1rem'
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          21 years old, Software Engineer based in Kathmandu, Nepal 🇳🇵.
        </Typography>
        <Typography
          variant='h6'
          fontWeight='400'
          color='#2d2e32'
          mt='1rem'
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Frontend By Job, fullstack By Passion. I love to create interactive
          and user-friendly web applications. I am always eager to learn new
          technologies and improve my skills.
        </Typography>

        <Box
          display='flex'
          gap='5px'
          mt='2rem'
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          {socialLinks.map(({ icon: Icon, url, hoverColor, label }) => (
            <a
              key={label}
              href={url}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={label}
            >
              <Icon
                sx={{
                  color: "#2d2e32",
                  height: "40px",
                  width: "40px",
                  "&:hover": {
                    color: hoverColor,
                    transform: "translateY(-7px)",
                    transition: "0.5s",
                  },
                  transition: "transform 0.3s",
                }}
              />
            </a>
          ))}
        </Box>

        <Box
          mt='2rem'
          alignItems='center'
          maxWidth='40rem'
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Typography
            variant='h6'
            fontWeight='400'
            color='#2d2e32'
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}
          >
            Tech Stack
          </Typography>
          <Divider sx={{ mt: "1rem" }} />
          <Box
            display='flex'
            gap='20px'
            flexWrap='wrap'
            mt='1rem'
            justifyContent={isMobile ? "center" : "flex-start"}
          >
            {techStack.map(({ title, icons }) => (
              <Box
                key={title}
                sx={{
                  "&:hover": {
                    transform: "translateY(-7px)",
                  },
                  transition: "transform 0.3s",
                }}
              >
                <Tooltip
                  title={title}
                  arrow
                  TransitionComponent={Zoom}
                  TransitionProps={{ timeout: 600 }}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${icons.join(",")}`}
                    alt={`${title} icon`}
                    loading='lazy'
                  />
                </Tooltip>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {!isMobile && (
        <Box
          minHeight='40vh'
          display='flex'
          alignItems='center'
          justifyContent='center'
          mt='2rem'
        >
          <AnimatedBorder style={{ backgroundColor }} />
        </Box>
      )}
    </Box>
  );
}
