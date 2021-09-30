console.log("start");

function loginUser(email, password, callback) {
  setTimeout(() => {
    console.log("Now we have the data");
    callback({ userEmail: email });
  }, 1500);
}

const user = loginUser("devedf@gmail.com", 123456, (user) => {
  console.log(user);
});

console.log("stop");
