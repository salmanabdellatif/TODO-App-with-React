import React from "react";

import InputForm from "./InputForm";
import CreateTasks from "./CreateTasks";

import getData from "../utils/getData";

export default function App() {
  const [elementsData, setElementsData] = React.useState(getData());

  return (
    <div className="todo-app">
      <InputForm
        elementsData={elementsData}
        setElementsData={setElementsData}
      />
      <CreateTasks
        elementsData={elementsData}
        setElementsData={setElementsData}
      />
    </div>
  );
}
