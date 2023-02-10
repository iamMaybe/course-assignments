const box = document.querySelector('.typing');
const text = ['Hello! How was your day?', 'My day was great!', 'But tell me how you are doing!'];
let letterIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    if (letterIndex === text[textIndex].length) {
      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        letterIndex = 0;
        requestAnimationFrame(typing);
      }, 2000);
    }

    oldTime = newTime;
    const letter = text[textIndex].charAt(letterIndex++);
    box.textContent += letter;
  }
  requestAnimationFrame(typing);
};

typing();
