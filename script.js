let selectedColor = 'black';

function setSelectedColor(color) {
  selectedColor = color;
  console.log(selectedColor);
}
// quesito 1
const elementH1 = document.getElementById('title');
elementH1.innerText = 'Paleta de Cores';

function resetSelected() {
  const palletes = document.getElementsByClassName('color');
  for (let index = 0; index < palletes.length; index += 1) {
    palletes[index].className = 'color';
  }
}

function generateColors() {
  const colors = ['black'];
  const palette = ['blue', 'orange', 'green', 'yellow',
    'pink', 'brown', 'grey', 'red', 'cyan', 'GoldenRod',
    'Indigo', 'magenta', 'orange', 'violet', 'Yellowgreen', 'lightpink'];
  do {
    const colorIndex = getRandomIntInclusive(0, palette.length - 1);
    const color = palette[colorIndex];
    if (colors.includes(color) === false) {
      colors.push(color);
    }
  } while (colors.length < 4);
  return colors;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// quesito 2
function createSquare(colorIndex) {
  const colors = generateColors();
  const palette = document.createElement('div');
  palette.style.backgroundColor = colors[colorIndex];
  palette.className = 'color';
  palette.addEventListener('click', () => {
    setSelectedColor(colors[colorIndex]);
    resetSelected();
    palette.className = 'color selected';
  });
  if (colorIndex === 0) {
    palette.className = 'color selected';
  }
  return palette;
}

function createPalettes(size) {
  const allPalettes = document.getElementById('color-palette');
  for (let index = 0; index < size; index += 1) {
    allPalettes.appendChild(createSquare(index));
  }
}

// quesito 3
function createSquareboard() {
  const squareBoard = document.createElement('div');
  squareBoard.className = 'pixel';
  squareBoard.addEventListener('click', () => {
    squareBoard.style.backgroundColor = selectedColor;
  });
  return squareBoard;
}

function createRowBoard(size) {
  const row = document.createElement('div');
  for (let index = 0; index < size; index += 1) {
    row.appendChild(createSquareboard());
  }
  return row;
}
// quesito 4
function createBoard(boardSize) {
  const mainBoard = document.getElementById('pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    mainBoard.appendChild(createRowBoard(boardSize));
  }
}
function resetSquareBoardColors() {
  const squareBoards = document.getElementsByClassName('pixel');
  for (let i = 0; i < squareBoards.length; i += 1) {
    squareBoards[i].style.backgroundColor = 'white';
  }
}

function buildButtonEvents() {
  const buttonClearBoard = document.getElementById('clear-board');
  buttonClearBoard.addEventListener('click', resetSquareBoardColors);
  const buttonCreateBoard = document.getElementById('generate-board');
  buttonCreateBoard.addEventListener('click', createNewBoard);
}

function createNewBoard() {
  const inputBoardSize = document.getElementById('board-size');
  let boardSize = inputBoardSize.value;
  if (validateBoardValue(boardSize)) {
    removeBoard();
    boardSize = generateLimit(boardSize);
    createBoard(boardSize);
    return;
  }
  alert('Board inválido!');
}

function removeBoard() {
  const pixelBoard = document.getElementById('pixel-board');
  pixelBoard.innerHTML = '';
}

function validateBoardValue(value) {
  if (value.trim().length === 0) {
    return false;
  }
  return true;
}

function generateLimit(value) {
  if (value < 5) {
    return 5;
  }
  if (value > 50) {
    return 50;
  }
  return value;
}

function buildAll() {
  createPalettes(4);
  createBoard(5);
  buildButtonEvents();
}
buildAll();
