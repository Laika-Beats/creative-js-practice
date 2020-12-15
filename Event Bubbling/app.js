const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const items = list.children;
const todoNum = document.querySelector(".todoNum b");
const mainTitle = document.querySelector(".main-title");
const nameInput = document.querySelector(".name-input");

button.addEventListener("click", addItem);

function addItem(event) {
  event.preventDefault();
  //creating element
  const newItem = document.createElement("li");
  //adding a class to new item
  newItem.classList.add("item");
  //adding the text and counter to item list using the text submitted in the input
  newItem.innerText = nameInput.value;
  //appending the new item to the DOM
  list.appendChild(newItem);
  todoNum.innerText = items.length;

  newItem.addEventListener("click", deleteItem);
}

function deleteItem(event) {
  event.stopPropagation();
  event.target.remove();
  todoNum.innerText = items.length - 1;
}

list.addEventListener("click", function () {
  list.classList.toggle("fade");
});
