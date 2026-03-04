// function addnum(x, y, z) {
//   return x + y + z;
// }

// let numbers = [2, 4, 6, 8];

// console.log(...numbers);

// let arr3 = [3, 5, ...numbers];
// console.log(arr3);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // let arr3 = arr1.concat(arr2);
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

let p1 = {
  name: "Sadik",
  age: 29,
};

let p2 = {
  district: "Mymensingh",
  country: "Dhaka",
};

let result = { ...p1, ...p2 };
console.log(result);
