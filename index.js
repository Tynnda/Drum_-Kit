let play1 = function () {
  document.getElementById("audio1").play();
};
let play2 = function () {
  document.getElementById("audio2").play();
};
let play3 = function () {
  document.getElementById("audio3").play();
};
let play4 = function () {
  document.getElementById("audio4").play();
};
let play5 = function () {
  document.getElementById("audio5").play();
};
let play6 = function () {
  document.getElementById("audio6").play();
};
let play7 = function () {
  document.getElementById("audio7").play();
};

document.addEventListener("keypress", function onEvent(event) {
  if (event.key === "w") {
    play1();
  } else if (event.key === "a") {
    play2();
  } else if (event.key === "s") {
    play3();
  } else if (event.key === "d") {
    play4();
  } else if (event.key === "j") {
    play5();
  } else if (event.key === "k") {
    play6();
  } else if (event.key === "l") {
    play7();
  }
});
