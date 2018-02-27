const scaleHand = document.querySelector('.scale-wrapper');
const hourHand = document.querySelector('.hours-wrapper');
const minuteHand = document.querySelector('.minutes-wrapper');
const secondHand = document.querySelector('.seconds-wrapper');

drawClockScale();
runClock();
setInterval(runClock, 1000);

function runClock() {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  let secondDeg = second / 60 * 360 - 180;
  let minuteDeg = (minute / 60 * 360) + (second / 60 * 6) - 180;
  let hourDeg = (hour / 12 * 360) + (minute / 60 * 30) - 180;

  secondHand.style.transform = `rotateZ(${secondDeg}deg)`;
  minuteHand.style.transform = `rotateZ(${minuteDeg}deg)`;
  hourHand.style.transform = `rotateZ(${hourDeg}deg)`;
}

function drawClockScale() {
  const ORIGIN_X = 108;
  const ORIGIN_Y = 108;
  const R = 90;
  const DEG = Math.PI * 2 / 12;

  for (let i = 1; i <= 12; i++) {
    let angle = DEG * i;
    let x = ORIGIN_X + Math.cos(angle) * R;
    let y = ORIGIN_Y + Math.sin(angle) * R;

    let scale = document.createElement('i');

    scale.innerText = i;
    scale.className = 'scale';
    scale.style.top = y + 'px';
    scale.style.left = x + 'px';

    scaleHand.appendChild(scale);
  }
}
