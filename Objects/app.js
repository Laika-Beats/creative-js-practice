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

const person = {
  firstName: "Joshua",
  lastName: "Thompson",
  getName() {
    console.log(this.firstName + " " + this.lastName);
  },
};

function registerUser() {
  this.getName();
}

const register = registerUser.bind(person);
register();
