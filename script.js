function setColorPalette() {
  const color = document.querySelectorAll('.color');
  const arrColors = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < arrColors.length; index += 1) {
    color[index].classList.add(arrColors[index]);
  }
  document.getElementsByClassName('color')[0].classList.add('selected');
}

setColorPalette();

function getColorPalette(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  const selectedColor = event.target.classList[1];
  document.getElementsByClassName(selectedColor)[0].classList.add('selected');
}

function selectColor() {
  const colorSelection = document.querySelectorAll('.color');
  for (let index = 0; index < colorSelection.length; index += 1) {
    colorSelection[index].addEventListener('click', getColorPalette);
  }
}

selectColor();

function getPixel(event, pixel) {
  const selectedColor = document.querySelector('.selected');
  let currentPixel = pixel;
  currentPixel = event.target;
  const color = selectedColor.classList[1];
  currentPixel.style.backgroundColor = color;
}

function paintPixel() {
  const pixel = document.querySelectorAll('.pixel');
  console.log(pixel.length);
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', getPixel);
  }
}

function generateTable(bSize, table) {
  for (let index = 1; index <= bSize; index += 1) {
    const tr = document.createElement('tr');
    for (let secondIndex = 0; secondIndex < bSize; secondIndex += 1) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      div.classList.add('pixel');
      td.appendChild(div);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function generatePixels() {
  const board = document.querySelector('#pixel-board');

  const table = document.createElement('table');
  board.appendChild(table);
  const boardSize = document.getElementById('board-size').value;
  if (boardSize.length <= 0) {
    alert('Board inválido!');
  } else {
    const bSize = parseInt(boardSize, 10);
    generateTable(bSize, table);
    paintPixel();
  }
}

function generateBoard() {
  const getBoard = document.getElementById('generate-board');
  getBoard.addEventListener('click', generatePixels);
}

generateBoard();

function clearPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', clearPixel);
}

clearBoard();
