const box = document.querySelector('.typing');
const text = [
  'Hello! How was your day?^My day was great!',
  'I had a lot of work!^I used all my algorithms!',
  "I hope you're okay!^Beeeeep!",
];
let letterIndex = 0;
let textIndex = 0;
let oldTime = 0;
const speed = 100;
let activeDOMElement = box;

const typing = newTime => {
  if (newTime - oldTime > speed) {
    const letter = text[textIndex].charAt(letterIndex);

    if (letterIndex === text[textIndex].length) {
      if (textIndex === text.length - 1) return;
      return setTimeout(() => {
        box.textContent = '';
        textIndex++;
        letterIndex = 0;
        requestAnimationFrame(typing);
      }, 1000);
    } else if (letterIndex === 0 || letter === '^') {
      const p = document.createElement('p');
      p.classList.add('typing__text');
      box.append(p);
      activeDOMElement = p;
    }

    if (letter !== '^') {
      activeDOMElement.textContent += letter;
    }

    oldTime = newTime;
    letterIndex++;
  }
  requestAnimationFrame(typing);
};

typing();
