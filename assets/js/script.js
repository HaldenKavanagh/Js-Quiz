// const

const startButton = document.getElementById("start-btn");

// variable declorations
var timerEl = document.getElementById("countdown");
var question1 = document.createElement("div");
// timer value(seconds)
var startTime = 5;
var gameSeconds = 60;

// event listeners

startButton.addEventListener("click", startGame);

// game function

function startGame() {
  countdown();
  function countdown() {
    var timeInterval = setInterval(function () {
      startTime--;
      timerEl.textContent = startTime + " seconds left...";

      if (startTime === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
        gameTime();
      }
    }, 1000);
  }
  function gameTime() {
    var timeInterval = setInterval(function () {
      gameSeconds--;
      timerEl.textContent = gameSeconds + " seconds left...";
      if (gameSeconds > 0) {
        console.log("yaaay");
      }

      if (gameSeconds === 0) {
        timerEl.textContent = "";
        clearInterval(timeInterval);
      }
    }, 1000);
  }
}
