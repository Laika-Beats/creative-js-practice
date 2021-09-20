// const videos = ["Music", "Comedy", "Fitness", "Pets"];

// videos.push("Clouds");

// videos.forEach((video) => {
//   console.log(video);
// });

// const newVideos = videos.map((video) => {
//   console.log(video.toUpperCase());
// });

// FIND

// const searchTutorial = videos.find((video) => {
//   return video.includes("Comedy");
// });

// console.log(searchTutorial);

// videos.splice(0, "Fitness");

// console.log(videos);

const items = ["banana", "orange", "apple", "mango"];
const ratings = [5, 44, 67, 56, 88, 13, 1, 4];

ratings.sort((a, b) => a - b);

console.log(ratings);

items.sort((item1, item2) => {
  return item1 > item2 ? 1 : -1;
});
console.log(items);
console.log([...ratings, 5, 55, 88]);
