let timer; // countdown interval
let timeLeft = 180; // 3 minutes in seconds

const timerDisplay = document.createElement("div");
timerDisplay.id = "timer";
timerDisplay.textContent = `⏳ Time Left: ${formatTime(timeLeft)}`;

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreSpan = document.getElementById("score");
const scoreMsg = document.getElementById("score-message");
document.querySelector(".quiz-container").insertBefore(timerDisplay, quizBox);

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  timerDisplay.textContent = `⏳ Time Left: ${formatTime(timeLeft)}`;

  q.answers.forEach((ans, idx) => {
    const li = document.createElement("li");
    li.textContent = ans;
    li.addEventListener("click", () => selectAnswer(idx));
    answersEl.appendChild(li);
  });

  if (!timer) {
    timer = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `⏳ Time Left: ${formatTime(timeLeft)}`;
      if (timeLeft <= 0) {
        clearInterval(timer);
        showResult();
      }
    }, 1000);
  }
}

function selectAnswer(index) {
  const correct = questions[currentQuestion].correct;
  if (index === correct) score++;
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
    clearInterval(timer);
    quizBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreSpan.textContent = score;
  
    const msg =
      score === questions.length
        ? "AI overlord level! 💡"
        : score >= 10
        ? "You know your stuff 🤓"
        : "Maybe let the AI do the thinking for now 🤖";
    scoreMsg.textContent = msg;
  }

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
  }

document.getElementById("entry-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const contact = document.getElementById("contact").value;
  alert(`Thanks for entering! We'll reach out if you win. 🎉`);
  this.reset();
});

document.getElementById("twitter-share").addEventListener("click", function () {
  const tweet = `I scored ${score}/5 on the AI Quiz! 🤖 Can you beat me? Try it here 👉`;
  const url = encodeURIComponent(window.location.href);
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}&url=${url}`,
    "_blank"
  );
});

document.getElementById("copy-link").addEventListener("click", function () {
  navigator.clipboard.writeText(window.location.href).then(() => {
    document.getElementById("copy-msg").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("copy-msg").classList.add("hidden");
    }, 2000);
  });
});

loadQuestion();