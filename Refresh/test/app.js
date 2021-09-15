function greet(name, age) {
  console.log(
    "Welcome to our website " + name + ", you are " + age + " years old."
  );
}

function signUp() {
  let name = prompt("What is your name?");
  let age = prompt("What is your age?");
  greet(name, age);
}

signUp();
