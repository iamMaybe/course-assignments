const spinner = document.querySelector('.spinner--second');
const spinnerRAF = document.querySelector('.spinner--third');
const spinnerRAF2 = document.querySelector('.spinner--fourth');
const fps = 1000 / 60;
let deg = 0;
let degRAF = 0;
let degRAF2 = 0;
const degChange = 6;
let time = performance.now();

const rotate = () => {
  deg += degChange;
  spinner.style.transform = `rotate(${deg}deg)`;
};

const rotateRAF = () => {
  degRAF += degChange;
  spinnerRAF.style.transform = `rotate(${degRAF}deg)`;
  requestAnimationFrame(rotateRAF);
};

const rotateRAF2 = currentT => {
  if (currentT - time > 16) {
    time = currentT;
    degRAF2 += degChange;
    spinnerRAF2.style.transform = `rotate(${degRAF2}deg)`;
  }
  requestAnimationFrame(rotateRAF2);
};

setInterval(rotate, fps);
rotateRAF();
rotateRAF2();
