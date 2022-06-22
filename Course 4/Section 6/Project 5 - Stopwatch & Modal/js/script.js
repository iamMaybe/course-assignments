const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const archiveBtn = document.querySelector('.archive');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.info');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

let countTime;
let minutes = 0;
let seconds = 0;
let flag = true;
const times = [];

const handleStart = () => {
  if (flag) {
    countTime = setInterval(() => {
      if (seconds < 9) {
        seconds++;
        stopwatch.textContent = `${minutes}:0${seconds}`;
      } else if (seconds >= 9 && seconds < 59) {
        seconds++;
        stopwatch.textContent = `${minutes}:${seconds}`;
      } else if (seconds >= 59) {
        minutes++;
        seconds = 0;
        stopwatch.textContent = `${minutes}:00`;
      }
    }, 1000);
  }
  flag = false;
};

const handleStop = () => {
  if (stopwatch.textContent !== '0:00') {
    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;
    time.style.visibility = 'visible';
    times.push(stopwatch.textContent);
  }

  clearInterval(countTime);
  stopwatch.textContent = '0:00';
  timeList.textContent = '';
  minutes = 0;
  seconds = 0;
  flag = true;
};

const handlePause = () => {
  clearInterval(countTime);
  flag = true;
};

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
