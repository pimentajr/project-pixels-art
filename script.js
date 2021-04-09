const black = document.querySelector('.black');
const green = document.querySelector('.green');
const grey = document.querySelector('.grey');
const magenta = document.querySelector('.magenta');
const paleta = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');

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
