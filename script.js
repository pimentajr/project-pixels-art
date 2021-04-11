const boardElement = document.getElementById('pixel-board');
const clearBoardButton = document.getElementById('clear-board');
const generateBoardButton = document.getElementById('generate-board');

function setSelectedClass(event) {
  const selectedElement = document.querySelector('.selected');
  selectedElement.classList.remove('selected');

  const newSelection = event.target;
  newSelection.classList.add('selected');
}

function paintPixel(event) {
  const activeSelector = document.querySelector('.selected');
  const color = getComputedStyle(activeSelector).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function clearAllPixels() {
  const allPixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

function addNewPixels(parentElement, n) {
  for (let index = 1; index <= n; index += 1) {
    const newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    parentElement.appendChild(newPixel);
  }
}

function addNewPixelRows(parentElement, n) {
  for (let rowIndex = 1; rowIndex <= n; rowIndex += 1) {
    const newRow = document.createElement('div');
    newRow.classList.add('board-row');
    addNewPixels(newRow, n);
    parentElement.appendChild(newRow);
  }
}

function getValidBoardSize() {
  const userInput = document.getElementById('board-size').value;
  if (!userInput) {
    alert('Board inválido!');
    return null;
  }
  if (userInput < 5) {
    return 5;
  }
  if (userInput > 50) {
    return 50;
  }
  return userInput;
}

function generateBoard() {
  const boardSize = getValidBoardSize();
  if (boardSize) {
    boardElement.querySelectorAll('*').forEach((e) => e.remove());
    boardElement.style.width = `${boardSize * 40}px`;
    addNewPixelRows(boardElement, boardSize);
  }
}

function makeBlackPaletteColor() {
  const blackSelector = document.createElement('div');
  blackSelector.classList.add('color');
  blackSelector.classList.add('selected');
  blackSelector.style.backgroundColor = '#000';
  return blackSelector;
}

function makeRandomPaletteColor() {
  const newItem = document.createElement('div');
  newItem.classList.add('color');
  const randomHexColor = Math.floor(Math.random() * 16777215).toString(16);
  newItem.style.backgroundColor = `#${randomHexColor}`;
  return newItem;
}

function generateColorPalette() {
  const paletteElement = document.getElementById('color-palette');
  paletteElement.appendChild(makeBlackPaletteColor());
  paletteElement.appendChild(makeRandomPaletteColor());
  paletteElement.appendChild(makeRandomPaletteColor());
  paletteElement.appendChild(makeRandomPaletteColor());
  const selectorElements = document.getElementsByClassName('color');
  for (let index = 0; index < selectorElements.length; index += 1) {
    selectorElements[index].addEventListener('click', setSelectedClass);
  }
}

generateColorPalette();

boardElement.addEventListener('click', paintPixel);

clearBoardButton.addEventListener('click', clearAllPixels);

generateBoardButton.addEventListener('click', generateBoard);
