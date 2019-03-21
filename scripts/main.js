'use strict';

let workTime = 25,
    breakTime = 5,
    time = workTime * 60,
    timer,
    isBreak = false;

const   setWork = document.getElementById('setWork'),
        setBreak = document.getElementById('setBreak'),
        min = document.getElementById('min'),
        sec = document.getElementById('sec'),
        start = document.getElementById('startbtn'),
        pause = document.getElementById('pausebtn'),
        stop = document.getElementById('stopbtn'),
        title = document.getElementById('timerTitle'),
        pomodoro = document.getElementById('pomodoro'),
        alarm = document.createElement('audio');

alarm.setAttribute('src', 'https://www.soundjay.com/misc/sounds/censor-beep-5.mp3');

pause.classList.add('disabled');

const pad = n => n < 10 ? '0' + n : n;

const togglePause = () => {
  pause.classList.toggle('disabled');
};

start.onclick = () => {
  timer = setInterval(() => {
    time--;
    if (time % 60 < 0) {
      !isBreak ? isBreak = true : isBreak = false;
      !isBreak ? time = workTime * 60 : time = breakTime * 60;
      !isBreak ? title.textContent = 'Work' : title.textContent = 'Break';
      alarm.play();
    }
    min.textContent = pad(Math.floor(time / 60));
    sec.textContent = pad(time % 60);
  }, 1000);
  togglePause();
};

pause.onclick = () => {
  clearInterval(timer);
  togglePause();
};

stop.onclick = () => {
  clearInterval(timer);
  min.textContent = pad(workTime);
  sec.textContent = '00';
  time = workTime * 60;
  pause.classList.add('disabled');
};
