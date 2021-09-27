const inputHypo = document.querySelectorAll(".hypo-input");
const buttonResult = document.querySelector("#hypo-result-btn");
const output = document.querySelector("#output");

function calculateHypotenuse() {
  const squareOfA = inputHypo[0].value * inputHypo[0].value;
  const squareOfB = inputHypo[1].value * inputHypo[1].value;
  const result = Math.sqrt(squareOfA + squareOfB);

  output.innerText = "Hypotenuse of entered inputs is " + result;
}

buttonResult.addEventListener("click", calculateHypotenuse);
