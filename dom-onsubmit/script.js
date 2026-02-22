// This waits for the HTML to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  // Check if the form actually exists to prevent errors
  if (!form) {
    console.error("Form not found! Check your HTML.");
    return;
  }

  // Find inputs inside the form
  const nameInput = form.querySelector("#name");
  const emailInput = form.querySelector("#email");
  const passwordInput = form.querySelector("#password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userInfo = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log("Success! Form Data:", userInfo);

    // Instead of clearing each one manually, use .reset()
    form.reset();
  });
});