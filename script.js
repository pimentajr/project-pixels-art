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

function PixelBoardMaker(boardSize) {
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

PixelBoardMaker(5);

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
  clickedColor.target.classList.add('selected');
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
const bunttonContainer = document.getElementById('clear-btn-container');
bunttonContainer.style.textAlign = 'center';
bunttonContainer.style.padding = '10px';
const clearButton = document.createElement('button');
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
