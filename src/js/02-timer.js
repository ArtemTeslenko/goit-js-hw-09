import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const unitDate = new Date(selectedDates);
    return unitDate.getTime();
  },
};

const timer = Object.create(options);
timer.runTime = true;

console.log(timer.hasOwnProperty('enableTime'));

flatpickr('#datetime-picker', options);
