import React, { useState } from "react";

function Rectangle({
  coordinates = { x: 0, y: 0 },
  backgroundColor = "white",
  borderColor = "black",
  size = {width: "300px", height: "300px"}
}) {
  const [coordinates, setCoordinates] = useState(coordinates);
  const [text, setText] = useState("");
  const [backgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [borderColor, setBorderColor] = useState(borderColor);
}
export default Rectangle;
