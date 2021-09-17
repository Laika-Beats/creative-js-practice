const noteInput = document.querySelector("#noteInput");
const inputButton = document.querySelector("#inputButton");
const deleteButton = document.querySelectorAll(".deleteButton");
const noteList = document.querySelector("#noteList");

inputButton.addEventListener("click", submitNote);
noteList.addEventListener("click", deleteNote);

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
  let newButton = document.createElement("button");
  let newInput = noteInput.value;

  newNote.classList.add("note");
  newButton.classList.add("deleteButton");
  newNote.innerText = newInput;
  newButton.innerText = "Delete";
  newNote.appendChild(newButton);
  noteList.appendChild(newNote);

  saveNote(newInput);
}

function saveNote(e) {
  let notes;
  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
    notes.push(e);
  }
  localStorage.setItem("notes", JSON.stringify(notes));
}

function deleteNote(e) {
  e.stopPropagation();

  let notes;
  let target = e.target;
  let parent = target.parentElement;
  let parentNote = parent.innerText.replace("Delete", " ");

  if (localStorage.getItem("notes") === null) {
    notes = [];
  } else {
    notes = JSON.parse(localStorage.getItem("notes"));
  }
  console.log(parentNote);

  notes.splice(notes.indexOf(parentNote));
  localStorage.setItem("notes", JSON.stringify(notes));

  target.parentElement.remove();
}

getNotes();
