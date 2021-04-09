const black = document.querySelector('.black');
const green = document.querySelector('.green');
const grey = document.querySelector('.grey');
const magenta = document.querySelector('.magenta');
const paleta = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');

function generateDiv() {
  for (let i = 0; i < 25; i += 1) {
    if (i % 5 === 0) {
      let br = document.createElement('br');
      board.appendChild(br);
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    board.appendChild(newDiv);
  }
}
generateDiv();

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

const newBoard = document.createElement('div');
let btn = document.querySelector('#generate-board');
btn.addEventListener('click', function () {
  const board = document.querySelector('#pixel-board');
  board.remove();
  newBoard.id = 'pixel-board';
  document.querySelector('.board-container').appendChild(newBoard);
  let input = document.querySelector('#board-size');
  let value = input.value;
  if (value === '') {
    alert('Board inválido!');
  }
  for (let i = 0; i < parseInt(value * value); i += 1) {
    if (i % value === 0) {
      let br = document.createElement('br');
      newBoard.appendChild(br);
    }
    let newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newBoard.appendChild(newDiv);
  }
});

newBoard.addEventListener('click', function (event) {
  const pixel = event.target;
  const itemColor = document.querySelector('.selected');
  const color = itemColor.classList[1];
  pixel.style.backgroundColor = color;
});
