console.log(document);

const container = document.createElement("container");
container.classList.add("main-container");
document.body.appendChild(container);
const listContainer = document.querySelector(".main-container");

const input = document.createElement("input");
input.classList.add("input");
input.setAttribute("type", "text");
listContainer.appendChild(input);

const button = document.createElement("button");
button.classList.add("submit");
button.innerText = "Submit";
listContainer.appendChild(button);

const list = document.createElement("ul");
list.classList.add("todo-list");
listContainer.appendChild(list);

const inputTodo = document.querySelector(".input");

const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click", addTodo);

function addTodo() {
  const todoList = document.querySelector(".todo-list");
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = inputTodo.value;
  todoList.appendChild(newTodo);

  const todoItem = document.querySelector(".todo-list");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete");
  deleteButton.innerText = "delete";
  todoList.appendChild(deleteButton);
  inputTodo.value = "";
}
