import React from "react";

import donePic from "../images/done.png";
import deletePic from "../images/delete.png";

import handleDeleteListener from "../utils/handleDeleteListener";
import handleDoneListener from "../utils/handleDoneListener";

export default function Task(props) {
  return (
    <div className="new-task" id={"task" + props.id}>
      <span className="text">{props.text}</span>
      <div className="Imgs">
        <img
          style={{
            backgroundColor: props.elementsData[props.id - 1].completed
              ? "#32cd32"
              : "",
          }}
          src={donePic}
          alt="doneImg"
          onClick={() => handleDoneListener(props)}
        />
        <img
          src={deletePic}
          alt="deleteImg"
          onClick={() => {
            handleDeleteListener(props);
          }}
        />
      </div>
    </div>
  );
}
