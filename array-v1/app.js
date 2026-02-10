// let num = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
//   sum += num[i];
// }
// console.log(sum);

const names = ["Sadik", "Hasan", "Kamal", "Omar", "Abir", "Jamsed", "Zia"];
console.log(names);

const num = [5, 10, 20, 30, 8, 60, 78];
console.log(num);

// names.splice(2, 0, "Osman", "Abul");
// console.log(names);

// names.splice(1, 2);
// console.log(names);

// const newArry = names.slice(1, 3);
// console.log(newArry);

//Array sort A-Z
// const sortArray = names.sort();
// console.log(sortArray);

//Array sort reverse Z-A
// const sortArray1 = names.sort();
// sortArray1.reverse();
// console.log(sortArray);

// Array sort in number 0 - 9
// num.sort(function (a, b) {
//   return a - b;
// });
// console.log(num);

// Array sort in number 9 - 0
// num.sort(function (a, b) {
//   return b - a;
// });
// console.log(num);

// Lowest & Highest number using spread operator
const highestNum = Math.max(...num);
const lowestNum = Math.min(...num);
console.log(highestNum);
console.log(lowestNum);
