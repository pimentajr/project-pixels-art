const pixelBoard = document.getElementById('pixel-board');

function selectInitialColor() {
  document.getElementById('color-1').className = 'color selected';
}

function setSelectedColor(event) {
  const palette = document.getElementsByClassName('color');

  for (let index = 0; index < palette.length; index += 1) {
    const object = palette[index];
    if (object === event.target) {
      object.classList.add('selected');
    } else {
      object.classList.remove('selected');
    }
  }
}

function pencil(event) {
  const colorElement = document.querySelector('.selected');
  const color = getComputedStyle(colorElement).backgroundColor;
  const pixel = event.target;
  pixel.style.backgroundColor = color;
}

function clearBoard() {
  const boardItems = document.getElementsByClassName('pixel');
  for (let index = 0; index < boardItems.length; index += 1) {
    const element = boardItems[index];
    element.style.backgroundColor = 'white';
  }
}

function getBoardSize() {
  const boardSize = document.getElementById('board-size').value;
  if (boardSize === '') {
    return null;
  }
  if (boardSize < 5) {
    return 5;
  }
  if (boardSize > 50) {
    return 50;
  }
  return boardSize;
}

function generateLines(size) {
  for (let index = 0; index < size; index += 1) {
    const line = document.createElement('div');
    line.className = 'pixel-line';
    pixelBoard.appendChild(line);
  }
}

function generateCells(size) {
  const lines = document.getElementsByClassName('pixel-line');
  for (let index = 0; index < lines.length; index += 1) {
    const currentLine = lines[index];
    for (let index2 = 0; index2 < size; index2 += 1) {
      const cell = document.createElement('div');
      cell.className = 'pixel';
      currentLine.appendChild(cell);
    }
  }
}

function generateBoard() {
  const size = getBoardSize();
  if (size === null) {
    window.alert('Board inválido!');
    return;
  }
  pixelBoard.innerHTML = '';
  generateLines(size);
  generateCells(size);
}

function createRandomColor() {
  const colorParameter = [];
  for (let index = 0; index < 3; index += 1) {
    const parameter = Math.ceil(Math.random() * 255);
    colorParameter.push(parameter);
  }
  const color = `rgb(${colorParameter[0]}, ${colorParameter[1]}, ${colorParameter[2]})`;
  return color;
}

function setInitialPalette() {
  for (let index = 2; index <= 4; index += 1) {
    const paletteItem = document.getElementById(`color-${index}`);
    const randomColor = createRandomColor();
    paletteItem.style.backgroundColor = randomColor;
  }
}

function pageStarter() {
  selectInitialColor();
  setInitialPalette();
  document
    .getElementById('color-palette')
    .addEventListener('click', setSelectedColor);
  pixelBoard.addEventListener('click', pencil);
  document.getElementById('clear-board').addEventListener('click', clearBoard);
  document
    .getElementById('generate-board')
    .addEventListener('click', generateBoard);
}

window.onload = pageStarter;
