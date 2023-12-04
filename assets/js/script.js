// variable declorations
var rules = document.getElementById("rules");
var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question");
var optionsContainer = document.getElementById("options");
var timerEl = document.getElementById("countdown");
var initialsContainer = document.getElementById("initials");
var playAgain = document.getElementById("play-again");
var leaderboardContainer = document.getElementById("leaderboard");
var leaderboardButton = document.getElementById("next-btn");
var initialsInput = document.getElementById("initials-input");
var learderboardUl = document.getElementById("leaderbard-container");
var startTime = 5;
var gameSeconds = 60;
var leaderboards = JSON.parse(localStorage.getItem("leaderboards")) || [];

// event listeners

startButton.addEventListener("click", startGame);

// question array

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
    question: "Who are the members of a Tribe Called Quest?",
    options: [
      "Biggie and Tupac",
      "Lauren hill, Pras, and Wyclef Jean",
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
    question: "How many noses does a slug have?",
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
    question: "Who is not an original member of the three six mafia",
    options: ["DJ Paul", "Gangsta Boo", "Project Pat", "Lord Infamous"],
    correctAnswer: "Project Pat",
  },
];

let currentQuestionIndex = 0;

// start game function, triggers when the start button is clicked
// calls the countdown function

function startGame() {
  rules.classList.add("hide");
  startButton.classList.add("hide");
  countdown();
}

// displays current question to the user from the array

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

// checks the answer, and subtracts 10 seconds from the time if answered incorrectly. Increases the question index, and calls for the new question to be displayed

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
    endGame();
    console.log("Quiz finished!");
  }
}

// 5 sec countdown for the game, when finished calls the display question and the actual game timer

function countdown() {
  var timeInterval = setInterval(function () {
    startTime--;
    timerEl.textContent = "Get ready,   " + startTime + "  seconds left...";

    if (startTime === 0) {
      timerEl.textContent = "";
      quizContainer.classList.remove("hide");
      clearInterval(timeInterval);
      gameTime();
      displayQuestion();
    }
  }, 1000);
}

// 60 sec countdown for the game. when the time hits zero, or when the question array is depleted, calls the endgame function

function gameTime() {
  var timeInterval = setInterval(function () {
    if (gameSeconds === 0 || currentQuestionIndex >= questions.length) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }

    if (gameSeconds > 0) {
      gameSeconds--;
      updateTimer();
    }
  }, 1000);
}

// updates the timer when you get a question wrong, calls the endgame function when time hits zero

function updateTimer() {
  timerEl.textContent = `Time remaining: ${gameSeconds} seconds`;
  if (gameSeconds <= 0) {
    timerEl.textContent = "";
    endGame();
  }
}

// endgame screen, asks for user their initials to see the leaderboard, or calls the reetgame function

function endGame() {
  quizContainer.classList.add("hide");
  initialsContainer.classList.remove("hide");
  playAgain.addEventListener("click", resetGame);
  leaderboardButton.addEventListener("click", addToLeaderboard);
}

// refreshes the game window to reset the game

function resetGame() {
  window.location.reload();
}

// adds stored score to the leaderboard

function addToLeaderboard() {
  const name = initialsInput.value;
  const nameAndScore = {
    name: name,
    score: gameSeconds,
  };

  leaderboards.push(nameAndScore);

  localStorage.setItem("leaderboards", JSON.stringify(leaderboards));

  renderLeaderboard();
}

// displays the leadrboard

function renderLeaderboard() {
  initialsContainer.classList.add("hide");
  leaderboardContainer.classList.remove("hide");
  for (var i = 0; i < leaderboards.length; i++) {
    var liElm = document.createElement("li");
    liElm.textContent = `Name: ${leaderboards[i].name} - Score: ${leaderboards[i].score}`;
    learderboardUl.appendChild(liElm);
  }
}
