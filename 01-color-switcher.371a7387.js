refs={body:document.querySelector("body"),startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")};let t=null;function e(t){t.target.setAttribute("disabled","disabled")}function n(t){t.removeAttribute("disabled","disabled")}function r(){const t=`#${Math.floor(16777215*Math.random()).toString(16)}`;refs.body.style.backgroundColor=t}refs.startBtn.addEventListener("click",(function(o){e(o),n(refs.stopBtn),r(),t=setInterval(r,1e3)})),refs.stopBtn.addEventListener("click",(function(r){e(r),n(refs.startBtn),clearTimeout(t)}));
//# sourceMappingURL=01-color-switcher.371a7387.js.map