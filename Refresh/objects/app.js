const quote = document.querySelector("h1");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://api.adviceslip.com/advice")
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      quote.innerText = data.slip.advice;
    });
});
