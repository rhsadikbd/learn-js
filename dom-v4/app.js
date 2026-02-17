let count = 0;
document
  .querySelector("textarea")
  .addEventListener("keypress", function (event) {
    count++;
    // let text = event.key;
    document.querySelector("p").innerHTML = `You pressed ${count} character`;
  });
