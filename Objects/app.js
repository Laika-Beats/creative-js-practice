// keyword "this" is a pointer -> it refers to an object

// const user = {
//   name: "Joshua",
//   videos: ["html", "css", "js", "react"],
//   greet() {
//     console.log(`Hello there ${this.name}`);

//     const getVideos = () => {
//       console.log(`You currently have ${this.videos.length} videos`);
//     };
//     getVideos();
//   },
// };

// user.greet();

// const person = {
//   firstName: "Joshua",
//   lastName: "Thompson",
//   getName() {
//     console.log(this.firstName + " " + this.lastName);
//   },
// };

// function registerUser() {
//   this.getName();
// }

// const register = registerUser.bind(person);
// register();

// Constructor function

function Todo(name, completed) {
  this.name = name;
  this.completed = completed;
}

Todo.prototype.getTodoName = function () {
  console.log(this.name);
};

const todo = new Todo("Buy Eggs", false);

todo.getTodoName();

// console.log(todo);
