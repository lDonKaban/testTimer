import setClock from './modules/setClock';

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let timeInterval;

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    const hh = seconds / 3600 | 0;
    const mm = seconds / 60 % 60 | 0;
    const ss = seconds % 60 | 0;
    const timeArray = [hh, mm, ss];

    timeInterval = setInterval(() => {
      setClock(timerEl, timeArray);
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

