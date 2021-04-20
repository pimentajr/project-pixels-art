function setColorPalette() {
  const color = document.querySelectorAll('.color');
  const arrColors = ['black', 'red', 'blue', 'yellow'];
  for (let index = 0; index < arrColors.length; index += 1) {
    color[index].classList.add(arrColors[index]);
  }
  document.getElementsByClassName('color')[0].classList.add('selected');
}

setColorPalette();

function generatePixels(value, table) {
  for (let index = 0; index < value; index += 1) {
    const tr = document.createElement('tr');
    for (let secondIndex = 0; secondIndex < value; secondIndex += 1) {
      const td = document.createElement('td');
      const div = document.createElement('div');
      div.classList.add('pixel');
      td.appendChild(div);
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

function pixelBoardSize() {
  const board = document.querySelector('#pixel-board');
  const table = document.createElement('table');
  board.appendChild(table);
  generatePixels(5, table);
}

pixelBoardSize();

function getColorPalette(event) {
  const selected = document.querySelector('.selected');
  selected.classList.remove('selected');
  const selectedColor = event.target.classList[1];
  return document
    .getElementsByClassName(selectedColor)[0]
    .classList.add('selected');
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
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].addEventListener('click', getPixel);
  }
}

paintPixel();

function clearPixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
}

function clearBoard() {
  const buttonClear = document.getElementById('clear-board');
  buttonClear.addEventListener('click', clearPixel);
}

clearBoard();

function generateBoard() {
  const button = document.getElementById('generate-board');
  const boardSize = document.getElementById('board-size');

  button.addEventListener('click', () => {
    const size = parseInt(boardSize.value, 10);

    if (!size) {
      return alert('Board inválido!');
    }
    const board = document.querySelector('#pixel-board');
    board.lastChild.remove();
    const table = document.createElement('table');
    board.appendChild(table);
    generatePixels(size, table);
    paintPixel();
  });
}

generateBoard();
