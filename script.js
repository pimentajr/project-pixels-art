const a = 5;

function randomBgCcolor() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(${x}, ${y}, ${z})`;
  return bgColor;
}

window.onload = function start() {
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  const blackSelected = document.getElementsByClassName('color')[0];
  blackSelected.classList.add('selected');

  randomBgCcolor();

  document.getElementsByClassName('color')[1].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[2].style.backgroundColor = randomBgCcolor();
  document.getElementsByClassName('color')[3].style.backgroundColor = randomBgCcolor();
};

for (let index = 0; index < a; index += 1) {
  const addDiv = document.createElement('div');
  const selectPixelBoard = document.getElementById('pixel-board');
  for (let index2 = 0; index2 < a; index2 += 1) {
    const addDivPixel = document.createElement('div');
    addDiv.appendChild(addDivPixel);
    addDivPixel.className = ('pixel');
  }
  selectPixelBoard.appendChild(addDiv);
}

const color0 = document.querySelectorAll('.color')[0];
const color1 = document.querySelectorAll('.color')[1];
const color2 = document.querySelectorAll('.color')[2];
const color3 = document.querySelectorAll('.color')[3];

function picked(e) {
  document.querySelectorAll('.selected')[0].classList.remove('selected');
  e.target.classList.add('selected');
  console.log(e.target);
}

color0.addEventListener('click', picked);
color1.addEventListener('click', picked);
color2.addEventListener('click', picked);
color3.addEventListener('click', picked);

const pixelBoard = document.querySelector('#pixel-board');

function pickedBoard(ele) {
  const elem = document.getElementsByClassName('selected');
  const color = getComputedStyle(elem[0]).getPropertyValue('background-color');
  const square = ele.target;
  square.style.backgroundColor = color;
  console.log(ele.target);
}

pixelBoard.addEventListener('click', pickedBoard);

const bt = document.querySelector('#clear-board');

function wipe() {
  const scale = document.getElementsByClassName('pixel');
  for (let index = 0; index < scale.length; index += 1) {
    document.getElementsByClassName('pixel')[index].style.backgroundColor = 'white';
  }
}

bt.addEventListener('click', wipe);
