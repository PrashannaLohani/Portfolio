import { useEffect, useState } from "react";
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
  height: "20rem",
  width: "20rem",
  position: "relative",
  transition: "all 1s ease-in-out",
  "@keyframes morph": {
    "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
    "50%": { borderRadius: "30% 60% 70% 40% / 30% 70% 40% 60%" },
    "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
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
      "#ADD8E6",
      "#E0FFFF",
      "#F5FFFA",
      "#F0FFF0",
      "#FFFACD",
      "#E6E6FA",
      "#FFE4E1",
      "#D8BFD8",
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
        maxWidth='40rem'
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
          Software Web Developer
        </Typography>
        <Typography
          variant='h6'
          fontWeight='400'
          color='#2d2e32'
          mt='1rem'
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Hi, I'm Prashanna Lohani, a Web Developer from Kathmandu, Nepal. I
          specialize in creating dynamic and responsive websites, turning
          complex challenges into seamless user experiences. With a passion for
          both front-end and back-end development, I'm always eager to learn new
          technologies and innovate in the web development space.
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
          minHeight='20vh'
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
