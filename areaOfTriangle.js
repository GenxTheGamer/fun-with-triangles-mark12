const areaInputs = document.querySelectorAll(".area-input");
const areaButton = document.querySelector("#area-result-btn");

function calculateArea() {
  const inputA = areaInputs[0].value;
  const inputB = areaInputs[1].value;
  console.log(inputA, inputB);
}

areaButton.addEventListener("click", calculateArea);
