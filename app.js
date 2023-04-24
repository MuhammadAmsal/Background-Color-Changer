let changeBtn = document.querySelector("#changeBtn");
let hexColor = document.querySelector(".hexColor");

let hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "L", "E", "F"];

changeBtn.addEventListener("click", () => {
  let hexSymbol = "#";

  for (let i = 0; i < 6; i++) hexSymbol += hexValues[randomNumber()];

  hexColor.textContent = hexSymbol;
  document.body.style.background = hexSymbol;
});

let randomNumber = () => {
  return Math.floor(Math.random() * hexValues.length);
};