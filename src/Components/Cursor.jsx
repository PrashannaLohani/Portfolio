import React from "react";
import "./CustomCursor.css";

const Cursor = ({ cursorPosition, trailPosition }) => {
  return (
    <>
      <div
        className="custom-cursor"
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      ></div>
      <div
        className="trail"
        style={{
          transform: `translate(${trailPosition.x}px, ${trailPosition.y}px)`,
          opacity: 1, // Ensure the trail is visible
        }}
      ></div>
    </>
  );
};

export default Cursor;
