const box = document.querySelector('.typing');
const text = ['Hello! How was your day?', 'My day was great!', 'But tell me how you are doing!'];
let letterIndex = 0;
let textIndex = 0;
let oldTime = 0;
let speed = 100;
let activeDOMElement = box;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    if (letterIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) return;
      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        letterIndex = 0;
        requestAnimationFrame(typing);
      }, 1000);
    } else if (letterIndex === 0) {
      const p = document.createElement('p');
      p.classList.add('typing__text');
      box.append(p);
      activeDOMElement = p;
    }

    oldTime = newTime;
    const letter = text[textIndex].charAt(letterIndex++);
    activeDOMElement.textContent += letter;
  }
  requestAnimationFrame(typing);
};

typing();
