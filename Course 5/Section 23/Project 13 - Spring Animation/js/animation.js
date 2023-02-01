const ball = document.querySelector('.ball');
const btn = document.querySelector('.btn-action');
const spring = document.querySelector('.spring');
const fill = document.querySelector('.fill');

const stretchSpring = () => {
  console.log('stretch');
};

const releaseSpring = () => {
  console.log('release');
};

const resetAnimation = () => {
  console.log('reset');
};

btn.addEventListener('mousedown', stretchSpring);
btn.addEventListener('touchstart', stretchSpring);
btn.addEventListener('mouseup', releaseSpring);
btn.addEventListener('touchend', releaseSpring);
