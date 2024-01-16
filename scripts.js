const Input = document.getElementById("todoInput");
const List = document.getElementById("todos");

function addItem(task) {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `${task}`;
  List.appendChild(todoItem);
}

Input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && Input.value.trim() !== "") {
    e.preventDefault();
    addItem(Input.value.trim());
    Input.value = "";
  }
});
