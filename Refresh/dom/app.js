const collectionItems = document.getElementsByClassName("item");
const itemList = document.getElementById("items");

const newItem = document.createElement("li");
newItem.classList.add("item");
newItem.innerText = "item 4";

itemList.appendChild(newItem);
