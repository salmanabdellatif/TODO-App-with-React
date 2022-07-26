import React from "react";
import add from "../images/add.png";
import { nanoid } from "nanoid";

function handleAddingListener(setElementsData) {
  let inputArea = document.querySelector(".input-area");
  if (inputArea.value) {
    const newTask = {
      id: nanoid(),
      text: inputArea.value,
      completed: false,
    };
    setElementsData(prevData => [newTask, ...prevData]);
  }
  inputArea.value = "";
}

export default function InputForm(props) {
  return (
    <div className="mainForm">
      <h1>TODO</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Create a new todo..."
          className="input-area"></input>
        <img
          src={add}
          className="add-btn"
          alt="add"
          onClick={() => handleAddingListener(props.setElementsData)}
        />
      </div>
    </div>
  );
}
