// Palette parameters:
const FIXED_COLOR = 'black';
const DEFAULT_COLORS = [
  'rgb(191, 97, 106)',
  'rgb(235, 203, 139)',
  'rgb(163, 190, 140)',
];
const CURRENT_COLORS = [];
// Doesn't count the fixed color.
const NUM_OF_COLORS = DEFAULT_COLORS.length;
let randomColors;

// Pixel board parameters:
const PIXEL_BOARD = document.createElement('div');
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

function mayTogglePixelColor(clickedPixelColor, selectedColor, event) {
  if (clickedPixelColor !== selectedColor || event === 'mouseenter') {
    return selectedColor;
  }

  return 'white';
}

function fillPixel(e) {
  const clickedPixelColor = e.target.style.backgroundColor;
  const selectedColor = document.querySelector('.color.selected').style.backgroundColor;

  if (e.type === 'mouseenter' && e.buttons !== 1) {
    return;
  }

  e.target.style.backgroundColor = mayTogglePixelColor(clickedPixelColor, selectedColor, e.type);
}

function initializeBoardListeners() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('mousedown', fillPixel);
    pixels[index].addEventListener('mouseenter', fillPixel);
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
  const currentlySelectedColorBox = document.querySelector('.color.selected');

  if (targetColorBox !== currentlySelectedColorBox) {
    currentlySelectedColorBox.classList.remove('selected');
    targetColorBox.classList.add('selected');
  }
}

function initializePaletteListeners() {
  const colorBoxes = document.getElementsByClassName('color');

  for (let index = 0; index < NUM_OF_COLORS + 1; index += 1) {
    colorBoxes[index].addEventListener('click', selectColor);
  }
}

function generatePaletteWithDefaultColors() {
  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    CURRENT_COLORS[index] = DEFAULT_COLORS[index];
  }
}

// Get random number between 0 and 1, including both.
function inclusiveRandom() {
  return Math.ceil(Math.random() * 1000000000000) / 1000000000000;
}

// Get random integer between min and max, including both.
// Adapted from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
  return Math.floor(inclusiveRandom() * (max - min) + min);
}

function generatePaletteWithRandomColors() {
  let redValue;
  let greenValue;
  let blueValue;

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    redValue = getRandomInt(0, 255);
    greenValue = getRandomInt(0, 255);
    blueValue = getRandomInt(0, 255);
    CURRENT_COLORS[index] = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  }
}

function fillPaletteBoxesWithColors() {
  const colorBoxes = document.querySelectorAll('.color:not(.fixed)');

  if (randomColors === 'true') {
    generatePaletteWithRandomColors();
  } else {
    generatePaletteWithDefaultColors();
  }

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBoxes[index].style.backgroundColor = CURRENT_COLORS[index];
  }
}

function fillPaletteWithBoxes(colorPalette) {
  let colorBox;

  for (let index = 0; index < NUM_OF_COLORS; index += 1) {
    colorBox = document.createElement('div');
    colorBox.classList.add('color');
    colorPalette.appendChild(colorBox);
  }
}

function initializePalette() {
  const colorPalette = document.getElementById('color-palette');
  const fixedColorBox = document.createElement('div');

  fixedColorBox.style.backgroundColor = FIXED_COLOR;
  fixedColorBox.classList.add('color', 'fixed', 'selected');
  colorPalette.appendChild(fixedColorBox);

  fillPaletteWithBoxes(colorPalette);
  fillPaletteBoxesWithColors();
  initializePaletteListeners();
}

function validateBoardSizeInput(userBoardSideSize) {
  if (userBoardSideSize < 5) {
    return 5;
  }

  if (userBoardSideSize > 50) {
    return 50;
  }

  return userBoardSideSize;
}

function fillBoardWithUserInput() {
  let userBoardSideSize = document.getElementById('board-size').value;

  if (userBoardSideSize === '') {
    alert('Board inválido!');
    return;
  }

  userBoardSideSize = validateBoardSizeInput(userBoardSideSize);
  boardSideSize = userBoardSideSize;
  PIXEL_BOARD.innerHTML = '';

  fillBoardWithRows();
  fillRowsWithPixels();
  initializeBoardListeners();
}

function initializeBoardSizeButtonListener() {
  const boardSizeButton = document.getElementById('generate-board');
  const boardSizeUserInput = document.getElementById('board-size');

  boardSizeButton.addEventListener('click', fillBoardWithUserInput);
  boardSizeUserInput.addEventListener('input', fillBoardWithUserInput);
}

function resetSelected() {
  const fixedColorPaletteBox = document.querySelector('.color.fixed');
  const currentlySelectedColorBox = document.querySelector('.selected.color');

  if (fixedColorPaletteBox !== currentlySelectedColorBox) {
    currentlySelectedColorBox.classList.remove('selected');
    fixedColorPaletteBox.classList.add('selected');
  }
}

function updateRandomColorsCheckbox(e) {
  const defaultPaletteIndicator = document.getElementById('default-palette-indicator');
  console.log(defaultPaletteIndicator);

  if (e.target.value === 'true') {
    console.log('entered IF');
    e.target.value = 'false';
    defaultPaletteIndicator.style.display = 'block';
  } else {
    console.log('entered ELSE');
    e.target.value = 'true';
    defaultPaletteIndicator.style.display = 'none';
  }
  randomColors = e.target.value;

  fillPaletteBoxesWithColors();
  resetSelected();
  clearBoard();
}

function initializeRandomColorsCheckbox() {
  const randomColorsCheckbox = document.getElementById('random-colors');

  randomColors = randomColorsCheckbox.value;
  randomColorsCheckbox.addEventListener('input', updateRandomColorsCheckbox);
}

window.onload = () => {
  initializeRandomColorsCheckbox();
  initializePalette();
  initializePixelBoard();
  initializeClearButtonListener();
  initializeBoardSizeButtonListener();
};
