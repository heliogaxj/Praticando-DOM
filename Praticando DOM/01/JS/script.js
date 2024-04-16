let minutesEl = document.querySelector('#minutes');
let secondsEl = document.querySelector('#seconds');
let millisecondsEl = document.querySelector('#milliseconds');
let hidden = document.querySelector('.hidden');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;
let isPaused = false;

function start(){
    if(interval){
        clearInterval(interval);
    }
    
    interval = setInterval(() => {
        milliseconds += 10;
        if(milliseconds >= 1000){
            seconds++;
            milliseconds = 0;
        }
        if(seconds >= 60){
            minutes++
            seconds = 0;
        }
        millisecondsEl.innerHTML = zeroMill(milliseconds);
        secondsEl.innerHTML = addZero(seconds);
        minutesEl.innerHTML = addZero(minutes);
    }, 10);
    showElement();
    startBtn.style.display = 'none'
};

function resetBtn() {
    clearInterval(interval);
    resetTimer();
    hiddenElement();
};

function resetTimer(){
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    millisecondsEl.innerHTML = zeroMill(milliseconds);
    secondsEl.innerHTML = addZero(seconds);
    minutesEl.innerHTML = addZero(minutes);

    startBtn.innerHTML = 'Iniciar'
    startBtn.style.display = 'inline'
}

function addZero(time){
    return time < 10 ? `0${time}`: time;
}

function zeroMill(milliseconds){
    if(milliseconds === 1000) return '000';
    return milliseconds < 100 ? `${milliseconds}`.padStart(3, '0') : milliseconds;
};

function showElement(){
    hidden.style.display = 'inline';
};

function hiddenElement(){
    hidden.style.display = 'none';
};

function pauseBtn(){
    isPaused = true;
    if (interval) {
        clearInterval(interval)
        interval = undefined
    }
    
    startBtn.innerHTML = 'Continuar'
    startBtn.style.display = 'inline'
};