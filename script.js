const boardSize = 5;
const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');
const clearButton = document.getElementById('clear-board');
const makeBoardButton = document.getElementById('generate-board');
const classSelected = 'selected';
const paletteColor = document.getElementById('color-palette');
const inputBoardSize = document.getElementById('board-size');

function generateRandomHexColor() {
  const array = [...Array(6)];
  const hexArray = array.map(() => (Math.floor(Math.random() * 16).toString(16)));
  return hexArray.join('') === '000000' ? '000001' : hexArray.join('');
}

function createColors() {
  for (let index = 0; index < colors.length; index += 1) {
    if (index === 0) {
      colors[index].setAttribute('style', `background-color: ${colors[index].dataset.color};`);
    } else {
      const randomHexColor = `#${generateRandomHexColor()}`;
      colors[index].setAttribute('style', `background-color: ${randomHexColor};`);
      colors[index].setAttribute('data-color', randomHexColor);
    }
  }
}

function checkBoardSize(size) {
  if (size < 5 || size > 50) return size < 5 ? 5 : 50;
  return size;
}

function createBoard(size) {
  if (!size) return alert('Board inválido!');

  let newSize = size;
  newSize = checkBoardSize(newSize);
  pixelBoard.innerHTML = '';

  const div = document.createElement('div');
  for (let index = 0; index < newSize; index += 1) {
    const row = div.cloneNode();
    row.classList.add('table-row');
    const cell = div.cloneNode();
    cell.classList.add('pixel');
    for (let secondIndex = 0; secondIndex < newSize; secondIndex += 1) {
      const newCell = cell.cloneNode();
      row.appendChild(newCell);
    }
    pixelBoard.appendChild(row);
  }
}

function setSelectedColor(target) {
  const selectedColors = document.getElementsByClassName(classSelected);

  if (selectedColors.length > 0) {
    for (let index = 0; index < selectedColors.length; index += 1) {
      selectedColors[index].classList.remove(classSelected);
    }
  }

  target.classList.add(classSelected);
}

function colorPaletteClickHandler({ target }) {
  if (target.classList.contains('color') && !target.classList.contains(classSelected)) {
    setSelectedColor(target);
  }
}

function setColorElementClickEvent() {
  paletteColor.addEventListener('click', colorPaletteClickHandler);
}

function paintPixelElementHandler({ target }) {
  if (target.classList.contains('pixel')) {
    const { color } = document.getElementsByClassName(classSelected)[0].dataset;
    target.setAttribute('style', `background-color: ${color};`);
  }
}

function setPixelClickEvent() {
  pixelBoard.addEventListener('click', paintPixelElementHandler);
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

function setClearBoardClickEvent() {
  clearButton.addEventListener('click', clearBoard);
}

function newBoardSize() {
  const newSize = inputBoardSize.value;
  createBoard(newSize);
}

function setGenerateBoardClickEvent() {
  makeBoardButton.addEventListener('click', newBoardSize);
}

function onPageLoad() {
  createColors();
  createBoard(boardSize);
  setSelectedColor(paletteColor.firstElementChild);
  setColorElementClickEvent();
  setPixelClickEvent();
  setClearBoardClickEvent();
  setGenerateBoardClickEvent();
}

window.onload = onPageLoad;