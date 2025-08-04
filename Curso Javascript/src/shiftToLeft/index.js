const inputBase = document.getElementById("x");
const inputExponent = document.getElementById("y");
const calculate = document.getElementById("calculateButton");
const output = document.getElementById("result");

calculate.addEventListener("click", () =>
  shiftToLeft(inputBase, inputExponent)
);

function shiftToLeft(inputBase, inputExponent) {
  let base = inputBase.value;
  let exponent = inputExponent.value;
  let result = output.value;

  if (base != "" && exponent != "") {
    if (parseInt(base) && parseInt(exponent) && exponent>0) {
      let aux = Math.pow(2, exponent);
      result = base * aux;
      output.style.fontWeight = "bold";
      output.style.color = "#322c2c";
      output.style.fontSize = "1.25rem";
      output.textContent = result;
    } else {
      result = "You must enter positive numbers";
      output.style.fontWeight = "bold";
      output.style.fontSize = "0.875rem";
      output.style.color = "red";
      output.textContent = result;
    }
  } else {
    result = "Fields are required";
    output.style.fontWeight = "bold";
    output.style.fontSize = "0.875rem";
    output.style.color = "red";
    output.textContent = result;
  }
}
