import React, { useEffect, useState } from "react";
import Cursor from "../Components/Cursor";
import { Box, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";

const CursorLayout = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX: x, clientY: y } = e;
    setCursorPosition({ x, y });

    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    if (cursor && trail) {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
      setTimeout(() => {
        trail.style.transform = `translate(${x - 5}px, ${y - 5}px)`;
        trail.style.opacity = 1;
      }, 100);
    }
  };

  const handleMouseOut = () => {
    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    if (cursor && trail) {
      cursor.style.opacity = 0;
      trail.style.opacity = 0;
    }
  };

  const handleMouseEnter = () => {
    const cursor = document.querySelector(".custom-cursor");
    const trail = document.querySelector(".trail");

    if (cursor && trail) {
      cursor.style.opacity = 1;
      trail.style.opacity = 1;
    }
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
  });

  return (
    <>
      <Cursor cursorPosition={cursorPosition} trailPosition={trailPosition} />

      <Box minHeight="100vh">{children}</Box>
    </>
  );
};

export default CursorLayout;
