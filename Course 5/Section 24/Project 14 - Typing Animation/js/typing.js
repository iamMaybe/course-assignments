const box = document.querySelector('.typing');
const text = 'Hello! How are you?';
let letterIndex = 0;

const typing = () => {
  const letter = text.charAt(letterIndex++);
  box.textContent += letter;
};

typing();
