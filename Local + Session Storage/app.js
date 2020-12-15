// //local sotrage

// localStorage.setItem("item", "feed the cat");
// localStorage.setItem("user", "Joshua");

// //getting stuff back
// const user = localStorage.getItem("user");

// console.log("user");

const list = ["feed the cat", "pet the cat", "sing to the cat"];

// JSON.stringify prints the list as an array instead of a continuous string
localStorage.setItem("list", JSON.stringify(list));

getList = JSON.parse(localStorage.getItem("list"));
console.log(getList);
