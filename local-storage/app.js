// Set into localstorage
// localStorage.setItem("userName", "Sadik Hasan");
// localStorage.setItem("password", "123456789");

// Get into localstorage
// const userName = localStorage.getItem("userName");
// const password = localStorage.getItem("password");

// Update into localstorage
// localStorage.setItem("userName", "Khalid Hasan");
// localStorage.setItem("password", "123456789");

// Update into localstorage
// localStorage.removeItem("userName");
// localStorage.removeItem("password");

const countries = ["Bangladesh", "Pakistan", "Nepal", "Bhutan", "Srilanka"];
localStorage.setItem("countries", JSON.stringify(countries));

const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);
