const inputs = document.querySelectorAll(".angle");
const isTriangleButton = document.querySelector("#is-triangle");
const outputArea = document.querySelector("#output");

function checkSum(angle1, angle2, angle3) {
  const sumOfAngle = angle1 + angle2 + angle3;
  return sumOfAngle;
}

function isTriangle() {
  const input1 = Number(inputs[0].value);
  const input2 = Number(inputs[1].value);
  const input3 = Number(inputs[2].value);
  const sumOfAngles = checkSum(input1, input2, input3);
  if (sumOfAngles === 180) {
    outputArea.innerText = "This is a triangle";
  } else {
    outputArea.innerText = "This is not a triangle";
  }
}

isTriangleButton.addEventListener("click", isTriangle);
