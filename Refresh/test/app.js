// function greet(name, age) {
//   console.log(
//     "Welcome to our website " + name + ", you are " + age + " years old."
//   );
// }

// function signUp() {
//   let name = prompt("What is your name?");
//   let age = prompt("What is your age?");
//   greet(name, age);
// }

// signUp();

// function max(num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// }

// let inbox = max(300, 50);

// console.log(inbox);

// object
// const user = {
//   name: "Joshua",
//   age: 25,
//   married: true,
//   greet: function () {
//     console.log("Hello there!");
//   },
// };

// // methods are fucntions that are inside objects
// user.greet();

// console.log(user);

// const listUsers = ["Joshua", "Claire", "Ed", "Dude Man"];
// listUsers.push("Bob");

// console.log(listUsers.indexOf("Joshua"));

const text = "apple";

switch (text) {
  case "banana":
    console.log("I love bananas");
    break;
  case "apple":
    console.log("OH HELL NAW");
    break;
  default:
    console.log("what fruit is that?");
    break;
}
