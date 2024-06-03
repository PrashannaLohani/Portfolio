import { Box, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { MailOutline, MapOutlined } from "@mui/icons-material";

export default function Contact() {
  return (
    <Box
      minHeight="20rem"
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "5rem",
        fontFamily: "Poppins",
        p: "10rem",
      }}
    >
      <Box>
        <Typography
          variant="h5"
          color="#147efb"
          fontWeight="600"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Contact
        </Typography>
        <Typography
          variant="h4"
          color="#2d2e32"
          fontWeight="700"
          mt="1rem"
          sx={{ flexGrow: 1, fontFamily: "Poppins" }}
        >
          Feel Free to Contact Me ! 👇
        </Typography>
        <Box display="flex" alignItems="center" gap=" 1rem" mt="2rem">
          <Box
            borderRadius="2rem"
            boxShadow=" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
            p="1rem"
          >
            <MapOutlined
              sx={{
                color: "#147efb",
                height: "25px",
                width: "25px",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" flexGrow="1">
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontFamily: "Poppins" }}
            >
              Location
            </Typography>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Kathmandu+Nepal"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                fontWeight="400"
                color="#2d2e32"
                sx={{
                  fontFamily: "Poppins",
                  "&:hover": {
                    color: "primary.light",
                    transform: "translateY(-2px)",
                  },

                  transition: "transform 0.3s",
                }}
              >
                Kathmandu, Nepal
              </Typography>
            </a>
          </Box>
          <Box
            borderRadius="5rem"
            boxShadow=" rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;"
            p="1rem"
          >
            <MailOutline
              sx={{
                color: "#147efb",
                height: "25px",
                width: "25px",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" flexGrow="1">
            <Typography
              variant="h6"
              fontWeight="700"
              sx={{ fontFamily: "Poppins" }}
            >
              Mail
            </Typography>
            <a
              href="mailto:plohani2003@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="h6"
                fontWeight="400"
                color="#2d2e32"
                sx={{
                  fontFamily: "Poppins",
                  "&:hover": {
                    color: "primary.light",
                    transform: "translateY(-2px)",
                  },

                  transition: "transform 0.3s",
                }}
              >
                plohani2003@gmail.com
              </Typography>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
