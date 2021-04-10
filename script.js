const black = document.getElementById('black');
const darkgreen = document.getElementById('darkgreen');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const table = document.getElementById('color-palette');
const clearButton = document.getElementById('clear-board');
const btnGenerateBoard = document.getElementById('generate-board');

const arrayTable = [];
for (let i = 0; table.rows[i]; i += 1) {
  const row = table.rows[i];
  for (let j = 0; row.cells[j]; j += 1) {
    arrayTable.push(row.cells[j]);
  }
}

function selectColor(event) {
  for (let i = 0; i < arrayTable.length; i += 1) {
    if (arrayTable[i].classList.contains('selected')) {
      arrayTable[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
  const selectedColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const displayColor = document.querySelector('#showColorSelected');
  displayColor.style.backgroundColor = selectedColor;
}

function paintingPixel(event) {
  const rgbColor = getComputedStyle(document.querySelector('.selected')).backgroundColor;
  const pixelTarget = event.target;
  pixelTarget.style.backgroundColor = rgbColor;
}

function paintingRange() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paintingPixel);
  }
}

function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
/*
Funcional, mas o exercício pede que seja apenas com atributos html do button.
document.getElementById('board-size').addEventListener('change', function validateInput() {
  const inputNumber = this.value;
  if (inputNumber < 5) this.value = 5;
  if (inputNumber > 50) this.value = 50;
});
*/
function createBoard() {
  const inputSizeBoard = document.getElementById('board-size');
  if (inputSizeBoard.value === '') {
    alert('Board inválido!');
    return null;
  }
  const tableOfPixel = document.getElementById('pixel-board');
  tableOfPixel.innerHTML = '';
  for (let i = 0; i < inputSizeBoard.value; i += 1) {
    const pixelTable = document.createElement('tr');
    tableOfPixel.appendChild(pixelTable);
    for (let j = 0; j < inputSizeBoard.value; j += 1) {
      const cell = document.createElement('td');
      cell.classList.add('pixel');
      pixelTable.appendChild(cell);
    }
  }
  paintingRange();
}

paintingRange();
btnGenerateBoard.addEventListener('click', createBoard);
black.addEventListener('click', selectColor);
darkgreen.addEventListener('click', selectColor);
blue.addEventListener('click', selectColor);
red.addEventListener('click', selectColor);
clearButton.addEventListener('click', clearBoard);
