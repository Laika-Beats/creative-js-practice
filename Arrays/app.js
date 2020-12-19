//a higher order function is a function that takes in another function
// videos.forEach(function (video) {
//   console.log(video);
// });

const videos = ["shredding the gnar", "coding some dope biz", "boolin"];

const games = [
  { Game: "Destiny", Rating: 9 },
  { Game: "FFVII", Rating: 8 },
  { Game: "God of War", Rating: 10 },
  { Game: "Apex Legends", Rating: 8 },
  { Game: "Monster Hunter", Rating: 7 },
];

//MAP
const newVideos = videos.map(function (video) {
  return video.length < 10 ? video : "NO";
});

console.log(newVideos);

//FIND
// const searchGnar = videos.find(function (video) {
//   return video.includes("gnar");
// });
// console.log(searchGnar);

//FILTER
// const shortSearch = videos.filter(function (video) {
//   return video.length < 20;
// });

// const lowRating = games.filter(function (game) {
//   return game.Rating < 9;
// });

// console.log(lowRating);

//SOME AND EVERY
//check to see if every game has a rating greater than 8 and returns as boolean
// const checkRating = games.every(function (game) {
//   return game.Rating > 8;
// });

// console.log(checkRating);

// const someRating = games.some(function (game) {
//   return game.Rating > 8;
// });

// console.log(someRating);
