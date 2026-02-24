const form = document.querySelector("form");
const nameInput = form.querySelector("#name");
const emailInput = form.querySelector("#email");
const passwordInput = form.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const getUser = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(getUser);
  form.reset();
});
