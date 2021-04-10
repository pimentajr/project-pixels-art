// 1.
const body = document.querySelector('body');
const title = document.createElement('h1');
title.setAttribute('id', 'title');
title.innerText = 'Paleta de Cores';
body.appendChild(title);

// 2.
// 12.
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

// 10.1
const dimensionsDiv = document.createElement('div');
dimensionsDiv.setAttribute('id', 'dimDiv');
body.appendChild(dimensionsDiv);
const boardSizeInput = document.createElement('input');
boardSizeInput.setAttribute('id', 'board-size');
boardSizeInput.setAttribute('placeholder', 'num');
boardSizeInput.setAttribute('type', 'number');
boardSizeInput.setAttribute('min', '1');
dimensionsDiv.appendChild(boardSizeInput);
const boardSizeBtn = document.createElement('button');
boardSizeBtn.setAttribute('id', 'generate-board');
boardSizeBtn.innerText = 'VQV';
dimensionsDiv.appendChild(boardSizeBtn);

// 3.
const firstColor = document.querySelector('.color');
firstColor.style.backgroundColor = 'black';

// 9.
const clearButton = document.createElement('button');
clearButton.setAttribute('id', 'clear-board');
clearButton.innerText = 'Limpar';
body.appendChild(clearButton);
function clearBoard() {
  const pixelBoxes = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoxes.length; index += 1) {
    pixelBoxes[index].style.backgroundColor = 'white';
  }
}
clearButton.addEventListener('click', clearBoard);

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
function switchSelectedColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}
colorPalette.addEventListener('click', switchSelectedColor);

// 8.
function printColorPixel(event) {
  const color = document.querySelector('.selected').style.backgroundColor;
  const evento = event;
  evento.target.style.backgroundColor = color;
  pixelBoard.style.backgroundColor = '';
}
pixelBoard.addEventListener('click', printColorPixel);

// 10.2
// 11.
const initialInput = boardSizeInput.value;
const minimum = 5;
const maximum = 50;
function generateBoard() {
  if (boardSizeInput.value === initialInput) {
    return alert('Board inválido!');
  }
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
  let rowsColumns = boardSizeInput.value;
  if (rowsColumns < minimum) { rowsColumns = minimum; }
  if (rowsColumns > maximum) { rowsColumns = maximum; }
  for (let index = 1; index <= rowsColumns * rowsColumns; index += 1) {
    const pixelBox = document.createElement('div');
    pixelBox.classList.add('pixel');
    pixelBox.style.backgroundColor = 'white';
    pixelBoard.appendChild(pixelBox);
  }
}
boardSizeBtn.addEventListener('click', generateBoard);
