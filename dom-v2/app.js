let buttons = document.querySelectorAll("button");

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    document.querySelector("#display").innerHTML =
      `Button ${index + 1} Clicked`;
  });
});
