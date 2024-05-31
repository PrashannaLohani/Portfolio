import { Box, Button, Typography } from "@mui/material";

export default function About() {
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
        bgcolor="red"
        sx={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bGFwdG9wfGVufDB8fDB8fHww')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "2rem",
          "&:hover": {
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;",
            transition: "0.3s",
          },
        }}
      ></Box>
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
        <Button variant="contained" sx={{ mt: "1rem" }}>
          Download Resume
        </Button>
      </Box>
    </Box>
  );
}
