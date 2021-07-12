import Swal from 'sweetalert2'
console.log(Swal);

// -- ЭЛЕМЕНТЫ
const inputEl = document.querySelector('#date-selector');
const btnTimeStart = document.querySelector('button[data-timestart]');
const spanDays = document.querySelector('span[data-days');
const spanHours = document.querySelector('span[data-hours');
const spanMinutes = document.querySelector('span[data-minutes');
const spanSeconds = document.querySelector('span[data-seconds');

let startTime = null;
btnTimeStart.setAttribute('disabled', true);

// -- ДАТА ВВЕДЕННАЯ ПОЛЬЗОВАТЕЛЕМ
inputEl.addEventListener('change', getDate);
function getDate() {
    startTime = Date.parse(new Date(inputEl.value));
        
    if (startTime < Date.now()) {
        Swal.fire('Сирожа, please choose a date in the future')
        return;
    }

    blockDate();
    btnTimeStart.removeAttribute('disabled');
};

function blockDate() {
    tomorrow = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];  
    inputEl.setAttribute('min', tomorrow);
}



// -- КЛИК ПОКНОПКЕ ДЛЯ ЗАПУСКА ТАЙМЕРА
btnTimeStart.addEventListener('click', startTimer);
function startTimer() {
    timer.start();
};



// -- СТАРТ И СТОП ДЛЯ ТАЙМЕРА
const timer = {
    intervalId: null,
    // isActive: false,

    start() {
        // if (this.isActive) {
        //     return;
        // }
        // this.isActive = true;
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            updateClockFace({ days, hours, minutes, seconds });
        }, 1000);
    },
    
    stop() {
        clearInterval(this.intervalId);
    }
};



// -- ПРЕОБРАЗОВАНИЕ МИЛЛИСЕКУНД В ДНИ, ЧАСЫ, МИНУТЫ И СЕКУНДЫ
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = pad(Math.floor((ms % day) / hour));
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function pad(value) {
    return String(value).padStart(2, '0');
};



// -- ДОБАВЛЕНИЕ ЗНАЧЕНИЯ ВРЕМЕНИ В ИНТЕРФЕЙС
function updateClockFace({ days, hours, minutes, seconds }) {
    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;
}