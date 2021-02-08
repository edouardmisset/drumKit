const keys = document.querySelectorAll(".key");

function removeStyle(event) {
  event.target.classList.remove("playing");
}

function playAndStyle(event) {
  const keyPressed = document.querySelector(`.key[data-key="${event.code}"]`);
  const audio = document.querySelector(`audio[data-key="${event.code}"]`);
  // Apply Style
  keyPressed ? keyPressed.classList.add("playing") : 0;

  // Play Sound
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

document.addEventListener("keypress", playAndStyle);

keys.forEach((key) => key.addEventListener("transitionend", removeStyle));
