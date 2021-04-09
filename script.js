const pixelBoard = document.getElementById('pixel-board');
const generateButton = document.getElementById('generate-board');
const boardSize = document.getElementById('board-size');

function generateInitialBoard(input) {
  for (let index = 0; index < input; index += 1) {
    const row = document.createElement('div');
    pixelBoard.appendChild(row);
    row.className = 'row';
    row.style.backgroundColor = 'white';
    for (let secondIndex = 0; secondIndex < input; secondIndex += 1) {
      const pixel = document.createElement('div');
      row.appendChild(pixel);
      pixel.className = 'pixel';
      pixel.style.backgroundColor = 'white';
    }
  }
}

generateInitialBoard(5);

generateButton.onclick = function generateBoard() {
  pixelBoard.innerHTML = '';
  let input = boardSize.value;
  if (input === '') alert('Board inválido');
  if (input < 5) input = 5;
  if (input > 50) input = 50;
  generateInitialBoard(input);
};

const colorPalette = document.getElementById('color-palette');
const pixel = document.getElementsByClassName('pixel');

const color = document.getElementsByClassName('color');
const listOfColors = ['black', 'orange', 'yellow', 'red'];
for (let index = 0; index < color.length; index += 1) {
  color[index].style.backgroundColor = listOfColors[index];
}

colorPalette.onclick = function selectColor(event) {
  const selectedColor = document.querySelector('.selected');
  const colorAux = selectedColor;
  if (selectedColor) colorAux.classList.remove('selected');
  event.target.classList.add('selected');
};

pixelBoard.onclick = function paint(e) {
  const selectedColor = document.querySelector('.selected');
  if (e.target.className === 'pixel') {
    e.target.style.backgroundColor = selectedColor.style.backgroundColor;
  }
};

const clearButton = document.getElementById('clear-board');

clearButton.onclick = function clearBoard() {
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
};
