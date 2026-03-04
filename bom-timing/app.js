// setTimeout(() => {
//   console.log("Bangladesh");
// }, 2000);

// setTimeout(display, 2000);

// function display() {
//   console.log("display function");
// }

// const saveBtn = document.querySelector(".save-btn");
// const message = document.querySelector(".message");

// saveBtn.addEventListener("click", saveUser);

// function saveUser() {
//   message.innerHTML = "User registration Sucessfull";

//   setTimeout(() => {
//     message.textContent = "";
//   }, 2000);
// }

const saveBtn = document.querySelector(".save-btn");
const message = document.querySelector(".message");
saveBtn.addEventListener("click", displayCount);

function displayCount() {
  let count = 0;
  message.textContent = count;

  setInterval(() => {
    message.textContent = count++;
  }, 1000);
}
