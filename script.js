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

// Requisito 5
function selectBlackColor() {
  const colorPalette = document.querySelector('#color-palette');
  colorPalette.firstElementChild.classList.add('selected');
}

window.onload = selectBlackColor;
