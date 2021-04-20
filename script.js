const pixelBoards = document.getElementById('pixel-board');
const btnClear = document.getElementById('clear-board');
const currentColor = document.getElementsByClassName('selected');
const cat = document.querySelectorAll('#color-palette>button');
const btnSize = document.getElementById('generate-board');
const blackColor = document.getElementById('black');
const redColor = document.getElementById('red');
const blueColor = document.getElementById('blue');
const greenColor = document.getElementById('green');

// https://www.w3schools.com/howto/howto_js_active_element.asp
function selectedColor() {
  for (let i = 0; i < cat.length; i += 1) {
    cat[i].className = 'color';
    cat[i].addEventListener('click', function () {
      currentColor[0].className = currentColor[0].className.replace('selected', '');
      this.className = 'selected color';
    });
  }
}

function colorPixel(event) {
  const selects = document.querySelector('.selected');
  const pixeLol = event.target;
  const selectColor = window.getComputedStyle(selects).getPropertyValue('background-color');
  pixeLol.style.backgroundColor = selectColor;
}

pixelBoards.addEventListener('click', colorPixel);

function clearPixel() {
  const clearAllPixels = document.querySelectorAll('.pixel');
  for (let i = 0; i < clearAllPixels.length; i += 1) {
    clearAllPixels[i].style.backgroundColor = 'white';
  }
}

btnClear.addEventListener('click', clearPixel);

function makeDivs(colum) {
  for (let i = 0; i < colum; i += 1) {
    const pixelDiv = document.createElement('div');
    for (let j = 0; j < colum; j += 1) {
      const pixelLine = document.createElement('div');
      pixelLine.className = 'pixel';
      pixelDiv.appendChild(pixelLine);
    }
    pixelBoards.appendChild(pixelDiv);
  }
}

function removeTable() {
  const removePixel = document.querySelector('#pixel-board');
  for (let i = 0; i < removePixel.childElementCount;) {
    removePixel.removeChild(removePixel.childNodes[0]);
  }
}

function boardsValue() {
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
}

btnSize.addEventListener('click', boardsValue);

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
}

blackColor.style.backgroundColor = 'black';
redColor.style.backgroundColor = randomColor();
blueColor.style.backgroundColor = randomColor();
greenColor.style.backgroundColor = randomColor();

window.onload = () => {
  selectedColor();
  makeDivs(5);

  const colorBlack = document.getElementsByClassName('color')[0];
  colorBlack.className = 'selected color';
};
