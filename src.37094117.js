parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"SbnA":[function(require,module,exports) {
const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),o=1e3;let r=null;function c(){r=setInterval(u,o),e.setAttribute("disabled",!0)}function u(){t.style.backgroundColor=a()}function a(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}function d(){clearInterval(r),e.removeAttribute("disabled")}e.addEventListener("click",c),n.addEventListener("click",d);
},{}],"yCUT":[function(require,module,exports) {
const t=document.querySelector("#date-selector"),e=document.querySelector("button[data-timestart]"),n=document.querySelector("span[data-days"),o=document.querySelector("span[data-hours"),a=document.querySelector("span[data-minutes"),r=document.querySelector("span[data-seconds");let s=null;function u(){(s=Date.parse(new Date(t.value)))<Date.now()?alert("Please choose a date in the future"):(d(),e.removeAttribute("disabled"))}function d(){tomorrow=new Date((new Date).setDate((new Date).getDate()+1)).toISOString().split("T")[0],t.setAttribute("min",tomorrow)}function c(){i.start()}e.setAttribute("disabled",!0),t.addEventListener("change",u),e.addEventListener("click",c);const i={intervalId:null,start(){this.intervalId=setInterval(()=>{const t=Date.now(),e=s-t,{days:n,hours:o,minutes:a,seconds:r}=l(e);h({days:n,hours:o,minutes:a,seconds:r})},1e3)},stop(){clearInterval(this.intervalId)}};function l(t){return{days:Math.floor(t/864e5),hours:m(Math.floor(t%864e5/36e5)),minutes:m(Math.floor(t%864e5%36e5/6e4)),seconds:m(Math.floor(t%864e5%36e5%6e4/1e3))}}function m(t){return String(t).padStart(2,"0")}function h({days:t,hours:e,minutes:s,seconds:u}){n.textContent=t,o.textContent=e,a.textContent=s,r.textContent=u}
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/color-switch"),require("./js/promisification"),require("./js/timer");
},{"./sass/main.scss":"clu1","./js/color-switch":"SbnA","./js/promisification":"clu1","./js/timer":"yCUT"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11/src.37094117.js.map