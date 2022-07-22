export default function updateLocalStorageData(newData) {
  localStorage.setItem("dataObj", JSON.stringify(newData));
}
