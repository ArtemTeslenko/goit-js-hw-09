function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},l=t.parcelRequire7bc7;null==l&&((l=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var l={id:e,exports:{}};return n[e]=l,t.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=l);var r=l("eWCmQ");const i={formEl:document.querySelector(".form"),firstDelay:document.querySelector('[name="delay"]'),stepDelay:document.querySelector('[name="step"]'),amountDelay:document.querySelector('[name="amount"]')},a={clickToClose:!0,useIcon:!1,position:"center-top",width:"380px",distance:"20px",fontSize:"20px",timeout:3e3};function u(e,t){const n=Math.random()>.3;return new Promise(((o,l)=>{n?o({position:e,delay:t}):l({position:e,delay:t})}))}function s(t,n){e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`,a)}function c(t,n){e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`,a)}i.formEl.addEventListener("submit",(function(e){e.preventDefault();!function(e){let t=1,n=Number(i.firstDelay.value),o=setInterval((()=>{u(t,n).then((({position:e,delay:t})=>{s(e,t)})).catch((({position:e,delay:t})=>{c(e,t)})),e-=1,t+=1,2===t&&(clearInterval(o),o=setInterval((()=>{u(t,n).then((({position:e,delay:t})=>{s(e,t)})).catch((({position:e,delay:t})=>{c(e,t)})),e-=1,t+=1,n+=Number(i.stepDelay.value),0===e&&clearInterval(o)}),Number(i.stepDelay.value))),n+=Number(i.stepDelay.value)}),n)}(Number(i.amountDelay.value))}));
//# sourceMappingURL=03-promises.d33aaf29.js.map
