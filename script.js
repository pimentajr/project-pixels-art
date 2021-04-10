// Palette parameters:
const FIXED_COLOR = 'black';
const COLORS = [
  'rgb(191, 97, 106)',
  'rgb(235, 203, 139)',
  'rgb(163, 190, 140)',
];
// Doesn't count the fixed color.
const NUM_OF_COLORS = COLORS.length;

// Pixel board parameters:
const PIXEL_BOARD = document.createElement('section');
let boardSideSize = 5;

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function initializeClearButtonListener() {
  const clearButton = document.getElementById('clear-board');

  clearButton.addEventListener('click', clearBoard);
}

function fillPixel(e) {
  const clickedPixel = e.target;
  const selectedColor = document.querySelector('.color.selected').style.backgroundColor;

  if (clickedPixel.style.backgroundColor !== selectedColor) {
    clickedPixel.style.backgroundColor = selectedColor;
  } else {
    clickedPixel.style.backgroundColor = 'white';
  }
}

function initializeBoardListeners() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', fillPixel);
  }
}

function fillRowsWithPixels() {
  const pixelRows = document.getElementsByClassName('pixel-row');
  let pixel;

  for (let rowIndex = 0; rowIndex < boardSideSize; rowIndex += 1) {
    for (let colIndex = 0; colIndex < boardSideSize; colIndex += 1) {
      pixel = document.createElement('div');
      pixel.classList.add('pixel');
      pixelRows[rowIndex].appendChild(pixel);
    }
  }
}

function fillBoardWithRows() {
  let pixelRow;

  for (let index = 0; index < boardSideSize; index += 1) {
    pixelRow = document.createElement('div');
    pixelRow.classList.add('pixel-row');
    PIXEL_BOARD.appendChild(pixelRow);
  }
}

function initializePixelBoard() {
  const contentContainer = document.querySelector('.content-container');

  PIXEL_BOARD.id = 'pixel-board';
  contentContainer.appendChild(PIXEL_BOARD);

  fillBoardWithRows();
  fillRowsWithPixels();
  initializeBoardListeners();
}

function selectColor(e) {
  const targetColorBox = e.target;
  const currentlySelectedColor = document.querySelector('.color.selected');

  if (targetColorBox !== currentlySelectedColor) {
    currentlySelectedColor.classList.remove('selected');
    targetColorBox.classList.add('selected');
  }
}

function initializePaletteListeners() {
  const colorBoxes = document.getElementsByClassName('color');

  for (let index = 0; index < NUM_OF_COLORS + 1; index += 1) {
    colorBoxes[index].addEventListener('click', selectColor);
  }
}

function setColors() {
  const colorBoxes = document.querySelectorAll('.color:not(.fixed)');

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBoxes[index].style.backgroundColor = COLORS[index];
  }
}

function setFixedColor() {
  const fixedColorBox = document.querySelector('.color.fixed');

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
}

function initializePalette() {
  const colorPalette = document.getElementById('color-palette');
  const fixedColorBox = document.createElement('div');
  let colorBox;

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
  fixedColorBox.classList.add('color', 'fixed', 'selected');
  colorPalette.appendChild(fixedColorBox);

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBox = document.createElement('div');
    colorBox.classList.add('color');
    colorBox.style.backgroundColor = COLORS[index];
    colorPalette.appendChild(colorBox);
  }

  setFixedColor();
  setColors();
  initializePaletteListeners();
}

function fillBoardWithUserInput() {
  const userBoardSideSize = document.getElementById('board-size').value;

  if (userBoardSideSize === '') {
    alert('Board inválido!');
    return;
  }

  boardSideSize = userBoardSideSize;
  PIXEL_BOARD.innerHTML = '';

  fillBoardWithRows();
  fillRowsWithPixels();
  initializeBoardListeners();
}

function initializeBoardSizeButtonListener() {
  const boardSizeButton = document.getElementById('board-size-button');

  boardSizeButton.addEventListener('click', fillBoardWithUserInput);
}

window.onload = () => {
  initializePalette();
  initializePixelBoard();
  initializeClearButtonListener();
  initializeBoardSizeButtonListener();
};
