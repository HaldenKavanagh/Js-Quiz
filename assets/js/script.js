// variable declorations

var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var buttonContainer = document.getElementById("answer-buttons");
var gameWindow = document.getElementById("game-container");
var timerEl = document.getElementById("countdown");
var question1 = document.createElement("div");
var questionEl = document.getElementById("question");
var buttonsEl = document.getElementById("btn");
var startTime = 5;
var gameSeconds = 5;

var questions = [
  {
    question: "what is the correct syntax for a variable?",
    choices: ["variable() {}", "var()", "var.set()", "var = ''"],
    answer: "var = ''",
  },
  {
    question: "Wich answer is a boolian?",
    choices: ["yes", "no", "false", "22.5"],
    answer: "false",
  },
  {
    question: "what is a string?",
    choices: [
      "a piece of text wrapped in quotes",
      "any number",
      "any number with a decimal",
      "a function including if AND then statements",
    ],
    answer: "a piece of text wrapped in quotes",
  },
];

// event listeners

startButton.addEventListener("click", startGame);

// game function

function startGame() {
  startButton.classList.add("hide");
  countdown();
}
function showQuestion() {
  questionEl.innerText = questions[0].question;
  buttonsEl.textContent = questions[0].choices;
}
// countdown functions
function countdown() {
  var timeInterval = setInterval(function () {
    startTime--;
    timerEl.textContent = startTime + " seconds left...";

    if (startTime === 0) {
      timerEl.textContent = "";
      questionContainer.classList.remove("hide");
      clearInterval(timeInterval);
      gameTime();
      showQuestion();
    }
  }, 1000);
}
function gameTime() {
  var timeInterval = setInterval(function () {
    gameSeconds--;
    timerEl.textContent = gameSeconds + " seconds left...";
    if (gameSeconds > 0) {
    }

    if (gameSeconds === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      gameOver();
    }
  }, 1000);
}
// end of game screen
function gameOver() {
  timerEl.textContent = "You did it!";
  questionEl.textContent = "Enter your initials to join the leaderboard!";
  var initialsInput = document.createElement("input");
  questionContainer.appendChild(initialsInput);
  var noThanks = document.createElement("button");
  noThanks.textcontent = "No thanks";
  questionContainer.appendChild(noThanks);
  buttonContainer.classList.add("hide");
}
