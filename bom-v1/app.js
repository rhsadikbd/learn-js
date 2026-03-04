// const val = window.alert("Welcome");
// console.log(val);

// function deleteSomething() {
//   const value = window.confirm("Do you want to delete?");
//   if (value) {
//     console.log("Successfully deleted");
//   } else {
//     console.log("Not Successfully deleted");
//   }
// }

// deleteSomething();

const value = prompt("Enter your Name: ");
if (value == "" || value == null) {
  console.log("No name found");
} else {
  console.log(value);
}
