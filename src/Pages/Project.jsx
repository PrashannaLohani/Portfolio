import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { GitHub } from "@mui/icons-material";

export default function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from project.json
    fetch("/Portfolio/project.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data.projects);
      })
      .catch((error) => {
        console.warn("Error fetching project data:");
      });
  }, []);

  return (
    <Box
      bgcolor='#DDDDDD'
      minHeight='50vh'
      sx={{
        minWidth: "20rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "2rem",
        p: "3rem",
      }}
    >
      <Box
        minHeight='auto'
        p='1rem'
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          flexDirection: "column",
          gap: "2rem",
          maxWidth: "100%",
        }}
      >
        {projects.length === 0 ? (
          <Typography
            variant='h5'
            fontWeight='600'
            color='#2d2e32'
            sx={{ fontFamily: "Poppins", textAlign: "center" }}
          >
            New projects coming soon.. 🤠
          </Typography>
        ) : (
          <>
            <Typography
              variant='h3'
              fontWeight='600'
              color='#2d2e32'
              textAlign='center'
              sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            >
              Projects
            </Typography>
            <Box
              display='flex'
              gap='2rem'
              flexWrap='wrap'
            >
              {projects?.map((project) => (
                <Card
                  key={project?.id}
                  sx={{
                    maxWidth: 345,
                    background:
                      "linear-gradient(0deg, rgba(237,223,224,1) 33%, rgba(255,255,255,1) 100%)",
                    boxShadow:
                      "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
                    borderRadius: "1rem",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      transform: "translateY(-7px) scale(1.05)",
                    },
                    transition: "transform 0.3s",
                  }}
                >
                  <CardMedia
                    sx={{
                      height: 140,
                      position: "relative",
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: 1,
                        opacity: 0,
                        transition: "opacity 0.3s",
                      },
                      "&:hover::after": {
                        opacity: 1,
                      },
                    }}
                    image={project?.background_photo}
                    title={project?.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant='h5'
                      fontWeight='600'
                      color='#2d2e32'
                      sx={{ flexGrow: 1, fontFamily: "Poppins" }}
                    >
                      {project?.name}
                    </Typography>
                    <Typography
                      variant='body2'
                      fontWeight='400'
                      color='#2d2e32'
                      sx={{ flexGrow: 1, fontFamily: "Poppins" }}
                    >
                      {project?.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <a
                      href={project?.link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <OpenInNewIcon
                        sx={{
                          color: "#2d2e32",
                          "&:hover": {
                            color: "secondary.light",
                            transform: "translateY(-7px)",
                          },
                          transition: "transform 0.3s",
                        }}
                      />
                    </a>
                    {project?.github && (
                      <a
                        href={project?.github}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <GitHub
                          sx={{
                            color: "#2d2e32",
                            "&:hover": {
                              color: "primary.light",
                              transform: "translateY(-7px)",
                            },
                            transition: "transform 0.3s",
                          }}
                        />
                      </a>
                    )}
                    <Chip
                      label={project?.difficulty}
                      color={project?.color}
                      style={{ marginBottom: "0.5rem" }}
                    />
                  </CardActions>
                </Card>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
