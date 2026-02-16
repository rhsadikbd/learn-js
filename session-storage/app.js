// sessionStorage.setItem("user", "Sadik");
// const userName = sessionStorage.getItem("user");
// console.log(userName);
// const removeUser = sessionStorage.removeItem("user");
// console.log(removeUser);

const user = {
  id: 100,
  name: "Sadik Hasan",
  age: 29,
  email: "sadikcsbd@gmail.com",
};

sessionStorage.setItem("user", JSON.stringify(user));
const users = JSON.parse(sessionStorage.getItem("user"));
console.log(users);
