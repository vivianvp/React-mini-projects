import React from "react";
import Rectangle from "./Rectangle";

function Circle({ style, isSelected, onClick }) {
  return (
    <Rectangle
      isSelected={isSelected}
      style={{
        borderRadius: "50%",
        backgroundColor: style.backgroundColor,
        color: style.color,
        border: style.border,
      }}
      innerTextStyle={{
        widthPercentage: "80%",
        heightPercentage: "40%",
        position: "relative",
        top: "calc(50% - 20%)",
        left: "calc(50% - 40%)",
      }}
      onClick={onClick}
    />
  );
}

export default Circle;
