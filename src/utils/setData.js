export default function setData(data) {
  let tasksArray = JSON.parse(localStorage.getItem("dataObj") || "[]");
  tasksArray.push({ id: tasksArray.length + 1, text: data, completed: false });
  localStorage.setItem("dataObj", JSON.stringify(tasksArray));
  return tasksArray;
}
