const inputAND1 = document.getElementById("ANDnum1");
const inputAND2 = document.getElementById("ANDnum2");

const inputOR1 = document.getElementById("ORnum1");
const inputOR2 = document.getElementById("ORnum2");

const inputXOR1 = document.getElementById("XORnum1");
const inputXOR2 = document.getElementById("XORnum2");

const resultAND = document.getElementById("ANDresult");
const resultOR = document.getElementById("ORresult");
const resultXOR = document.getElementById("XORresult");

const buttonAND = document.getElementById("ANDcalculate");
const buttonOR = document.getElementById("ORcalculate");
const buttonXOR = document.getElementById("XORcalculate");

buttonAND.addEventListener("click", () =>
  calculateOperations(inputAND1, inputAND2, "AND", resultAND)
);
buttonOR.addEventListener("click", () =>
  calculateOperations(inputOR1, inputOR2, "OR", resultOR)
);
buttonXOR.addEventListener("click", () =>
  calculateOperations(inputXOR1, inputXOR2, "XOR", resultXOR)
);

function calculateOperations(input1, input2, type, container) {
  let result = 0;
  switch (type) {
    case "AND":
      error = validate(input1, input2);
      if (error === false) {
        let num1 = parseInt(input1.value);
        let num2 = parseInt(input2.value);
        result = num1 * num2;
        result = result.toString(2);
        render(result, error, container);
      } else {
        render(result, error, container);
      }
      break;
    case "OR":
      error = validate(input1, input2);
      if (error === false) {
        let num1 = parseInt(input1.value);
        let num2 = parseInt(input2.value);
        result = num1 + num2;
        result = result.toString(2);
        render(result, error, container);
      } else {
        render(result, error, container);
      }
      break;
    case "XOR":
      error = validate(input1, input2);
      if (error === false) {
        let num1 = parseInt(input1.value);
        let num2 = parseInt(input2.value);
        result = num1 ^ num2;
        result = result.toString(2);
        render(result, error, container);
      } else {
        render(result, error, container);
      }
  }
}

function render(result, error, container) {
  if (error === false) {
    container.style.color = "#364c84";
    container.style.fontSize = "1.25rem";
    container.textContent = result;
  } else {
    container.style.fontSize = "0.875rem";
    container.style.color = "red";
    container.textContent = error;
  }
}

function validate(input1, input2) {
  if (input1.value != "" && input2.value != "") {
    if (parseInt(input1.value) && parseInt(input2.value)) {
      return false;
    } else {
      return "Debe ingresar un número";
    }
  } else {
    return "Los campos son requeridos";
  }
}

/* 
function calculateAND() {
  let result = 0
  if ((inputAND1.value != "" && inputAND2.value != "")){
    if (
      (parseInt(inputAND1.value) && parseInt(inputAND2.value))
    ) {
      let num1 = parseInt(inputAND1.value);
      let num2 = parseInt(inputAND2.value);
      let result = num1 * num2;
      result = result.toString(2);
      resultAND.style.color = "#364c84";
      resultAND.style.fontSize = "1.25rem";
      resultAND.textContent = result;
    } else {
      result = "Debe ingresar un número";
      resultAND.style.fontSize = "0.875rem";
      resultAND.style.color = "red";
      resultAND.textContent = result;
    }
  }
  else{
    result = "Los campos son requeridos";
    resultAND.style.fontSize = "0.875rem";
    resultAND.style.color = "red";
    resultAND.textContent = result;
  }
}
function calculateOR() {
  let result = 0
  if (
    (inputOR1.value != "" && inputOR2.value != "") ||
    (parseInt(inputOR1.value) && parseInt(inputOR2.value))
  ) {
    let num1 = parseInt(inputOR1.value);
    let num2 = parseInt(inputOR2.value);
    let result = num1 + num2;
    result = result.toString(2);
    resultOR.style.color = "#364c84";
    resultOR.style.fontSize = "1.25rem";
    resultOR.textContent = result;
  } else {
    result = "Debe ingresar un número";
    resultOR.style.color = "red";
    resultOR.style.fontSize = "0.875rem";
    resultOR.textContent = result;
  }
}
function calculateXOR() {
  let result = 0
  if (
    (inputXOR1.value != "" && inputXOR2.value != "") ||
    (parseInt(inputXOR1.value) && parseInt(inputXOR2.value))
  ) {
    let num1 = parseInt(inputXOR1.value);
    let num2 = parseInt(inputXOR2.value);
    let result = num1 ^ num2;
    result = result.toString(2);
    resultXOR.style.color = "#364c84";
    resultXOR.style.fontSize = "1.25rem";
    resultXOR.textContent = result;
  } else {
    result = "Debe ingresar un número";
    resultXOR.style.color = "red";
    resultXOR.style.fontSize = "0.874rem";
    resultXOR.textContent = result;
  }
}
 */
