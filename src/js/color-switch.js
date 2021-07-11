const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]')
const btnStop = document.querySelector('button[data-stop]')
const INTERVAL = 1000;
let intervalId = null;

btnStart.addEventListener('click', colorSwitch);
btnStop.addEventListener('click', colorStop);

function colorSwitch() {
    intervalId = setInterval(addClass, INTERVAL);
    btnStart.setAttribute('disabled', true);
}

function addClass() {
    body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorStop() {
    clearInterval(intervalId);
    btnStart.removeAttribute('disabled');
};