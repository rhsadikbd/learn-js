let myDiv = document.querySelector("#myDiv");
let h1 = document.createElement("h1");
h1.innerText = "Heading 1";
let h2 = document.createElement("h2");
h2.innerText = "Heading 2";
let h3 = document.createElement("h3");
h3.innerText = "Heading 3";
let h4 = document.createElement("h4");
h4.innerText = "Heading 4";

myDiv.appendChild(h1);
myDiv.appendChild(h2);
myDiv.appendChild(h3);
myDiv.insertBefore(h4, h2);
