const slideshowElement = document.querySelector(".slideshow-element");
let countElements = 1;
setInterval(() => {
  countElements++;
  let currentElement = document.querySelector(".current");
  currentElement.classList.remove("current");
  if (countElements > slideshowElement.length) {
    slideshowElement[0].classList.add("current");
  } else {
    currentElement.nextElementSibling.classList.add("current");
  }
}, 2000);
