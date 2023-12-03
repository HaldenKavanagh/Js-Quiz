// variable declorations
var rules = document.getElementById("rules");
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
  {
    question: "What is the fastest aquatic animal",
    options: ["sealfish", "dolphin", "reef shark", "harbor seal"],
    correctAnswer: "sealfish",
  },
  {
    question: "how many noses does a slug have?",
    options: ["none", "200", "9", "4"],
    correctAnswer: "4",
  },
  {
    question: "What is musical artist Aphex Twin's real name",
    options: [
      "Johnny Maloney",
      "Shaun Krishnew",
      "Frances Billard",
      "Richard D James",
    ],
    correctAnswer: "Richard D James",
  },
  {
    question:
      "What is the name of the former Buffalo based rap gruip wich included Westside Gunn, Conway the Machine, and Benny the Butcher",
    options: ["Grisielda", "$uicideBoy$", "ShittyBoyz", "Fire-toolz"],
    correctAnswer: "Grisielda",
  },
  {
    question: "Who is not an original member of the three six mafia",
    options: ["DJ Paul", "Gangsta Boo", "Project Pat", "Lord Infamous"],
    correctAnswer: "Project Pat",
  },
  {
    question: "Where was the formerr musical gruip Drain-gang formed?",
    options: [
      "Stockholm, Sweden",
      "Memphis Tennasee",
      "Miami Florida",
      "Frankfurt, Germany",
    ],
    correctAnswer: "Stockholm, Sweden",
  },
];

let currentQuestionIndex = 0;

function startGame() {
  rules.classList.add("hide");
  startButton.classList.add("hide");
  countdown();
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.classList.add("option");
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
    gameSeconds -= 10;
    updateTimer();
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
    timerEl.textContent = "get ready,   " + startTime + "  seconds left...";

    if (startTime === 0) {
      timerEl.textContent = "";
      quizContainer.classList.remove("hide");
      clearInterval(timeInterval);
      gameTime();
      displayQuestion();
    }
  }, 1000);
}
function gameTime() {
  var timeInterval = setInterval(function () {
    if (gameSeconds > 0) {
      gameSeconds--;
      updateTimer();
    }

    if (gameSeconds === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}
function updateTimer() {
  timerEl.textContent = `Time remaining: ${gameSeconds} seconds`;
  if (gameSeconds <= 0) {
    timerEl.textContent = "";
    endGame();
  }
}

function endGame() {
  quizContainer.classList.add("hide");
  const 
}
