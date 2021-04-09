// 1.
const body = document.querySelector('body');
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';
body.appendChild(title);

// 2.
const colorPalette = document.createElement('div');
colorPalette.setAttribute('id', 'color-palette');
body.appendChild(colorPalette);
const differentColors = 4;
for (let index = 1; index <= differentColors; index += 1) {
  const colorBox = document.createElement('div');
  colorBox.classList.add('color');
  const maxColorValue = 16777216;
  const digits = 6;
  let randomColor = Math.floor(Math.random() * maxColorValue).toString(16);
  if (randomColor.length < digits) {
    const zeroString = '0';
    const diff = digits - randomColor.length;
    randomColor = `${zeroString.repeat(diff)}${randomColor}`;
  }
  colorBox.style.backgroundColor = `#${randomColor}`;
  colorPalette.appendChild(colorBox);
}

// 3.
const firstColor = document.querySelector('.color');
firstColor.style.backgroundColor = 'black';

// 4.
const pixelBoard = document.createElement('div');
pixelBoard.setAttribute('id', 'pixel-board');
body.appendChild(pixelBoard);
const numOfPixels = 25;
for (let index = 1; index <= numOfPixels; index += 1) {
  const pixelBox = document.createElement('div');
  pixelBox.classList.add('pixel');
  pixelBox.style.backgroundColor = 'white';
  pixelBoard.appendChild(pixelBox);
}

// 5.
// 6.
firstColor.classList.add('selected');

// 7.
function switchColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', switchColor);

// 8.
function printColorPixel(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  let evento = event;
  evento.target.style.backgroundColor = color;
}
pixelBoard.addEventListener('click', printColorPixel);
