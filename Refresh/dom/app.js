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

localStorage.setItem("notes", JSON.stringify(noteList));

const retrieved = JSON.parse(localStorage.getItem("notes"));

console.log(retrieved);
