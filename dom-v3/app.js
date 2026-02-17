let buttons = document.querySelectorAll("button");
let currentAudio = null;
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    let text = this.innerHTML;
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    currentAudio = new Audio(`${text}.mp3`);
    currentAudio.play();
  });
});
