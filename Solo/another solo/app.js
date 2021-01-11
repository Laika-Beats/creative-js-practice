const todoList = document.querySelector(".todo-list");
const input = document.querySelector(".user-input");
const submitBtn = document.querySelector(".submit");
const date = document.querySelector(".time");
const today = new Date();

date.innerText = today;

submitBtn.addEventListener("click", newTodo);
document.addEventListener("DOMContentLoaded", displayStorage);

function newTodo() {
  const userInput = input.value;
  newTodoItem = document.createElement("li");
  newTodoItem.classList.add("todo-item");
  newTodoItem.innerText = userInput;
  saveTodo(userInput);
  todoList.appendChild(newTodoItem);
  input.value = " ";
}

function saveTodo(userInput) {
  let storageTodos;
  if (localStorage.getItem("todos") === null) {
    storageTodos = [];
  } else {
    storageTodos = JSON.parse(localStorage.getItem("todos"));
  }
  storageTodos.push(userInput);
  localStorage.setItem("todos", JSON.stringify(storageTodos));
}

function displayStorage() {
  let storageTodos;
  if (localStorage.getItem("todos") === null) {
    storageTodos = [];
  } else {
    storageTodos = JSON.parse(localStorage.getItem("todos"));
  }
  storageTodos.forEach(function (todo) {
    newTodoItem = document.createElement("li");
    newTodoItem.classList.add("todo-item");
    newTodoItem.innerText = todo;
    todoList.appendChild(newTodoItem);
  });
}
