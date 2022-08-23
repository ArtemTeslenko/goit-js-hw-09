const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick(e) {
  setDisabled(e);
  removeDisabled(refs.stopBtn);
  changeColor();
  timerId = setInterval(changeColor, 1000);
}

function onStopClick(e) {
  setDisabled(e);
  removeDisabled(refs.startBtn);
  clearTimeout(timerId);
}

function setDisabled(e) {
  e.target.setAttribute('disabled', 'disabled');
}

function removeDisabled(element) {
  element.removeAttribute('disabled', 'disabled');
}

function changeColor() {
  const color = getRandomHexColor();
  refs.body.style.backgroundColor = color;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
