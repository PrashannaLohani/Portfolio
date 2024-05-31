import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Divider, Fade, Tooltip, Typography, Zoom } from "@mui/material";
import { styled } from "@mui/system";

const AnimatedBorder = styled("div")({
  animation: "morph 8s ease-in-out infinite",
  backgroundImage: "url('../static/MyPhote.jpg')", // Replace with the actual path
  backgroundColor: "",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  border: "3px solid #2d2e32",
  borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
  height: "25rem", // Reduced height
  width: "25rem", // Reduced width
  position: "relative",
  transition: "all 1s ease-in-out",
  "@keyframes morph": {
    "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
    "50%": { borderRadius: "30% 60% 70% 40% / 30% 70% 40% 60%" },
    "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
  },
});
export default function FirstPage() {
  return (
    <Box
      bgcolor="#DDDDDD"
      minHeight="90vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Box minHeight="20vh" p="2rem" maxWidth="40rem">
        <Typography
          variant="h3"
          fontWeight="900" // Setting fontWeight to 900 for very bold
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
        <Box display="flex" gap="5px" mt="2rem">
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
                },
                cursor: "pointer",
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
                },
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
            />
          </a>
        </Box>

        <Box mt="2rem" alignItems="center" justifyContent="center">
          <Typography
            variant="h6"
            fontWeight="400"
            color="#2d2e32"
            sx={{ flexGrow: 1, fontFamily: "Poppins" }}
          >
            Tech Stack
          </Typography>
          <Divider sx={{ mt: "1rem" }} />
          <Box display="flex" gap="20px" flexWrap="wrap" mt="1rem">
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
      <Box
        minHeight="20vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <AnimatedBorder></AnimatedBorder>
      </Box>
    </Box>
  );
}
