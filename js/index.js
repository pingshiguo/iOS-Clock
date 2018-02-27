const hourHand = document.querySelector('.hours-wrapper');
const minuteHand = document.querySelector('.minutes-wrapper');
const secondHand = document.querySelector('.seconds-wrapper');

function RunClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let secondDegree = second / 60 * 360 - 180;
  let minuteDegree = (minute / 60 * 360) + (second / 60 * 6) - 180;
  let hourDegree = (hour / 12 * 360) + (minute / 60 * 30) - 180;

  secondHand.style.transform = `rotateZ(${secondDegree}deg)`;
  minuteHand.style.transform = `rotateZ(${minuteDegree}deg)`;
  hourHand.style.transform = `rotateZ(${hourDegree}deg)`;
}

setInterval(RunClock, 1000);
