let number = Number(prompt("Enter your number: "));

// if (number > 0) {
//   console.log("Positive");
// } else if (number < 0) {
//   console.log("Negative");
// } else {
//   console.log("Zero");
// }

const result = number > 0 ? "Positive" : number < 0 ? "Negative" : "Zero";
console.log(result);
