const noteInput = document.querySelector("#noteInput");
const submitButton = document.querySelector("#submitButton");

const noteList = document.querySelector("#noteList");

const noteStorage = localStorage.getItem("notes");
document.addEventListener("DOMContentLoaded", getNotes);

function getNotes() {
  let todos = [];

  if (localStorage.getItem("notes") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("notes"));
  }

  todos.forEach(function (note) {
    let newItem = document.createElement("li");
    newItem.classList.add("note");
    newItem.innerText = note;
    noteList.appendChild(newItem);
  });
}

submitButton.addEventListener("click", function (e) {
  e.preventDefault(); //prevents page refresh when button clicked.
  let todos = [];

  if (localStorage.getItem("notes") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("notes"));
  }
  todos.push(noteInput.value);
  localStorage.setItem("notes", JSON.stringify(todos));
  let newItem = document.createElement("li");
  newItem.classList.add("note");
  newItem.innerText = noteInput.value;
  noteList.appendChild(newItem);
  noteInput.value = " "; // clears input field after submit.
});
