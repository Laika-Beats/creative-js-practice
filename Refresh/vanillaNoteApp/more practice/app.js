const noteInput = document.querySelector("#noteInput");
const inputButton = document.querySelector("#inputButton");
const deleteButton = document.querySelector(".deleteButton");
const noteList = document.querySelector("#noteList");

inputButton.addEventListener("click", submitNote);

function getNotes() {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
    console.log(notes);
  }
  notes.forEach((note) => {
    let newNote = document.createElement("li");
    let newButton = document.createElement("button");

    newNote.classList.add("note");
    newButton.classList.add("deleteButton");
    newNote.innerText = note;
    newButton.innerText = "Delete";
    newNote.appendChild(newButton);
    noteList.appendChild(newNote);
  });
}

function submitNote(e) {
  e.preventDefault();

  let newNote = document.createElement("li");
  let newInput = noteInput.value;

  newNote.classList.add("note");
  newNote.innerText = newInput;
  noteList.appendChild(newNote);
  saveNote(newInput);
}

function saveNote(i) {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(i);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

getNotes();
