//DOM variables
const list = document.querySelector(".todo-list");
const submit = document.querySelector(".submit-button");
const input = document.querySelector(".todo-input");

//runs the displayStorage function when the page is loaded
document.addEventListener("DOMContentLoaded", displayStorage);

//runs the todoInput fucntion when the submit button is clicked
submit.addEventListener("click", todoInput);

//Add a new todo item to the DOM todo-list
function todoInput(event) {
  event.preventDefault();

  //creates a new item for the todo-list
  let newTodo = document.createElement("ul");

  //adds a class to the new new ul item
  newTodo.classList.add("todo");

  //saves the input value of the new todo in localStorage
  todoStorage(input.value);

  //adds the text submitted in the input field
  newTodo.innerText = input.value;

  //appends the todo to the todo-list
  list.appendChild(newTodo);

  //clears text from input after new todo-list item is created
  input.value = "";
}

function todoStorage(todo) {
  let todos;

  //if there is nothing in localStorage display an empty array
  if (localStorage.getItem("todos") === null) {
    todos = [];

    //if there are items in localStorage grab them and parse them in to an array
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  //adds new todos created with the todoInput function to the localStorage array
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

  //grabs 'each' todo in the localStorage array and appends them to the todo-list
  todos.forEach(function (todo) {
    let newTodo = document.createElement("ul");
    newTodo.classList.add("todo");
    newTodo.innerText = todo;
    list.appendChild(newTodo);
  });
}
