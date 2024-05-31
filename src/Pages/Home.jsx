import { Box } from "@mui/material";
import FirstPage from "./FirstPage";
import About from "./About";

export default function Home() {
  return (
    <>
      <Box minHeight="100vh">
        <FirstPage />
        <About />
      </Box>
    </>
  );
}
