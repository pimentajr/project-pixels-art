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

// quesito 2
function createSquare(colorIndex) {
  let colors = ['black', 'red', 'yellow', 'green'];
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
function createBoard() {
  let mainBoard = document.getElementById('pixel-board');
  for (let index = 0; index < 5; index += 1) {
    mainBoard.appendChild(createRowBoard(5));
  }
}

function buildAll() {
  createPalettes(4);
  createBoard();
}

buildAll();
