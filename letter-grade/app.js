let marks = parseInt(prompt("Enter your mark: "));

if (marks > 100 || marks < 0) {
  console.log("Invalid Marks!");
} else if (marks >= 80 && marks <= 100) {
  console.log("Your Grade is A+");
} else if (marks >= 70 && marks <= 79) {
  console.log("Your Grade is A");
} else if (marks >= 60 && marks <= 69) {
  console.log("Your Grade is A-");
} else if (marks >= 50 && marks <= 59) {
  console.log("Your Grade is B");
} else if (marks >= 40 && marks <= 49) {
  console.log("Your Grade is C");
} else if (marks >= 33 && marks <= 39) {
  console.log("Your Grade is D");
} else {
  console.log("You Failed!");
}
