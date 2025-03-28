let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const quizBox = document.getElementById("quiz-box");
const resultBox = document.getElementById("result-box");
const scoreSpan = document.getElementById("score");
const scoreMsg = document.getElementById("score-message");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";

  q.answers.forEach((ans, idx) => {
    const li = document.createElement("li");
    li.textContent = ans;
    li.addEventListener("click", () => selectAnswer(idx));
    answersEl.appendChild(li);
  });
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
  quizBox.classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreSpan.textContent = score;

  const msg =
    score === 5
      ? "AI overlord level! 💡"
      : score >= 3
      ? "You know your stuff 🤓"
      : "Maybe let the AI do the thinking for now 🤖";
  scoreMsg.textContent = msg;
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