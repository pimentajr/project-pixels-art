const colorPalette = document.querySelector('#color-palette');
const colorBox = document.querySelectorAll('.color');
const pixelBoard = document.querySelector('#pixel-board');
const clearButton = document.querySelector('#clear-board');
const vqvButton = document.querySelector('#generate-board');
let boardSize = document.querySelector('#board-size');

function primaryColors(colors) {
  for (let index = 0; index < colors.length; index += 1) {
    colorBox[index].style.backgroundColor = colors[index];
    if (index === 0) {
      colorBox[index].classList.add('selected');
    }
  }
}

primaryColors(['black', 'yellow', 'green', 'blue']);

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
}

pixelsTable(5, 5);
const allPixels = document.querySelectorAll('.pixel');

colorPalette.addEventListener('click', function (event) {
  for (let index = 0; index < colorBox.length; index += 1) {
    colorBox[index].classList.remove('selected');
  }
  event.target.classList.add('selected');
});

pixelBoard.addEventListener('click', function (event) {
  const select = document.querySelector('.selected');
  const selectString = window.getComputedStyle(select, null).getPropertyValue('background-color');
  const changeColor = event.target;
  changeColor.style.backgroundColor = selectString;
});

clearButton.addEventListener('click', function () {
  for (let index = 0; index < allPixels.length; index += 1) {
    allPixels[index].style.backgroundColor = 'white';
  }
});

pixelBoard.addEventListener('click', function (event) {
  const select = document.querySelector('.selected');
  const selectString = window.getComputedStyle(select, null).getPropertyValue('background-color');
  const changeColor = event.target;
  changeColor.style.backgroundColor = selectString;
});

vqvButton.addEventListener('click', function () {
  if (boardSize.value === '') {
    alert('Board inválido!')
  } else {
    for (let child = pixelBoard.firstChild; child !== null; child = pixelBoard.firstChild) {
      pixelBoard.removeChild(pixelBoard.firstChild);
    }
    if (boardSize.value < 5) {
      pixelsTable(5, 5);  
    } else if (boardSize.value > 50) {
      pixelsTable(50, 50);
    } else {
      pixelsTable(boardSize.value, boardSize.value);
    }
  }
});
