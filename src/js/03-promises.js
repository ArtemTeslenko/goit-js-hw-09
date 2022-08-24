const refs = {
  formEl: document.querySelector('.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  stepDelay: document.querySelector('[name="step"]'),
  amountDelay: document.querySelector('[name="amount"]'),
};
// let promisAmount = 0;

refs.formEl.addEventListener('submit', function (e) {
  e.preventDefault();
  // promisAmount = Number(refs.amountDelay.value);
  // console.log(promisAmount);
  // for (let i = 1; i <= promisAmount; i += 1) {
  //   console.log(i);
  // }
  // createPromise().then(console.log('✔'));
  // catch(console.log('❌'));
  createPromise();
});
// Number(refs.amountDelay.value)

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promisAmount = Number(refs.amountDelay.value);
  for (let i = 1; i <= promisAmount; i += 1) {
    console.log(i);
  }

  // return new Promise((resolve, reject) => {
  //   if (shouldResolve) {
  //     resolve;
  //   }
  // else {
  //   reject;
  // }
  // });
}
