const black = document.querySelector('.black');
const green = document.querySelector('.green');
const grey = document.querySelector('.grey');
const magenta = document.querySelector('.magenta');
const paleta = document.querySelector('#color-palette');

black.className = 'color black selected';
paleta.addEventListener('click', function (event) {
  const color = event.target;
  black.classList.remove('selected');
  green.classList.remove('selected');
  grey.classList.remove('selected');
  magenta.classList.remove('selected');
  const colorName = color.classList[1];
  color.className = `color ${colorName} selected`;
  return colorName;
});

//  ---------------------
const board = document.querySelector('#pixel-board');

board.addEventListener('click', function (event) {
  const pixel = event.target;
  const itemColor = document.querySelector('.selected');
  const color = itemColor.classList[1];
  pixel.style.backgroundColor = color;
});

const clear = document.querySelector('#clear-board');

clear.addEventListener('click', function () {
  const pixels = document.querySelectorAll('.pixel');
  for (const pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});

//  ---------------------- EX 10
const button = document.querySelector('#generate-board');
const size = document.querySelector('#board-size');

button.addEventListener('click', function () {
  const value = size.value;
  if (value === '') {
    alert('Board inválido');
  }
  board.remove();
  const newBoard = document.createElement('div');
  newBoard.id = 'pixel-board';
  document.body.appendChild(newBoard);
  for (let i = 0; i < parseInt(value); i += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    newBoard.appendChild(pixel);
  }
});
