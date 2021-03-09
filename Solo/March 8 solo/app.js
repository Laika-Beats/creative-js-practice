const input = document.querySelector(".input-value");
const submit = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", displayStorage);

submit.addEventListener("click", submitTodo);

function submitTodo(e) {
  e.preventDefault();
  let newTodo = document.createElement("ul");
  newTodo.classList.add("todo");
  todoStorage(input.value);
  newTodo.innerText = input.value;
  todoList.appendChild(newTodo);
  input.value = " ";
}

function todoStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.push({ todo: todo, completed: false });
  localStorage.setItem("todos", JSON.stringify(todos));
}

function displayStorage() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    let newTodo = document.createElement("ul");
    newTodo.classList.add("todo");
    newTodo.innerText = todo;
    todoList.appendChild(newTodo);
  });
}
