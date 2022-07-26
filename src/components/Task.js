import React from "react";
import deletePic from "../images/delete.png";

export default function Task(props) {
  function handleDoneListener(event) {
    props.setElementsData(prevData =>
      prevData.map(element => {
        return element.id === props.id
          ? { ...element, completed: !element.completed }
          : element;
      })
    );
  }

  function handleDeleteListener() {
    const newData = props.elementsData.filter(
      element => element.id !== props.id
    );
    props.setElementsData(prevData => newData);
  }

  return (
    <div
      className="new-task"
      id={"task" + props.id}
      style={props.completed ? { backgroundColor: "#51bd51" } : {}}>
      <input
        className="checkbox"
        type="checkbox"
        checked={props.completed ? "checked" : ""}
        onChange={handleDoneListener}></input>
      <span
        className="text"
        style={
          props.completed
            ? {
                textDecoration: "line-through",
                color: "#201b1b",
                fontWeight: "900",
              }
            : {}
        }>
        {props.text}
      </span>
      <img src={deletePic} alt="deleteImg" onClick={handleDeleteListener} />
    </div>
  );
}
