const names = ["Sabbir", "Shakir", "Jakir", "Sadik", "Rokib"];

localStorage.setItem("names", JSON.stringify(names));

const name = JSON.parse(localStorage.getItem("names"));
console.log(name);