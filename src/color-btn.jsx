import React from "react";
import "./color-btn.css";

function ColorButtons({ color, setColor }) {
  return (
    <button
      className="colorBtn"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    ></button>
  );
}

export default ColorButtons;
