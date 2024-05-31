import { Box } from "@mui/material";
import FirstPage from "./FirstPage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

export default function Home() {
  return (
    <>
      <Box minHeight="100vh">
        <FirstPage />
        <About />
        <Project />
        <Contact />
      </Box>
    </>
  );
}
