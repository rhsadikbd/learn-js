"use strict";

// function message(text = "I am default") {
//   console.log(`${text}`);
// }
// message();
"use strict";
function printMessage(x, y, ...z) {
  console.log(`${x} = ${y} = ${z}`);
}

printMessage(5, 10, 16, 30, 30, 60);
