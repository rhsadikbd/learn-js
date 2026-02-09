// for (let i = 10; i >= 1; i--) {
//   console.log(" " + i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(" " + i);
// }

// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(" " + i);
// }

// for (let i = 2; i <= 100; i = i + 2) {
//   console.log(" " + i);
// }

// for (let i = 1; i <= 99; i = i + 2) {
//   console.log(" " + i);
// }

// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

const startNum = parseInt(prompt("Enter start number"));
const lastNum = parseInt(prompt("Enter last number"));

let sum = 0;

for (let i = startNum; i <= lastNum; i++) {
  sum = sum + i;
}

console.log(sum);
