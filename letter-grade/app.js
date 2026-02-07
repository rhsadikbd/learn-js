let marks = parseInt(prompt("Enter your mark: "));

if (marks > 100 || marks > 0) {
  alert("Enter valid marks");
} else if (marks >= 80) {
  console.log(`Your grade is A`);
} else if (marks >= 70) {
  console.log(`Your grade is A`);
} else if (marks >= 60) {
  console.log(`Your grade is A-`);
} else if (marks >= 50) {
  console.log(`Your grade is B`);
} else if (marks >= 40) {
  console.log(`Your grade is C`);
} else if (marks >= 33) {
  console.log(`Your grade is D`);
} else {
  console.log(`You Fail`);
}
