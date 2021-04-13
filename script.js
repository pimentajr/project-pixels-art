let selectedColor = 'black';

function setSelectedColor(color){
  selectedColor = color;
  console.log(selectedColor);
}
// quesito 1
let elementH1 = document.getElementById('title');
elementH1.innerText = 'Paleta de Cores';

function resetSelected() {
  let palletes = document.getElementsByClassName('color');
  for (let index = 0; index < palletes.length; index += 1) {
    palletes[index].className = 'color';
  }
}

function generateColors () {
  const colors = ['black'];
  const palette = ['yellow','green', 'blue', 'magenta', 'grey', 'pink', 'purple', 'brown', 'cyan'];
  do {
    const colorIndex = getRandomIntInclusive(0, palette.length - 1);
    colors.push(palette[colorIndex]);
  } while (colors.length < 4)
  return colors;
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// quesito 2
function createSquare(colorIndex) {
  let colors = generateColors();
  let palette = document.createElement('div');
  palette.style.backgroundColor = colors[colorIndex];
  palette.className = 'color';
  palette.addEventListener('click', function () {
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
  let allPalettes = document.getElementById('color-palette');
  for (let index = 0; index < size; index += 1) {
    allPalettes.appendChild(createSquare(index));
  }
}

// quesito 3
function createSquareboard() {
  let squareBoard = document.createElement('div');
  squareBoard.className = 'pixel';
  squareBoard.addEventListener('click', function () {
    squareBoard.style.backgroundColor = selectedColor;
  });
  return squareBoard;
}

function createRowBoard(size) {
  let row = document.createElement('div');
  for (let index = 0; index < size; index += 1) {
    row.appendChild(createSquareboard());
  }
  return row;
}
// quesito 4
function createBoard(boardSize) {
  let mainBoard = document.getElementById('pixel-board');
  for (let index = 0; index < boardSize; index += 1) {
    mainBoard.appendChild(createRowBoard(boardSize));
  }
}
function resetSquareBoardColors () {
  let squareBoards = document.getElementsByClassName('pixel');
  for (let i = 0; i < squareBoards.length; i += 1) {
    squareBoards[i].style.backgroundColor = 'white';
  }
}

function buildButtonEvents () {
  let buttonClearBoard = document.getElementById('clear-board');
  buttonClearBoard.addEventListener('click', resetSquareBoardColors);
  
  let buttonCreateBoard = document.getElementById('generate-board');
  buttonCreateBoard.addEventListener('click', createNewBoard);
}

function createNewBoard () {
  let inputBoardSize = document.getElementById('board-size');
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
