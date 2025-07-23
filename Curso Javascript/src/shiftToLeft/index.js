const inputbase = document.getElementById("x");
const inputexponente = document.getElementById("y");
const calculate = document.getElementById("calculateButton");
const output = document.getElementById("result");

calculate.addEventListener("click", () =>
  shiftToLeft(inputbase, inputexponente)
);

function shiftToLeft(inputbase, inputexponente) {
  let base = inputbase.value;
  let exponente = inputexponente.value;
  let result = output.value;

  if (base != "" && exponente != "") {
    if (parseInt(base) && parseInt(exponente) && exponente>0) {
      let aux = Math.pow(2, exponente);
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
