import React from "react";
import Rectangle from "./Rectangle";

function TextBox({ style, isSelected, onClick }) {
  const DEFAULT_STYLE = {
    width: "200px",
    height: "50px",
  };
  return (
    <Rectangle
      isSelected={isSelected}
      style={{
        backgroundColor: "transparent",
        color: style.color,
        borderWidth: "1px",
      }}
      onClick={onClick}
    />
  );
}

export default TextBox;
