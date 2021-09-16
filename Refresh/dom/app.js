const submitButton = document.getElementById("submit");
const list = document.getElementById("items");
const listItems = document.getElementsByClassName("item");
console.log(listItems);

submitButton.addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.classList.add("item");
  newItem.innerText = `item ${listItems.length + 1}`;
  list.appendChild(newItem);
});
