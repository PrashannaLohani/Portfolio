import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = (
    <>
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
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
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
          {isMobile ? (
            <>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <Box
                  sx={{
                    width: 250,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "1rem",
                  }}
                >
                  <Typography
                    variant="h5"
                    fontWeight="800"
                    sx={{ fontFamily: "Poppins" }}
                  >
                    Prashanna.dev
                  </Typography>
                  <Divider sx={{ width: "100%", margin: "1rem 0" }} />
                  <List>
                    {["Home", "About", "Projects", "Contact"].map((text) => (
                      <ListItem
                        button
                        component="a"
                        href={`#${text.toLowerCase()}`}
                        key={text}
                      >
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>{navLinks}</Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
