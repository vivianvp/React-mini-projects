import React, { useState } from "react";
import AddBar from "./components/AddBar";
import EditBar from "./components/EditBar";
import Rectangle from "./components/Rectangle";
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
  const [selected, setSelected] = useState("");

  function addElement(elementType) {
    const bgColor =
      elementType === "textBox" ? "transparent" : COLOR_CODE_BOOK.whiteBg;

    setShapes((prevShapes) => [
      ...prevShapes,
      {
        id: Date.now(),
        type: elementType,
        backgroundColor: bgColor,
        borderColor: COLOR_CODE_BOOK.blackBorder,
        textColor: COLOR_CODE_BOOK.blackText,
      },
    ]);
  }

  function changeBgColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected ? { ...shape, backgroundColor: newColor } : shape
      )
    );
  }

  function changeBorderColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected ? { ...shape, borderColor: newColor } : shape
      )
    );
  }

  function changeTextColor(color) {
    const newColor = COLOR_CODE_BOOK[color];
    setShapes((shapes) =>
      shapes.map((shape) =>
        shape.id === selected ? { ...shape, textColor: newColor } : shape
      )
    );
  }

  // useEffect(() => {
  //   document.addEventListener("click", (e) => handleBackgroundClick(e));

  //   return () => {
  //     document.removeEventListener("click", handleBackgroundClick);
  //   };
  // }, []);

  function handleBackgroundClick(evt) {
    if (evt.target !== evt.currentTarget) return;
    setSelected(null);
  }

  return (
    <div id="diagram-app" onClick={(e) => handleBackgroundClick(e)}>
      <AddBar addElement={addElement} />
      <EditBar
        selected={selected !== null}
        changeBgColor={changeBgColor}
        changeBorderColor={changeBorderColor}
        changeTextColor={changeTextColor}
      />
      {shapes.map((shape) => (
        <Rectangle
          key={shape.id}
          isSelected={selected === shape.id}
          style={{
            backgroundColor: shape.backgroundColor,
            color: shape.textColor,
            border: `${shape.type === "textBox" ? "none" : "solid 3px"}`,
            borderColor: shape.borderColor,
          }}
          onClick={() => {
            setSelected(shape.id);
          }}
        />
      ))}
    </div>
  );
}
export default App;
