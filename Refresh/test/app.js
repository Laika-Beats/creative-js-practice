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

function max(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

let inbox = max(300, 50);

console.log(inbox);
