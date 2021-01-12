// function otherFunct() {
//   console.log("We are in another function");
//   console.log("do some stuff");
// }

// console.log("start");

// setTimeout(() => {
//   console.log("We are in the timeout");
// }, 2000);

// otherFunct();

// console.log("end");

// const items = [1, 2, 3, 4, 5];

// items.forEach((item) => {
//   console.log("item #: " + item);
// });

// console.log("start");

// function loginUser(email, password) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ userEmail: email });
//       console.log("Resolved the data");
//     }, 1500);
//   });
// }

// const user = loginUser("josh@gmail.com", "123456", (user) => {
//   console.log(user);
// });

// console.log("finish");

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("got the data");
//     reject(new Error("User not logged in"));
//   }, 2000);
// });

// promise
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((error) => console.log(error));

const yt = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting data from YouTube");
    resolve({ videos: [1, 2, 3, 4, 5] });
  }, 3000);
});

const fb = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Getting data from FaceBook");
    resolve({ user: "Name" });
  }, 3000);
});

Promise.all([yt, fb]).then((result) => console.log(result));
