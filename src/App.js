import React, { useState } from "react";
import AddBar from "./components/AddBar";
import EditBar from "./components/EditBar";
import Rectangle from "./components/Rectangle";
import Circle from "./components/Circle";
import TextBox from "./components/TextBox";
import "./App.css";
import "./components.css";

function App() {
  const COLOR_CODE_BOOK = {
    // background colors
    greyBg: "rgb(184, 184, 184)",
    pinkBg: "rgb(255, 211, 218)",
    yellowBg: "rgb(255, 255, 196)",
    mintBg: "rgb(168, 239, 211)",
    blueBg: "rgb(189, 241, 255)",
    whiteBg: "white",

    // border colors
    blackBorder: "black",
    pinkBorder: "rgb(236, 145, 160)",
    mintBorder: "rgb(102, 205, 160)",
    yellowBorder: "rgb(240, 204, 0)",
    blueBorder: "rgb(69, 167, 194)",
    whiteBorder: "white",

    // text colors
    whiteText: "white",
    blackText: "black",
    redText: "rgb(211, 0, 0)",
    greenText: "green",
    yellowText: "rgb(255, 220, 23)",
    blueText: "rgb(28, 0, 210)",
  };

  /**
   * type shapes = {
   *  id: number, (Date.now())
   *  type: string, ("rectangle", "circle", "textBox", "todo")
   *  backgroundColor: string,  ("transparent", "white", etc)
   *  borderColor: string,
   *  textColor: string
   * }
   */
  const [shapes, setShapes] = useState([]);
  const [selected, setSelected] = useState(null);

  function addElement(elementType) {
    const bgColor =
      elementType === "textBox" ? "transparent" : COLOR_CODE_BOOK.whiteBg;

    const id = Date.now();
    const newShape = {
      id: id,
      type: elementType,
      backgroundColor: bgColor,
      borderColor: COLOR_CODE_BOOK.blackBorder,
      textColor: COLOR_CODE_BOOK.blackText,
    };
    setShapes((prevShapes) => [...prevShapes, newShape]);
    setSelected(newShape);
  }

  function changeBgColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected.id
          ? { ...shape, backgroundColor: newColor }
          : shape
      )
    );
  }

  function changeBorderColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected.id ? { ...shape, borderColor: newColor } : shape
      )
    );
  }

  function changeTextColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected.id ? { ...shape, textColor: newColor } : shape
      )
    );
  }

  function handleBackgroundClick(evt) {
    if (evt.target !== evt.currentTarget) return;
    setSelected(null);
  }

  function renderElements(shape) {
    switch (shape.type) {
      case "rectangle":
        console.log("case rect");
        return (
          <Rectangle
            key={shape.id}
            isSelected={selected === null ? false : selected.id === shape.id}
            style={{
              backgroundColor: shape.backgroundColor,
              color: shape.textColor,
              border: `solid 3px ${shape.borderColor}`,
            }}
            onClick={() => {
              setSelected(shape);
            }}
          />
        );
      case "circle":
        console.log("case circle");
        return (
          <Circle
            key={shape.id}
            isSelected={selected === null ? false : selected.id === shape.id}
            style={{
              backgroundColor: shape.backgroundColor,
              color: shape.textColor,
              border: `solid 3px ${shape.borderColor}`,
            }}
            onClick={() => {
              setSelected(shape);
            }}
          />
        );
      case "textBox":
        return (
          <TextBox
            key={shape.id}
            isSelected={selected === null ? false : selected.id === shape.id}
            style={{
              backgroundColor: shape.backgroundColor,
              color: shape.textColor,
              border: `solid 3px ${shape.borderColor}`,
            }}
            onClick={() => {
              setSelected(shape);
            }}
          />
        );
    }
  }

  return (
    <div id="diagram-app" onClick={(e) => handleBackgroundClick(e)}>
      <AddBar addElement={addElement} />
      <EditBar
        selected={selected}
        changeBgColor={changeBgColor}
        changeBorderColor={changeBorderColor}
        changeTextColor={changeTextColor}
      />
      {shapes.map((shape) => renderElements(shape))}
      {console.log(shapes)}
    </div>
  );
}
export default App;
