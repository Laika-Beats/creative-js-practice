function otherFunct() {
  console.log("We are in another function");
  console.log("do some stuff");
}

console.log("start");

setTimeout(() => {
  console.log("We are in the timeout");
}, 2000);

otherFunct();

console.log("end");

const items = [1, 2, 3, 4, 5];

items.forEach((item) => {
  console.log("item #: " + item);
});
