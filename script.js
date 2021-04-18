// Requisitos 2 e 3
const colorsPalette = document.querySelector('#color-palette');
const colorNames = ['black', 'green', 'blue', 'red'];

function createColorDivs() {
  for (let index = 0; index < 4; index += 1) {
    const color = document.createElement('div');
    color.className = 'color';
    color.style.backgroundColor = colorNames[index];
    colorsPalette.appendChild(color);
  }
}

createColorDivs();

// Requisito 4
const pixelBoard = document.querySelector('#pixel-board');

function pixelBoardMaker(boardSize) {
  for (let index = 0; index < boardSize; index += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let index2 = 0; index2 < boardSize; index2 += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

const boardSize = 5;
pixelBoardMaker(boardSize);

// Requisito 6
function selectBlackColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].style.backgroundColor === 'black') {
      colors[index].classList.add('selected');
    }
  }
}

window.onload = selectBlackColor;

// Requisito 7
const colorPaleteSection = document.getElementById('color-palette');

function changeClassSelected(event) {
  const clickedColor = event;
  const colors = colorPaleteSection.children;
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].className !== 'color') {
      colors[index].className = 'color';
    }
  }
  if (clickedColor.target.classList.contains('color')) {
    clickedColor.target.classList.add('selected');
  }
}

colorPaleteSection.addEventListener('click', changeClassSelected);

// Requisito 8
function paintPixel(event) {
  const cell = event;
  const selectedColor = document.querySelector('.selected');
  if (cell.target.className === 'pixel') {
    cell.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', paintPixel);

// Requisito 9
const bunttonContainer = document.getElementById('buttons-container');
bunttonContainer.style.textAlign = 'center';
bunttonContainer.style.padding = '10px';

const clearButton = document.createElement('button');
clearButton.classList.add('button', 'is-link', 'm-4');
clearButton.id = 'clear-board';
clearButton.innerText = 'Limpar';
bunttonContainer.appendChild(clearButton);

function clearPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearPixels);

// Requisito 10
const inputNumber = document.createElement('input');
inputNumber.classList.add('input', 'is-link');
inputNumber.id = 'board-size';
inputNumber.value = '';
inputNumber.type = 'number';
inputNumber.min = 1;
inputNumber.placeholder = 'Insira o tamanho desejado para o quadro de pixels:';
bunttonContainer.appendChild(inputNumber);

const generateBoardButton = document.createElement('button');
generateBoardButton.id = 'generate-board';
generateBoardButton.innerText = 'VQV';
generateBoardButton.classList.add('button', 'is-success', 'm-4');
bunttonContainer.appendChild(generateBoardButton);

function verifyInput() {
  if (inputNumber.value === '') {
    alert('Board inválido!');
  }
}

function remakePixelBoard() {
  const value = parseInt(inputNumber.value, 10);
  verifyInput();

  if (value < 5) {
    pixelBoard.innerHTML = '';
    pixelBoardMaker(5);
  } else if (value > 50) {
    pixelBoard.innerHTML = '';
    pixelBoardMaker(50);
  } else {
    pixelBoard.innerHTML = '';
    pixelBoardMaker(value);
  }
}

generateBoardButton.addEventListener('click', remakePixelBoard);
