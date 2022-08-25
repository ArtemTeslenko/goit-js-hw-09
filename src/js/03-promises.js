const refs = {
  formEl: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amountDelay: document.querySelector('[name="amount"]'),
};

refs.formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  showPromisResult(Number(refs.amountDelay.value));
});
// Number(refs.amountDelay.value)

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

// const am = 3;
function showPromisResult(amount) {
  const intervalId = setInterval(() => {
    console.log(amount);
    amount -= 1;
    clearPromisesInterval(intervalId, amount);

    createPromise(2, 1500)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }, 1000);
}

// showPromisResult(am);

function clearPromisesInterval(id, stopPoint) {
  if (stopPoint < 1) {
    clearInterval(id);
  }
}
