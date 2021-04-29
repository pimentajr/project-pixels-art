const pixelBoards = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const colorSelect = document.querySelector('#color-palette');
const btnSize = document.getElementById('generate-board');
const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');
const color = document.querySelectorAll('.color');

const selectedColor = () => {
  color[0].classList.add('selected');
  colorSelect.addEventListener('click', (event) => {
    for (let i = 0; i < color.length; i += 1) {
      color[i].classList.remove('selected');
      if (event.target.className === 'color') {
        event.target.classList.add('selected');
      }
    }
  });
};

selectedColor();

pixelBoards.addEventListener('click', (event) => {
  const selects = document.querySelector('.selected');
  const pixeLol = event.target;
  const selectColor = window.getComputedStyle(selects).getPropertyValue('background-color');
  pixeLol.style.backgroundColor = selectColor;
});

btnClear.addEventListener('click', () => {
  const clearAllPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearAllPixels.length; i += 1) {
    clearAllPixels[i].style.backgroundColor = 'white';
  }
});

const makeDivs = (colum) => {
  for (let i = 0; i < colum; i += 1) {
    const pixelDiv = document.createElement('div');
    for (let j = 0; j < colum; j += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixel';
      pixelDiv.appendChild(pixelLine);
    }
    pixelBoards.appendChild(pixelDiv);
  }
};

const removeTable = () => {
  const removePixel = document.querySelector('#pixel-board');
  for (let i = 0; i < removePixel.childElementCount;) {
    removePixel.removeChild(removePixel.childNodes[0]);
  }
};

btnSize.addEventListener('click', () => {
  const boardSize = document.getElementById('board-size');
  if (boardSize.value < '0') {
    alert('Board inválido!');
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  } else if (boardSize.value > 50) {
    boardSize.value = 50;
  }
  removeTable();
  makeDivs(boardSize.value);
});

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};

blackColor.style.backgroundColor = 'black';
redColor.style.backgroundColor = randomColor();
blueColor.style.backgroundColor = randomColor();
greenColor.style.backgroundColor = randomColor();

makeDivs(5);
