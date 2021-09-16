const submitButton = document.getElementById("submit");
const list = document.getElementById("items");
const listItems = document.getElementsByClassName("item");
const nameInput = document.querySelector(".name-input");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = nameInput.value;
  list.appendChild(newItem);
  nameInput.value = " ";
});

const noteList = [
  "feed the frog",
  "do the soap dance",
  "watch the monster bash",
];

// localStorage.setItem("notes", JSON.stringify(noteList));

// const retrieved = JSON.parse(localStorage.getItem("notes"));
// for (let note of noteList) {
//   console.log(note);
// }

noteList.forEach(function (note, index) {
  console.log(note, index + 1);
});

for (let note of noteList) {
  if (note === noteList[0]) {
    console.log("Yes");
  }
}
