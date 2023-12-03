// variable declorations

var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("options");
var timerEl = document.getElementById("countdown");
var startTime = 5;
var gameSeconds = 60;
startButton.addEventListener("click", startGame);

const questions = [
  {
    question: "What is the world's largest rodent?",
    options: [
      "Giant Anteater",
      "Capybara",
      "African muskrat",
      "New York City subway rats",
    ],
    correctAnswer: "Capybara",
  },
  {
    question: "What is the imulsifier used to make a demi glaze?",
    options: ["roux", "lecithin", "corn startch", "gelatin"],
    correctAnswer: "gelatin",
  },
  {
    question: "Who are the members of a tribe called quest?",
    options: [
      "Biggie and tupac",
      "Lauren hill, pras, and Wyclef Jean",
      "Q-tip and Phife Dawg",
      "Nas and MF DOOM",
    ],
    correctAnswer: "Q-tip and Phife Dawg",
  },
  {
    question: "What is the most shallow ocean in the world?",
    options: ["Pacific", "Antarctic", "Indian", "Atlantic"],
    correctAnswer: "Antarctic",
  },
];

let currentQuestionIndex = 0;

function startGame() {
  startButton.classList.add("hide");
  countdown();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.addEventListener("click", () => checkAnswer(index));
    optionsContainer.appendChild(li);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedOption = currentQuestion.options[selectedIndex];

  if (selectedOption === currentQuestion.correctAnswer) {
    console.log("Correct!");
  } else {
    console.log("Incorrect!");
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    console.log("Quiz finished!");
  }
}
function countdown() {
  var timeInterval = setInterval(function () {
    startTime--;
    timerEl.textContent = startTime + " seconds left...";

    if (startTime === 0) {
      timerEl.textContent = "";
      questionContainer.classList.remove("hide");
      clearInterval(timeInterval);
      gameTime();
      displayQuestion();
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
    }
  }, 1000);
}
