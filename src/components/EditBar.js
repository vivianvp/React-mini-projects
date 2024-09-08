import React from "react";
import "../components.css";

function EditBar({
  selected,
  changeBgColor,
  changeBorderColor,
  changeTextColor,
}) {
  function renderOnSelected() {
    if (typeof selected === "undefined") {
      return <div></div>;
    } else {
      if (selected.type === "textBox") {
        return (
          <div id="edit-bar">
            <p className="palette-title">Text color</p>
            <div className="edit-text-color palette-section">
              <p
                className="black-text text-option"
                onClick={() => {
                  changeTextColor("blackText");
                }}
              >
                A
              </p>
              <p
                className="red-text text-option"
                onClick={() => {
                  changeTextColor("redText");
                }}
              >
                A
              </p>
              <p
                className="green-text text-option"
                onClick={() => {
                  changeTextColor("greenText");
                }}
              >
                A
              </p>
              <p
                className="yellow-text text-option"
                onClick={() => {
                  changeTextColor("yellowText");
                }}
              >
                A
              </p>
              <p
                className="blue-text text-option"
                onClick={() => {
                  changeTextColor("blueText");
                }}
              >
                A
              </p>
              <p
                className="white-text text-option"
                onClick={() => {
                  changeTextColor("whiteText");
                }}
              >
                A
              </p>
            </div>
            <p className="palette-title">Border color</p>
            <div className="edit-border-color palette-section">
              <div
                className="black-border color-option border-option"
                onClick={() => {
                  changeBorderColor("blackBorder");
                }}
              ></div>
              <div
                className="pink-border color-option border-option"
                onClick={() => {
                  changeBorderColor("pinkBorder");
                }}
              ></div>
              <div
                className="mint-border color-option border-option"
                onClick={() => {
                  changeBorderColor("mintBorder");
                }}
              ></div>
              <div
                className="yellow-border color-option border-option"
                onClick={() => {
                  changeBorderColor("yellowBorder");
                }}
              ></div>
              <div
                className="blue-border color-option border-option"
                onClick={() => {
                  changeBorderColor("blueBorder");
                }}
              ></div>
              <div
                className="white-border color-option border-option"
                onClick={() => {
                  changeBorderColor("whiteBorder");
                }}
              ></div>
            </div>
          </div>
        );
      } else {
        return (
          <div id="edit-bar">
            <p className="palette-title">Background color</p>
            <div className="edit-bg-color palette-section">
              <div
                className="grey-bg color-option"
                onClick={() => {
                  changeBgColor("greyBg");
                }}
              ></div>
              <div
                className="pink-bg color-option"
                onClick={() => {
                  changeBgColor("pinkBg");
                }}
              ></div>
              <div
                className="mint-bg color-option"
                onClick={() => {
                  changeBgColor("mintBg");
                }}
              ></div>
              <div
                className="yellow-bg color-option"
                onClick={() => {
                  changeBgColor("yellowBg");
                }}
              ></div>
              <div
                className="blue-bg color-option"
                onClick={() => {
                  changeBgColor("blueBg");
                }}
              ></div>
              <div
                className="white-bg color-option"
                onClick={() => {
                  changeBgColor("whiteBg");
                }}
              ></div>
            </div>
            <p className="palette-title">Text color</p>
            <div className="edit-text-color palette-section">
              <p
                className="black-text text-option"
                onClick={() => {
                  changeTextColor("blackText");
                }}
              >
                A
              </p>
              <p
                className="red-text text-option"
                onClick={() => {
                  changeTextColor("redText");
                }}
              >
                A
              </p>
              <p
                className="green-text text-option"
                onClick={() => {
                  changeTextColor("greenText");
                }}
              >
                A
              </p>
              <p
                className="yellow-text text-option"
                onClick={() => {
                  changeTextColor("yellowText");
                }}
              >
                A
              </p>
              <p
                className="blue-text text-option"
                onClick={() => {
                  changeTextColor("blueText");
                }}
              >
                A
              </p>
              <p
                className="white-text text-option"
                onClick={() => {
                  changeTextColor("whiteText");
                }}
              >
                A
              </p>
            </div>
            <p className="palette-title">Border color</p>
            <div className="edit-border-color palette-section">
              <div
                className="black-border color-option border-option"
                onClick={() => {
                  changeBorderColor("blackBorder");
                }}
              ></div>
              <div
                className="pink-border color-option border-option"
                onClick={() => {
                  changeBorderColor("pinkBorder");
                }}
              ></div>
              <div
                className="mint-border color-option border-option"
                onClick={() => {
                  changeBorderColor("mintBorder");
                }}
              ></div>
              <div
                className="yellow-border color-option border-option"
                onClick={() => {
                  changeBorderColor("yellowBorder");
                }}
              ></div>
              <div
                className="blue-border color-option border-option"
                onClick={() => {
                  changeBorderColor("blueBorder");
                }}
              ></div>
              <div
                className="white-border color-option border-option"
                onClick={() => {
                  changeBorderColor("whiteBorder");
                }}
              ></div>
            </div>
          </div>
        );
      }
    }
  }

  return <div>{renderOnSelected()}</div>;
}

export default EditBar;
