import React, { useState } from "react";

function Outline({ width, height, color }) {
  const outlineStyle = {
    backgroundColor: "transparent",
    border: `2px solid ${color}`,
    width: "317px",
    height: "317px",
    position: "relative",
  };

  const cornerStyle {
    
  }

  return (
    <div class="outline">
      <div class="corner" id="top-left"></div>
      <div class="corner" id="top-right"></div>
      <div class="corner" id="bottom-left"></div>
      <div class="corner" id="bottom-right"></div>
    </div>
  );
}
export default Outline;
