let firstNumber = "";
let secondNumber = "";
let operation = "";
let result = 0;

/**
 * performs the called calculation
 * @return {void} overwrites updateDisplay and sets  calculation result to display
 */

function performCalculation() {
  const previousNumber = Number(firstNumber);
  const currentNumber = Number(secondNumber);
  if (operation === "+") {
    result = currentNumber + previousNumber;
  } else if (operation === "-") {
    result = currentNumber - previousNumber;
  } else if (operation === "*") {
    result = currentNumber * previousNumber;
  } else if (operation === "/") {
    result = currentNumber / previousNumber;
  } else {
    result = "Error: 80085";
  }
  document.getElementById("input").innerText = `${result}`;
  firstNumber = "";
  secondNumber = "";
  operation = "";
}

document.getElementById("equals").addEventListener("click", performCalculation);

//Selecting number:
document.querySelectorAll(".numbers > div").forEach((button) => {
  updateDisplay();
  button.addEventListener("click", function () {
    //let's make sure there's no "leftover" operation
    if (secondNumber === "" && operation != "") {
      operation = "";
      updateDisplay();
    }
    //then make sure you can only add on ".":
    if (this.innerText === "." && firstNumber.indexOf(".") > -1) {
      return;
    } else {
      //then the actual number:
      firstNumber += this.innerText;
    }
    updateDisplay();
  });
});

/**
 * next updates the operation with user choice.
 *@return {void}
 */
document.querySelectorAll(".operators > div").forEach((button) => {
  button.addEventListener("click", function () {
    secondNumber = firstNumber;
    firstNumber = "";
    switch (this.innerText) {
      case "+":
        operation = `+`;
        break;
      case "-":
        operation = "-";
        break;
      case "*":
        operation = "*";
        break;
      case "/":
        operation = "/";
        break;
      default:
        console.log("error");
        break;
    }
    updateDisplay();
  });
});

/**
 * updates what's shown on calculator display. Note that operator-button changes firstnumber to second and that's why second needs to be displayed before operator and "new first number"
 */
function updateDisplay() {
  document.getElementById(
    "input"
  ).innerText = `${secondNumber} ${operation} ${firstNumber}`;
}

document.getElementById("clear").addEventListener("click", reset);

function reset() {
  firstNumber = "";
  secondNumber = "";
  operation = "";
  updateDisplay();
}

//Deleting input:
document.getElementById("remove").addEventListener("click", deleteLast);

function deleteLast() {
  if (firstNumber != "") {
    firstNumber = firstNumber.toString().slice(0, -1);
    updateDisplay();
  } else if (firstNumber == "" && operation != "") {
    operation = "";
    updateDisplay();
  } else if (firstNumber == "" && operation == "") {
    console.log(secondNumber);
    secondNumber = secondNumber.toString().slice(0, -1);
    updateDisplay();
  } else {
    console.log("Something went wrong...");
  }
}
