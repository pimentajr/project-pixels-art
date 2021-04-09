const black = document.querySelector('.black');
const color2 = document.querySelector('.black').nextElementSibling;
const color3 = color2.nextElementSibling;
const color4 = color3.nextElementSibling;

function generateRandomColor() {
  const arr = ['red', 'blue', 'green', 'pink', 'yellow', 'brown', 'grey'];
  const randomNumber = Math.round(Math.random() * 6);
  return arr[randomNumber];
}

color2.className += ` ${generateRandomColor()}`;
color3.className += ` ${generateRandomColor()}`;
color4.className += ` ${generateRandomColor()}`;

const magenta = document.querySelector('.magenta');
const paleta = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');

function generateDiv() {
  for (let i = 0; i < 25; i += 1) {
    if (i % 5 === 0) {
      const br = document.createElement('br');
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
  color2.classList.remove('selected');
  color3.classList.remove('selected');
  color4.classList.remove('selected');
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
const btn = document.querySelector('#generate-board');

btn.addEventListener('click', function () {
  board.remove();
  newBoard.id = 'pixel-board';
  document.querySelector('.board-container').appendChild(newBoard);
  const input = document.querySelector('#board-size');
  const value = input.value;

  if (value === '') {
    alert('Board inválido!');
  }

  if (value < 5) {
    value = 5;
  }

  if (value > 50) {
    value = 50;
  }

  for (let i = 0; i < parseInt(value * value); i += 1) {
    if (i % value === 0) {
      const br = document.createElement('br');
      newBoard.appendChild(br);
    }
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newBoard.appendChild(newDiv);
  }
});
