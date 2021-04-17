const numberOfLines = 5;
// const colorSelected = document.getElementById('black');
const colorMenu = document.getElementById('color-palette');

function RGB() {
  const randomRGB = Math.ceil(Math.random() * 255);
  return randomRGB;
}

for (let index = 0; index < 4; index += 1) {
  const strColor = 'color';
  const strRGB = 'rgb(';
  const strSc = ', ';
  const str = ')';
  if (index === 0) {
    const colorSelector = document.createElement('div');
    colorSelector.className = 'color selected';
    colorSelector.id = strColor + index;
    colorSelector.style.backgroundColor = 'black';
    colorMenu.appendChild(colorSelector);
  } else {
    const colorSelector = document.createElement('div');
    colorSelector.className = 'color';
    colorSelector.id = strColor + index;
    colorSelector.style.backgroundColor = strRGB + RGB() + strSc + RGB() + strSc + RGB() + str;
    console.log(colorSelector.style.backgroundColor);
    colorMenu.appendChild(colorSelector);
  }
}

const pixelBoard = document.getElementById('pixel-board');
const boxsLine = document.getElementsByClassName('line');

function fillLine(value) {
  for (let index = 0; index < value; index += 1) {
    for (let boxIndex = 0; boxIndex < value; boxIndex += 1) {
      const createdBox = document.createElement('div');
      createdBox.className = 'pixel';
      boxsLine[index].appendChild(createdBox);
    }
  }
}

function fillBoard(value) {
  for (let index = 0; index < value; index += 1) {
    const lineBox = document.createElement('div');
    lineBox.className = 'line';
    pixelBoard.appendChild(lineBox);
  }
  fillLine(value);
}

const boxColorSelect = document.getElementById('color-palette');
boxColorSelect.addEventListener('click', function (event) {
  if (event.target.className === 'color') {
    const colorUnselected = document.getElementsByClassName('selected');
    colorUnselected[0].className = 'color';
    event.target.classList.add('selected');
  }
});

const board = document.getElementById('pixel-board');
board.addEventListener('click', function (event) {
  if (event.target.className === 'pixel') {
    const copyBG = event.target;
    const colorPaint = document.getElementsByClassName('selected');
    copyBG.style.backgroundColor = colorPaint[0].style.backgroundColor;
  }
});

const clearButton = document.getElementById('clear-board');
const generateBoardButton = document.getElementById('generate-board');

function cleaningPixels() {
  const clearPixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < clearPixel.length; index += 1) {
    clearPixel[index].style.backgroundColor = 'white';
  }
}

function limitsMaxMin(number) {
  let size;
  if (number < 5) {
    size = 5;
  } else if (number > 50) {
    size = 50;
  } else {
    size = number;
  }
  return size;
}
function deleteBoard() {
  const pixels = document.getElementsByClassName('line');
  for (let index = pixels.length - 1; index >= 0; index -= 1) {
    pixels[index].remove();
  }
}

function generateBoad() {
  const inputSize = document.getElementById('board-size');
  // console.log(inputSize.value);
  if (inputSize.value === '') {
    alert('Board inválido!');
  } else {
    deleteBoard();
    const choiceNumberOfLines = limitsMaxMin(parseInt(inputSize.value, 10));
    fillBoard(choiceNumberOfLines);
  }
};

clearButton.addEventListener('click', cleaningPixels);
generateBoardButton.addEventListener('click', generateBoad);

window.onload = function () {
  fillBoard(numberOfLines);
};
