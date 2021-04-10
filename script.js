const pixelBoard = document.getElementById('pixel-board');
const pixelLine = document.querySelector('#pixel-board').children;
const colorPalette = document.querySelectorAll('#color-palette div');
const clearButton = document.getElementById('clear-board');
let boardSizeValue = 3;
const boardInput = document.getElementById('board-size');

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

function addBoxValue() {
  const boardButton = document.querySelector('#boardButton');
  boardButton.addEventListener('click', () => {
    pixelBoard.innerHTML = '';
    boardSizeValue = boardInput.value;
    if (boardSizeValue.value === '') {
      alert('ERRO');
    }
    boardInput.value = '';
    boardInput.focus();
    CreateLineBox();
    createAllBoxes();
  });
}
addBoxValue();

function createStorage() {}
createStorage();

function selectPalette() {
  for (let i = 0; i < colorPalette.length; i += 1) {
    colorPalette[i].addEventListener('click', (el) => {
      for (let j = 0; j < colorPalette.length; j += 1) {
        colorPalette[j].classList.remove('selected');
      }
      el.target.classList.add('selected');
      sessionStorage.color = el.target.getAttribute('id');
    });
  }
}
selectPalette();

function paintBlocks() {
  pixelBoard.addEventListener('click', (event) => {
    const el = event;
    el.target.style.backgroundColor = sessionStorage.color;
  });
}

paintBlocks();

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
