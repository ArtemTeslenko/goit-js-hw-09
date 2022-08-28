import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amountDelay: document.querySelector('[name="amount"]'),
};

const alertSettings = {
  clickToClose: true,
  useIcon: false,
  position: 'center-top',
  width: '380px',
  distance: '20px',
  fontSize: '20px',
  timeout: 3000,
};

refs.formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  const amountOfPromises = Number(refs.amountDelay.value);
  showPromises(amountOfPromises);
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}

function showPromises(amount) {
  let position = 1;
  let delay = Number(refs.firstDelay.value);
  let intervalId = setInterval(() => {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        successAlert(position, delay);
      })
      .catch(({ position, delay }) => {
        failureAlurt(position, delay);
      });

    amount -= 1;
    position += 1;

    if (position === 2) {
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        createPromise(position, delay)
          .then(({ position, delay }) => {
            successAlert(position, delay);
          })
          .catch(({ position, delay }) => {
            failureAlurt(position, delay);
          });

        amount -= 1;
        position += 1;

        delay += Number(refs.stepDelay.value);
        if (amount === 0) {
          clearInterval(intervalId);
        }
      }, Number(refs.stepDelay.value));
    }

    delay += Number(refs.stepDelay.value);
  }, delay);
}

function successAlert(position, delay) {
  Notiflix.Notify.success(
    `✅ Fulfilled promise ${position} in ${delay}ms`,
    alertSettings
  );
}

function failureAlurt(position, delay) {
  Notiflix.Notify.failure(
    `❌ Rejected promise ${position} in ${delay}ms`,
    alertSettings
  );
}
