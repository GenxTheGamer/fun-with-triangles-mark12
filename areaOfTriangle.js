const areaInputs = document.querySelectorAll(".area-input");
const areaButton = document.querySelector("#area-result-btn");
const output = document.querySelector("#output");

function getArea(base, height) {
  const baseHeight = base * height;
  const area = (1 / 2) * baseHeight;
  return area;
}

function calculateArea() {
  const inputA = areaInputs[0].value;
  const inputB = areaInputs[1].value;
  const areaResult = getArea(inputA, inputB);

  output.innerText = "Area is " + areaResult;
}

areaButton.addEventListener("click", calculateArea);
