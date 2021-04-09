const colorPalette = document.querySelector('#color-palette');
const colors = ['black', 'blue', 'yellow', 'magenta'];
for (let index = 0; index < 4; index += 1) {
  const colorBox = document.createElement('div');
  colorBox.className = 'color';
  if (index === 0) {
    colorBox.classList.add('selected');
  }
  colorBox.style.backgroundColor = colors[index];
  colorPalette.appendChild(colorBox);
}

const pixelBoard = document.querySelector('#pixel-board');
let lines = 5;
let columns = 5;
for (let lineIndex = 0; lineIndex < lines; lineIndex += 1) {
  const newLine = document.createElement('div');
  pixelBoard.appendChild(newLine);
  for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
    const newPixel = document.createElement('div');
    newPixel.className = 'pixel';
    newLine.appendChild(newPixel);
  }
}

pixelBoard.style.maxWidth = `${(columns * 40) + (columns * 2)}px`;

function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.classList.remove('selected');
  event.target.classList.add('selected');
}

colorPalette.addEventListener('click', selectColor);

function paintPixel(event) {
  const selectedPixel = event.target;
  const selectedColor = document.querySelector('.selected');
  selectedPixel.style.backgroundColor = selectedColor.style.backgroundColor;
}

pixelBoard.addEventListener('click', paintPixel);

const resetButton = document.querySelector('#clear-board');
function resetBoard() {
  for (let lineIndex = 0; lineIndex < lines; lineIndex += 1) {
    const currentLine = pixelBoard.childNodes[lineIndex];
    for (let columnIndex = 0; columnIndex < columns; columnIndex += 1) {
      currentLine.childNodes[columnIndex].style.backgroundColor = 'white';
    }
  }
}

resetButton.addEventListener('click', resetBoard);

const generateBoardBtn = document.querySelector('#generate-board');

const boardSize = document.querySelector('#board-size');

function removeCurrentBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.firstChild.remove();
  }
}

function createBoard(newLines, newColumns) {
  removeCurrentBoard();
  for (let lineIndex = 0; lineIndex < newLines; lineIndex += 1) {
    const newLine = document.createElement('div');
    pixelBoard.appendChild(newLine);
    for (let columnIndex = 0; columnIndex < newColumns; columnIndex += 1) {
      const newPixel = document.createElement('div');
      newPixel.className = 'pixel';
      newLine.appendChild(newPixel);
    }
  }
  boardSize.value = '';
  lines = newLines;
  columns = newColumns;
  pixelBoard.style.maxWidth = `${(columns * 40) + (columns * 2)}px`;
}

function generateBoard() {
  const input = boardSize.value;
  if (input < 0 || input.replace(/\s/g, '') === '') {
    alert('Board inválido!');
  } else if (input < 5) {
    createBoard(5, 5);
  } else if (input > 50) {
    createBoard(50, 50);
  } else {
    createBoard(input, input);
  }
}

generateBoardBtn.addEventListener('click', generateBoard);
