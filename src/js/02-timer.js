import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  start: document.querySelector('[data-start'),
};
let currentTime = null;
let chosenTime = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    chosenTime = new Date(selectedDates[0]).getTime();
    currentTime = Date.now();
    checkValidityOfDate(currentTime, chosenTime);
  },
};

const fp = flatpickr('#datetime-picker', options);

function checkValidityOfDate(current, chosen) {
  if (chosen <= current) {
    window.alert('Please choose a date in the future');
  } else {
    refs.start.removeAttribute('disabled', 'disabled');
  }
}

const timer = {
  start() {
    setInterval(() => {
      // const currentTime = Date.now();
      // const delta = currentTime - startTime;
      // const timeComponents = convertMs(delta);
      const currentTime = Date.now();
      const delta = chosenTime - currentTime;
      const timeComponents = convertMs(delta);

      console.log(timeComponents);
    }, 1000);
  },
};

refs.start.addEventListener('click', onStartClick);

function onStartClick() {
  timer.start();
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// -------------------------------------------TEST BTN
const btnEl = document.querySelector('.test');
btnEl.addEventListener('click', testFun);
function testFun(e) {
  console.log(chosenTime);
}

//Date.now() - возвращает текущее время
