//return an array of objects (data)
export default function getData() {
  return JSON.parse(localStorage.getItem("dataObj") || "[]");
}
