const formQuiz = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-answer");
const output = document.querySelector("#output");

const correctAnswers = ["90°", "right angled"];

function calcScore() {
  let score = 0;
  let index = 0;
  const formResult = new FormData(formQuiz);
  console.log(formResult.values);
  for (let value of formResult.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  output.innerText = "Your Score is" + score;
}

submitButton.addEventListener("click", calcScore);
