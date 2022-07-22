import updateLocalStorageData from "./updateLocalStorage";

export default function handleDeleteListener(props) {
  let newData = props.elementsData.filter(element => element.id !== props.id);
  props.setElementsData(prevData => newData);
  updateLocalStorageData(newData);
}
