// Analogue clock face

const secondHand = document.querySelector("#second-hand");
const minuteHand = document.querySelector("#minute-hand");
const hourHand = document.querySelector("#hour-hand");

const newTime = () => {
  const currentTime = new Date();

  const seconds = currentTime.getSeconds();
  const secondHandMove = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondHandMove}deg)`;

  const mins = currentTime.getMinutes();
  const minuteHandMove = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteHandMove}deg)`;

  const hours = currentTime.getHours();
  const hourHandMove = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourHandMove}deg)`;
};

setInterval(newTime);

newTime();

// digital clock

const digitalTime = () => {
  const currentTime = new Date();
  let seconds = currentTime.getSeconds();
  let minutes = currentTime.getMinutes();
  let hours = currentTime.getHours();

  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("digi-time").innerHTML =
    hours + ":" + minutes + ":" + seconds;

  const time = setTimeout(digitalTime, 500);
};

const checkTime = index => {
  if (index < 10) {
    index = "0" + index;
  }
  return index;
};

digitalTime();

// stopwatch

const startBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let dsiplayHours = 0;

let interval = null;
let watchStatus = "stopped";

const stopWatch = () => {
  seconds++;
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }

  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

// const resetWatch = () => {
//   document.getElementById("display").innerHTML = "00" + ":" + "00" + ":" + "00";
// };

// window.setInterval(stopWatch, 1000);

const startStop = () => {
  if (watchStatus === "stopped") {
    interval = window.setInterval(stopWatch, 1000);
    document.getElementById("startStop").innerHTML = "Stop";
    watchStatus = "started";
  } else {
    window.clearInterval(interval);
    document.getElementById("startStop").innerHTML = "Start";
    watchStatus = "stopped";
  }
};

const reset = () => {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("display").innerHTML = "00:00:00";
  document.getElementById("startStop").innerHTML = "Start";
};

// startBtn.addEventListener("click", stopWatch);
// resetBtn.addEventListener("click", startStop);

// resetBtn.addEventListener("click", resetWatch);

// clock selection
const anaButton = document.getElementById("analogue");
const digiButton = document.getElementById("digital");
const stopWatchButton = document.getElementById("stop-watch");

const showAnaTime = () => {
  const anaClock = document.getElementById("clock-container");
  if (anaClock.classList.contains("hide")) {
    anaClock.classList.remove("hide");
  } else {
    anaClock.classList.add("hide");
  }
};

const showDigiTime = () => {
  const digiClock = document.getElementById("digi-time");
  if (digiClock.classList.contains("hide")) {
    digiClock.classList.remove("hide");
  } else {
    digiClock.classList.add("hide");
  }
};

const showStopWatch = () => {
  const stopWatch = document.getElementById("stopWatch");
  if (stopWatch.classList.contains("hide")) {
    stopWatch.classList.remove("hide");
  } else {
    stopWatch.classList.add("hide");
  }
};

anaButton.addEventListener("click", showAnaTime);
digiButton.addEventListener("click", showDigiTime);
stopWatchButton.addEventListener("click", showStopWatch);
