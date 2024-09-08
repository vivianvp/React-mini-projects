import React from "react";
import "../components.css";

function AddBar({ addElement }) {
  function handleClick(e) {
    addElement(e.currentTarget.name);
  }

  return (
    <div id="add-shapes-bar">
      <button className="add-btns" name="rectangle" onClick={handleClick}>
        <div id="rectangle-icon"></div>
      </button>
      <button className="add-btns" name="circle" onClick={handleClick}>
        <div id="circle-icon"></div>
      </button>
      <button className="add-btns" name="textBox" onClick={handleClick}>
        Text Box
      </button>
      <button className="add-btns" name="todo" onClick={handleClick}>
        Todo List
      </button>
    </div>
  );
}

export default AddBar;
