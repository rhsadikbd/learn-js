console.log(window);

const list = document.getElementById("list");

const p1 = list.children[0];
p1.innerHTML = window.location.href;

const p2 = list.children[1];
p2.innerHTML = window.location.protocol;

const p3 = list.children[2];
p3.innerHTML = window.location.hostname;

const p4 = list.children[3];
p4.innerHTML = window.location.port;

const p5 = list.children[4];
p5.innerHTML = window.location.pathname;
