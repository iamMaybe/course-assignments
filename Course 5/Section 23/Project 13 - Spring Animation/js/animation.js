const ball = document.querySelector('.ball');
const btn = document.querySelector('.btn-action');
const spring = document.querySelector('.spring');
const bar = document.querySelector('.bar');
const fill = document.querySelector('.fill');

const stretchSpring = () => {
  fill.style.animationPlayState = 'running';
  spring.style.animationPlayState = 'running';
  btn.textContent = 'Release the spring!';
  btn.removeEventListener('mousedown', stretchSpring);
  btn.removeEventListener('touchstart', stretchSpring);
};

const releaseSpring = () => {
  const fillStyles = getComputedStyle(fill);
  const barStyles = getComputedStyle(bar);
  const springStyles = getComputedStyle(spring);
  const fillWidth = parseInt(fillStyles.width, 10);
  const barWidth = parseInt(barStyles.width, 10);

  const progressPercent = (fillWidth / barWidth).toFixed(2);
  btn.style.color = '#000';
  btn.textContent = `Power: ${(progressPercent * 100).toFixed()}%`;
  fill.style.animationPlayState = 'paused';

  document.documentElement.style.setProperty('--power-x', `${30 + progressPercent * 50}%`);
  ball.style.animation =
    'fly-ball-x 1s .15s 1 forwards cubic-bezier(0.17, 0.67, 0.6, 1), fly-ball-y 1s .15s 1 forwards linear';

  document.documentElement.style.setProperty('--spring-left', `${springStyles.left}`);
  spring.style.animation = 'release-spring .2s 1 forwards linear';

  btn.removeEventListener('mouseup', releaseSpring);
  btn.removeEventListener('touchend', releaseSpring);
};

const resetAnimation = () => {
  console.log('reset');
};

btn.addEventListener('mousedown', stretchSpring);
btn.addEventListener('touchstart', stretchSpring);
btn.addEventListener('mouseup', releaseSpring);
btn.addEventListener('touchend', releaseSpring);
