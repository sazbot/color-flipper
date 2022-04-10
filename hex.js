const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  hexValue = getHexValue();
  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

function getHexValue() {
  let hexOutput = ["#"];
  for (i = 1; i <= 6; i++) {
    let randomNumber = getRandomNumber();
    hexOutput.push(hex[randomNumber]);
  }
  return hexOutput.join("");
}
