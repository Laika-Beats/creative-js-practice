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

//Constructor function

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

// class Enemy {
//   constructor(life, name, level) {
//     this.life = life;
//     this.name = name;
//     this.level = level;
//   }
// }

// Enemy.prototype.getInfo = function () {
//   console.log(this.life, this.name, this.level);
// };

// const turtle = new Enemy(25, "Squidlebuggl", 5);
// const bug = new Enemy(25, "Buggy", 2);
// console.log(turtle);

// class Bug extends Enemy {
//   constructor(life, name, level, legs, dmg) {
//     super(life, name, level);

//     this.legs = legs;
//     this.dmg = dmg;
//   }
// }

// const john = new Bug(100, "John", 1, 6, 10);
// console.log(john);

// turtle.getInfo();
// bug.getInfo();

// class Animator {
//   constructor(selector) {
//     this.selector = document.querySelector(selector);
//   }
//   fadeOut(time, toggle = false) {
//     if (toggle && this.selector.classList.contains("fadeOut-active")) {
//       this.selector.style.opacity = 1;
//       this.selector.classList.remove("fadeOut-active");
//     } else {
//       this.selector.style.transition = `all ${time}s ease`;
//       this.selector.style.opacity = 0;
//       this.selector.classList.add("fadeOut-active");
//     }
//   }
//   move(time, toggle = false, { x = 0, y = 0 }) {
//     if (toggle && this.selector.classList.contains("move-active")) {
//       this.selector.style.transform = "translate(0px, 0px";
//       this.selector.classList.remove("move-active");
//     } else {
//       this.selector.style.transition = `all ${time}s ease`;
//       this.selector.style.transform = `translate(${x}px, ${y}px)`;
//       this.selector.classList.add("move-active");
//     }
//   }
// }

// const intro = new Animator("h1");
// const button = document.querySelector("button");

// button.addEventListener("click", () => intro.move(1, true, { x: 100, y: 200 }));

// intro.fadeOut(4);

// const user = {
//   name: "Joshua",
//   games: ["Destiny", "God of War", "Apex Legends"],
//   displayGames() {
//     let sortedGames = this.games.sort();
//     let reverseSort = sortedGames.reverse();
//     reverseSort.forEach((game) => console.log(game));
//   },
// };

// user.displayGames();

// function Todo(name, completed) {
//   this.name = name;
//   this.completed = completed;
// }

// Todo.prototype.getTodoName = function () {
//   console.log(this.name);
// };

// const todo = new Todo("YO YO YO", false);
// const todo2 = new Todo("YO YO OOOO", true);

// console.log(todo);
// console.log(todo2);

function Enemy(life, name, level) {
  this.life = life;
  this.name = name;
  this.level = level;
}

Enemy.prototype.getInfo = function () {
  console.log(this.life, this.name, this.level);
};
Enemy.prototype.attack = function () {
  console.log(`${this.name} has attacked!`);
};
Enemy.prototype.getLife = function () {
  console.log(`${this.name} has ${this.life} life left.`);
};

function Tiger(life, name, level, spell) {
  // keyword this is going to reference the Tiger object
  Enemy.call(this, life, name, level);
  this.spell = spell;
}

Tiger.prototype = Object.create(Enemy.prototype);

const newTiger = new Tiger(100, "Spike", 20, "Bite");

console.log(newTiger);

newTiger.getLife();
newTiger.getInfo();
