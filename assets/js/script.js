// variable declorations

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var buttonContainer = document.getElementById("answer-buttons");
var gameWindow = document.getElementById("game-container");
var timerEl = document.getElementById("countdown");
var question1 = document.createElement("div");
var questionEl = document.getElementById("question");
var buttonsEl = document.getElementById("btn");
var startTime = 5;
var gameSeconds = 60;

var shuffledQuestions, currentQuestionIndex;

var questions = [
  {
    question: "what is the correct syntax for a variable?",
    answers: [
      { text: "variable() {}", correct: false },
      { text: "var()", correct: false },
      { text: "var.set()", correct: false },
      { text: "var = ''", correct: true },
    ],
  },
  {
    question: "Wich answer is a boolian?",
    answers: [
      { text: "yes", correct: false },
      { text: "no", correct: false },
      { text: "22.5", correct: false },
      { text: "false", correct: true },
    ],
  },
  {
    question: "what is a string?",
    answers: [
      { text: "a piece of text wrapped in quotes", correct: true },
      { text: "any number", correct: false },
      { text: "any number with a decimal", correct: false },
      { text: "a function including if AND then statements", correct: false },
    ],
  },
];

// event listeners

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

// game function

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;

  countdown();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    buttonContainer.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (buttonContainer.firstChild) {
    buttonContainer.removeChild(buttonContainer.firstChild);
  }
}

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(buttonContainer.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  nextButton.classList.remove("hide");
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    gameOver();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
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
      setNextQuestion();
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
