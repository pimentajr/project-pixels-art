const pixelBoard = document.getElementById('pixel-board');
const colorPalette = document.getElementById('color-palette');
const clearBtn = document.getElementById('clear-board');
const addBtn = document.getElementById('generate-board');
const firstRandomColor = document.getElementById('first-random');
const secondRandomColor = document.getElementById('second-random');
const thirdRandomColor = document.getElementById('third-random');
let redRepeated = false;
let greenRepeated = false;
let blueRepeated = false;
let colorToPaint = document.getElementsByClassName('selected')[0];

function generateRandomNumber() {
  return Math.floor(Math.random() * 3);
}

function generateColor() {
  while (1) {
    const number = generateRandomNumber();
    if (number === 0 && redRepeated === false) {
      redRepeated = true;
      return 'red';
    }
    if (number === 1 && greenRepeated === false) {
      greenRepeated = true;
      return 'green';
    }
    if (number === 2 && blueRepeated === false) {
      blueRepeated = true;
      return 'blue';
    }
  }
}
function assignColor(randomColor) {
  randomColor.classList.add(generateColor());
}
function createColorPalette() {
  assignColor(firstRandomColor);
  assignColor(secondRandomColor);
  assignColor(thirdRandomColor);
  redRepeated = false;
  greenRepeated = false;
  blueRepeated = false;
}
function createPixels(line, diagonal) {
  for (let column = 1; column <= diagonal; column += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    pixel.classList.add('empty');
    line.appendChild(pixel);
  }
}
function createRows(diagonal) {
  for (let row = 1; row <= diagonal; row += 1) {
    const line = document.createElement('div');
    line.className = 'line';
    pixelBoard.appendChild(line);
    createPixels(line, diagonal);
  }
}

createRows(5);
createColorPalette();

function deletePixelBoard() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function selectColor(event) {
  colorToPaint.classList.remove('selected');
  colorToPaint = event.target;
  colorToPaint.classList.add('selected');
}
colorPalette.addEventListener('click', selectColor);

function changeColor(event) {
  const pixel = event.target;
  pixel.className = 'pixel';
  pixel.classList.add(colorToPaint.classList[1]);
}
pixelBoard.addEventListener('click', changeColor);

function clearPixels() {
  const pixels = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].className = 'pixel empty';
  }
}
clearBtn.addEventListener('click', clearPixels);

function setInputAttributes() {
  const input = document.getElementsByTagName('input');
  input.min = 5;
  input.max = 50;
}
setInputAttributes();

function makeNewPixelBoard(diagonal) {
  deletePixelBoard();
  createRows(diagonal);
}

function verifyIfInputIsWithinRange(inputTest) {
  let diagonal = parseInt(inputTest, 10);
  if (diagonal < 5) diagonal = 5;
  if (diagonal > 50) diagonal = 50;
  makeNewPixelBoard(diagonal);
}
function verifyIfInputIsEmpty(inputTest) {
  if (inputTest === '') {
    alert('Board inválido');
    return;
  }
  verifyIfInputIsWithinRange(inputTest);
}
function verifyIfInputIsLetter() {
  const inputTest = document.getElementById('board-size').value;
  if (inputTest.toUpperCase() !== inputTest.toLowerCase()) {
    alert('Não coloque letras por favor');
    return;
  }
  verifyIfInputIsEmpty(inputTest);
}
addBtn.addEventListener('click', verifyIfInputIsLetter);
