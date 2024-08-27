import React, { useState } from "react";

function TextBox({ initialText = "", style }) {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(initialText === "" ? true : false);

  const inputStyle = {
    border: "none",
    background: "transparent",
    outline: "none",
    fontSize: "inherit",
  };

  const pStyle = {
    margin: "0",
  };

  function handleBlur() {
    setIsEditing(false);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      setIsEditing(false);
    }
  }

  function handleDoubleClick() {
    setIsEditing(true);
  }

  return (
    <div className="text-box" style={style}>
      {isEditing ? (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
          style={inputStyle}
        />
      ) : (
        <p onDoubleClick={handleDoubleClick} style={pStyle}>
          {text}
        </p>
      )}
    </div>
  );
}

export default TextBox;
