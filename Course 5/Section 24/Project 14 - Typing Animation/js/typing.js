const box = document.querySelector('.typing');
const text = 'Hello! How are you?';
let letterIndex = 0;
let oldTime = 0;
let speed = 100;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    oldTime = newTime;
    const letter = text.charAt(letterIndex++);
    box.textContent += letter;
  }
  requestAnimationFrame(typing);
};

typing();
