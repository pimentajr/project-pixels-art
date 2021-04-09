const boardSize = 5;
const selectedClass = 'selected';
const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const buttonClearBoard = document.getElementById('clear-board');
const inputBoardSize = document.getElementById('board-size');
const buttonGenerateBoard = document.getElementById('generate-board');
const pixelBoard = document.getElementById('pixel-board');

/*
  Ideia de gerar as cores aleatorias do seguinte link.
  Source: https://stackoverflow.com/questions/58325771/how-to-generate-random-hex-string-in-javascript
*/
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
  const selectedColors = document.getElementsByClassName(selectedClass);

  if (selectedColors.length > 0) {
    for (let index = 0; index < selectedColors.length; index += 1) {
      selectedColors[index].classList.remove(selectedClass);
    }
  }

  target.classList.add(selectedClass);
}

function colorPaletteClickHandler({ target }) {
  if (target.classList.contains('color') && !target.classList.contains(selectedClass)) {
    setSelectedColor(target);
  }
}

function setColorElementClickEvent() {
  colorPalette.addEventListener('click', colorPaletteClickHandler);
}

function paintPixelElementHandler({ target }) {
  if (target.classList.contains('pixel')) {
    const { color } = document.getElementsByClassName(selectedClass)[0].dataset;
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
  buttonClearBoard.addEventListener('click', clearBoard);
}

function newBoardSize() {
  const newSize = inputBoardSize.value;
  createBoard(newSize);
}

function setGenerateBoardClickEvent() {
  buttonGenerateBoard.addEventListener('click', newBoardSize);
}

function onPageLoad() {
  createColors();
  createBoard(boardSize);
  setSelectedColor(colorPalette.firstElementChild);
  setColorElementClickEvent();
  setPixelClickEvent();
  setClearBoardClickEvent();
  setGenerateBoardClickEvent();
}

window.onload = onPageLoad;
