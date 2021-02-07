const body = document.querySelector("body");
keys = document.getElementsByClassName("key");
audios = document.getElementsByTagName("audio");

body.addEventListener("keypress", (event) => {
  const keyCode = event.code;
  playSound(keyCode);
  styleElement(keyCode);
});

function playSound(keyPressed) {
  // Play Sound
  for (const key in audios) {
    if (Object.hasOwnProperty.call(audios, key)) {
      const element = audios[key];
      if (element.dataset.key === keyPressed) {
        element.currentTime = 0;
        element.play();
      }
    }
  }
}

function styleElement(keyPressed) {
  // Apply Style
  for (const key in keys) {
    if (Object.hasOwnProperty.call(keys, key)) {
      const element = keys[key];
      if (element.dataset.key === keyPressed) {
        element.classList.toggle("playing");
        setTimeout(() => element.classList.toggle("playing"), 100);
      } else {
        element.classList.remove("playing");
      }
    }
  }
}
