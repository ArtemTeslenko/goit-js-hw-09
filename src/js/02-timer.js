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
    const startTime = Date.now();
    // setInterval(() => {
    //   const startTime = Date.now();
    //   console.log(startTime);
    // }, 1000);
  },
};

timer.start();

// -------------------------------------------TEST BTN
const btnEl = document.querySelector('.test');
btnEl.addEventListener('click', testFun);
function testFun(e) {
  console.log(chosenTime);
}

//Date.now() - возвращает текущее время
