// try {
//   alert("Hi, Everyone");
//   alert(x);
//   alert("Bye, Everyone");
// } catch (err) {
//   console.log("Inside Catch Block");
//   console.log(err);
//   console.log(err.name);
//   console.log(err.message);
// } finally {
//   alert("Bye, Everyone");
// }

const text = document.querySelector("#textField");
const button = document.querySelector("#checkButton");
button.addEventListener("click", () => {
  try {
    if (text.value < 5) {
      throw "Input is too low";
    } else if (text.value > 10) {
      throw "Input is too high";
    } else {
      console.log(text.value);
    }
  } catch (err) {
    console.log(err);
  }
});
