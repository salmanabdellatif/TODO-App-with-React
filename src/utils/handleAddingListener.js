import setData from "./setData";

export default function handleAddingListener(setElementsData) {
  let inputArea = document.querySelector(".input-area");
  if (!!inputArea.value) {
    const newData = setData(inputArea.value);
    setElementsData(prevData => newData);
  }
  inputArea.value = "";
}
