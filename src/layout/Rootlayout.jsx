import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CursorLayout from "./Cursorlayout";

export default function RootLayout() {
  return (
    <>
      <CursorLayout>
        <Navbar />
        <Outlet />
        <Footer />
      </CursorLayout>
    </>
  );
}
