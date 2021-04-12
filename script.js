const colorPalette = document.querySelector('#color-palette');
const colorBox = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const vqvButton = document.querySelector('#generate-board');
const boardSize = document.querySelector('#board-size');
let allPixels = document.querySelectorAll('.pixel');

function primaryColors(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    colorBox[index].style.backgroundColor = colors[index];
    if (index === 0) {
      colorBox[index].classList.add('selected');
    }
  }
}

function randomColor() {
  let red = 0;
  let green = 0;
  let blue = 0;
  let rgb = '';
  red = Math.ceil(Math.random() * 256);
  green = Math.ceil(Math.random() * 256);
  blue = Math.ceil(Math.random() * 256);
  rgb = ['rgb(', red, ',', green, ',', blue, ')'].join('');
  return rgb;
}

function pixelsTable(width, height) {
  const table = document.querySelector('#pixel-board');
  table.style.width = [width * 42, 'px'].join('');
  table.style.height = [height * 42, 'px'].join('');
  for (let index = 1; index <= height; index += 1) {
    const newColumn = document.createElement('div');
    newColumn.className = 'tr';
    for (let index2 = 1; index2 <= width; index2 += 1) {
      const newLine = document.createElement('div');
      newLine.className = 'pixel white td';
      newColumn.appendChild(newLine);
    }
    table.appendChild(newColumn);
  }
  allPixels = document.querySelectorAll('.pixel');
}

function colorPaletteListener(originalEvent) {
  for (let index = 0; index < colorBox.length; index += 1) {
    colorBox[index].classList.remove('selected');
  }
  originalEvent.target.classList.add('selected');
}

function pixelBoardListener(originalEvent) {
  const select = document.querySelector('.selected');
  const selectString = window.getComputedStyle(select, null).getPropertyValue('background-color');
  const changeColor = originalEvent.target;
  changeColor.style.backgroundColor = selectString;
}

function clearButtonListener() {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
}

function vqvButtonLimits() {
  if (parseInt(boardSize.value, 10) < 5) {
    pixelsTable(5, 5);
  } else if (parseInt(boardSize.value, 10) > 50) {
    pixelsTable(50, 50);
  } else {
    pixelsTable(boardSize.value, boardSize.value);
  }
}

function vqvButtonListener() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else {
    for (let child = pixelBoard.firstChild; child !== null; child = pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild);
    }
    vqvButtonLimits();
  }
}

[colorPalette, pixelBoard, clearButton, vqvButton].forEach((item) => {
  item.addEventListener('click', (event) => {
    if (item === colorPalette) {
      colorPaletteListener(event);
    } else if (item === pixelBoard) {
      pixelBoardListener(event);
    } else if (item === clearButton) {
      clearButtonListener();
    } else if (item === vqvButton) {
      vqvButtonListener();
    }
  });
});

primaryColors(['black', randomColor(), randomColor(), randomColor()]);

pixelsTable(5, 5);
