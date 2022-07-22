import updateLocalStorage from "./updateLocalStorage";

export default function handleDoneListener(props) {
  props.setElementsData(prevData => {
    const newData = prevData.map(element => {
      return element.id === props.id
        ? { ...element, completed: !element.completed }
        : element;
    });
    updateLocalStorage(newData);
    return newData;
  });
}
