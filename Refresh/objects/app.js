const user = {
  name: "developedbyed",
  videos: ["react", "java", "c++", "butts"],
  greet() {
    console.log(`Hello there ${this.name}`);
    const getVideos = () => {
      console.log(`You currently have ${this.videos.length} videos`);
    };
    getVideos();
  },
};

user.greet();
