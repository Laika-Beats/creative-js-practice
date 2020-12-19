//DOM variables
const list = document.querySelector(".todo-list");
const submit = document.querySelector(".submit-button");
const input = document.querySelector(".todo-input");

//Run the todoInput fucntion when the submit button is clicked
submit.addEventListener("click", todoInput);

//Add a new todo item to the DOM todo-list
function todoInput(event) {
  event.preventDefault();

  //Grabs the text typed in to the input field
  const inputValue = input.value;

  //creates a new item for the todo-list
  let newTodo = document.createElement("ul");

  //adds a class to the new new ul item
  newTodo.classList.add("todo");

  //adds the text submitted in the input field
  newTodo.innerText = inputValue;

  //appends the todo to the todo-list
  list.appendChild(newTodo);

  //clears text from input after new todo-list item is created
  input.value = "";
}
