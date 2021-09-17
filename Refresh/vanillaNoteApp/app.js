const noteInput = document.querySelector("#noteInput");
const submitButton = document.querySelector("#submitButton");
const deleteB = document.querySelector(".delete");

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
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "delete";
    deleteButton.classList.add("delete");
    newItem.append(deleteButton);
  });
}

noteList.addEventListener("click", deleteNote);

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
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.classList.add("delete");
  newItem.append(deleteButton);

  noteInput.value = " "; // clears input field after submit.
});

function deleteNote(e) {
  e.stopPropagation();
  const currentDelete = e.target;
  if (currentDelete.classList[0] === "delete") {
    const note = currentDelete.parentElement;
    let todos = [];

    if (localStorage.getItem("notes") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("notes"));
    }
    const deleteIndex = note.children[0].innerText;
    todos.splice(todos.indexOf(deleteIndex), 1);
    localStorage.setItem("notes", JSON.stringify(todos));
  }
  window.location.reload();
}
