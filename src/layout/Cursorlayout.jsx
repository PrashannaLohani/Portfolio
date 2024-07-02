import React, { useEffect, useState } from "react";
import Cursor from "../Components/Cursor";
import { Box } from "@mui/material";

const CursorLayout = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPosition({ x, y });

    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    // Update cursor position
    cursor.style.transform = `translate(${x}px, ${y}px)`;

    // Update trail position with a delay
    setTimeout(() => {
      trail.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
      trail.style.opacity = 1;
    }, 100);
  };

  const handleMouseOut = () => {
    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    // Hide both the cursor and the trail when the mouse leaves the window
    cursor.style.opacity = 0;
    trail.style.opacity = 0;
  };

  const handleMouseEnter = () => {
    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    // Show both the cursor and the trail when the mouse enters the window
    cursor.style.opacity = 1;
    trail.style.opacity = 1;
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseout", handleMouseOut);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseout", handleMouseOut);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <Cursor cursorPosition={cursorPosition} trailPosition={trailPosition} />
      <Box minHeight="100vh">{children}</Box>
    </>
  );
};

export default CursorLayout;