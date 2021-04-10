const pixelBoard = document.getElementById('pixel-board');
const pixelLine = document.querySelector('#pixel-board').children;
const colorPalette = document.querySelectorAll('#color-palette div');
const clearButton = document.getElementById('clear-board');
const pixel = document.getElementsByClassName('pixel');
let boardSizeValue = 5;
const boardInput = document.getElementById('board-size');
let color = 'black';

// Criando as linhas:
function CreateLineBox() {
  for (let i = 0; i < boardSizeValue; i += 1) {
    const box = document.createElement('div');
    box.setAttribute('class', 'pixel-line');
    pixelBoard.appendChild(box);
  }
}
CreateLineBox();

function createAllBoxes() {
  for (let i = 0; i < pixelLine.length; i += 1) {
    for (let j = 0; j < boardSizeValue; j += 1) {
      const box = document.createElement('div');
      box.setAttribute('class', 'pixel');
      pixelLine[i].appendChild(box);
    }
  }
}
createAllBoxes();

function addBox() {
  pixelBoard.innerHTML = '';
  if (boardInput.value === '') {
    alert('Board inválido!');
  }

  if (boardInput.value < 5) {
    boardSizeValue = 5;
  } else if (boardInput.value > 50) {
    boardSizeValue = 50;
  } else boardSizeValue = boardInput.value;

  boardInput.value = '';
  boardInput.focus();
  CreateLineBox();
  createAllBoxes();
}

function addBoxValueCaller() {
  const boardButton = document.querySelector('#generate-board');
  boardButton.addEventListener('click', addBox);
}
addBoxValueCaller();

function selectPalette(event) {
  for (let j = 0; j < colorPalette.length; j += 1) {
    colorPalette[j].classList.remove('selected');
  }
  event.target.classList.add('selected');
  color = event.target.getAttribute('id');
}

function selectPaletteCaller() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', selectPalette);
  }
}
selectPaletteCaller();

function paintBlocks(event) {
  const el = event;
  el.target.style.backgroundColor = color;
}

function paintCaller() {
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].addEventListener('click', paintBlocks);
  }
}

paintCaller();

function ClearBoard() {
  clearButton.addEventListener('click', () => {
    for (let i = 0; i < pixelLine.length; i += 1) {
      for (let j = 0; j < pixelLine[i].children.length; j += 1) {
        pixelLine[i].children[j].style.backgroundColor = 'white';
      }
    }
  });
}

ClearBoard();
