const noteInput = document.querySelector("#noteInput");
const inputButton = document.querySelector("#inputButton");
const noteList = document.querySelector("#noteList");

inputButton.addEventListener("click", submitNote);

function submitNote(e) {
  e.preventDefault();
  console.log(noteInput.value);

  let newNote = document.createElement("li");
  newNote.classList.add("note");
  newNote.innerText = noteInput.value;
  noteList.appendChild(newNote);
}
