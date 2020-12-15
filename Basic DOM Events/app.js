const button = document.querySelector("#submit");
const list = document.querySelector("#list");
const items = list.children;
const todoNum = document.querySelector(".todoNum b");
const mainTitle = document.querySelector(".main-title");

// button.addEventListener("click", addItem);

// function addItem() {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `Item ${items.length + 1}`;
//   list.appendChild(newItem);
//   todoNum.innerText = items.length;
// }

button.addEventListener("click", function () {
  // mainTitle.style.color = "red";
  // mainTitle.style.fontSize = "50px";
  mainTitle.classList.toggle("cool");
  mainTitle.style.visibility = "show";
});
