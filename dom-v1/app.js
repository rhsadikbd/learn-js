let photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const imgTag = document.getElementById("image");

let count = 0;
function next() {
  count++;
  if (count >= photos.length) {
    count = 0;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}

function prev() {
  count--;
  if (count < 0) {
    count = photos.length - 1;
    imgTag.src = photos[count];
  } else {
    imgTag.src = photos[count];
  }
}
