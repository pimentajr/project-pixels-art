function createTableColor(colorPixel) {
  for (let index = 0; index < colorPixel; index += 1) {
    const colorPallete = document.getElementById('color-palette');
    const tableColor = document.createElement('div');
    colorPallete.appendChild(tableColor);
    tableColor.className = 'color';
  }
}
createTableColor(4);

function boxColor() {
  const colorPicker = document.getElementsByClassName('color');
  colorPicker[0].style.backgroundColor = 'black';
  colorPicker[1].style.backgroundColor = '#edf5e1';
  colorPicker[2].style.backgroundColor = '#5cdb95';
  colorPicker[3].style.backgroundColor = '#379663';
}
boxColor();

function selectedColor() {
  const initialColor = document.getElementsByClassName('color');
  initialColor[0].classList.add('selected');
}
selectedColor();

const pBoardElement = document.getElementById('pixel-board');

function pixelBoard(boardSize) {
  for (let index = 0; index < boardSize; index += 1) {
    const pLine = document.createElement('div');
    pBoardElement.appendChild(pLine).className = 'line';
    for (let index1 = 0; index1 < boardSize; index1 += 1) {
      const pixel = document.createElement('div');
      pLine.appendChild(pixel).className = 'pixel';
    }
  }
}

pixelBoard(5);

function pickColor() {
  const colorPicked = document.getElementById('color-palette');
  const classChange = document.querySelectorAll('.color');
  colorPicked.addEventListener('click', (event) => {
    const targetElement = event.target;
    for (let index = 0; index < classChange.length; index += 1) {
      classChange[index].classList.remove('selected');
      if (targetElement.className === 'color') {
        targetElement.classList.add('selected');
      }
    }
  });
}
pickColor();

function pixelBoardPaint() {
  const colorPicked = document.getElementById('pixel-board');
  colorPicked.addEventListener('click', (event) => {
    const pixelBox = event.target;
    const selectedColor2 = document.querySelector('.selected');
    if (pixelBox.className === 'pixel') {
      pixelBox.style.backgroundColor = selectedColor2.style.backgroundColor;
    }
  });
}

pixelBoardPaint();

function pixelBoardSize() {
  const inputSize = document.getElementById('board-size');
  const generateBtn = document.getElementById('generate-board');
  generateBtn.addEventListener('click', () => {
    if (inputSize.value === '') {
      alert('Board inválido!');
      inputSize.value = 5;
    } else if (inputSize.value > 50) {
      inputSize.value = 50;
    } else if (inputSize.value < 5) {
      inputSize.value = 5;
    }

    pBoardElement.innerHTML = '';
    pixelBoard(inputSize.value);
  });
}
pixelBoardSize();

function clearBoard() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    const catchPixel = document.querySelectorAll('.pixel');
    for (let index = 0; index < catchPixel.length; index += 1) {
      catchPixel[index].style.backgroundColor = 'white';
    }
  });
}

clearBoard();

function randomPaletteColors() {
  const newColor = document.getElementsByClassName('color');
  for (let index = 1; index < newColor.length; index += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    newColor[index].style.backgroundColor = `rgb(${r},${g},${b})`;
  }
}
// Referênica random Color : https://stackoverflow.com/questions/51628092/random-rgb-color-generator-with-javascript

randomPaletteColors();
