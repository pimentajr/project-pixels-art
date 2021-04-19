const pixelBoard = document.querySelector('#pixel-board');
const colorPalette = document.querySelector('#color-palette');

function gridGenerate(grid) {
  for (let index = 0; index < grid; index += 1) {
    const column = document.createElement('div');
    pixelBoard.appendChild(column);
    for (let index2 = 0; index2 < grid; index2 += 1) {
      const line = document.createElement('div');
      column.appendChild(line);
      line.className = 'pixel';
    }
  }
}
gridGenerate(5);

function boxColorGenerate(boxColor) {
  const box = document.createElement('div');
  box.style.backgroundColor = boxColor;
  box.className = ('color');
  if (boxColor === 'black') box.classList.add('selected');
  colorPalette.appendChild(box);
}

boxColorGenerate('black');
boxColorGenerate('magenta');
boxColorGenerate('green');
boxColorGenerate('red');

function selectColor() {
  colorPalette.addEventListener('click', (selectedColor) => {
    const eventTarget = selectedColor.target;
    const color = document.getElementsByClassName('color');
    for (let index = 0; index < color.length; index += 1) {
      color[index].classList.remove('selected');
      if (eventTarget.className === 'color') {
        eventTarget.classList.add('selected');
      }
    }
  });
}
selectColor();

function colorGrid() {
  pixelBoard.addEventListener('click', (paintPixel) => {
    const colorSelected = document.querySelector('.selected').style.backgroundColor;
    const eventTarget = paintPixel.target;
    if (eventTarget.className === 'pixel') {
      eventTarget.style.backgroundColor = colorSelected;
    }
  });
}

colorGrid();

function clearGrid() {
  const eventBtn = document.querySelector('#clear-board');
  eventBtn.addEventListener('click', () => {
    const pixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixel.length; index += 1) {
      pixel[index].style.backgroundColor = 'white';
    }
  });
}

clearGrid();

function generateBoard() {
  const input = document.querySelector('#board-size');
  const grtBtn = document.querySelector('#generate-board');
  grtBtn.addEventListener('click', () => {
    if (input.value === '') alert('Board Inválido!');
    else if (input.value < 5) input.value = 5;
    else if (input.value > 50) input.value = 50;
    pixelBoard.style.backgroundColor = 'white';
    pixelBoard.innerHTML = '';
    gridGenerate(input.value);
  });
}

generateBoard();

function randomColor() {
  const paletteColor = document.querySelectorAll('.color');
  for (let index = 1; index < paletteColor.length; index += 1) {
    const a = parseInt(Math.random() * 255, 10);
    const b = parseInt(Math.random() * 255, 10);
    const c = parseInt(Math.random() * 255, 10);
    paletteColor[index].style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
  }
}

randomColor();
