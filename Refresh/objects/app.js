const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("got the user");
    resolve({ user: "Joshua" });
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((error) => console.log(error));
