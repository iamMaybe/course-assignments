const spinner = document.querySelector('.spinner--second');

const fps = (1000 / 60).toFixed(2);
let deg = 0;
const degChange = 6;

const rotate = () => {
  deg += degChange;
  spinner.style.transform = `rotate(${deg}deg)`;
};

setInterval(rotate, fps);
