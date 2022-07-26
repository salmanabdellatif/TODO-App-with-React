import React from "react";
import InputForm from "./InputForm";
import CreateTasks from "./CreateTasks";

export default function App() {
  const [elementsData, setElementsData] = React.useState(
    () => JSON.parse(localStorage.getItem("dataObj")) || []
  );

  React.useEffect(() => {
    localStorage.setItem("dataObj", JSON.stringify(elementsData));
  }, [elementsData]);

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
