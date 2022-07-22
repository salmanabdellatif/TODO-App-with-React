import React from "react";
import Task from "./Task";

export default function CreateTasks(props) {
  const tasks = props.elementsData.map(element => (
    <Task
      {...element}
      setElementsData={props.setElementsData}
      elementsData={props.elementsData}
    />
  ));

  function handleDeleteAll() {
    props.setElementsData(prevData => []);
    localStorage.setItem("dataObj", JSON.stringify([]));
  }
  return (
    <>
      <div className="tasks-container">{tasks}</div>
      <div className="delete-all" onClick={handleDeleteAll}>
        Delete All
      </div>
    </>
  );
}
