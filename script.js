let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.9;
setInterval(drawClock, 1000);

function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  let grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();
  grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
  grad.addColorStop(0, '#333');
  grad.addColorStop(0.5, 'white');
  grad.addColorStop(1, '#333');
  ctx.strokeStyle = grad;
  ctx.lineWidth = radius * 0.1;
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
  ctx.fillStyle = '#333';
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  let ang;
  let num;
  ctx.font = radius * 0.15 + 'px arial';
  ctx.textBaseline = 'middle';
  ctx.textAlign = 'center';
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.85);
    ctx.rotate(-ang);
    ctx.fillText(num.toString(), 0, 0);
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.85);
    ctx.rotate(-ang);
  }
}

function drawTime(ctx, radius) {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  //hour
  hour = hour % 12;
  hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60) + (second * Math.PI) / (360 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  minute = (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  second = (second * Math.PI) / 30;
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = 'round';
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

function changeImage() {
  const landingImg = document.getElementById('landing');
  if (!landingImg) {
    return;
  }

  let counter = 2;

  setInterval(() => {
    landingImg.src = `./img/landing/landing${counter++}.jpg`;

    if (counter === 6) {
      counter = 1;
    }
  }, 4000);
}

changeImage();

// Setting query string as search value
const searchBtn = document.getElementById('search-btn');
const searchField = document.getElementById('search-input');

function getQuerySearchValue() {
  const queryString = window.location.search.slice(1);
  const values = queryString.split('&');
  let searchValue = '';

  values.forEach(el => {
      const pair = el.split('=');
      if(pair[0] === 'search') {
        searchValue = pair[1];
      }
  })
  
  return searchValue === '' ? null : searchValue;
}

searchBtn.addEventListener('click', () => {
  window.location.search = `search=${searchField.value}`;
});

searchField.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    console.log('asd');
    window.location.search = `search=${searchField.value}`;
  }
});

window.addEventListener('load', () => {
  const searchValue = getQuerySearchValue();

  if(searchValue) {
    searchField.value = searchValue;
  }
});
