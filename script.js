const colorPalette = document.querySelector('#color-palette');
const paletteColors = colorPalette.children;
const colors = ['black', 'red', 'green', 'blue'];

function createColorPalette() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    paletteColors[index].innerHTML = colors[index];
    paletteColors[index].style.backgroundColor = colors[index];
    paletteColors[index].style.color = colors[index];
  }
}

createColorPalette();

const pixelBoard = document.querySelector('#pixel-board');
const boardSizeInput = document.querySelector('#board-size');
const generateBoardButton = document.querySelector('#generate-board');

function fillPixelBoard(boardSize) {
  for (let lineIndex = 0; lineIndex < boardSize; lineIndex += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);

    for (let pixelIndex = 0; pixelIndex < boardSize; pixelIndex += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
      line.appendChild(pixel);
    }
  }
}

fillPixelBoard(5);

function generateBoard() {
  boardSize = boardSizeInput.value;

  for (let index = pixelBoard.children.length - 1; index >= 0; index -= 1) {
    pixelBoard.children[index].remove();
  }

  if (boardSize < 5) {
    alert('Board inválido!');
  } else {
    fillPixelBoard(boardSize);
  }
}

generateBoardButton.addEventListener('click', generateBoard);

function iniciateColorPalette() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    if (paletteColors[index].style.backgroundColor === 'black') {
      paletteColors[index].classList.add('selected');
    }
  }
}

iniciateColorPalette();

function removeSelected() {
  for (let index = 0; index < paletteColors.length; index += 1) {
    if (paletteColors[index].className.includes('selected')) {
      paletteColors[index].classList.remove('selected');
    }
  }
}

function selectColor(event) {
  if (event.target.id !== 'color-palette') {
    removeSelected();
    event.target.classList.add('selected');
  }
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  if (event.target.className === 'pixel') {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  }
}

pixelBoard.addEventListener('click', paintPixel);

const clearButton = document.querySelector('#clear-board');
const pixels = document.querySelectorAll('.pixel');

function clearBoard() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

clearButton.addEventListener('click', clearBoard);
