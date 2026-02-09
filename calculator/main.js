let display = document.querySelector("#display");

function deleteAll() {
  display.value = "";
}
function calculator(newVal) {
  display.value += newVal;
}
function finalCalculation() {
  let result = eval(display.value);
  display.value = result;
}
