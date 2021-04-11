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
  const colorDiv = document.querySelector('.selected');
  if (event.target.id !== 'color-palette') {
    colorDiv.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function selectColor() {
  colorPaleteSection.addEventListener('click', changeClassSelected);
}

selectColor();

// Requisito 8
