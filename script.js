const black = document.querySelector('.black');
const color2 = document.querySelector('.black').nextElementSibling;
const color3 = color2.nextElementSibling;
const color4 = color3.nextElementSibling;

function generateRandomColor() {
  const arr = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'brown',
    'grey',
    'aliceBlue',
    'aquamarine',
    'beige',
    'bisque',
    'blanchedAlmond',
    'blueViolet',
    'burlyWood',
    'cadetBlue',
    'chartreuse',
  ];
  const randomNumber = Math.round(Math.random() * 15);
  return arr[randomNumber];
}

color2.className += ` ${generateRandomColor()}`;
color3.className += ` ${generateRandomColor()}`;
color4.className += ` ${generateRandomColor()}`;

const paleta = document.querySelector('#color-palette');
const board = document.querySelector('#pixel-board');

function generateDiv() {
  for (let i = 0; i < 25; i += 1) {
    if (i % 5 === 0) {
      const br = document.createElement('br');
      board.appendChild(br);
    }
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    board.appendChild(newDiv);
  }
}
generateDiv();

black.className = 'color black selected';
paleta.addEventListener('click', (event) => {
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

board.addEventListener('click', (event) => {
  const pixel = event.target;
  const itemColor = document.querySelector('.selected');
  const color = itemColor.classList[1];
  pixel.style.backgroundColor = color;
});

const clear = document.querySelector('#clear-board');
clear.addEventListener('click', () => {
  const pixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
});

//  ---------------------- EX 10

const newBoard = document.createElement('div');
newBoard.id = 'pixel-board';
const btn = document.querySelector('#generate-board');
const input = document.querySelector('#board-size');

btn.addEventListener('click', () => {
  board.remove();
  document.querySelector('.board-container').appendChild(newBoard);
  let { value } = input;
  checkValue(value);
  const numberValued = valued(value);
  const valueXvalue = Number(numberValued * numberValued);
  for (let i = 0; i < valueXvalue; i += 1) {
    if (i % numberValued === 0) {
      const br = document.createElement('br');
      newBoard.appendChild(br);
    }
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newBoard.appendChild(newDiv);
  }
});

function checkValue(value) {
  if (value === '') {
    return alert('Board inválido');
  }
}

function valued(value) {
  if (value < 5) {
    return 5;
  }
  if (value > 50) {
    return 50;
  } else {
    return value;
  }
}
