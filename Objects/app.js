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

// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// Todo.prototype.getTodoName = function () {
//   console.log(this.name);
// };

// const todo = new Todo("Buy Eggs", false);

// todo.getTodoName();

// console.log(todo);

// function Enemy(life, name, level) {
//   this.life = life;
//   this.name = name;
//   this.level = level;
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// Enemy.prototype.attack = function () {
//   console.log(`${this.name} has attacked!`);
// };

// function Dragon(life, name, level, color, spell) {
//   Enemy.call(this, life, name, level);
//   this.color = color;
//   this.spell = spell;
// }

// Inherit Prototype
// Dragon.prototype = Object.create(Enemy.prototype);

// const newDragon = new Dragon(100, "dragon", 60, "red", "fire");

// newDragon.attack();

class Enemy {
  constructor(life, name, level) {
    this.life = life;
    this.name = name;
    this.level = level;
  }
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};

const turtle = new Enemy(25, "Squidlebuggl", 5);
const bug = new Enemy(25, "Buggy", 2);
console.log(turtle);

class Bug extends Enemy {
  constructor(life, name, level, legs, dmg) {
    super(life, name, level);

    this.legs = legs;
    this.dmg = dmg;
  }
}

const john = new Bug(100, "John", 1, 6, 10);
console.log(john);

turtle.getInfo();
bug.getInfo();
