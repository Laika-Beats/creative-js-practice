const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const todoList = document.querySelector(".todo-list");

// displays storage when page is loaded
document.addEventListener("DOMContentLoaded", displayStorage);

// adds clickable function to the submit button
submit.addEventListener("click", addTodo);

function addTodo() {
  const newDiv = document.createElement("div");
  todoList.appendChild(newDiv);
  const newTodo = document.createElement("ul");
  newTodo.classList.add("todo-item");
  newTodo.innerText = input.value;
  saveStorage(input.value);
  newDiv.appendChild(newTodo);
}

function saveStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const newDiv = document.createElement("div");
    todoList.appendChild(newDiv);
    const newTodo = document.createElement("ul");
    newTodo.classList.add("todo-item");
    newTodo.innerText = todo;
    newDiv.appendChild(newTodo);
  });
}
