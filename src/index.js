import setClock from './modules/setClock';

const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
  return (seconds) => {
    setClock(timerEl, seconds);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  inputEl.value = inputEl.value.replace(/[a-zA-Zа-яА-Я]/, '');
});

buttonEl.addEventListener('click', () => {
  const seconds = inputEl.value;

  animateTimer(seconds);

  inputEl.value = '';
});

