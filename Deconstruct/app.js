// const items = ["banana", "chocolate noodle", "apple", "cheese"];

// const [banana, choco, ...rest] = items;

// console.log(choco);

// const newItems = [...items, "more stuff", "whatup"];

// console.log(newItemsd);

// const user = {
//   name: "Joshua",
//   photos: [1, 2, 3, 4],
//   age: 25,
//   analytics: {
//     subscribers: 25000,
//     videos: 150,
//   },
// };

// console.log(user);

// // const photos = user.photos;

// const { photos } = user;
// const { age } = user;
// const { analytics } = user;

// console.log(photos);
// console.log(age);
// console.log(analytics);

// IFFE

// (function hello() {
//   console.log("How are you?");
// })();

// CLOSURES

// function user() {
//   const name = "Joshua";
//   const displayName = function (greeting) {
//     console.log(greeting + name);
//   };
//   return displayName;
// }

// const say = user();

// say("How are you ");

let userWord = "poop";
let splitWord = userWord.split("");
let reverse = splitWord.reverse();
let joinWord = reverse.join("");

console.log(joinWord);

(function isPalidrome() {
  if (joinWord === userWord) {
    console.log("true");
  } else {
    console.log("false");
  }
})();
