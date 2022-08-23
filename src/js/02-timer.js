import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  start: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};
let chosenTime = 0;
const failureSettings = {
  clickToClose: true,
  useIcon: true,
  position: 'center-top',
  width: '380px',
  distance: '20px',
  fontSize: '20px',
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (timer.intervalId !== null) {
      Notiflix.Notify.failure(
        'Please reload the page to update timer',
        failureSettings
      );
      return;
    }
    const currentTime = Date.now();
    chosenTime = new Date(selectedDates[0]).getTime();

    checkValidityOfDate(currentTime, chosenTime);
  },
};

const fp = flatpickr('#datetime-picker', options);

const timer = {
  intervalId: null,
  start() {
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const delta = chosenTime - currentTime;
      const { days, hours, minutes, seconds } = convertMs(delta);

      updateClockFace(days, hours, minutes, seconds);
      stopTimer(delta, this.intervalId);

      console.log(days, hours, minutes, seconds);
    }, 1000);
  },
};

refs.start.addEventListener('click', onStartClick);

function checkValidityOfDate(current, chosen) {
  if (chosen <= current) {
    Notiflix.Notify.failure(
      'Please choose a date in the future',
      failureSettings
    );
  } else {
    refs.start.removeAttribute('disabled', 'disabled');
  }
}

function onStartClick() {
  timer.start();
  refs.start.setAttribute('disabled', 'disabled');
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function updateClockFace(days, hours, minutes, seconds) {
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}

function stopTimer(delta, intervalId) {
  if (delta <= 1000) {
    clearInterval(intervalId);
  }
}
