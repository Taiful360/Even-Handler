// // 1. option
// <button onclick="document.body.style.backgroundColor='green'">Click Me</button>;
// // 2. option
// function makeRed() {
//   document.body.style.backgroundColor = "red";
// }
// // 3.option
// const makeBlueBtn = document.getElementById("make-blue");
// makeBlueBtn.onclick = makeBlue;

// function makeBlue() {
//   document.body.style.backgroundColor = "blue";
// }
// // 4.option
// const orangeBtn = document.getElementById("make-orange");
// orangeBtn.onclick = function makeOrange() {
//   document.body.style.backgroundColor = "orange";
// };
// // 5.option
// const pinkBtn = document.getElementById("make-pink");
// pinkBtn = addEventListener("click", makePink);

// function makePink() {
//   document.body.style.backgroundColor = "pink";
// }
// 6.option

const makeYellow = document.getElementById("make-yellow");
makeYellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "yellow";
});

// 7.option

document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
