// window.addEventListener("load", () => {
//   console.log("Load");
// });

// window.addEventListener("beforeunload", () => {
//   console.log("Unload");
// });

// window.addEventListener("scroll", () => {
//   console.log("Scrolling");
// });

// window.addEventListener("resize", () => {
//   console.log("Resized");
//   const width = outerWidth;
//   const height = outerHeight;
//   console.log(`Width: ${width}, Height: ${height}`);
// });

const details = document.querySelector("details");
details.addEventListener("toggle", (e) => {
  //   console.log("toggle Working");
  console.log(e.target.open);
  if (e.target.open == true) {
    alert("Success");
  } else {
    console.log("Failed");
  }
});
