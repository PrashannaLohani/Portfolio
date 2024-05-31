import { Box, Typography } from "@mui/material";

export default function Project() {
  return (
    <Box
      bgcolor="#DDDDDD"
      minHeight="50vh"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5rem",
      }}
    >
      <Typography
        variant="h5"
        fontWeight="800"
        color="#2d2e32"
        sx={{ fontFamily: "Poppins" }}
      >
        New projects coming soon...
      </Typography>
    </Box>
  );
}
