import React, { useState, useRef, useEffect } from "react";

function Rectangle({ style, isSelected, onClick, innerTextStyle = {} }) {
  const DEFAULT_STYLE = {
    width: 300,
    height: 200,
    backgroundColor: "white",
    border: "solid 3px black",
    x: 500, // left
    y: 200, // top
    textColor: "black",
  };
  const [rectXY, setRectXY] = useState({
    x: style?.x || DEFAULT_STYLE.x,
    y: style?.y || DEFAULT_STYLE.y,
  });
  const [width, setWidth] = useState(style?.width || DEFAULT_STYLE.width);
  const [height, setHeight] = useState(style?.height || DEFAULT_STYLE.height);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState(null);
  const [isMoving, setIsMoving] = useState(false);
  const [text, setText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const mouseStartXY = useRef({ x: 0, y: 0 });

  function handleMouseDownResize(evt, direction) {
    setResizeDirection(direction);
    setIsResizing(true);
    mouseStartXY.current = { x: evt.clientX, y: evt.clientY };
  }

  function handleMouseMoveResize(evt) {
    if (!isResizing) return;
    const dx = evt.clientX - mouseStartXY.current.x;
    const dy = evt.clientY - mouseStartXY.current.y;

    switch (resizeDirection) {
      // edges
      case "top":
        setHeight((prevHeight) => prevHeight - dy);
        setRectXY((prev) => ({ ...prev, y: prev.y + dy }));
        break;
      case "bottom":
        setHeight((prevHeight) => prevHeight + dy);
        break;
      case "right":
        setWidth((prevWidth) => prevWidth + dx);
        break;
      case "left":
        setWidth((prevWidth) => prevWidth - dx);
        setRectXY((prev) => ({ ...prev, x: prev.x + dx }));
        break;

      // corners
      case "topLeft":
        setHeight((prevHeight) => prevHeight - dy);
        setRectXY((prev) => ({ ...prev, y: prev.y + dy }));
        setWidth((prevWidth) => prevWidth - dx);
        setRectXY((prev) => ({ ...prev, x: prev.x + dx }));
        break;
      case "topRight":
        setHeight((prevHeight) => prevHeight - dy);
        setRectXY((prev) => ({ ...prev, y: prev.y + dy }));
        setWidth((prevWidth) => prevWidth + dx);
        break;
      case "bottomRight":
        setHeight((prevHeight) => prevHeight + dy);
        setWidth((prevWidth) => prevWidth + dx);
        break;
      case "bottomLeft":
        setHeight((prevHeight) => prevHeight + dy);
        setWidth((prevWidth) => prevWidth - dx);
        setRectXY((prev) => ({ ...prev, x: prev.x + dx }));
        break;
    }

    mouseStartXY.current = { x: evt.clientX, y: evt.clientY };
  }

  function handleMouseUpResize() {
    setIsResizing(false);
    setResizeDirection(null);
  }

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMoveResize);
      document.addEventListener("mouseup", handleMouseUpResize);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveResize);
      document.removeEventListener("mouseup", handleMouseUpResize);
    };
  }, [isResizing]);

  function handleMouseDownMove(evt) {
    mouseStartXY.current = { x: evt.clientX, y: evt.clientY };
    setIsMoving(true);
  }

  function handleMouseUpMove() {
    setIsMoving(false);
  }

  function handleMouseMoveMove(evt) {
    if (!isMoving) return;
    const dx = evt.clientX - mouseStartXY.current.x;
    const dy = evt.clientY - mouseStartXY.current.y;
    setRectXY((prev) => ({ x: prev.x + dx, y: prev.y + dy }));
    mouseStartXY.current = { x: evt.clientX, y: evt.clientY };
  }

  useEffect(() => {
    if (isMoving) {
      document.addEventListener("mousemove", handleMouseMoveMove);
      document.addEventListener("mouseup", handleMouseUpMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveMove);
      document.removeEventListener("mouseup", handleMouseUpMove);
    };
  }, [isMoving]);

  function handleDoubleClick() {
    setIsEditing(true);
  }

  function handleBlur() {
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  }

  return (
    <div
      className="rectangle"
      style={{
        position: "absolute",
        left: rectXY.x,
        top: rectXY.y,
        width: width,
        height: height,
        backgroundColor:
          style?.backgroundColor || DEFAULT_STYLE.backgroundColor,
        color: style?.color || DEFAULT_STYLE.textColor,
        border: style?.border || DEFAULT_STYLE.border,
        cursor: "move",
        borderRadius: style.borderRadius || "0",
      }}
      onMouseDown={(e) => handleMouseDownMove(e)}
      onClick={onClick}
      onDoubleClick={handleDoubleClick}
    >
      {isEditing ? (
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            fontSize: "inherit",
            margin: "10px",
            resize: "none",
            overflow: "hidden",
            boxSizing: "content-box",
            color: style?.color || DEFAULT_STYLE.textColor,
            width: innerTextStyle.widthPercentage || "90%",
            position: "relative",
            top: innerTextStyle.top || "0",
            left: innerTextStyle.left || "0",
          }}
        ></textarea>
      ) : (
        <p
          onDoubleClick={handleDoubleClick}
          style={{
            margin: "10px",
            width: innerTextStyle.widthPercentage || "90%",
            overflow: "scroll",
            color: style?.color || DEFAULT_STYLE.textColor,
            position: "relative",
            top: innerTextStyle.top || "0",
            left: innerTextStyle.left || "0",
          }}
        >
          {text}
        </p>
      )}
      {isSelected && (
        <>
          {/* edges */}
          <div
            className="resizer vertical-edge resizer-l"
            onMouseDown={(e) => handleMouseDownResize(e, "left")}
          ></div>
          <div
            className="resizer vertical-edge resizer-r"
            onMouseDown={(e) => handleMouseDownResize(e, "right")}
          ></div>
          <div
            className="resizer horizontal-edge resizer-t"
            onMouseDown={(e) => handleMouseDownResize(e, "top")}
          ></div>
          <div
            className="resizer horizontal-edge resizer-b"
            onMouseDown={(e) => handleMouseDownResize(e, "bottom")}
          ></div>
          {/* corners */}
          <div
            className="resizer corner resizer-tl"
            onMouseDown={(e) => handleMouseDownResize(e, "topLeft")}
          ></div>
          <div
            className="resizer corner resizer-tr"
            onMouseDown={(e) => handleMouseDownResize(e, "topRight")}
          ></div>
          <div
            className="resizer corner resizer-bl"
            onMouseDown={(e) => handleMouseDownResize(e, "bottomLeft")}
          ></div>
          <div
            className="resizer corner resizer-br"
            onMouseDown={(e) => handleMouseDownResize(e, "bottomRight")}
          ></div>
        </>
      )}
    </div>
  );
}
export default Rectangle;
