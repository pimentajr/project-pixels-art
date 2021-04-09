let black = document.querySelector('.black');
let green = document.querySelector('.green');
let grey = document.querySelector('.grey');
let magenta = document.querySelector('.magenta');
let paleta = document.querySelector('#color-palette');

black.className = 'color black selected';

paleta.addEventListener('click', function color(event) {
  let color = event.target;
  black.classList.remove('selected');
  green.classList.remove('selected');
  grey.classList.remove('selected');
  magenta.classList.remove('selected');
  let colorName = color.classList[1];
  color.className = 'color' + ' ' + colorName + ' selected';
  return colorName;
});

//  ---------------------
let board = document.querySelector('#pixel-board');

board.addEventListener('click', function (event) {
  let pixel = event.target;
  let itemColor = document.querySelector('.selected');
  let color = itemColor.classList[1];
  pixel.style.backgroundColor = color;
});

let clear = document.querySelector('#clear-board');

clear.addEventListener('click', function () {
  let pixels = document.querySelectorAll('.pixel');
  for (let pixel of pixels) {
    pixel.style.backgroundColor = 'white';
  }
});
