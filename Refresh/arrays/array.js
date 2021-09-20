const videos = ["Music", "Comedy", "Fitness", "Pets"];

videos.push("Clouds");

// videos.forEach((video) => {
//   console.log(video);
// });

// const newVideos = videos.map((video) => {
//   console.log(video.toUpperCase());
// });

// FIND

const searchTutorial = videos.find((video) => {
  return video.includes("Comedy");
});

console.log(searchTutorial);
