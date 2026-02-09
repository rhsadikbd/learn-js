let startNum = parseInt(prompt("Enter Start Number"));
let lastNum = parseInt(prompt("Enter Last Number"));

let demo = document.querySelector("#demo");

for (let i = startNum; i <= lastNum; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 5 == 0) {
    console.log(i + " Buzz");
  } else if (i % 3 == 0) {
    console.log(i + " Fizz");
  } else {
    console.log(i);
  }
}
