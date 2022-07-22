import React from "react";
import add from "../images/add.png";
import handleAddingListener from "../utils/handleAddingListener";

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
