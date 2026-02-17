const photos = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
const imageTag = document.querySelector("img");

let count = 0;
function next(){
  count++;
  if(count >= photos.length){
    count = 1;
    imageTag.src = photos[count];
  }else{
    imageTag.src = photos[count];
  }
}
function prev(){
  count--;
  if(count < 0){
    count = photos.length - 1;
    imageTag.src = photos[count];
  }else{
    imageTag.src = photos[count];
  }
}