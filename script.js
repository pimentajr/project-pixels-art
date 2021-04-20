// Variables
const colorPalette = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const colorSelected = document.getElementsByClassName('color selected');
const pixelBoard = document.getElementById('pixel-board');
const clearButtom = document.getElementById('clear-board');
const pixelGet = document.getElementsByClassName('pixel');
const generateBoard = document.getElementById('generate-board');
const inputButton = document.getElementById('board-size');
inputButton.value = 5;

// Functions
function clearPage() {
  for (let index = 0; index < pixelGet.length; index += 1) {
    pixelGet[index].style.backgroundColor = 'white';
  }
}

function removeClass() {
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].classList.remove('selected');
  }
}

function setClassColorPallet({ target }) {
  removeClass();
  if (!target.classList.contains('selected')) {
    target.classList.add('selected');
  }
}

function setColor(e) {
  if (e.target.classList[0] === 'pixel') {
    e.target.style.backgroundColor = colorSelected[0].style.backgroundColor;
  }
}

for (let index = 0; index < colors.length; index += 1) {
  colors[index].style.backgroundColor = colors[index].id;
}

function removePixels() {
  pixelBoard.innerText = '';
}

function createPixel() {
  removePixels();
  for (let index = 0; index < inputButton.value; index += 1) {
    const createDivPixelRow = document.createElement('tr');
    pixelBoard.appendChild(createDivPixelRow);
    createDivPixelRow.classList.add('pixel-row');
    for (let j = 0; j < inputButton.value; j += 1) {
      const createDivPixelColum = document.createElement('td');
      createDivPixelRow.appendChild(createDivPixelColum);
      createDivPixelColum.classList.add('pixel', 'white');
    }
  }
}

function conditionalSize() {
  if (inputButton.value < 8) {
    createPixel();
  }
}

function resizeBoard() {
  if (inputButton.value === '') {
    alert('Board inválido!');
  } else {
    conditionalSize();
  }
}

window.onload = function onlo() {
  resizeBoard();
};

generateBoard.addEventListener('click', resizeBoard);
pixelBoard.addEventListener('click', setColor);
colorPalette.addEventListener('click', setClassColorPallet);
clearButtom.addEventListener('click', clearPage);
