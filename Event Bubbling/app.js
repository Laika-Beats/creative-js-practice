const list = document.querySelector("#list");
const button = document.querySelector("#submit");
const itemsCount = list.children;

button.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();
  const item = document.createElement("li");
  item.classList.add("item");
  item.innerText = "new Item " + `${itemsCount.length + 1}`;
  list.appendChild(item);
}
