const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timeInterval;

const setZero = (elem) => {
  if (elem >= 0 && elem < 10) {
    return '0' + elem;
  }
  return elem;
};

const isZero = (number) => number === 0;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const hh = seconds / 3600 | 0;
    const mm = seconds / 60 % 60 | 0;
    const ss = seconds % 60 | 0;
    const timeArray = [hh, mm, ss];

    timeInterval = setInterval(() => {
      if (timeArray.filter(e => e !== 0).length === 0) clearInterval(timeInterval); 

      timerEl.innerHTML = timeArray.map(e => setZero(e)).join(':');
  
      if (isZero(timeArray[2])) {
        timeArray[2] = 59;
        isZero(timeArray[1]) ? (timeArray[1]=59, timeArray[0]--) : timeArray[1]--;
      } else {
        timeArray[2]--;
      }
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/\D/, '');
});

buttonEl.addEventListener('click', () => {
  clearInterval(timeInterval);
  if (!inputEl.value) {
    timerEl.innerHTML = 'hh:mm:ss';
    return;
  }
  const seconds = inputEl.value;

  animateTimer(seconds);

  inputEl.value = '';
});

