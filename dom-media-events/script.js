const video = document.querySelector("video");

video.addEventListener("play", function () {
  console.log("Play");
});
video.addEventListener("playing", function () {
  console.log("playing");
});
video.addEventListener("pause", function () {
  console.log("Pause");
});
video.addEventListener("ended", function () {
  console.log("Thanks for Watching");
});
video.addEventListener("volumechange", function () {
  console.log("Changing volume");
});
