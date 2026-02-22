console.clear();

// // const input = document.querySelector("input");
// const input = document.querySelector("input[name=name]");
// input.addEventListener("change", changeHandler);

// function changeHandler(e) {
//   //   console.log("Changed");
//   //   console.log(e);
//   //   console.log(e.type);
//   //   console.log(e.target);
//   //   console.log(e.target.className);
//   //   console.log(e.target.id);
//   //   console.log(e.target.value);
// }

// const programs = document.querySelectorAll("input[name=language]");
// console.log(programs);
// Array.from(programs).map((program) => {
//   program.addEventListener("change", programHandler);
// });

// function programHandler(e) {
//   if (e.target.checked) {
//     console.log(e.target.value);
//   }
// }

const department = document.getElementById("department");
department.addEventListener("change", departmentHandler);
function departmentHandler(e) {
  console.log(e.target.value);
}
